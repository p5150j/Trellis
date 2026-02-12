import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getAllSlugs } from "@/lib/mdx";
import { StageBadge } from "@/components/mdx/stage-badge";
import { ScoreRadar } from "@/components/mdx/score-radar";

import { OrgProfile } from "@/components/mdx/org-profile";
import { BeforeAfter } from "@/components/mdx/before-after";
import { BuildPhases } from "@/components/mdx/build-phases";
import { MetricRow } from "@/components/mdx/metric-row";
import { TagList } from "@/components/mdx/tag-list";
import { SourceList } from "@/components/mdx/source-list";
import type { Project } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getMdxComponents(project: Project) {
  return {
    StageBadge,
    ScoreRadar,
    BeforeAfter,
    BuildPhases,
    MetricRow,
    TagList,
    SourceList,
    OrgProfile: () => (
      <OrgProfile
        partner={project.partner}
        location={project.location}
        founded={project.founded}
        headcount={project.headcount}
        website={project.website}
        funding={project.funding}
        stage={project.stage}
      />
    ),
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: `${project.title} — ${project.partner}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.partner}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container-wide section">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <StageBadge stage={project.stage} />
            <span className="text-xs text-muted-foreground">
              Score: {project.score}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {project.partner}
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="border-t border-border/50 pt-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote
              source={project.content}
              components={getMdxComponents(project)}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
