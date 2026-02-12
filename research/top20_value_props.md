# Top 20 — How I Can Add Value

For each organization, specific ways a senior AI/ML engineer with 20 years of startup experience could create immediate, tangible impact.

---

## 1. Fast Forward (91.2) — SF, ~20-50 staff

**What they do:** Tech nonprofit accelerator with 100+ portfolio orgs. Just launched "AI for Humanity" initiative. $9.8M raised in 2024.

**How I add value:**

Build shared infrastructure that serves the entire portfolio, not just one org. Their 100+ tech nonprofits are all solving similar problems — data pipelines, ML model deployment, impact measurement — but each is building from scratch. I'd create:

- **Starter kit for nonprofit AI**: Templated data pipelines, model training infrastructure, and deployment patterns that any portfolio org can fork and customize. Think "create-react-app" but for nonprofit ML projects.
- **Technical due diligence toolkit**: Automated architecture review tools for evaluating accelerator applicants' tech stacks — saving their team hours per application while catching red flags early.
- **Cross-portfolio impact analytics**: Unified dashboard aggregating outcome data across all 100+ orgs, enabling portfolio-wide insights and helping Fast Forward demonstrate aggregate impact to funders.
- **AI readiness assessment**: Self-service tool for nonprofits to evaluate their data maturity and get actionable recommendations — extends Fast Forward's reach beyond their direct portfolio.

The leverage here is enormous: one well-designed tool serves 100 organizations.

---

## 2. Bellingcat (91.2) — Amsterdam, ~30-50 staff

**What they do:** Open-source intelligence investigations. Broke MH17, Syrian chemical weapons, Russian war crimes. Investigators manually scrape social media, geolocate images, cross-reference satellite data.

**How I add value:**

Bellingcat's investigators are world-class at analysis but their tooling is cobbled together. Every hour spent on manual data collection is an hour not spent on investigation. I'd build:

- **Automated OSINT ingestion pipeline**: Continuous collection from social media APIs, Telegram channels, satellite imagery feeds — cleaned, deduplicated, indexed, and searchable. Investigators query instead of scrape.
- **Geolocation assistance model**: Given an image, suggest candidate locations based on visible landmarks, vegetation, architecture, sun angle. Doesn't replace human verification but narrows the search space from "anywhere in Syria" to "these 5 towns."
- **Entity resolution graph**: Connect people, vehicles, units, and locations across investigations. When the same military vehicle appears in 3 different atrocity sites, surface that connection automatically.
- **Multilingual social media classifier**: Flag posts containing potential evidence (explosion footage, military movement, civilian harm) across Russian, Ukrainian, Arabic, Farsi — prioritizing investigator attention.
- **Metadata extraction pipeline**: Bulk processing of images/videos for EXIF data, frame-by-frame analysis, reverse image search automation.

Their $6.77M budget means they can support this work. Their 30-50 person size means one engineer materially changes capability.

---

## 3. Thorn (90.0) — Manhattan Beach, ~50-100 staff

**What they do:** Tech tools to combat child sexual abuse. Built Safer (platform CSAM detection) and Spotlight (law enforcement tool). $16.4M/year, identified 30,000+ trafficking victims.

**How I add value:**

Thorn already has engineers, but their ML challenge is scaling faster than their team. Adversaries constantly evolve, requiring continuous model retraining. I'd focus on:

- **MLOps infrastructure**: Automated retraining pipelines that detect model drift, trigger retraining on new data, validate performance, and deploy — reducing the manual burden on their ML team.
- **Grooming language detection**: NLP models trained on chat patterns that precede abuse, deployable to platforms for early intervention before harm occurs.
- **Cross-platform data federation**: Many platforms use Thorn's tools independently. Build infrastructure to aggregate anonymized pattern data across platforms, improving detection without sharing sensitive content.
- **Synthetic data generation**: For training classifiers without exposing investigators to harmful content — GANs or diffusion models that generate training examples matching statistical properties of real data.
- **Real-time processing optimization**: Their tools need to process massive content volumes with minimal latency. Infrastructure work on stream processing, caching, and model serving.

They have budget and engineering culture. The value-add is specialized ML/infra expertise that's hard to hire.

---

## 4. Foundation for American Innovation (90.0) — SF, ~30-60 staff

**What they do:** Tech policy think tank. "Builders, hackers, and founders" advancing tech-forward policy. Published 300+ research pieces in 2025, testified before Congress 6 times.

**How I add value:**

Policy orgs produce enormous amounts of research but often lack tools to measure impact or surface insights across their corpus. I'd build:

- **Legislative tracking + impact attribution**: Automated monitoring of bills, regulations, and agency actions that cite or align with FAI research — quantifying policy influence.
- **Research knowledge graph**: NLP pipeline extracting entities, claims, and relationships from their 300+ publications, enabling semantic search and gap analysis ("what haven't we covered on AI export controls?").
- **Congressional testimony preparation**: Given a hearing topic, surface relevant prior FAI research, identify potential questions based on committee member history, and draft talking points.
- **Policy simulation tools**: Simple models projecting impact of proposed regulations (e.g., "if compute thresholds are set at X, which labs are affected?").

The "builders, hackers, founders" identity means they'll appreciate well-crafted internal tools.

---

## 5. TechSoup (88.8) — SF, large org

**What they do:** Tech distribution to 1.6M nonprofits globally. Just launched Virtual CTO Program for small nonprofits. $2.6B in tech distributed.

**How I add value:**

TechSoup's scale means even small efficiency gains have massive impact. Their new Virtual CTO Program is exactly where I'd focus:

- **Nonprofit tech assessment automation**: Self-service diagnostic tool that evaluates a nonprofit's current tech stack, identifies gaps, and recommends TechSoup products — scaling the Virtual CTO Program beyond what human consultants can handle.
- **AI-powered support triage**: Classify incoming support requests, route to appropriate resources, auto-resolve common issues — reducing support burden while improving response time.
- **Product recommendation engine**: Based on org size, sector, and current tools, suggest the most impactful TechSoup offerings — personalized at scale across 305,000 nonprofits served.
- **Impact measurement pipeline**: Aggregate data on how nonprofits use TechSoup products and correlate with org outcomes — demonstrating ROI to funders and guiding product priorities.

*Note: Sheila Warren is already making an intro here, so this may be redundant.*

---

## 6. CyberPeace Institute (87.5) — Geneva, ~40-80 staff

**What they do:** Cybersecurity for humanitarian sector. Tracked 3,178 cyberattacks on Ukrainian infrastructure. 700+ volunteers helping 240+ NGOs. Microsoft and Hewlett backed.

**How I add value:**

Cyber threat intelligence is fundamentally an ML problem — pattern recognition at scale across noisy, adversarial data. I'd build:

- **Threat classification pipeline**: Ingest attack reports, IOCs, and incident data; cluster by attack type, attribute to threat actors, identify emerging patterns targeting humanitarian orgs.
- **Anomaly detection for NGO infrastructure**: Lightweight monitoring agents that detect unusual patterns in network traffic, authentication, or data access — tuned for resource-constrained nonprofit environments.
- **CyberPeace Builders matching optimization**: Their volunteer platform matches security experts with NGOs. ML-based matching that considers skills, availability, timezone, language, and org needs — better matches, higher completion rates.
- **Phishing campaign analysis**: NLP on reported phishing emails targeting humanitarian sector; cluster campaigns, identify trends, generate sector-wide alerts.
- **Automated vulnerability prioritization**: Given an NGO's tech stack, prioritize which vulnerabilities matter most based on active exploitation in humanitarian sector.

CHF 4.7M budget, Microsoft backing, and distributed volunteer model suggest comfort with remote collaboration.

---

## 7. Reporters Without Borders (86.2) — DC, ~57 staff

**What they do:** Press freedom advocacy. Supported 750 journalists in 76 countries in 2025. €390K in emergency grants to media outlets. Tracks journalist killings/detentions.

**How I add value:**

RSF's journalist protection work generates data that could inform proactive intervention. I'd build:

- **Press freedom early warning system**: Aggregate signals (social media threats, legal filings, political rhetoric, arrest patterns) to predict which journalists face escalating risk — enabling preemptive support.
- **Journalist threat monitoring**: Automated tracking of online harassment, doxxing attempts, and coordinated attacks against at-risk journalists — alerting RSF staff when intervention is needed.
- **Grant impact tracking**: Connect emergency grants to journalist outcomes (safety, continued publishing, successful relocation) — demonstrating program effectiveness to funders.
- **Media landscape analysis**: NLP on news output from countries of concern; detect sudden drops in coverage of sensitive topics that may indicate censorship or journalist suppression.

Their 57-person size and €8M+ budget means they can support this work but likely lack internal ML capacity.

---

## 8. American Journalism Project (86.2) — DC, ~20-50 staff

**What they do:** Venture philanthropy for local news. $243M raised, 53 newsrooms funded. Portfolio generated $128M revenue in 2024. Just launched AI/Product Studio with $1.4M to 28 newsrooms.

**How I add value:**

Their AI/Product Studio is brand new — exactly where experienced ML guidance adds value:

- **Shared AI infrastructure for portfolio newsrooms**: Most local newsrooms can't afford ML engineers. Build centralized tools (transcription, summarization, headline generation, SEO optimization) that all 53 portfolio orgs can access via API.
- **Revenue prediction models**: Identify which reader behaviors predict conversion to paying subscribers — help newsrooms focus acquisition efforts.
- **Content recommendation engine**: Cross-portfolio system that surfaces relevant stories from other AJP newsrooms, driving traffic and building network effects.
- **Grant ROI analytics**: Track which investments drive the most revenue growth, journalist hires, and audience expansion — informing future funding decisions.

Their AI/Product Studio already has $1.4M allocated. They need someone who knows how to deploy it effectively.

---

## 9. Siegel Family Endowment (85.0) — NYC, ~10-20 staff

**What they do:** Grantmaking foundation. $17M in grants annually across Learning, Workforce, Infrastructure. Founded by Two Sigma co-founder David Siegel.

**How I add value:**

Funders need tools to evaluate grantees and measure impact, but often lack technical capacity:

- **Grantee portfolio analytics**: Aggregate outcome data across all funded orgs, identify what's working, surface underperformers early.
- **Grant application analysis**: NLP on incoming proposals to identify themes, flag overlap with existing portfolio, score alignment with foundation priorities.
- **Field scanning automation**: Monitor news, research, and social media for emerging trends in Learning/Workforce/Infrastructure — informing proactive grantmaking.

However, as a grantmaker rather than operator, they may not have hands-on-keyboard work. Better as a connector to their portfolio orgs than a direct engagement.

---

## 10. Future of Life Institute (85.0) — Cambridge, unknown size

**What they do:** AI safety and existential risk. Famous "pause AI" letter. Elon Musk ($10M) and Vitalik Buterin ($665M crypto) funded. Incubates 3-5 new orgs per year.

**How I add value:**

FLI is policy-focused but their research could benefit from technical tooling:

- **AI capability tracking**: Automated monitoring of model releases, benchmarks, and capability claims — keeping researchers current on frontier developments.
- **Regulatory impact modeling**: Tools to simulate effects of proposed AI regulations on different actors (labs, startups, open source community).
- **Grant portfolio analytics**: Track outcomes from their grant programs, measure research impact, identify successful patterns.

However, their focus is advocacy and grantmaking, not operations. May not have substantial internal tooling needs.

---

## 11. Christchurch Call Foundation (83.8) — Wellington, ~20-40 staff

**What they do:** Counter-terrorism content moderation. Formed after 2019 Christchurch attack. Launched ROOST partnership for AI tools. Dame Jacinda Ardern involved.

**How I add value:**

Their Elevate project and ROOST partnership suggest active AI investment:

- **Terrorist content detection models**: ML classifiers for identifying violent extremist content across platforms, particularly in under-resourced languages.
- **Cross-platform intelligence sharing infrastructure**: Secure systems for platforms to share hashes and signals about terrorist content without exposing user data.
- **Radicalization pathway analysis**: NLP on known radicalization cases to identify linguistic and behavioral patterns that precede violence.

Young org (2019) with active AI initiatives. Good fit for someone who can help operationalize their AI strategy.

---

## 12. Hopelab (82.5) — SF, unknown size

**What they do:** Tech + youth mental health. Impact investor in mental health startups. 20+ year track record, Omidyar family backing. Invested in Wave, ReflexAI, Koko.

**How I add value:**

As an investor and research lab, Hopelab sits between startups and academia:

- **Mental health NLP models**: Sentiment analysis and early warning detection for youth mental health applications — could be shared across their portfolio.
- **Research data infrastructure**: Pipeline aggregating and anonymizing data from their portfolio companies for cross-study analysis.
- **Intervention effectiveness analytics**: Track which digital mental health interventions work for which populations — informing investment decisions.
- **AI chatbot safety evaluation**: As they invest in AI mental health tools (Wave, etc.), build evaluation frameworks for safety and efficacy.

Research-oriented, so work might lean more toward data science than production engineering.

---

## 13. Digital Credentials Consortium (81.2) — MIT, unknown size

**What they do:** W3C Verifiable Credentials for education. Walmart-funded AI credential tools. Open source wallet and issuer software.

**How I add value:**

Their Walmart-funded AI project is explicitly about credential tooling:

- **AI-powered credential mapping**: Match job postings to required credentials, identify skill gaps, suggest learning pathways.
- **Credential verification automation**: Streamline the process of verifying educational credentials across institutions.
- **Fraud detection models**: Identify suspicious credential claims or diploma mill certificates.

Academic consortium structure may mean slower decision-making, but active AI funding suggests real work to be done.

---

## 14. Metagov (81.2) — Pittsburgh, ~20-40 staff

**What they do:** Digital governance infrastructure research. Funded by Ethereum Foundation, Filecoin, Gitcoin. Builds standards for online community governance.

**How I add value:**

Governance tools are fundamentally about processing collective input:

- **Deliberation analysis**: NLP on community discussions to surface consensus, identify factions, summarize long threads.
- **Voting system simulation**: Model different governance mechanisms and their outcomes.
- **DAO analytics**: Tools for analyzing on-chain governance patterns across crypto communities.

Research collective with crypto funding. Work would be research-oriented, potentially publishable.

---

## 15. Eticas AI (81.2) — NYC, unknown size

**What they do:** AI ethics and accountability. Just received €40M from OpenAI Foundation. Translates ethical principles into technical specifications.

**How I add value:**

Their mission is literally translating ethics into tech specs — needs engineering:

- **Algorithmic audit tooling**: Automated bias detection, fairness metric calculation, and disparity analysis for client AI systems.
- **AI impact assessment frameworks**: Structured tools for evaluating AI systems against ethical criteria.
- **Accountability documentation**: Automated generation of model cards, datasheets, and impact assessments.

€40M OpenAI grant is recent and substantial. They're scaling and likely need technical capacity.

---

## 16. Data-Pop Alliance (81.2) — Virtual

**What they do:** Humanitarian data think-and-do-tank. Harvard/MIT/ODI founded. "Change the World with Data" across diagnosis, capacity building, and systems transformation.

**How I add value:**

Data organization that needs data infrastructure:

- **Humanitarian data pipelines**: Ingest, clean, and standardize data from humanitarian sources (UN, NGOs, governments) for analysis.
- **Data literacy platform**: Interactive tools teaching data skills to community organizations and government partners.
- **AI for development projects**: Applied ML on development challenges (agriculture, health, education) in partnership with local organizations.

Virtual organization with strong academic pedigree. Work would be project-based and potentially field-oriented.

---

## 17. Center for Countering Digital Hate (81.2) — DC, ~20-40 staff

**What they do:** Research on online hate and disinformation. Funded by Open Society, Skoll, Oak. Controversial with some platforms.

**How I add value:**

Their research is data-intensive and could be more automated:

- **Disinformation detection pipeline**: Automated monitoring and classification of false claims across platforms.
- **Hate speech trend analysis**: Track prevalence, themes, and networks of online hate over time.
- **Platform accountability metrics**: Automated tracking of platform enforcement actions (or lack thereof).

$2.3M revenue (2023) and ~20-40 staff. Advocacy focus means work would support research and campaigns.

---

## 18. Omidyar Network (80.0) — Redwood City, ~50-100 staff

**What they do:** $2B deployed across 700+ organizations. Social change philanthropy. Responsible tech, reimagining capitalism, belonging.

**How I add value:**

As a funder, similar to Siegel — better as a connector than direct engagement:

- **Portfolio impact analytics**: Aggregate outcomes across 700+ investments.
- **Due diligence automation**: Streamline evaluation of potential grantees.
- **Field trend analysis**: Surface emerging patterns across their issue areas.

Large funder with established operations. Unlikely to need outside engineering help directly, but deep network into organizations that do.

---

## 19. Heartland Forward (80.0) — Bentonville, unknown size

**What they do:** Economic development for American heartland. $40.5M from People First AI Fund. Targeting $500M economic impact by 2030.

**How I add value:**

Their AI funding and economic development focus suggests data needs:

- **Economic opportunity mapping**: Identify underserved regions, predict emerging industries, target interventions.
- **AI workforce readiness**: Tools assessing regional AI talent pipelines and training needs.
- **Grant impact tracking**: Measure economic outcomes from their programs.

Significant AI funding and ambitious goals. Midwest focus is interesting given my Colorado base.

---

## 20. Creative Commons (80.0) — Mountain View, ~30-50 staff

**What they do:** Open licensing infrastructure. 20+ years of building the commons. Expanding into AI and open access.

**How I add value:**

Their AI work is relatively new:

- **AI training data licensing**: Tools for creators to specify how their CC-licensed work can be used for AI training.
- **License detection**: Automated identification of CC licenses in web content.
- **Commons health metrics**: Track the size, growth, and usage of CC-licensed content over time.

Stable organization with new AI initiatives. Work would be infrastructure-focused.

---

## Summary: Where I Add Most Value

**Tier 1 — Highest Impact**
| Org | Why |
|-----|-----|
| Bellingcat | Perfect skills match: OSINT → ML pipelines, CV, NLP. 30-50 people, $6.77M, cobbled tooling. One engineer transforms capability. |
| Thorn | Mission that matters. They have engineers but need specialized ML/infra expertise at scale. $16M budget supports fractional. |
| CyberPeace Institute | Threat intelligence is pure ML. 40-80 people, Swiss backing, distributed model proves remote works. |
| Fast Forward | Force multiplier: tools I build serve 100+ orgs. Center of tech-for-good ecosystem. |

**Tier 2 — Strong Fit**
| Org | Why |
|-----|-----|
| American Journalism Project | AI/Product Studio is brand new with $1.4M allocated. Need someone who knows how to deploy it. |
| Eticas AI | €40M OpenAI grant, need to scale. Ethics→tech specs is exactly an engineering problem. |
| Hopelab | Youth mental health + AI investing. Research-oriented but substantial. |
| Christchurch Call | Active AI investment (ROOST), young org, clear need. |

**Tier 3 — Connector Value**
| Org | Why |
|-----|-----|
| TechSoup | Skip — Sheila's handling. |
| Siegel, Omidyar | Funders, not operators. Better as connector to their portfolios. |
| FLI | Policy/advocacy focus, less hands-on work. |
