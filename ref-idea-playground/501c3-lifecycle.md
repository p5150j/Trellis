# 501(c)(3) Operational Lifecycle — Full Pipeline & Tech Stack

---

## The Core Pipeline

```
┌─────────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│  MONEY IN   │───→│  OPERATIONS  │───→│    PROGRAMS     │───→│   OUTCOMES   │
│             │    │              │    │   (The Mission)  │    │  & REPORTING │
│ Fundraising │    │ Finance, HR, │    │ Case mgmt,      │    │ Impact data, │
│ Grants      │    │ Compliance,  │    │ Service delivery,│    │ 990, grant   │
│ Earned rev  │    │ Governance   │    │ Volunteers       │    │ reports, board│
└─────────────┘    └──────────────┘    └────────────────┘    └──────────────┘
       ↑                                                            │
       └────────────────────────────────────────────────────────────┘
                    Outcomes drive future funding (the loop)
```

---

## 1. MONEY IN — Fundraising & Development

```
INDIVIDUAL DONORS (25-40% of revenue)
├── Online giving (website donate button, social media)
├── Direct mail campaigns
├── Major gifts ($1K+) — cultivated by ED personally
├── Recurring/monthly donors
├── Events/galas (5-15% of revenue)
└── Planned giving / bequests

GRANTS (25-55% of revenue)
├── Federal (highest reporting burden)
│   ├── SAM.gov registration required
│   ├── Uniform Guidance compliance
│   └── Single Audit if $750K+ in federal awards
├── State (mirrors federal, lower thresholds)
├── Private foundations (annual narrative + financial report)
├── Corporate funders (simpler reports, logo/recognition obligations)
└── Community foundations (annual report, possible site visits)

EARNED REVENUE (5-20%)
├── Fee-for-service
├── Social enterprise
└── ⚠️ UBIT tax if >$1K unrelated business income
```

### Tools Used at This Stage

| Tool | Cost | What It Does | Adoption |
|------|------|-------------|----------|
| **Bloomerang** | $125+/mo | Donor CRM, retention-focused | Common in small orgs |
| **DonorPerfect** | $99+/mo | Donor CRM, unlimited users | Budget pick |
| **Little Green Light** | $45-150/mo | Basic donor tracking | Very small orgs |
| **Neon CRM** | $99+/mo | CRM + events + membership | Mid-size |
| **Salesforce NPSP** | Free (10 licenses) + $5-50K setup | Enterprise CRM | Orgs with tech capacity |
| **Givebutter** | Free (tips model) | Fundraising/events | Small shops |
| **Instrumentl** | $179+/mo | Grant discovery + tracking | Growing fast |
| **GrantHub** | $995+/yr | Grant lifecycle management | Small-mid |
| **Google Sheets** | Free | The reality for most | Everywhere |

### Pain Points
- CRM bought but never adopted — data entry inconsistent, system becomes unreliable
- Major gift tracking lives in the ED's head or a private spreadsheet
- No single source of truth — donor data split across CRM, email tool, event spreadsheets
- Grant deadlines tracked in one person's calendar — miss a deadline, lose the money

---

## 2. OPERATIONS — Finance, HR, Compliance, Governance

### Finance & Accounting

```
FUND ACCOUNTING (different from for-profit!)
├── Unrestricted funds (general operating)
├── Temporarily restricted (grant-specific, time-limited)
├── Permanently restricted (endowment)
│
├── Must track EVERY DOLLAR to its funding source
├── Must allocate staff time across multiple grants
└── Must reconcile grant budgets vs. actual spending

REPORTING OBLIGATIONS
├── Monthly board financial reports
├── Quarterly grant financial reports
├── Annual Form 990 (due 5th month after FY end)
├── Annual audit (required if >$750K federal or state thresholds vary)
├── State charitable solicitation renewals (~40 states)
└── State corporate annual reports
```

| Tool | Cost | What It Does | Reality |
|------|------|-------------|---------|
| **QuickBooks Online** | ~$90/mo | General accounting | Everywhere, but WRONG for fund accounting |
| **Aplos** | $79-189/mo | True fund accounting | Best budget option for nonprofits |
| **Sage Intacct** | $3,500-70K+/yr | Enterprise fund accounting | Gold standard, mid-large orgs |
| **Wave** | Free | Basic accounting | Very small, no fund accounting |
| **Gusto** | $40-80/mo + $6-12/employee | Payroll/HR | Small orgs <50 staff |
| **Paychex** | $39-95/mo + $4-7/employee | Payroll/HR | Mid-size |

### Board Governance

| Tool | Cost | Reality |
|------|------|---------|
| **Boardable** | Per-user pricing | Built for nonprofits |
| **BoardEffect** | Custom | Enterprise |
| **Google Drive + Email** | Free | How 90% of small orgs actually operate |

### Pain Points
- **QuickBooks is the #1 problem** — not built for fund accounting, the "Classes" workaround is fragile
- Grant budget vs. actuals reconciliation is manual spreadsheet work
- 990 prep outsourced to CPAs at $2-10K+ because systems can't produce the data
- Payroll must be allocated across grants — done manually in spreadsheets
- Multi-state charitable registration is a nightmare (~40 states, all different)

---

## 3. PROGRAMS — The Actual Mission Work

```
CLIENT/PARTICIPANT LIFECYCLE
├── INTAKE
│   ├── Paper forms (still common)
│   ├── Google Forms → manual data entry
│   └── Online portal (rare for small orgs)
│
├── NEEDS ASSESSMENT
│   ├── Staff interviews
│   ├── Screening tools
│   └── Referral to other services
│
├── SERVICE DELIVERY
│   ├── Case notes (paper or digital)
│   ├── Service tracking (hours, sessions, types)
│   ├── Referral tracking to partner orgs
│   └── Volunteer coordination
│
├── OUTCOMES TRACKING
│   ├── Pre/post assessments
│   ├── Follow-up surveys
│   ├── Longitudinal tracking
│   └── ⚠️ Usually an afterthought — most orgs track outputs not outcomes
│
└── DISCHARGE / EXIT
    ├── Exit interview
    ├── Follow-up plan
    └── Data rarely captured systematically
```

### Sector-Specific Compliance

| Regulation | Sector | Impact |
|-----------|--------|--------|
| **HIPAA** | Health services | PHI protection, vendor BAAs, breach notification |
| **FERPA** | Education | Student record protection, parental consent |
| **HUD/HMIS** | Housing/homeless | Specific data collection standards |
| **VAWA** | Domestic violence | Enhanced confidentiality beyond HIPAA |
| **42 CFR Part 2** | Substance abuse | Strictest federal confidentiality standard |

| Tool | Cost | Sector |
|------|------|--------|
| **Bonterra Apricot** | Custom tiers | Human services (configurable, HIPAA compliant) |
| **ETO (Bonterra)** | Custom | Large-scale outcomes, HUD/HMIS |
| **Penelope** | Custom | Counseling/therapy orgs |
| **CaseWorthy** | Custom | Social services, gov-funded |
| **Link2Feed** | Custom | Food banks specifically |
| **Salesforce custom** | Varies | DIY case management on Salesforce |
| **Google Sheets** | Free | The painful reality |

### Pain Points
- Case management and donor CRM are completely separate — fundraising can't tell the impact story
- Outcomes tracking is an afterthought — orgs count outputs (meals served) not outcomes (food insecurity reduced)
- Intake is still paper → manual data entry at many orgs
- Referral tracking between partner orgs basically doesn't exist
- HIPAA compliance needed but enterprise tools are unaffordable

---

## 4. OUTCOMES & REPORTING — Closing the Loop

```
REPORTING PIPELINE
├── FUNDER REPORTS
│   ├── Federal: quarterly/semi-annual financial + programmatic
│   ├── Foundation: annual narrative + financial
│   ├── Each funder wants DIFFERENT metrics, formats, timelines
│   └── ⚠️ Staff spend enormous time reformatting the same data
│
├── BOARD REPORTS
│   ├── Monthly/quarterly financials
│   ├── Program dashboards (if they exist)
│   └── Often late, incomplete, or manually assembled
│
├── PUBLIC ACCOUNTABILITY
│   ├── Form 990 (public document)
│   ├── Annual report (website/print)
│   ├── GuideStar/Candid profile
│   └── Charity Navigator rating
│
└── THE LOOP BACK TO FUNDING
    ├── Outcomes data → grant renewal applications
    ├── Impact stories → individual donor cultivation
    ├── Demonstrated results → new funder prospects
    └── ⚠️ This loop is BROKEN when data is scattered
```

### Pain Points
- **The #1 problem in the entire pipeline**: Can't trace a dollar from donor → accounting → program → outcome in one query
- Each funder report is manually assembled from multiple systems
- Board gets stale data because reports take days/weeks to compile
- Impact stories are anecdotal because outcomes data isn't systematically collected

---

## The Integration Gap — Where EVERYTHING Breaks

```
    ┌──────────────┐
    │  Donor CRM   │
    │ (Bloomerang)  │
    └──────┬───────┘
           │ ✖ NO CONNECTION
           ▼
    ┌──────────────┐         ┌──────────────┐
    │   Accounting  │──✖───→│ Grant Tracking │
    │  (QuickBooks) │         │  (Excel)      │
    └──────┬───────┘         └──────┬───────┘
           │ ✖                       │ ✖
           ▼                         ▼
    ┌──────────────┐         ┌──────────────┐
    │    Email      │──✖───→│ Case Mgmt     │
    │  (Mailchimp)  │         │ (Apricot)     │
    └──────┬───────┘         └──────┬───────┘
           │ ✖                       │ ✖
           ▼                         ▼
    ┌──────────────┐         ┌──────────────┐
    │  Vol Mgmt     │──✖───→│  HR/Payroll   │
    │ (SignUpGenius) │         │  (Gusto)      │
    └──────────────┘         └──────────────┘

    ✖ = No integration. Data re-entered manually across 4-8 systems.
```

**The stat**: Nonprofits using spreadsheets for core operations spend **43% more time on admin tasks**. 87% of organizations struggle with disconnected data sources.

---

## Tech Maturity Levels

### Level 1: Survival Mode ($0-500K budget)
- Everything in Google Sheets and email
- ED's personal laptop is the "server"
- No CRM, no case management system
- 990 done by a volunteer CPA
- Staff: 1-5 people wearing every hat

### Level 2: Point Solutions ($500K-1.5M)
- Bloomerang or DonorPerfect for donors
- QuickBooks for accounting (with painful workarounds)
- Maybe Apricot Essentials for case management
- Mailchimp free tier for email
- **Nothing talks to anything else**
- Staff: 5-15, maybe a part-time data person

### Level 3: Connected Systems ($1.5M-3.5M)
- Salesforce NPSP or Neon CRM
- Aplos or evaluating Sage Intacct
- Dedicated case management integrated with CRM
- Zapier or native integrations connecting key systems
- Staff: 15-40, dedicated operations/data role

### Level 4: Data-Driven ($3.5M-5M+)
- Salesforce Nonprofit Cloud with custom builds
- Sage Intacct with multi-entity
- Real-time dashboards linking donations → programs → outcomes
- API-based integrations, maybe a data warehouse
- Staff: 40+, IT/data team
- **4x more likely to achieve mission goals**

---

## 2025-2026 Funding & Sector Realities

- **90%** of nonprofits plan deep AI adoption — only **37%** have formal policies
- **65%** labor shortage crisis across the sector
- **67%** of revenue is from individual donors (relationship-driven)
- **46%** average donor retention rate
- Federal discretionary spending forecast to drop **up to 8%** over two fiscal years
- A third of nonprofits experienced government funding disruptions in early 2025
- Individual giving: fewer donors giving more (total dollars up 3.6%, donor count down 1.3%)
- **85%** of nonprofits expect demand to increase while funding stays flat or shrinks
