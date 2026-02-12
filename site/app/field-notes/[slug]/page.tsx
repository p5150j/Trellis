import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("field-notes");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("field-notes", slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function FieldNotePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug("field-notes", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container-wide section">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/field-notes">&larr; Back to Field Notes</Link>
        </Button>

        <header>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-4 text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.author && ` · ${post.author}`}
          </p>
        </header>

        <Separator className="my-8" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </div>
    </article>
  );
}
