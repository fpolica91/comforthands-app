# ComfortHands

Modern web application for ComfortHands — therapeutic gloves and comfort solutions.

## Tech Stack

- **Framework:** Next.js 15 (App Router, SSR)
- **Language:** TypeScript
- **UI:** shadcn/ui + Tailwind CSS 4
- **Animations:** Framer Motion
- **Forms:** react-hook-form + zod
- **Blog:** MDX (next-mdx-remote)
- **Email:** Resend (placeholder)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
RESEND_API_KEY=
CONTACT_EMAIL_TO=
CONTACT_EMAIL_FROM=
NEXT_PUBLIC_SITE_URL=
```

## Project Structure

```
content/          # Blog posts (MDX) and data (JSON)
src/
  app/            # Next.js routes
  components/     # React components
    layout/       # Header, Footer, Navigation
    home/         # Homepage sections
    blog/         # Blog components
    contact/      # Contact form
    shared/       # Reusable components
    ui/           # shadcn/ui primitives
  lib/            # Utilities (data loading, blog, SEO)
  types/          # TypeScript interfaces
public/           # Static assets (images, videos)
```

## Adding Blog Posts

Create an MDX file in `content/blog/`:

```mdx
---
title: "Post Title"
date: "2025-01-01"
author: "Author Name"
excerpt: "Brief description"
category: "Category"
tags: ["tag1", "tag2"]
featuredImage: "/images/path.jpg"
---

Post content here...
```

## Deployment

Deployed on Vercel. Push to `main` to trigger a deploy.
