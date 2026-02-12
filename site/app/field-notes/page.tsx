import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Build Log",
  description:
    "What we're building, what we're learning, and what's shipping.",
};

export default function FieldNotesPage() {
  const posts = getAllPosts("field-notes");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section border-b border-border/40">
        <div className="container-wide">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Build Log
          </p>
          <h1>Build Log</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl">
            What we&apos;re building, what we&apos;re learning, and what&apos;s
            shipping. Notes from the process of building AI/ML infrastructure
            for nonprofits.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-wide">
          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No field notes yet. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/field-notes/${post.slug}`}
                  className="group block border-r border-b border-border/40 last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <article className="p-6 h-full min-h-[280px] flex flex-col bg-background hover:bg-muted/30 transition-colors">
                    <span className="text-xs text-muted-foreground mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
