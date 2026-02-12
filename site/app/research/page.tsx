import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Analysis and frameworks on AI/ML infrastructure for civil society organizations.",
};

export default function ResearchPage() {
  const posts = getAllPosts("research");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section border-b border-border/40">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Publications
          </p>
          <h1>Research</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl">
            Analysis and frameworks on where AI/ML infrastructure creates
            outsized impact for civil society organizations. How we evaluate
            fit, score opportunities, and identify the builds that matter.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-wide">
          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No research publications yet. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/research/${post.slug}`}
                  className="group block border-r border-b border-border/40 md:odd:border-r md:even:border-r-0"
                >
                  <article className="p-8 h-full min-h-[320px] flex flex-col bg-background hover:bg-muted/30 transition-colors">
                    <span className="text-xs text-muted-foreground mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs text-muted-foreground bg-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
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
          )}

          {/* More Coming Soon */}
          <div className="mt-16 p-8 border border-border/40 rounded-xl bg-muted/30">
            <p className="text-sm font-medium text-foreground">
              More research coming soon
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
              We&apos;re publishing additional analysis on the nonprofit tech
              landscape, domain-specific AI/ML applications, and engagement
              patterns from our first cohort of projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
