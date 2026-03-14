import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  featuredImage: string;
}

export default function BlogCard({
  slug,
  title,
  date,
  author,
  excerpt,
  category,
  featuredImage,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {/* Featured image */}
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-[220px] w-full overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:grayscale"
          />
        </div>
      </Link>

      {/* Content */}
      <CardContent className="flex flex-col gap-3 pt-2">
        <Badge variant="secondary" className="w-fit">
          {category}
        </Badge>

        <h2 className="text-xl font-semibold leading-tight text-heading">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h2>

        <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="text-xs text-muted-foreground">
        <span>{author}</span>
        <span className="mx-2">|</span>
        <time dateTime={date}>{formattedDate}</time>
      </CardFooter>
    </Card>
  );
}
