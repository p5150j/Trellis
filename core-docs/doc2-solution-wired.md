# Doc 2 of 3: The Solution — Wiring It All Together

> **The V2 Vision:** What happens when someone builds the connective tissue layer between every tool a nonprofit already uses. We are NOT replacing Bloomerang, QuickBooks, Apricot, or any existing system. We are building the middleware that makes them talk to each other.

---

## 1. The Architecture Overview

### The Integration Layer

```mermaid
graph TB
    subgraph Dashboard["Unified Dashboards & Reporting"]
        D1[Executive Dashboard]
        D2[Grant Reporting Console]
        D3[Board Portal]
        D4[Program Outcomes Dashboard]
        D5[Donor Impact Reports]
    end

    subgraph UDM["Unified Data Model"]
        UDM1[(Contacts)]
        UDM2[(Transactions)]
        UDM3[(Programs)]
        UDM4[(Funding Sources)]
        UDM5[(Outcomes)]
        UDM6[(Compliance)]
    end

    subgraph Integration["Integration & Middleware Layer"]
        API[API Connector Hub]
        WH[Webhook Listeners]
        SYNC[Data Sync Engine]
        TRANSFORM[Data Transformer]
        QUEUE[Message Queue]
        RULES[Business Rules Engine]
        ERR[Error Handler & Retry]
    end

    subgraph Fundraising["Fundraising & Donor Tools"]
        BL[Bloomerang CRM]
        SP[Stripe / PayPal]
        MC[Mailchimp]
        WF[Website Donation Forms]
    end

    subgraph Finance["Finance & Accounting"]
        QBO[QuickBooks Online]
        BILL[Bill.com / AP]
        BANK[Bank Feeds]
        PAYROLL[Gusto Payroll]
    end

    subgraph Programs["Program Delivery"]
        APR[Apricot Case Mgmt]
        FORMS[Intake Forms]
        REF[Referral Partners]
        OUTCOME[Outcome Trackers]
    end

    subgraph HR["HR & Volunteers"]
        GUSTO[Gusto HR]
        VOL[Volunteer Hub]
        TIME[Time Tracking]
        BG[Background Checks]
    end

    subgraphTic["Compliance & Governance"]
        CAL[Compliance Calendar]
        DOC[Document Storage]
        BOARD[Board Portal Tools]
        AUDIT[Audit Trail Log]
    end

    Dashboard --> UDM
    UDM --> Integration
    Integration --> Fundraising
    Integration --> Finance
    Integration --> Programs
    Integration --> HR
    Integration --> Tic

    style Integration fill:#2563eb,color:#fff
    style UDM fill:#7c3aed,color:#fff
    style Dashboard fill:#059669,color:#fff
```

### What Changes

Every existing tool stays in place. The staff keeps using what they already know. What changes is invisible to them: a middleware layer intercepts events from each system, transforms the data into a common model, and pushes it where it needs to go. The result is that data entered once propagates everywhere it is needed, automatically.

### Technical Implementation

The integration layer is built on a lightweight Node.js or Python service that connects to each vendor API. A message queue (e.g., Redis or RabbitMQ) decouples producers from consumers so that a slow QuickBooks sync never blocks a donor thank-you email. A rules engine maps business logic: "if donation is restricted to Program X, code it to Class X in QBO and deduct from Grant Y budget." Error handling retries failed syncs with exponential backoff and alerts staff only when human intervention is needed.

### Impact

Staff stop being the integration layer. They stop re-entering data across systems, stop reconciling spreadsheets, and stop assembling reports by hand. The middleware does what middleware does best: move data reliably between systems while humans focus on mission work.

---

## 2. The Fundraising & Donor Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph LR
    subgraph Donor Journey
        A[Donor visits website] --> B[Online donation form]
        B --> C[Payment processor<br/>Stripe]
        C --> D[Bloomerang CRM<br/>auto-updated]
        D --> E[QuickBooks Online<br/>auto-coded]
        E --> F[Grant budget tracker<br/>auto-decremented]
        D --> G[Thank-you email<br/>with impact data]
        G --> H[Mailchimp segment<br/>updated]
    end

    subgraph Data Enrichment
        I[Apricot outcomes] -.->|feeds impact data| G
        F -.->|budget status| J[Grant dashboard]
        D -.->|donor score| K[Cultivation pipeline]
    end

    style D fill:#2563eb,color:#fff
    style E fill:#059669,color:#fff
    style G fill:#7c3aed,color:#fff
```

### Sequence Diagram: Donation End-to-End

```mermaid
sequenceDiagram
    actor Donor
    participant WEB as Website Form
    participant STRIPE as Stripe
    participant MW as Middleware
    participant BL as Bloomerang CRM
    participant QBO as QuickBooks Online
    participant GRANT as Grant Budget Tracker
    participant APR as Apricot
    participant MC as Mailchimp
    participant EMAIL as Email Service

    Donor->>WEB: Fills donation form ($500 to Housing)
    WEB->>STRIPE: Process payment
    STRIPE-->>MW: Webhook: payment.success

    Note over MW: Parse payload, match donor,<br/>determine fund & restriction

    par Update donor CRM
        MW->>BL: POST /donation (donor_id, $500, fund=Housing)
        BL-->>MW: 201 Created (donation_id)
    and Update accounting
        MW->>QBO: POST /invoice (amount=$500, class=Housing, account=4100)
        QBO-->>MW: 201 Created (txn_id)
    end

    MW->>GRANT: PUT /budget/housing (add $500 revenue)
    GRANT-->>MW: Budget updated ($12,500 / $50,000)

    MW->>APR: GET /outcomes?program=housing&period=current
    APR-->>MW: {families_served: 47, housing_placements: 12}

    MW->>EMAIL: Send personalized thank-you
    Note over EMAIL: "Dear Jane, your $500 gift to our<br/>Housing Program has helped 12 families<br/>find stable housing this quarter."

    MW->>MC: PUT /lists/{id}/members/{hash} (tag: Housing Donor 2026)
    MC-->>MW: Updated

    MW->>BL: PUT /contact/{id}/engagement_score (recalculate)
```

### What Changes

A donation that previously required a bookkeeper to manually enter it in QuickBooks, a development associate to log it in Bloomerang, and a program director to check if it counts toward a grant goal now flows through every system in under 30 seconds with zero manual intervention. The thank-you email includes real outcome data instead of generic language.

### Technical Implementation

- **Stripe Webhook** fires `payment_intent.succeeded` to the middleware endpoint.
- **Bloomerang REST API** (`POST /api/v2/transaction`) creates the donation record with fund designation.
- **QuickBooks Online API** (`POST /v3/company/{id}/invoice`) creates the revenue entry with correct class tracking and account code.
- **Apricot API** (`GET /api/v2/records`) pulls current program outcome metrics for the relevant program.
- **Mailchimp API** (`PATCH /3.0/lists/{id}/members/{hash}`) updates donor tags and segments.
- The middleware maps Stripe metadata fields (fund designation, campaign source) to the correct codes in each downstream system.

### Impact

Donor receives a personalized, outcome-rich thank-you within minutes instead of a generic letter weeks later. Finance has clean books from day one. Grant managers see real-time revenue against budget. Donor retention improves because donors feel their specific impact.

---

## 3. The Finance & Accounting Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph TB
    subgraph Revenue
        R1[Donations via Stripe] --> QBO[QuickBooks Online]
        R2[Grant awards] --> QBO
        R3[Fee-for-service] --> QBO
    end

    subgraph Expenses
        E1[Bill.com invoices] --> QBO
        E2[Gusto payroll] --> QBO
        E3[Credit card feeds] --> QBO
    end

    subgraph Fund Accounting
        QBO --> FA[Fund/Class Tracking]
        FA --> REST[Restriction Tracking<br/>Temp / Perm / Unrestricted]
        FA --> GRANT[Grant Budget Tracker]
        FA --> PROG[Program Cost Centers]
    end

    subgraph Reporting
        FA --> DASH[Real-time financial dashboard]
        FA --> RPT990[990 Data Assembly]
        FA --> AUDITRPT[Audit-ready reports]
        FA --> BOARDFIN[Board financial packet]
    end

    subgraph Alerts
        GRANT -.->|Variance > 10%| ALERT1[Budget variance alert]
        REST -.->|Restriction expiring| ALERT2[Restriction deadline alert]
    end

    style QBO fill:#059669,color:#fff
    style FA fill:#2563eb,color:#fff
    style DASH fill:#7c3aed,color:#fff
```

### Sequence Diagram: Grant Financial Lifecycle

```mermaid
sequenceDiagram
    participant FUNDER as Funder Portal
    participant MW as Middleware
    participant QBO as QuickBooks Online
    participant GRANT as Grant Budget Tracker
    participant GUSTO as Gusto Payroll
    participant TIME as Time Tracking
    participant DASH as Dashboard
    participant STAFF as Finance Staff

    Note over FUNDER,STAFF: Grant Award Phase
    STAFF->>MW: Enter grant award (HUD, $200K, 12 months)
    MW->>QBO: Create classes, accounts, budget lines
    MW->>GRANT: Initialize budget ($200K, categories, periods)
    MW->>DASH: Grant card created

    Note over FUNDER,STAFF: Ongoing Operations
    loop Every pay period
        TIME->>MW: Staff hours by program/grant
        MW->>GUSTO: Validate allocations
        GUSTO-->>MW: Payroll processed
        MW->>QBO: Journal entry: salary allocated to HUD grant
        MW->>GRANT: Deduct personnel costs from HUD budget
    end

    loop Every expense
        QBO-->>MW: Webhook: expense created
        MW->>MW: Apply business rules (match to grant)
        MW->>GRANT: Deduct from correct budget category
        MW->>DASH: Update burn rate
    end

    Note over FUNDER,STAFF: Monitoring
    MW->>DASH: Calculate budget vs actuals
    alt Variance > 10%
        MW->>STAFF: Alert: HUD grant personnel line 14% over budget
    end

    Note over FUNDER,STAFF: Year-End
    MW->>QBO: Pull all transactions by class
    MW->>MW: Assemble 990 schedule data
    MW->>DASH: 990 worksheet pre-populated
    MW->>MW: Generate audit trail documentation
```

### What Changes

Fund accounting stops being a manual classification exercise. Every transaction is auto-coded to the correct fund, class, and grant at the point of entry. Budget-to-actuals is real-time instead of a monthly reconciliation marathon. The 990 is mostly pre-populated instead of a months-long assembly project.

### Technical Implementation

- **QuickBooks Online API** webhooks fire on every transaction creation or update. The middleware intercepts and validates correct class/fund coding.
- **Gusto API** (`GET /v1/companies/{id}/payrolls`) pulls payroll data after each run. The middleware applies time-tracking allocation percentages and creates split journal entries in QBO.
- **Time tracking integration** maps staff hours to grant cost centers. The middleware converts hours to dollar amounts using each employee's loaded rate.
- **Grant Budget Tracker** is a lightweight database table that the middleware updates on every financial event, comparing actuals against the budget loaded at grant inception.
- **990 Assembly** queries QBO by class and account to pre-populate Part VIII (Revenue), Part IX (Expenses), and Schedule A.

### Impact

Finance staff spend time analyzing data instead of entering and reconciling it. Grant budget overruns are caught in real time instead of discovered at reporting time. Audit prep drops from weeks to days because every transaction has a complete, automated trail.

---

## 4. The Program Delivery & Case Management Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph LR
    subgraph Intake
        A[Online intake form] --> B[Apricot case record created]
        B --> C[Needs assessment auto-scored]
        C --> D[Service plan generated]
    end

    subgraph Delivery
        D --> E[Services scheduled & tracked]
        E --> F[Milestones recorded]
        F --> G[Outcomes measured]
    end

    subgraph Connected Outputs
        G --> H[Grant reporting data]
        G --> I[Donor impact stories]
        G --> J[Board outcomes dashboard]
        B --> K[Demographics for compliance]
        E --> L[Service hours for grant billing]
    end

    subgraph Referrals
        C --> M[Partner referral sent]
        M --> N[Partner feedback received]
        N --> F
    end

    style B fill:#2563eb,color:#fff
    style G fill:#7c3aed,color:#fff
    style H fill:#059669,color:#fff
```

### Sequence Diagram: Client Journey End-to-End

```mermaid
sequenceDiagram
    actor Client
    participant FORM as Online Intake Form
    participant MW as Middleware
    participant APR as Apricot
    participant RULES as Business Rules Engine
    participant PARTNER as Partner Org
    participant QBO as QuickBooks Online
    participant BL as Bloomerang
    participant DASH as Dashboards

    Client->>FORM: Completes intake form
    FORM->>MW: POST /intake (demographics, needs)
    MW->>APR: Create client record
    APR-->>MW: client_id: 4521

    MW->>RULES: Evaluate needs assessment
    RULES-->>MW: Eligible: Housing + Employment programs
    MW->>APR: Create service plan (housing, employment)

    Note over MW,PARTNER: Referral Loop
    MW->>PARTNER: API/Email: Referral for employment services
    PARTNER-->>MW: Accepted, assigned counselor

    loop Service Delivery (weeks/months)
        APR-->>MW: Event: service delivered (housing counseling, 2hrs)
        MW->>QBO: Log billable service hours against HUD grant
        MW->>DASH: Update services-delivered counter
    end

    APR-->>MW: Event: milestone reached (lease signed)
    MW->>APR: Update outcome record
    MW->>DASH: Update outcomes dashboard

    PARTNER-->>MW: Feedback: client employed at $18/hr
    MW->>APR: Update outcome record (employment)

    Note over MW,DASH: Data flows to reporting & fundraising
    MW->>DASH: Grant reporting: +1 housing placement, +1 employment
    MW->>BL: Update impact data pool (housing program outcomes)
```

### What Changes

Client data entered once at intake propagates to every system that needs it. Service delivery is tracked in real time against grant deliverables. Outcomes from partner organizations feed back into the client record automatically instead of being lost. Program directors see a live dashboard instead of running reports monthly.

### Technical Implementation

- **Apricot API** (`POST /api/v2/records/{form_id}`) creates and updates client records. Webhooks or polling detects new service entries and milestone events.
- **Business Rules Engine** evaluates intake data against program eligibility criteria and grant-funded service slots.
- **Partner integrations** range from API connections (for tech-forward partners) to structured email parsing (for partners without APIs).
- **QBO integration** logs billable service units against the correct grant class for cost-reimbursement grants.
- **Bloomerang integration** aggregates anonymized outcome data into impact pools that feed donor communications.

### Impact

Case managers spend time with clients instead of with spreadsheets. Grant deliverables are tracked as services happen, not reconstructed at reporting time. Referral partners are no longer a black hole. The organization can prove its impact with real data.

---

## 5. The Grant Reporting Pipeline (Wired)

> This is the big one. The single most painful operational process at most nonprofits becomes largely automated.

### Fixed Pipeline

```mermaid
graph TB
    subgraph Data Sources
        QBO[QuickBooks Online<br/>Financial data]
        APR[Apricot<br/>Program data]
        TIME[Time Tracking<br/>Staff allocation]
        GUSTO[Gusto<br/>Payroll/benefits]
        VOL[Volunteer Hub<br/>Volunteer hours]
    end

    subgraph Integration Layer
        MW[Middleware]
        TEMPLATE[Report Template Engine]
        MAP[Funder Requirements Map]
    end

    subgraph Output
        DRAFT[Auto-generated report draft]
        REVIEW[Staff review & edit]
        SUBMIT[Submit to funder]
    end

    QBO --> MW
    APR --> MW
    TIME --> MW
    GUSTO --> MW
    VOL --> MW

    MW --> MAP
    MAP --> TEMPLATE
    TEMPLATE --> DRAFT
    DRAFT --> REVIEW
    REVIEW --> SUBMIT

    style MW fill:#2563eb,color:#fff
    style TEMPLATE fill:#7c3aed,color:#fff
    style DRAFT fill:#059669,color:#fff
```

### Sequence Diagram: Automated Grant Report Assembly

```mermaid
sequenceDiagram
    participant CAL as Compliance Calendar
    participant MW as Middleware
    participant QBO as QuickBooks Online
    participant APR as Apricot
    participant TIME as Time Tracking
    participant GUSTO as Gusto
    participant VOL as Volunteer Hub
    participant TPL as Template Engine
    participant STAFF as Program Director
    participant FUNDER as Funder Portal

    CAL->>MW: Alert: HUD report due in 30 days
    MW->>STAFF: Notification: report assembly starting

    par Pull financial data
        MW->>QBO: GET transactions (class=HUD, period=Q4)
        QBO-->>MW: Revenue: $48,200 | Expenses: $51,300
    and Pull program data
        MW->>APR: GET outcomes (program=housing, period=Q4)
        APR-->>MW: Clients: 34 | Placements: 12 | Counseling hrs: 480
    and Pull staff allocation
        MW->>TIME: GET hours (grant=HUD, period=Q4)
        TIME-->>MW: Staff hours: 1,240 across 4 staff
    and Pull payroll detail
        MW->>GUSTO: GET payroll (period=Q4)
        GUSTO-->>MW: Personnel costs allocated to HUD: $38,100
    and Pull volunteer data
        MW->>VOL: GET hours (program=housing, period=Q4)
        VOL-->>MW: Volunteer hours: 320
    end

    MW->>TPL: Assemble report (template=HUD_quarterly, data={...})
    Note over TPL: Maps internal data fields<br/>to HUD-required format,<br/>calculates required metrics,<br/>flags missing data

    TPL-->>MW: Report draft generated (3 fields need review)
    MW->>STAFF: Report draft ready. 3 narrative fields need your input.
    STAFF->>MW: Adds narrative context, approves numbers
    MW->>FUNDER: Submit final report

    Note over CAL,FUNDER: Total staff time: ~2 hours<br/>Previous process: ~20 hours
```

### Sequence Diagram: Multiple Funders in Parallel

```mermaid
sequenceDiagram
    participant CAL as Compliance Calendar
    participant MW as Middleware
    participant DATA as All Data Sources
    participant TPL as Template Engine
    participant S1 as Director A
    participant S2 as Director B
    participant S3 as Finance Lead

    Note over CAL,S3: Three reports due in same two-week window

    CAL->>MW: HUD quarterly due Feb 15
    CAL->>MW: United Way annual due Feb 20
    CAL->>MW: State DHHS semi-annual due Feb 28

    par HUD Report
        MW->>DATA: Pull HUD grant data
        DATA-->>MW: Financial + program + personnel
        MW->>TPL: Assemble (template=HUD_quarterly)
        TPL-->>MW: Draft ready
        MW->>S1: Review HUD draft
    and United Way Report
        MW->>DATA: Pull United Way grant data
        DATA-->>MW: Financial + program + outcomes
        MW->>TPL: Assemble (template=UW_annual)
        TPL-->>MW: Draft ready
        MW->>S2: Review UW draft
    and State DHHS Report
        MW->>DATA: Pull DHHS grant data
        DATA-->>MW: Financial + demographics + compliance
        MW->>TPL: Assemble (template=DHHS_semi)
        TPL-->>MW: Draft ready
        MW->>S3: Review DHHS draft
    end

    Note over CAL,S3: All three reports assembled in parallel.<br/>Staff only writes narratives and reviews numbers.<br/>No more "reporting season" crisis.
```

### What Changes

Grant reporting goes from a multi-week, all-hands crisis to a largely automated process where staff review and add narrative context to pre-assembled reports. Three reports due in the same window no longer means three weeks of overtime. The data is already in the systems; the middleware just pulls it together.

### Technical Implementation

- **Compliance Calendar** stores every grant's reporting schedule, required data fields, and template format.
- **Template Engine** maintains funder-specific report templates that map internal data fields to each funder's required format. For example, HUD requires specific demographic breakdowns that differ from United Way's outcome categories.
- **Data pull orchestration** runs parallel API queries to all source systems, caches results, and reconciles any discrepancies before assembly.
- **QBO API** (`GET /v3/company/{id}/reports/ProfitAndLoss?class=HUD`) pulls financial summaries.
- **Apricot API** queries pull program metrics filtered by grant-funded services.
- **Missing data detection** flags any required fields that could not be auto-populated, so staff know exactly where to focus their time.

### Impact

This single pipeline may represent the highest-value integration in the entire system. Grant reporting consumes enormous staff time, creates enormous stress, and the data already exists across systems. Automating the assembly frees dozens of hours per reporting cycle, reduces errors, and eliminates the risk of missed deadlines.

---

## 6. The Communications & Donor Engagement Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph LR
    subgraph Data Collection
        BL[Bloomerang CRM<br/>Donor records] --> MW[Middleware]
        APR[Apricot<br/>Outcome data] --> MW
        QBO[QuickBooks<br/>Fund tracking] --> MW
    end

    subgraph Processing
        MW --> SEG[Donor Segmentation]
        MW --> IMPACT[Impact Calculator]
        SEG --> CONTENT[Content Personalization]
        IMPACT --> CONTENT
    end

    subgraph Delivery
        CONTENT --> MC[Mailchimp<br/>Email campaigns]
        CONTENT --> ANNUAL[Annual Report<br/>auto-populated]
        CONTENT --> SOCIAL[Social media<br/>content queue]
        MC --> BL2[Engagement tracked<br/>back to CRM]
    end

    style MW fill:#2563eb,color:#fff
    style IMPACT fill:#7c3aed,color:#fff
    style CONTENT fill:#059669,color:#fff
```

### Sequence Diagram: The Closed Feedback Loop

```mermaid
sequenceDiagram
    actor Donor
    participant STRIPE as Stripe
    participant MW as Middleware
    participant BL as Bloomerang
    participant QBO as QuickBooks
    participant APR as Apricot
    participant CALC as Impact Calculator
    participant MC as Mailchimp
    participant EMAIL as Email

    Donor->>STRIPE: Donates $500 to Housing Program

    STRIPE-->>MW: payment.success webhook
    MW->>BL: Record donation (fund=Housing)
    MW->>QBO: Record revenue (class=Housing)

    Note over MW,CALC: 90 days later — impact reporting cycle

    MW->>QBO: GET Housing program total donations this quarter
    QBO-->>MW: $24,000 from 48 donors
    MW->>APR: GET Housing program outcomes this quarter
    APR-->>MW: 47 clients served, 12 housing placements, 480 counseling hours

    MW->>CALC: Calculate per-donor impact
    Note over CALC: $500 / $24,000 = 2.08% of program<br/>2.08% of 12 placements ≈ contribution to ~0.25 placements<br/>Round to meaningful narrative

    CALC-->>MW: Impact narrative generated

    MW->>MC: Create personalized campaign
    MC->>EMAIL: Send to Donor
    Note over EMAIL: "Dear Jane, your generous $500 gift<br/>helped our Housing Program serve 47<br/>families this quarter. Together with<br/>other donors, you helped 12 families<br/>sign leases for stable housing.<br/>Thank you for making this possible."

    EMAIL-->>MW: Opened, clicked "See more impact"
    MW->>BL: Update engagement score (+5)
    MW->>BL: Flag for cultivation (high engagement)

    Note over Donor,BL: The loop closes: impact drives retention
```

### What Changes

Donors currently receive generic thank-you letters with no connection to actual outcomes. The wired pipeline creates a closed feedback loop: donation flows in, outcomes are tracked, impact is calculated, and personalized communication flows back to the donor with real data about what their gift accomplished. Email engagement data flows back to the CRM to inform cultivation strategy.

### Technical Implementation

- **Impact Calculator** is a middleware service that correlates donation amounts with program outcomes. It uses fund/class tracking from QBO to determine what percentage of a program's budget each donor funded, then maps that to outcomes from Apricot.
- **Mailchimp API** (`POST /3.0/campaigns`) creates segmented campaigns with merge fields populated by the impact calculator.
- **Engagement tracking** uses Mailchimp webhook events (open, click, unsubscribe) to update donor records in Bloomerang via API.
- **Donor segmentation** uses giving history, engagement scores, and program affinity to create targeted communication streams.

### Impact

Donor retention is the single biggest lever in nonprofit fundraising economics. Moving retention from 45% to 55% can be worth more than any single new campaign. Personalized, outcome-driven communication is the proven way to do it, and this pipeline makes it automatic instead of aspirational.

---

## 7. The Volunteer Management Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph TB
    subgraph Recruitment
        A[Volunteer signs up<br/>website/event] --> B[Application in system]
        B --> C[Background check<br/>auto-triggered]
        C --> D[Onboarding workflow]
    end

    subgraph Active Service
        D --> E[Hours tracked<br/>by program]
        E --> F[Skills & certifications<br/>tracked]
    end

    subgraph Connected Outputs
        E --> G[Grant reporting<br/>volunteer match hours]
        E --> H[Program capacity<br/>dashboard]
        F --> I[Engagement score<br/>calculated]
        I --> J[Donor cultivation<br/>pipeline in CRM]
        E --> K[Volunteer recognition<br/>automated milestones]
    end

    style E fill:#2563eb,color:#fff
    style G fill:#059669,color:#fff
    style J fill:#7c3aed,color:#fff
```

### Sequence Diagram: Volunteer-to-Donor Cultivation

```mermaid
sequenceDiagram
    actor Vol as Volunteer
    participant WEB as Website
    participant MW as Middleware
    participant VOL as Volunteer Hub
    participant BG as Background Check Service
    participant APR as Apricot
    participant GRANT as Grant Tracker
    participant BL as Bloomerang CRM
    participant MC as Mailchimp

    Vol->>WEB: Signs up to volunteer (Housing program)
    WEB->>MW: New volunteer application
    MW->>VOL: Create volunteer record
    MW->>BG: Trigger background check
    BG-->>MW: Cleared
    MW->>VOL: Update status: approved
    MW->>Vol: Welcome email + onboarding materials

    loop Weekly service
        Vol->>VOL: Logs 4 hours (housing program)
        VOL-->>MW: Hours logged event
        MW->>GRANT: Add 4 hrs to HUD volunteer match
        MW->>APR: Log volunteer service delivery
    end

    Note over MW: After 6 months: 96 hours logged

    MW->>MW: Calculate engagement score
    Note over MW: 96 hours + consistent attendance<br/>+ skills match = high engagement

    alt Engagement score > threshold
        MW->>BL: Create/update contact as prospective donor
        Note over BL: Contact type: Volunteer → Prospect
        MW->>BL: Add to "Volunteer Cultivation" pipeline
        MW->>MC: Add to volunteer-to-donor nurture sequence
    end

    MW->>VOL: Trigger 100-hour milestone recognition
    MW->>Vol: Recognition email + impact summary

    Note over Vol,BL: Volunteer is now in donor pipeline<br/>with full engagement history
```

### What Changes

Volunteer hours currently sit in an isolated system, unreported against grants that allow volunteer match, and disconnected from donor cultivation. The wired pipeline tracks volunteer hours against grant requirements automatically, calculates engagement scores, and feeds high-engagement volunteers into the donor cultivation pipeline in Bloomerang.

### Technical Implementation

- **Volunteer Hub API** (or equivalent) captures hours and triggers events on logging.
- **Background check integration** uses API (e.g., Checkr, Sterling) to trigger and receive results automatically.
- **Grant match tracking** maps volunteer hours to grants that accept in-kind match, using the middleware to calculate the dollar-equivalent and update the grant budget tracker.
- **Bloomerang API** creates or merges contact records when volunteers cross engagement thresholds, preserving full volunteer history on the donor record.
- **Engagement scoring** uses hours logged, consistency, event attendance, and skill alignment to generate a numeric score.

### Impact

Volunteer match hours are a significant revenue source for many grants that goes under-reported because tracking is manual. Volunteers are also the highest-conversion donor prospects. This pipeline captures both values automatically.

---

## 8. The HR & Payroll Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph LR
    subgraph Time Entry
        A[Staff logs hours<br/>by program/grant] --> B[Time Tracking System]
    end

    subgraph Payroll
        B --> C[Gusto Payroll]
        C --> D[Payroll allocated<br/>by grant/program]
    end

    subgraph Accounting
        D --> E[QuickBooks Online<br/>split journal entries]
        E --> F[Grant budget tracker<br/>personnel line updated]
    end

    subgraph Reporting
        F --> G[Grant personnel<br/>budget vs actuals]
        E --> H[Functional expense<br/>allocation for 990]
        D --> I[Salary & benefits<br/>by program for board]
    end

    style B fill:#2563eb,color:#fff
    style D fill:#059669,color:#fff
    style F fill:#7c3aed,color:#fff
```

### Sequence Diagram: Time-to-Grant Allocation

```mermaid
sequenceDiagram
    actor Staff
    participant TIME as Time Tracking
    participant MW as Middleware
    participant GUSTO as Gusto Payroll
    participant QBO as QuickBooks Online
    participant GRANT as Grant Budget Tracker
    participant DASH as Dashboard

    Staff->>TIME: Logs 40 hrs: 20 HUD, 12 United Way, 8 Admin

    Note over MW: End of pay period

    TIME->>MW: GET hours by staff + grant for period
    MW->>MW: Calculate allocation percentages
    Note over MW: HUD: 50% | UW: 30% | Admin: 20%

    MW->>GUSTO: Validate employee record & pay rate
    GUSTO-->>MW: Annual salary: $52,000 + 25% benefits load
    Note over MW: Biweekly gross + benefits: $2,500<br/>HUD: $1,250 | UW: $750 | Admin: $500

    GUSTO-->>MW: Payroll processed event

    MW->>QBO: Create split journal entry
    Note over QBO: DR 6100-HUD Salaries $1,000<br/>DR 6200-HUD Benefits $250<br/>DR 6100-UW Salaries $600<br/>DR 6200-UW Benefits $150<br/>DR 6100-Admin Salaries $400<br/>DR 6200-Admin Benefits $100<br/>CR 2100 Payroll Liabilities $2,500

    MW->>GRANT: Update HUD personnel budget (+ $1,250)
    MW->>GRANT: Update UW personnel budget (+ $750)

    GRANT-->>MW: HUD personnel: $32,500 / $45,000 (72%)
    MW->>DASH: Update personnel burn rate

    alt Personnel burn rate > 80% with > 30% of period remaining
        MW->>DASH: Flag: HUD personnel budget ahead of schedule
    end
```

### What Changes

Staff time allocation currently lives in a spreadsheet that someone manually reconciles against payroll, then manually enters as journal entries in QuickBooks, then manually checks against grant budgets. The wired pipeline automates every step: time entries drive payroll allocation, payroll drives accounting entries, and accounting entries drive grant budget tracking.

### Technical Implementation

- **Time tracking** can be a lightweight tool (Harvest, Toggl, or even a custom form) that captures hours by grant/program code.
- **Gusto API** (`GET /v1/companies/{id}/payrolls/{payroll_id}`) pulls completed payroll data.
- **Middleware** applies time-based allocation percentages to actual payroll amounts (including benefits load) and creates the correctly split journal entries.
- **QBO API** (`POST /v3/company/{id}/journalentry`) creates multi-line journal entries with correct class coding per grant.
- **Grant Budget Tracker** receives the allocated amounts and recalculates burn rates.

### Impact

Personnel costs are typically 60-80% of a nonprofit's budget. Getting this allocation right is critical for grant compliance and financial reporting. Automating it eliminates the most error-prone manual process in nonprofit accounting and ensures personnel costs are tracked against grants in real time.

---

## 9. The Compliance & Reporting Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph TB
    subgraph Calendar
        CAL[Compliance Calendar] --> |triggers| AUTO[Auto-pull data]
    end

    subgraph Data Assembly
        AUTO --> QBO[QuickBooks<br/>financials]
        AUTO --> APR[Apricot<br/>program data]
        AUTO --> GUSTO[Gusto<br/>payroll/HR]
        AUTO --> BL[Bloomerang<br/>donor data]
        AUTO --> DOC[Document Store<br/>policies/minutes]
    end

    subgraph Outputs
        QBO --> RPT[Report Generator]
        APR --> RPT
        GUSTO --> RPT
        BL --> RPT
        DOC --> RPT
        RPT --> T990[990 Pre-populated]
        RPT --> STATE[State registrations]
        RPT --> AUDIT[Audit documentation]
        RPT --> BOARD[Board compliance reports]
        RPT --> GRANT2[Grant compliance filings]
    end

    subgraph Monitoring
        CAL -.-> ALERT[Deadline alerts<br/>30/15/7 days]
        RPT -.-> GAP[Gap detection<br/>missing data alerts]
    end

    style CAL fill:#2563eb,color:#fff
    style RPT fill:#7c3aed,color:#fff
    style ALERT fill:#dc2626,color:#fff
```

### Sequence Diagram: Annual Compliance Cycle

```mermaid
sequenceDiagram
    participant CAL as Compliance Calendar
    participant MW as Middleware
    participant QBO as QuickBooks
    participant BL as Bloomerang
    participant GUSTO as Gusto
    participant APR as Apricot
    participant DOC as Document Store
    participant RPT as Report Generator
    participant STAFF as Executive Director
    participant CPA as External CPA
    participant BOARD as Board

    Note over CAL,BOARD: January — Start of compliance cycle

    CAL->>MW: Trigger: Annual compliance checklist activated
    MW->>STAFF: Compliance dashboard updated for FY2025

    Note over CAL,BOARD: February — 990 Preparation
    CAL->>MW: 990 data assembly triggered (due May 15)
    par
        MW->>QBO: Pull FY2025 financials (all classes)
        MW->>BL: Pull donor summary (top donors, board giving)
        MW->>GUSTO: Pull compensation data (key employees)
        MW->>APR: Pull program accomplishments summary
        MW->>DOC: Pull governance docs (conflict of interest, policies)
    end
    MW->>RPT: Pre-populate 990 worksheets
    RPT-->>MW: 990 draft: 78% complete, 14 fields need review
    MW->>STAFF: 990 draft ready for review
    MW->>CPA: 990 draft shared for preparation

    Note over CAL,BOARD: March — State Registrations
    CAL->>MW: State charity registration renewals due
    par
        MW->>RPT: Pre-populate state forms (12 states)
        MW->>RPT: Pull financial data for each state's thresholds
    end
    RPT-->>MW: 12 state forms drafted
    MW->>STAFF: State registrations ready for review

    Note over CAL,BOARD: Ongoing — Audit Preparation
    CAL->>MW: Audit documentation assembly
    MW->>QBO: Pull bank reconciliations, trial balance
    MW->>DOC: Pull board minutes, policies, contracts
    MW->>RPT: Assemble audit binder
    RPT-->>MW: Audit binder: 85% complete
    MW->>STAFF: Audit documentation ready

    Note over CAL,BOARD: Monthly — Board Reporting
    loop Every month
        CAL->>MW: Board packet due in 5 days
        MW->>QBO: Pull month-end financials
        MW->>APR: Pull program metrics
        MW->>BL: Pull fundraising summary
        MW->>RPT: Generate board packet
        RPT->>BOARD: Board packet delivered
    end
```

### What Changes

Compliance deadlines are currently tracked in someone's head or a basic spreadsheet. Data for each requirement is manually gathered from multiple systems. The wired pipeline maintains a comprehensive compliance calendar, auto-assembles data for each requirement, and alerts staff to gaps well before deadlines.

### Technical Implementation

- **Compliance Calendar** is a database of all recurring obligations: 990 filing, state registrations, grant reports, audit milestones, insurance renewals, and board governance requirements.
- **Trigger engine** fires at configurable lead times (90, 60, 30, 15, 7 days before deadlines).
- **990 Assembly** uses QBO API to pull Part VIII (revenue by source), Part IX (functional expenses), Schedule A (public support test), and Schedule B (contributor schedule from Bloomerang). Gusto API provides Part VII compensation data.
- **State registration** forms are pre-populated using financial data thresholds that determine filing requirements in each state.
- **Gap detection** compares required data fields against available data and alerts staff to anything that needs manual input.

### Impact

Compliance failures have existential consequences for nonprofits: loss of tax-exempt status, loss of state registration, funder clawbacks. The wired pipeline makes it nearly impossible to miss a deadline and dramatically reduces the cost of compliance by automating data assembly.

---

## 10. The Board Governance Pipeline (Wired)

### Fixed Pipeline

```mermaid
graph LR
    subgraph Live Data
        QBO[QuickBooks<br/>Financials] --> DASH[Board Dashboard]
        APR[Apricot<br/>Outcomes] --> DASH
        BL[Bloomerang<br/>Fundraising] --> DASH
        GRANT[Grant Tracker<br/>Awards & pipeline] --> DASH
    end

    subgraph Board Outputs
        DASH --> PACKET[Monthly board packet<br/>auto-generated]
        DASH --> KPI[Strategic KPI<br/>tracking]
        DASH --> FIN[Financial dashboard<br/>always current]
        DASH --> PROG[Program outcomes<br/>dashboard]
    end

    subgraph Governance
        PACKET --> PORTAL[Board portal]
        KPI --> PORTAL
        DOC[Policies & minutes] --> PORTAL
        PORTAL --> BOARD[Board members]
    end

    style DASH fill:#2563eb,color:#fff
    style PACKET fill:#7c3aed,color:#fff
    style PORTAL fill:#059669,color:#fff
```

### Sequence Diagram: Board Packet Generation

```mermaid
sequenceDiagram
    participant CAL as Compliance Calendar
    participant MW as Middleware
    participant QBO as QuickBooks
    participant APR as Apricot
    participant BL as Bloomerang
    participant GRANT as Grant Tracker
    participant RPT as Report Generator
    participant PORTAL as Board Portal
    participant ED as Executive Director
    actor BOARD as Board Members

    CAL->>MW: Board meeting in 7 days — generate packet

    par Financial summary
        MW->>QBO: Pull month-end financials
        QBO-->>MW: P&L, Balance Sheet, Cash Flow, Budget vs Actuals
    and Program summary
        MW->>APR: Pull program KPIs
        APR-->>MW: Clients served, outcomes, waitlist
    and Fundraising summary
        MW->>BL: Pull fundraising dashboard
        BL-->>MW: MTD/YTD raised, donor count, retention rate
    and Grant summary
        MW->>GRANT: Pull grant portfolio status
        GRANT-->>MW: Active grants, pipeline, upcoming deadlines
    end

    MW->>RPT: Generate board packet
    Note over RPT: Financial statements with narrative<br/>Program dashboard with trends<br/>Fundraising scorecard<br/>Grant portfolio summary<br/>ED report template (narrative section blank)

    RPT-->>MW: Board packet draft ready
    MW->>ED: Review packet, add ED narrative
    ED->>MW: Narrative added, packet approved
    MW->>PORTAL: Publish packet
    PORTAL->>BOARD: Notification: board packet available

    Note over BOARD: Board members access real-time<br/>dashboards any time, not just at meetings
```

### What Changes

Board members currently receive a hastily assembled packet the night before meetings, if they receive one at all. Financial data is weeks old. Program data is anecdotal. The wired pipeline generates a comprehensive, data-driven board packet automatically, with the ED only needing to add narrative context. Between meetings, board members have access to real-time dashboards.

### Technical Implementation

- **Board Portal** can be a simple authenticated web application or a service like BoardEffect, Diligent, or even a shared Google Drive with structured folders.
- **Report Generator** uses templates that combine financial charts (from QBO data), program outcome visualizations (from Apricot data), and fundraising metrics (from Bloomerang data).
- **Real-time dashboards** are always-on views powered by the Unified Data Model, not generated on demand.
- **Strategic KPI tracking** compares actual metrics against board-approved annual goals and shows trend lines.

### Impact

Board members who are well-informed make better decisions and are more engaged. An engaged board fundraises more effectively, provides better oversight, and is less likely to be surprised by problems. The automated packet also frees the ED from spending days each month assembling reports.

---

## 11. The Unified Data Model

```mermaid
erDiagram
    CONTACT {
        uuid id PK
        string first_name
        string last_name
        string email
        string phone
        enum type "donor, volunteer, client, staff, board"
        boolean is_donor
        boolean is_volunteer
        boolean is_client
        boolean is_staff
        boolean is_board_member
        float engagement_score
        date created_at
    }

    TRANSACTION {
        uuid id PK
        uuid contact_id FK
        uuid funding_source_id FK
        enum type "donation, grant_revenue, expense, in_kind"
        decimal amount
        date transaction_date
        string payment_method
        enum restriction "unrestricted, temp_restricted, perm_restricted"
        string external_ref_qbo
        string external_ref_bloomerang
    }

    PROGRAM {
        uuid id PK
        string name
        string description
        enum status "active, inactive, planned"
        date start_date
        date end_date
    }

    SERVICE {
        uuid id PK
        uuid program_id FK
        uuid client_id FK
        uuid staff_id FK
        string service_type
        date service_date
        decimal hours
        text notes
    }

    OUTCOME {
        uuid id PK
        uuid program_id FK
        uuid client_id FK
        string outcome_type
        string outcome_value
        date measured_date
        uuid grant_id FK
    }

    FUNDING_SOURCE {
        uuid id PK
        string name
        enum type "individual, foundation, government, corporate, earned"
        enum restriction "unrestricted, temp_restricted, perm_restricted"
        decimal budget_amount
        date start_date
        date end_date
        uuid program_id FK
    }

    GRANT {
        uuid id PK
        uuid funding_source_id FK
        string funder_name
        string grant_number
        decimal award_amount
        date award_date
        date start_date
        date end_date
        enum status "prospect, submitted, awarded, active, closed"
    }

    GRANT_BUDGET_LINE {
        uuid id PK
        uuid grant_id FK
        string category
        decimal budgeted_amount
        decimal spent_amount
        decimal remaining_amount
    }

    GRANT_REPORT {
        uuid id PK
        uuid grant_id FK
        date due_date
        enum status "upcoming, in_progress, submitted, accepted"
        string template_id
    }

    VOLUNTEER_HOURS {
        uuid id PK
        uuid contact_id FK
        uuid program_id FK
        date date
        decimal hours
        string activity
    }

    TIME_ENTRY {
        uuid id PK
        uuid contact_id FK
        uuid program_id FK
        uuid grant_id FK
        date date
        decimal hours
    }

    COMPLIANCE_ITEM {
        uuid id PK
        string name
        enum type "990, state_registration, grant_report, audit, insurance"
        date due_date
        enum status "upcoming, in_progress, completed, overdue"
        integer alert_days_before
    }

    COMMUNICATION {
        uuid id PK
        uuid contact_id FK
        enum channel "email, mail, phone, event"
        date sent_date
        string campaign_id
        boolean opened
        boolean clicked
    }

    CONTACT ||--o{ TRANSACTION : "makes"
    CONTACT ||--o{ SERVICE : "receives as client"
    CONTACT ||--o{ SERVICE : "delivers as staff"
    CONTACT ||--o{ VOLUNTEER_HOURS : "logs"
    CONTACT ||--o{ TIME_ENTRY : "tracks"
    CONTACT ||--o{ COMMUNICATION : "receives"
    PROGRAM ||--o{ SERVICE : "contains"
    PROGRAM ||--o{ OUTCOME : "produces"
    PROGRAM ||--o{ VOLUNTEER_HOURS : "receives"
    FUNDING_SOURCE ||--o{ TRANSACTION : "funds"
    FUNDING_SOURCE ||--o{ GRANT : "originates"
    GRANT ||--o{ GRANT_BUDGET_LINE : "has"
    GRANT ||--o{ GRANT_REPORT : "requires"
    GRANT ||--o{ TIME_ENTRY : "tracks against"
    GRANT ||--o{ OUTCOME : "measures"
```

The critical insight in this data model is the **CONTACT** entity. In most nonprofits, the same person can be a donor, a volunteer, a client, and eventually a board member. Current systems store these as separate records in separate databases. The unified data model uses boolean flags and a single contact record so that a volunteer's hours, a donor's gifts, and a client's outcomes are all visible on one profile.

The **FUNDING_SOURCE** and **GRANT** entities create the connective tissue between money coming in (transactions), money going out (expenses), and what it accomplishes (outcomes). This three-way join — funding to spending to impact — is the relationship that breaks down when systems are disconnected.

---

## 12. The Integration Architecture

### Technical Architecture

```mermaid
graph TB
    subgraph External APIs
        BL_API[Bloomerang REST API<br/>v2]
        QBO_API[QuickBooks Online API<br/>v3]
        APR_API[Apricot API<br/>v2]
        MC_API[Mailchimp API<br/>v3.0]
        GUSTO_API[Gusto API<br/>v1]
        STRIPE_API[Stripe API<br/>Webhooks]
        VOL_API[Volunteer Hub API]
        BG_API[Background Check API<br/>Checkr]
    end

    subgraph Webhook Receivers
        WH1[POST /webhooks/stripe]
        WH2[POST /webhooks/qbo]
        WH3[POST /webhooks/mailchimp]
        WH4[POST /webhooks/gusto]
    end

    subgraph Message Queue
        Q[Redis / RabbitMQ]
        Q1[donation.received]
        Q2[expense.created]
        Q3[payroll.processed]
        Q4[service.delivered]
        Q5[outcome.recorded]
        Q6[hours.logged]
    end

    subgraph Middleware Services
        ROUTER[Event Router]
        TRANSFORM[Data Transformer]
        RULES[Business Rules Engine]
        CONFLICT[Conflict Resolver]
        RETRY[Error Handler<br/>Exponential Backoff]
        SCHEDULER[Job Scheduler<br/>Cron-based batch sync]
    end

    subgraph Data Layer
        DB[(PostgreSQL<br/>Unified Data Model)]
        CACHE[(Redis Cache<br/>API responses)]
        AUDIT[(Audit Log<br/>Every change tracked)]
    end

    subgraph Sync Engine
        REALTIME[Real-time sync<br/>webhooks → immediate]
        BATCH[Batch sync<br/>every 15 min / hourly / daily]
        RECONCILE[Reconciliation<br/>nightly full-table compare]
    end

    subgraph Reporting Layer
        DASH1[Executive Dashboard]
        DASH2[Grant Dashboard]
        DASH3[Board Portal]
        RPT[Report Generator]
        EXPORT[Data Export<br/>CSV / PDF / API]
    end

    STRIPE_API --> WH1
    QBO_API --> WH2
    MC_API --> WH3
    GUSTO_API --> WH4

    WH1 --> Q
    WH2 --> Q
    WH3 --> Q
    WH4 --> Q

    Q --> ROUTER
    ROUTER --> TRANSFORM
    TRANSFORM --> RULES
    RULES --> CONFLICT
    CONFLICT --> DB
    RULES --> RETRY

    RETRY --> Q

    SCHEDULER --> BATCH
    BATCH --> BL_API
    BATCH --> APR_API
    BATCH --> VOL_API

    RECONCILE --> DB

    DB --> DASH1
    DB --> DASH2
    DB --> DASH3
    DB --> RPT
    DB --> EXPORT

    ROUTER -.-> AUDIT
    TRANSFORM -.-> AUDIT
    RULES -.-> AUDIT
    CONFLICT -.-> AUDIT

    style Q fill:#dc2626,color:#fff
    style DB fill:#2563eb,color:#fff
    style RULES fill:#7c3aed,color:#fff
    style ROUTER fill:#059669,color:#fff
```

### Sync Strategy by System

| System | Sync Method | Direction | Frequency | Notes |
|--------|------------|-----------|-----------|-------|
| Stripe | Webhooks | Inbound | Real-time | Payment events trigger immediate processing |
| QuickBooks Online | Webhooks + Batch | Bidirectional | Real-time + hourly reconciliation | Webhooks for new transactions; batch for reconciliation |
| Bloomerang | REST API polling | Bidirectional | Every 15 minutes | No webhooks available; poll for changes |
| Apricot | REST API polling | Bidirectional | Every 15 minutes | Poll for new records and updates |
| Mailchimp | Webhooks + Batch | Bidirectional | Real-time events + daily list sync | Webhook for engagement; batch for list management |
| Gusto | Webhooks + Batch | Inbound | Per payroll cycle + monthly reconciliation | Payroll data flows in; no write-back needed |
| Volunteer Hub | REST API polling | Inbound | Every 30 minutes | Pull hours and new registrations |

### Error Handling Strategy

```mermaid
graph TD
    A[API Call Fails] --> B{Error Type?}
    B -->|Rate Limited| C[Backoff: 1s → 2s → 4s → 8s]
    B -->|Auth Failed| D[Refresh token, retry once]
    B -->|Server Error 5xx| E[Retry 3x with backoff]
    B -->|Client Error 4xx| F[Log error, alert staff]
    B -->|Timeout| G[Retry 2x, then queue for batch]

    C --> H{Succeeded?}
    D --> H
    E --> H
    G --> H

    H -->|Yes| I[Process normally]
    H -->|No| J[Dead letter queue]
    J --> K[Staff alert: manual intervention needed]
    K --> L[Dashboard shows failed syncs]

    F --> L

    style J fill:#dc2626,color:#fff
    style I fill:#059669,color:#fff
```

### Conflict Resolution

When the same record is modified in two systems between sync cycles, the middleware applies these rules in order:

1. **Timestamp wins** — most recent update takes precedence for non-financial data.
2. **Source of truth wins** — each data type has a designated source of truth (Bloomerang for donor data, QBO for financial data, Apricot for client data). The source of truth always wins for its owned fields.
3. **Financial data never auto-resolves** — any conflict in financial amounts is flagged for human review.
4. **Audit everything** — both versions are logged in the audit trail regardless of resolution.

---

## 13. The Wiring Map (Before / After)

### Before: Disconnected Systems

```mermaid
graph TB
    BL[Bloomerang<br/>Donor CRM]
    QBO[QuickBooks Online<br/>Accounting]
    APR[Apricot<br/>Case Management]
    MC[Mailchimp<br/>Email Marketing]
    GUSTO[Gusto<br/>Payroll & HR]
    VOL[Volunteer Hub<br/>Volunteer Mgmt]
    STRIPE[Stripe<br/>Payment Processing]
    EXCEL1[Excel<br/>Grant Tracking]
    EXCEL2[Excel<br/>Board Reports]
    EXCEL3[Excel<br/>Time Allocation]
    EXCEL4[Excel<br/>Compliance Calendar]
    GDRIVE[Google Drive<br/>Document Storage]

    BL ~~~ QBO
    QBO ~~~ APR
    APR ~~~ MC
    MC ~~~ GUSTO
    GUSTO ~~~ VOL
    VOL ~~~ STRIPE
    STRIPE ~~~ EXCEL1
    EXCEL1 ~~~ EXCEL2
    EXCEL2 ~~~ EXCEL3
    EXCEL3 ~~~ EXCEL4
    EXCEL4 ~~~ GDRIVE

    style BL fill:#9ca3af,color:#000
    style QBO fill:#9ca3af,color:#000
    style APR fill:#9ca3af,color:#000
    style MC fill:#9ca3af,color:#000
    style GUSTO fill:#9ca3af,color:#000
    style VOL fill:#9ca3af,color:#000
    style STRIPE fill:#9ca3af,color:#000
    style EXCEL1 fill:#fbbf24,color:#000
    style EXCEL2 fill:#fbbf24,color:#000
    style EXCEL3 fill:#fbbf24,color:#000
    style EXCEL4 fill:#fbbf24,color:#000
    style GDRIVE fill:#9ca3af,color:#000
```

> Every system is an island. Staff are the integration layer. Spreadsheets fill the gaps. Data is re-entered, copy-pasted, and manually reconciled.

### After: Wired Through the Integration Layer

```mermaid
graph TB
    subgraph Core["Integration Layer"]
        MW[Middleware<br/>API Hub + Sync Engine<br/>+ Rules Engine]
        DB[(Unified Data Model<br/>PostgreSQL)]
        MW <--> DB
    end

    BL[Bloomerang<br/>Donor CRM] <-->|REST API<br/>15-min sync| MW
    QBO[QuickBooks Online<br/>Accounting] <-->|Webhooks +<br/>hourly reconcile| MW
    APR[Apricot<br/>Case Management] <-->|REST API<br/>15-min sync| MW
    MC[Mailchimp<br/>Email Marketing] <-->|Webhooks +<br/>daily sync| MW
    GUSTO[Gusto<br/>Payroll & HR] -->|Webhooks<br/>per pay cycle| MW
    VOL[Volunteer Hub] -->|REST API<br/>30-min sync| MW
    STRIPE[Stripe<br/>Payments] -->|Webhooks<br/>real-time| MW

    MW --> DASH[Dashboards<br/>Executive, Board,<br/>Grant, Program]
    MW --> RPT[Report Generator<br/>990, Grants, Board<br/>Packets, Compliance]
    MW --> ALERTS[Alerts Engine<br/>Deadlines, Variances,<br/>Compliance Gaps]

    style MW fill:#2563eb,color:#fff
    style DB fill:#7c3aed,color:#fff
    style DASH fill:#059669,color:#fff
    style RPT fill:#059669,color:#fff
    style ALERTS fill:#dc2626,color:#fff
    style BL fill:#3b82f6,color:#fff
    style QBO fill:#3b82f6,color:#fff
    style APR fill:#3b82f6,color:#fff
    style MC fill:#3b82f6,color:#fff
    style GUSTO fill:#3b82f6,color:#fff
    style VOL fill:#3b82f6,color:#fff
    style STRIPE fill:#3b82f6,color:#fff
```

### Connections Made

| Connection | What Flows | Impact |
|-----------|-----------|--------|
| Stripe → Bloomerang | Donation records, donor matching | No manual entry of online gifts |
| Stripe → QuickBooks | Revenue entries with fund coding | No manual journal entries for donations |
| Bloomerang → Mailchimp | Donor segments, engagement tags | Targeted communications without list exports |
| Apricot → Grant Tracker | Outcome metrics, service counts | Grant reports auto-populated with program data |
| Gusto → QuickBooks | Payroll with grant/program allocation | No manual split journal entries |
| Time Tracking → Gusto/QBO | Staff allocation percentages | Personnel costs auto-allocated to grants |
| Volunteer Hub → Grant Tracker | Volunteer match hours | In-kind match captured for grant compliance |
| QuickBooks → Board Dashboard | Real-time financial data | Board sees current numbers, not stale reports |
| Apricot → Bloomerang | Anonymized outcome data | Donor communications include real impact data |
| Compliance Calendar → All Systems | Data pull triggers | Reports auto-assembled before deadlines |
| All Systems → Audit Log | Every data change | Audit trail maintained automatically |

### What Gets Eliminated

| Eliminated | Replaced By |
|-----------|-------------|
| Excel grant tracking spreadsheet | Real-time grant budget dashboard fed by QBO + time tracking |
| Excel board report assembly | Auto-generated board packet from live data |
| Excel time allocation spreadsheet | Time tracking system integrated with payroll and grants |
| Excel compliance calendar | Database-driven compliance calendar with auto-alerts |
| Manual data re-entry across systems | Automated API sync between all systems |
| Monthly reconciliation marathons | Real-time data sync with nightly reconciliation |
| Multi-week grant report assembly | Auto-assembled report drafts from connected systems |
| Generic donor thank-you letters | Personalized impact communications with real outcome data |
| Staff serving as the integration layer | Middleware serving as the integration layer |

---

## Summary

The entire solution rests on one principle: **the data already exists**. Donations are already tracked in Bloomerang. Expenses are already in QuickBooks. Client outcomes are already in Apricot. Staff hours are already logged somewhere. The problem was never missing data — it was missing connections.

The integration layer creates those connections. It does not replace any existing tool. It does not require staff to learn new systems. It sits between everything, moves data where it needs to go, and produces the reports, dashboards, and communications that currently require dozens of hours of manual effort.

The result is an organization that knows its financial position in real time, can prove its impact with data, and spends its staff time on mission work instead of data entry.

> **Next: Doc 3 of 3** — "The Roadmap: How to Get From Here to There" — Phased implementation plan, priority sequencing, build-vs-buy decisions, and the business case for the integration investment.
"}}],"stop_reason":null,"stop_sequence":null,"usage":{"input_tokens":1,"cache_creation_input_tokens":166,"cache_read_input_tokens":10444,"cache_creation":{"ephemeral_5m_input_tokens":0,"ephemeral_1h_input_tokens":166},"output_tokens":25,"service_tier":"standard"}},"requestId":"req_011CXjydTj8wRHB1btWYDBCY","type":"assistant","uuid":"e555250f-ee7a-46a5-a038-52392ec6e3db","timestamp":"2026-02-02T21:52:10.584Z"}
{"parentUuid":"e555250f-ee7a-46a5-a038-52392ec6e3db","isSidechain":true,"userType":"external","cwd":"/Users/dev/Desktop/non-prof","sessionId":"f0de89b8-d87d-40d5-abe6-c82c13d33095","version":"2.1.29","gitBranch":"","agentId":"a6a6af7","slug":"parsed-herding-bird","type":"user","message":{"role":"user","content":[{"type":"tool_result","content":"