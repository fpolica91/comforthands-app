import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "",
      tags: data.tags ?? [],
      featuredImage: data.featuredImage ?? "",
      content,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category).filter(Boolean));
  return Array.from(categories);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((p) => p.category === category);
}
