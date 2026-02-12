import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "field-notes" | "research" | "projects";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  partner: string;
  stage: "proposal" | "incubation" | "active";
  description: string;
  tags: string[];
  score: number;
  website: string;
  founded: string;
  location: string;
  headcount: string;
  funding: string;
  date: string;
  featured: boolean;
}

export interface Project extends ProjectMeta {
  content: string;
}

function getContentPath(type: ContentType): string {
  return path.join(contentDirectory, type);
}

export function getAllPosts(type: "field-notes" | "research"): PostMeta[] {
  const contentPath = getContentPath(type);

  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author,
        tags: data.tags,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(
  type: "field-notes" | "research",
  slug: string
): Post | null {
  const contentPath = getContentPath(type);
  const filePath = path.join(contentPath, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author,
    tags: data.tags,
    content,
  };
}

export function getAllSlugs(type: ContentType): string[] {
  const contentPath = getContentPath(type);

  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllProjects(): ProjectMeta[] {
  const contentPath = getContentPath("projects");

  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        partner: data.partner || "",
        stage: data.stage || "proposal",
        description: data.description || "",
        tags: data.tags || [],
        score: data.score || 0,
        website: data.website || "",
        founded: data.founded || "",
        location: data.location || "",
        headcount: data.headcount || "",
        funding: data.funding || "",
        date: data.date || new Date().toISOString(),
        featured: data.featured || false,
      } as ProjectMeta;
    })
    .sort((a, b) => b.score - a.score);
}

export function getProjectBySlug(slug: string): Project | null {
  const contentPath = getContentPath("projects");
  const filePath = path.join(contentPath, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    partner: data.partner || "",
    stage: data.stage || "proposal",
    description: data.description || "",
    tags: data.tags || [],
    score: data.score || 0,
    website: data.website || "",
    founded: data.founded || "",
    location: data.location || "",
    headcount: data.headcount || "",
    funding: data.funding || "",
    date: data.date || new Date().toISOString(),
    featured: data.featured || false,
    content,
  };
}
