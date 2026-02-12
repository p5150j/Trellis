import type { Metadata } from "next";
import { getAllProjects } from "@/lib/mdx";
import { ProjectList } from "./project-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI/ML infrastructure projects for nonprofits — from proposal through active deployment.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container-wide section">
      <div className="max-w-2xl mb-12">
        <h1>What we&apos;re building</h1>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          Every project starts as a proposal — researched, scoped, and ready for
          conversation. As partnerships form, projects move to incubation and
          active deployment.
        </p>
      </div>

      <ProjectList projects={projects} />
    </div>
  );
}
