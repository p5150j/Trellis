import json
import os
import time
import csv
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

TAVILY_KEY = os.getenv("TAVILY_API_KEY")
PERPLEXITY_KEY = os.getenv("PERPLEXITY_API_KEY")

INPUT = "airtable_data.json"
OUTPUT = "enriched_orgs.json"
OUTPUT_CSV = "enriched_orgs.csv"
PROGRESS_FILE = "enrich_progress.json"


def tavily_search(query, max_results=5):
    """Fast web search via Tavily."""
    try:
        resp = requests.post("https://api.tavily.com/search", json={
            "api_key": TAVILY_KEY,
            "query": query,
            "max_results": max_results,
            "include_answer": True,
            "search_depth": "advanced"
        }, timeout=30)
        data = resp.json()
        return {
            "answer": data.get("answer", ""),
            "results": [{"title": r["title"], "url": r["url"], "content": r.get("content", "")}
                        for r in data.get("results", [])]
        }
    except Exception as e:
        return {"answer": "", "results": [], "error": str(e)}


def perplexity_ask(question):
    """Deep research question via Perplexity."""
    try:
        resp = requests.post("https://api.perplexity.ai/chat/completions", json={
            "model": "sonar",
            "messages": [{"role": "user", "content": question}],
            "max_tokens": 1000
        }, headers={
            "Authorization": f"Bearer {PERPLEXITY_KEY}",
            "Content-Type": "application/json"
        }, timeout=60)
        data = resp.json()
        return data["choices"][0]["message"]["content"]
    except Exception as e:
        return f"Error: {e}"


def research_org(org):
    """Research a single org across all dimensions."""
    name = org["Name"]
    website = org.get("Website", "")
    print(f"  Researching: {name}")

    # Query 1: Funding & grants (Tavily)
    funding = tavily_search(f'"{name}" nonprofit funding grants raised 2023 2024 2025')

    # Query 2: Perplexity deep dive - funding, funders, headcount, impact
    pplx = perplexity_ask(
        f'For the nonprofit/organization "{name}" ({website}): '
        f'1) What is their recent funding? List specific grants, amounts, and funders. '
        f'2) Who are their major funders/donors? '
        f'3) Approximately how many employees/staff do they have? '
        f'4) What recent news or impact work are they known for (2023-2025)? '
        f'Be specific with numbers and names. If unknown, say unknown.'
    )

    # Query 3: Recent news/impact (Tavily)
    news = tavily_search(f'"{name}" nonprofit impact news 2024 2025')

    return {
        **org,
        "funding_search": funding.get("answer", ""),
        "funding_sources": [r["url"] for r in funding.get("results", [])[:3]],
        "perplexity_research": pplx,
        "recent_news": news.get("answer", ""),
        "news_sources": [{"title": r["title"], "url": r["url"]} for r in news.get("results", [])[:3]],
    }


def load_progress():
    if Path(PROGRESS_FILE).exists():
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {}


def save_progress(progress):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(progress, f, indent=2, ensure_ascii=False)


def main():
    with open(INPUT) as f:
        data = json.load(f)

    orgs = data["records"]
    progress = load_progress()
    enriched = {k: v for k, v in progress.items()}

    print(f"Total orgs: {len(orgs)} | Already done: {len(enriched)}")
    print(f"Remaining: {len(orgs) - len(enriched)}\n")

    for i, org in enumerate(orgs):
        name = org["Name"]
        if name in enriched:
            continue

        print(f"[{i+1}/{len(orgs)}] {name}")
        try:
            result = research_org(org)
            enriched[name] = result
            save_progress(enriched)

            # Rate limiting - be respectful to APIs
            time.sleep(1)

        except Exception as e:
            print(f"  ERROR: {e}")
            enriched[name] = {**org, "error": str(e)}
            save_progress(enriched)

        # Status update every 10
        if (i + 1) % 10 == 0:
            print(f"\n--- Progress: {len(enriched)}/{len(orgs)} done ---\n")

    # Final save
    records = list(enriched.values())
    with open(OUTPUT, "w") as f:
        json.dump({"total": len(records), "records": records}, f, indent=2, ensure_ascii=False)

    # CSV export
    csv_fields = ["Name", "Website", "About", "Year Founded", "Location", "Domain",
                  "funding_search", "perplexity_research", "recent_news"]
    with open(OUTPUT_CSV, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=csv_fields, extrasaction="ignore")
        w.writeheader()
        for r in records:
            w.writerow(r)

    print(f"\nDone! {len(records)} enriched records saved to {OUTPUT} and {OUTPUT_CSV}")


if __name__ == "__main__":
    main()
