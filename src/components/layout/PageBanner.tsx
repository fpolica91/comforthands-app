import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string;
  videoSrc?: string;
  imageSrc?: string;
}

export default function PageBanner({ title, videoSrc, imageSrc }: PageBannerProps) {
  return (
    <section className="relative flex h-[200px] items-center justify-center overflow-hidden bg-secondary">
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {!videoSrc && imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Semi-transparent overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-secondary/70",
          !videoSrc && !imageSrc && "bg-secondary"
        )}
      />

      {/* Title */}
      <h1 className="relative z-10 text-center text-4xl font-bold text-white md:text-5xl">
        {title}
      </h1>
    </section>
  );
}
