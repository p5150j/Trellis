import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Observations, insights, and learnings from our work in the field.",
};

export default function FieldNotesPage() {
  const posts = getAllPosts("field-notes");

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Field Notes</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Observations, insights, and learnings from our work in the field.
          These notes capture our experiences and reflections as we partner with
          communities.
        </p>

        <Separator className="my-8" />

        {posts.length === 0 ? (
          <p className="text-muted-foreground">
            No field notes yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/field-notes/${post.slug}`}>
                <Card className="transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {post.author && ` · ${post.author}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
