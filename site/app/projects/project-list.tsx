"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/mdx";

const stages = ["all", "proposal", "incubation", "active"] as const;
type StageFilter = (typeof stages)[number];

const stageLabels: Record<StageFilter, string> = {
  all: "All",
  proposal: "Proposal",
  incubation: "Incubation",
  active: "Active",
};

const stageStyles: Record<string, string> = {
  proposal:
    "bg-primary/10 text-primary dark:bg-primary/20",
  incubation:
    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  active:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

export function ProjectList({ projects }: { projects: ProjectMeta[] }) {
  const [filter, setFilter] = useState<StageFilter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.stage === filter);

  const counts = {
    all: projects.length,
    proposal: projects.filter((p) => p.stage === "proposal").length,
    incubation: projects.filter((p) => p.stage === "incubation").length,
    active: projects.filter((p) => p.stage === "active").length,
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-12 flex-wrap">
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={() => setFilter(stage)}
            className={`px-4 py-2 text-xs font-medium rounded-full border transition-colors ${
              filter === stage
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {stageLabels[stage]} ({counts[stage]})
          </button>
        ))}
      </div>

      {/* Project List — editorial grid */}
      <div className="grid md:grid-cols-2 border-t border-border/40">
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block border-r border-b border-border/40 md:[&:nth-child(2n)]:border-r-0"
          >
            <article className="p-8 h-full min-h-[300px] flex flex-col bg-background hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${
                    stageStyles[project.stage] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.stage}
                </span>
              </div>
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="mt-2 inline-flex self-start px-3 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground">
                {project.partner}
              </span>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-muted-foreground bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-4"
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
    </>
  );
}
