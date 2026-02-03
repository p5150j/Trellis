import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Trellis and our mission to support communities through research-driven insights.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section border-b border-border/40">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            About
          </p>
          <h1>Building stronger communities</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl">
            Trellis is dedicated to strengthening communities through
            research-driven insights and collaborative partnerships.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="grid md:grid-cols-2">
        <div className="p-8 md:p-12 border-b border-r border-border/40 min-h-[300px] flex flex-col justify-end">
          <span className="text-xs text-muted-foreground mb-4">01</span>
          <h2 className="text-xl">Our Mission</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We believe meaningful change happens when organizations have access
            to rigorous research and support to implement evidence-based solutions.
          </p>
        </div>
        <div className="p-8 md:p-12 border-b border-border/40 min-h-[300px] flex flex-col justify-end bg-muted/30">
          <span className="text-xs text-muted-foreground mb-4">02</span>
          <h2 className="text-xl">Our Work</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We partner with nonprofits, government agencies, and community
            organizations to understand their unique challenges and develop
            strategies that create lasting impact.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-border/40">
        <div className="container-wide section">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Methodology
          </p>
          <h2 className="mb-12">Our Approach</h2>

          <div className="grid md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Listen First",
                desc: "We begin by deeply understanding community context, stakeholder perspectives, and existing strengths.",
              },
              {
                num: "02",
                title: "Research Rigorously",
                desc: "Our methods surface actionable insights while maintaining the highest standards of integrity.",
              },
              {
                num: "03",
                title: "Collaborate Closely",
                desc: "We work as partners, embedding ourselves in the work and sharing knowledge at every step.",
              },
              {
                num: "04",
                title: "Measure Impact",
                desc: "We help organizations track progress and understand what's working for continuous improvement.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border-r border-border/40 last:border-r-0"
              >
                <span className="text-xs text-muted-foreground">{item.num}</span>
                <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            People
          </p>
          <h2>Our Team</h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl">
            Trellis brings together researchers, practitioners, and community
            advocates with deep expertise in their fields. We are united by a
            shared commitment to using evidence and collaboration to address
            complex social challenges.
          </p>
        </div>
      </section>
    </div>
  );
}
