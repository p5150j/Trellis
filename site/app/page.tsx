import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Supporting Communities Through Research
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Trellis partners with organizations to deliver research-driven
            insights and collaborative solutions that strengthen communities.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">What We Do</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Research</CardTitle>
                <CardDescription>
                  Evidence-based analysis and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We conduct rigorous research to understand community needs and
                  identify effective solutions. Our work is grounded in data and
                  designed to drive meaningful change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  Partnership-driven approaches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We work alongside organizations, listening to their unique
                  challenges and co-creating strategies that align with their
                  values and goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Impact</CardTitle>
                <CardDescription>Measurable community outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our focus is on creating lasting positive change. We measure
                  our success by the real-world improvements we help bring to
                  the communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Latest Insights</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Explore our field notes and research publications
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="outline">
              <Link href="/field-notes">Field Notes</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/research">Research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="mt-4 text-muted-foreground">
            Let&apos;s discuss how we can support your organization&apos;s
            mission.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
