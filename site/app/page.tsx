import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  StatCard,
  ListCard,
} from "@/components/ui/feature-card";
import { HeroVisual } from "@/components/hero-visual";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-lg overflow-visible">
        <div className="container-wide overflow-visible">
          <div className="grid md:grid-cols-2 gap-12 items-center overflow-visible">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Research & Community Partnership
              </p>
              <h1 className="text-balance">
                Supporting communities through{" "}
                <span className="text-primary">research-driven</span> insights
              </h1>
              <p className="mt-6 text-sm text-muted-foreground max-w-lg leading-relaxed">
                Trellis partners with organizations to deliver evidence-based
                solutions that strengthen communities and create lasting impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/research">View Research</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block overflow-visible">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section border-t border-border/40">
        <div className="container-wide">
          <div className="mb-12">
            <h2>What We Do</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Building capacity through research, collaboration, and measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            <FeatureCard
              number="01"
              variant="light"
              title="Research"
              description="Evidence-based analysis grounded in community needs"
              cta="Learn more"
            />
            <ListCard
              number="02"
              items={[
                { label: "Community Assessment" },
                { label: "Data Analysis" },
                { label: "Strategic Planning" },
                { label: "Impact Evaluation" },
              ]}
            />
            <StatCard
              number="03"
              stat="+50"
              label="Community partnerships formed in the last year"
            />
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section bg-muted/30">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2>Latest Insights</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore our field notes and research publications
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 border-t border-border/40">
            <Link
              href="/field-notes"
              className="group p-8 min-h-[280px] flex flex-col border-r border-b border-border/40 hover:bg-muted/30 transition-colors"
            >
              <span className="text-xs text-muted-foreground mb-4">01</span>
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                Field Notes
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Observations and learnings from our community partnerships.
              </p>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Browse notes
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </Link>

            <Link
              href="/research"
              className="group p-8 min-h-[280px] flex flex-col border-b border-border/40 hover:bg-muted/30 transition-colors"
            >
              <span className="text-xs text-muted-foreground mb-4">02</span>
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                Research
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In-depth publications designed to inform practice.
              </p>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  View research
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section border-t border-border/40">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2>Ready to work together?</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Let&apos;s discuss how we can support your organization&apos;s
              mission and strengthen your community.
            </p>
            <a
              href="mailto:hello@trellis.org"
              className="inline-flex mt-8 text-sm font-medium text-primary hover:underline"
            >
              hello@trellis.org →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
