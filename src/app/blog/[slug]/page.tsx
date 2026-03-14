import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageBanner from "@/components/layout/PageBanner";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageBanner title={post.title} />

      <article className="wrapper py-16">
        <div className="mx-auto max-w-3xl">
          {/* Meta info */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <time dateTime={post.date} className="text-sm text-muted-foreground">
              {formattedDate}
            </time>
            <span className="text-sm text-muted-foreground">
              by {post.author}
            </span>
          </div>

          {/* Featured image */}
          {post.featuredImage && (
            <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* MDX content */}
          <div className="[&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-heading [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-heading [&>p]:mb-5 [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>blockquote]:my-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground">
            <MDXRemote source={post.content} />
          </div>

          {/* Back link */}
          <div className="mt-12 border-t pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
