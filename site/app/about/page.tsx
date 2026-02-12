import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Twenty years of startup engineering, pointed at the organizations that need it most. AI/ML infrastructure for nonprofits.",
};

const domains = [
  {
    domain: "Press Freedom & Investigations",
    orgs: "Bellingcat, RSF, American Journalism Project",
    desc: "Open-source intelligence pipelines, newsroom data infrastructure, investigative verification tools",
  },
  {
    domain: "Child Safety & Platform Accountability",
    orgs: "Fairplay, Christchurch Call",
    desc: "Dark pattern detection, content classification, platform policy monitoring at scale",
  },
  {
    domain: "Cybersecurity & Threat Intelligence",
    orgs: "CyberPeace Institute, IST",
    desc: "Threat classification pipelines, policy recommendation tracking, ransomware incident analysis",
  },
  {
    domain: "Climate & Economic Justice",
    orgs: "Dream.org, Heartland Forward",
    desc: "Cross-program outcome tracking, economic impact analytics, community-level GIS mapping",
  },
  {
    domain: "Open Knowledge & Governance",
    orgs: "Creative Commons, Metagov",
    desc: "License compliance infrastructure, governance data platforms, commons health analytics",
  },
  {
    domain: "Humanitarian & Digital Rights",
    orgs: "Data-Pop Alliance, EngageMedia, CCDH",
    desc: "Early warning systems, multilingual NLP, internet shutdown detection, hate speech classification",
  },
];

const methodology = [
  {
    num: "01",
    title: "Research",
    desc: "Scrape, enrich, and score organizations across a 6-dimension AI/ML fit framework. Quantitative analysis — not vibes — to find where infrastructure creates 10x value.",
  },
  {
    num: "02",
    title: "Propose",
    desc: "Every engagement starts as a public proposal on this site. Transparent scope, grounded in what the org actually uses today and what would actually move the needle.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Hands on keyboard, inside your org. Production data pipelines, ML models, integration middleware. Code that ships, not slide decks.",
  },
  {
    num: "04",
    title: "Open Source",
    desc: "Tools built for one organization become available to all. Each engagement strengthens the ecosystem. The rising tide approach.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-lg border-b border-border/40">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">
              About
            </p>
            <h1 className="text-balance">
              Twenty years of startup engineering, pointed at the organizations
              that need it most
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              arus impact is a fractional AI/ML practice building data
              infrastructure for nonprofits and civil society organizations
              across press freedom, child safety, digital rights, cybersecurity,
              and open knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section border-b border-border/40">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                The Builder
              </p>
              <h2>Patrick Ortell</h2>
            </div>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Twenty years building startups.{" "}
                <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer" className="inline-flex px-2.5 py-0.5 text-sm font-medium rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors no-underline">Y Combinator</a>{" "}
                <a href="https://www.techstars.com" target="_blank" rel="noopener noreferrer" className="inline-flex px-2.5 py-0.5 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors no-underline">Techstars</a>.
                Early engineer to technical co-founder, Series A through
                acquisition — the full arc, many times over. Enough reps that
                the pattern is muscle memory, not theory.
              </p>
              <p>
                The pivot to impact work was pattern recognition. The same data pipelines, ML
                infrastructure, and integration middleware I&apos;d been building
                for companies optimizing engagement metrics could transform
                organizations tracking ransomware attacks, investigating war
                crimes, or protecting children from predatory tech. The
                nonprofits doing the hardest work were running on spreadsheets
                and manual processes — not because better tools didn&apos;t
                exist, but because nobody was building them for orgs operating on
                mission-driven budgets.
              </p>
              <p>
                So I started building them. Senior engineer, hands on keyboard,
                embedded inside your org — writing the data pipelines, training
                the models, deploying the infrastructure that lets you focus on
                your mission instead of fighting your tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Network */}
      <section className="section border-b border-border/40 bg-muted/30">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            The Network
          </p>
          <h2 className="mb-12">Built on reach, not headcount</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-background rounded-xl">
              <span className="text-4xl font-semibold text-primary">178</span>
              <p className="mt-1 text-sm font-medium text-foreground">
                Organizations Researched
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Every org scraped, enriched, and scored across a 6-dimension
                AI/ML fit framework — tech gap, impact potential, team size,
                domain relevance, build viability, and growth trajectory.
              </p>
            </div>
            <div className="p-8 bg-background rounded-xl">
              <span className="text-4xl font-semibold text-primary">19</span>
              <p className="mt-1 text-sm font-medium text-foreground">
                Projects Scoped
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Each project grounded in deep research — actual tools the org
                uses, actual workflows that break, actual builds that would move
                the needle. Published transparently on this site.
              </p>
            </div>
            <div className="p-8 bg-background rounded-xl">
              <span className="text-4xl font-semibold text-primary">PLA</span>
              <p className="mt-1 text-sm font-medium text-foreground">
                Project Liberty Alliance
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Warm introductions to leadership across 178 organizations via
                Frank McCourt&apos;s coalition connecting technologists with
                civil society. The network that turns research into
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="section border-b border-border/40">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Domains
          </p>
          <h2 className="mb-12">Where we work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {domains.map((d) => (
              <div key={d.domain} className="p-8 bg-background">
                <h3 className="text-base font-medium">{d.domain}</h3>
                <p className="mt-2 text-xs font-medium text-primary">
                  {d.orgs}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-border/40">
        <div className="container-wide section">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Methodology
          </p>
          <h2 className="mb-12">How engagements work</h2>

          <div className="grid md:grid-cols-4 gap-px bg-border/40">
            {methodology.map((item) => (
              <div key={item.num} className="p-6 bg-background">
                <span className="text-xs text-muted-foreground">
                  {item.num}
                </span>
                <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="section border-b border-border/40 bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                The Model
              </p>
              <h2>
                Fractional AI/ML,
                <br />
                priced for mission
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Senior engineering at a fraction of a full-time hire.
                Deliberately structured for nonprofits that need real
                infrastructure but can&apos;t justify a $200K engineering
                salary.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="text-base font-medium">
                  Embedded, not advisory
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  I write the code, build the pipelines, deploy the models.
                  Inside your org, on your stack, shipping production
                  infrastructure — not recommendations about what someone else
                  should build.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="text-base font-medium">
                  Priced for mission, not margin
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Fractional engagements structured for nonprofit budgets. No
                  SOWs, no enterprise pricing, no procurement theater. Scoped to
                  your capacity so the budget conversation takes five minutes,
                  not five months.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="text-base font-medium">
                  Open source by default
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tools built for one organization become available to all. The
                  commons approach — each engagement strengthens the entire
                  ecosystem, not just one org&apos;s infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2>Let&apos;s build something</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every engagement starts as a conversation. If your organization
              is doing real impact work and your infrastructure is holding you
              back, I&apos;d like to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="https://calendar.app.google/zmKtCzL13ifEghob6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Call
              </a>
              <Link
                href="/projects"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all 19 projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
