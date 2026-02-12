import json
import os
import time
import csv
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

PERPLEXITY_KEY = os.getenv("PERPLEXITY_API_KEY")
INPUT = "enrich_progress.json"
OUTPUT = "scored_orgs.json"
OUTPUT_CSV = "scored_orgs.csv"
PROGRESS_FILE = "score_progress.json"


def score_org(name, data):
    """Ask Perplexity to score an org on our matrix."""
    context = f"""
Name: {name}
Website: {data.get('Website', 'N/A')}
About: {data.get('About', 'N/A')}
Founded: {data.get('Year Founded', 'N/A')}
Location: {data.get('Location', 'N/A')}
Funding info: {data.get('funding_search', 'N/A')}
Research: {data.get('perplexity_research', 'N/A')}
News: {data.get('recent_news', 'N/A')}
""".strip()

    prompt = f"""You are scoring nonprofit organizations for a senior tech leader (20yr startup veteran, AI/ML expert) who wants to join as a fractional IC building internal tools and data pipelines. They're based in Manila so cost isn't a barrier.

Score this org 1-5 on each dimension. Be harsh and honest. Output ONLY valid JSON.

Dimensions:
- org_viability: Is this a real, established org with legs? (not about to fold, has real funding)
- ai_ml_relevance: Would their mission/work naturally benefit from AI/ML tools, data pipelines, or automation?
- tech_gap: Do they likely lack internal engineering/tech talent and need outside help?
- mission_impact: Are they doing real, measurable, impressive impact work? (not just talk/policy papers)
- size_sweet_spot: Are they the right size (15-150 people) where one IC makes a huge difference?
- growth_signal: Are they growing, expanding, recently funded, hiring?

Also provide:
- top_reason: One sentence on why this org is or isn't a good fit
- estimated_headcount: Your best guess of employee count (number or "unknown")

Org data:
{context}

Respond with ONLY this JSON format, no other text:
{{"org_viability": X, "ai_ml_relevance": X, "tech_gap": X, "mission_impact": X, "size_sweet_spot": X, "growth_signal": X, "top_reason": "...", "estimated_headcount": "..."}}"""

    try:
        resp = requests.post("https://api.perplexity.ai/chat/completions", json={
            "model": "sonar",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 500
        }, headers={
            "Authorization": f"Bearer {PERPLEXITY_KEY}",
            "Content-Type": "application/json"
        }, timeout=60)

        text = resp.json()["choices"][0]["message"]["content"]
        # Extract JSON from response
        text = text.strip()
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
        # Find JSON object
        start = text.index("{")
        end = text.rindex("}") + 1
        scores = json.loads(text[start:end])

        # Calculate composite
        weights = {
            "ai_ml_relevance": 2.0,
            "tech_gap": 1.5,
            "mission_impact": 1.5,
            "size_sweet_spot": 1.0,
            "org_viability": 1.0,
            "growth_signal": 1.0
        }
        total = sum(scores.get(k, 0) * w for k, w in weights.items())
        max_total = sum(5 * w for w in weights.values())
        scores["composite_score"] = round(total / max_total * 100, 1)

        return scores
    except Exception as e:
        return {"error": str(e), "composite_score": 0}


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
        enriched = json.load(f)

    progress = load_progress()
    print(f"Total orgs: {len(enriched)} | Already scored: {len(progress)}")

    for i, (name, data) in enumerate(enriched.items()):
        if name in progress:
            continue

        print(f"[{i+1}/{len(enriched)}] Scoring: {name}")
        scores = score_org(name, data)
        progress[name] = {**data, **scores}
        save_progress(progress)

        cs = scores.get("composite_score", 0)
        reason = scores.get("top_reason", "")
        print(f"  Score: {cs}/100 — {reason[:80]}")

        time.sleep(0.5)

    # Sort by composite score
    ranked = sorted(progress.values(), key=lambda x: x.get("composite_score", 0), reverse=True)

    with open(OUTPUT, "w") as f:
        json.dump({"total": len(ranked), "records": ranked}, f, indent=2, ensure_ascii=False)

    # CSV
    csv_fields = ["Name", "composite_score", "ai_ml_relevance", "tech_gap", "mission_impact",
                  "size_sweet_spot", "org_viability", "growth_signal", "estimated_headcount",
                  "top_reason", "Website", "About", "Year Founded", "Location",
                  "funding_search", "recent_news"]
    with open(OUTPUT_CSV, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=csv_fields, extrasaction="ignore")
        w.writeheader()
        for r in ranked:
            w.writerow(r)

    print(f"\n{'='*60}")
    print(f"RANKED RESULTS — Top 20")
    print(f"{'='*60}")
    for i, r in enumerate(ranked[:20], 1):
        print(f"{i:2}. [{r.get('composite_score',0):5.1f}] {r['Name']}")
        print(f"    AI/ML:{r.get('ai_ml_relevance','?')} TechGap:{r.get('tech_gap','?')} Impact:{r.get('mission_impact','?')} Size:{r.get('size_sweet_spot','?')} Viable:{r.get('org_viability','?')} Growth:{r.get('growth_signal','?')}")
        print(f"    Headcount: ~{r.get('estimated_headcount','?')} | {r.get('top_reason','')[:90]}")
        print()

    print(f"\nFull results: {OUTPUT} and {OUTPUT_CSV}")


if __name__ == "__main__":
    main()
