const fs = require("fs");
const path = require("path");

function getMdxSlugs(contentDir) {
  const fullPath = path.join(process.cwd(), "content", contentDir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://impact.arus.io",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const fieldNotesSlugs = getMdxSlugs("field-notes");
    const researchSlugs = getMdxSlugs("research");
    const projectSlugs = getMdxSlugs("projects");

    const fieldNotesPaths = fieldNotesSlugs.map((slug) => ({
      loc: `/field-notes/${slug}`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));

    const researchPaths = researchSlugs.map((slug) => ({
      loc: `/research/${slug}`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const projectPaths = projectSlugs.map((slug) => ({
      loc: `/projects/${slug}`,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));

    return [...projectPaths, ...fieldNotesPaths, ...researchPaths];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
