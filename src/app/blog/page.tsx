import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageBanner title="Blog" />

      <section className="wrapper py-16">
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-semibold text-heading">
              No blog posts yet
            </h2>
            <p className="mt-2 text-muted-foreground">
              Check back soon for new articles and insights.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                author={post.author}
                excerpt={post.excerpt}
                category={post.category}
                featuredImage={post.featuredImage}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
