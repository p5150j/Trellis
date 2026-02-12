import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  StatCard,
  ListCard,
} from "@/components/ui/feature-card";
import { HeroVisual } from "@/components/hero-visual";
import { getAllProjects } from "@/lib/mdx";

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const proposalCount = projects.filter((p) => p.stage === "proposal").length;
  const totalCount = projects.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-lg overflow-visible">
        <div className="container-wide overflow-visible">
          <div className="grid md:grid-cols-2 gap-12 items-center overflow-visible">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                AI/ML Infrastructure for Nonprofits
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance leading-[1.1]">
                Building tools for the organizations that{" "}
                <span className="text-primary">matter most</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Data pipelines, integration middleware, and AI/ML tools
                for nonprofits doing real impact work. Scoped for impact.
                Priced for mission, not margin.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-3 text-sm">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-3 text-sm"
                >
                  <Link href="/about">About</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block overflow-visible">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build — branded cards */}
      <section className="section border-t border-border/40">
        <div className="container-wide">
          <div className="mb-12">
            <h2>What We Build</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Data pipelines, ML tools, and integration middleware — scoped for
              nonprofits, priced for impact
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            <FeatureCard
              number="01"
              variant="light"
              title="NLP & Classification Pipelines"
              description="Threat report synthesis, policy tracking across 50 states, hate speech classification, multilingual content analysis in under-resourced languages."
              cta="View projects"
            >
              {/* Abstract network — full bleed background */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" fill="none" preserveAspectRatio="xMidYMid slice">
                <circle cx="80" cy="60" r="80" stroke="currentColor" strokeWidth="1" />
                <circle cx="320" cy="50" r="55" stroke="currentColor" strokeWidth="1" />
                <circle cx="350" cy="280" r="100" stroke="currentColor" strokeWidth="1" />
                <circle cx="120" cy="320" r="65" stroke="currentColor" strokeWidth="1" />
                <circle cx="220" cy="180" r="35" fill="currentColor" opacity="0.15" />
                <circle cx="60" cy="200" r="45" stroke="currentColor" strokeWidth="0.75" />
                <line x1="140" y1="90" x2="200" y2="160" stroke="currentColor" strokeWidth="0.75" />
                <line x1="240" y1="200" x2="310" y2="250" stroke="currentColor" strokeWidth="0.75" />
                <line x1="290" y1="70" x2="240" y2="155" stroke="currentColor" strokeWidth="0.75" />
                <line x1="155" y1="300" x2="210" y2="200" stroke="currentColor" strokeWidth="0.75" />
                <line x1="170" y1="340" x2="290" y2="300" stroke="currentColor" strokeWidth="0.75" />
                <line x1="80" y1="140" x2="90" y2="200" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="80" cy="60" r="5" fill="currentColor" opacity="0.2" />
                <circle cx="320" cy="50" r="5" fill="currentColor" opacity="0.2" />
                <circle cx="350" cy="280" r="5" fill="currentColor" opacity="0.2" />
                <circle cx="120" cy="320" r="5" fill="currentColor" opacity="0.2" />
              </svg>
            </FeatureCard>
            <ListCard
              number="02"
              items={[
                { label: "OSINT & Verification Tools", href: "/projects" },
                { label: "Impact & Outcome Dashboards", href: "/projects" },
                { label: "Early Warning Systems", href: "/projects" },
                { label: "Integration Middleware", href: "/projects" },
              ]}
            />
            <StatCard
              number="03"
              stat={`${totalCount}`}
              label="Projects scoped across 6 domains — from press freedom to cybersecurity"
            />
          </div>
        </div>
      </section>

      {/* Featured Work — editorial grid, not marketplace cards */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2>Featured Work</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Where we think AI/ML creates the most outsized impact
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 border-t border-border/40">
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border-r border-b border-border/40 last:border-r-0 md:[&:nth-child(2n)]:border-r-0"
              >
                <article className="p-8 h-full min-h-[280px] flex flex-col bg-background hover:bg-muted/30 transition-colors">
                  <span className="text-xs text-muted-foreground mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.partner}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs text-muted-foreground bg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/projects">
                View all {totalCount} projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lifecycle — editorial, not badge cards */}
      <section className="section border-t border-border/40">
        <div className="container-wide">
          <div className="mb-12">
            <h2>How It Works</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every engagement follows a lifecycle — from research to production
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Proposal",
                count: proposalCount,
                desc: "Researched, scoped, and published. Every project starts as a transparent proposal on this site — ready for conversation.",
              },
              {
                num: "02",
                title: "Incubation",
                count: 1,
                desc: "Partnership formed, work underway. Hands on keyboard, embedded inside your org, shipping real infrastructure.",
              },
              {
                num: "03",
                title: "Active",
                count: 0,
                desc: "Live in production with case studies. Coming soon as projects move through the pipeline.",
              },
            ].map((stage) => (
              <div
                key={stage.num}
                className="p-6 border-r border-border/40 last:border-r-0"
              >
                <span className="text-xs text-muted-foreground">
                  {stage.num}
                </span>
                <h3 className="mt-4 text-base font-medium">{stage.title}</h3>
                <span className="inline-block mt-2 text-2xl font-semibold text-primary">
                  {stage.count}
                </span>
                <p className="mt-2 text-xs text-muted-foreground">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border/40">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2>Have a nonprofit that needs better infrastructure?</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Every engagement starts as a conversation. Let&apos;s talk about
              what AI/ML tools could do for your organization.
            </p>
            <a
              href="mailto:patrick.ortell@arus.io"
              className="inline-flex mt-8 text-sm font-medium text-primary hover:underline"
            >
              patrick.ortell@arus.io →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
