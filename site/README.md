# Trellis Marketing Site

A Next.js 14+ marketing site for Trellis, supporting communities through research-driven insights and collaborative solutions.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Content:** MDX via next-mdx-remote
- **Sitemap:** next-sitemap (auto-generated on build)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (also generates sitemap)
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
site/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (nav, footer)
│   ├── page.tsx                # Homepage
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── field-notes/            # Field notes section
│   │   ├── page.tsx            # Index page
│   │   └── [slug]/page.tsx     # Dynamic MDX route
│   └── research/               # Research section
│       ├── page.tsx            # Index page
│       └── [slug]/page.tsx     # Dynamic MDX route
├── components/
│   ├── nav.tsx                 # Navigation header
│   ├── footer.tsx              # Site footer
│   └── ui/                     # shadcn/ui components
├── content/
│   ├── field-notes/            # MDX field notes
│   └── research/               # MDX research articles
├── lib/
│   └── mdx.ts                  # MDX parsing utilities
└── public/                     # Static assets
```

## Adding Content

### Field Notes

Create a new `.mdx` file in `content/field-notes/`:

```mdx
---
title: "Your Title"
description: "A brief description"
date: "2024-01-15"
author: "Author Name"
---

Your content here...
```

### Research Articles

Create a new `.mdx` file in `content/research/`:

```mdx
---
title: "Your Title"
description: "A brief description"
date: "2024-01-15"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Sitemap

The sitemap is automatically generated on build via `next-sitemap`. It includes:
- All static pages
- All field notes from MDX files
- All research articles from MDX files

Configure the site URL in `next-sitemap.config.js` or set the `SITE_URL` environment variable.

## Deployment

Deploy to Vercel or any Node.js hosting platform:

```bash
npm run build
npm run start
```

For Vercel, simply connect your repository and it will auto-deploy on push.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SITE_URL` | Production site URL for sitemap | `https://trellis.org` |
