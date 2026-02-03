import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Trellis and our mission to support communities through research-driven insights.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">About Trellis</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Building stronger communities through research and collaboration
        </p>

        <Separator className="my-8" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            Trellis is dedicated to strengthening communities through
            research-driven insights and collaborative partnerships. We believe
            that meaningful change happens when organizations have access to
            rigorous research and the support to implement evidence-based
            solutions.
          </p>
          <p className="text-muted-foreground">
            Our work spans across sectors, from education and public health to
            economic development and social services. We partner with nonprofits,
            government agencies, and community organizations to understand their
            unique challenges and develop strategies that create lasting impact.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Listen First</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We begin every engagement by deeply understanding the community
                context, stakeholder perspectives, and existing strengths.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Research Rigorously</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our research methods are designed to surface actionable insights
                while maintaining the highest standards of integrity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Collaborate Closely</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We work as partners, not consultants, embedding ourselves in the
                work and sharing knowledge at every step.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Measure Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We help organizations track progress and understand what&apos;s
                working, enabling continuous improvement.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-muted-foreground">
            Trellis brings together researchers, practitioners, and community
            advocates with deep expertise in their fields. Our team members have
            backgrounds in social science research, program evaluation,
            strategic planning, and community organizing.
          </p>
          <p className="text-muted-foreground">
            We are united by a shared commitment to using evidence and
            collaboration to address complex social challenges.
          </p>
        </section>
      </div>
    </div>
  );
}
