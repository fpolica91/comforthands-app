"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="w-full bg-primary">
      <div className="wrapper">
        {/* Mobile: video on top, text below */}
        <div className="flex flex-col lg:flex-row items-center gap-8 py-10 lg:py-16">
          {/* Video - shows first on mobile, second on desktop */}
          <div className="w-full lg:hidden">
            <video
              className="w-full rounded-2xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/VideoBanner.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text Content - Left side on desktop (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <h1 className="text-4xl lg:text-6xl font-bold !text-white leading-tight">
              Comfort In Every Touch
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Discover our premium therapeutic gloves designed to provide
              lasting comfort and relief. Engineered with care, our gloves
              help ease daily stress, reduce hand fatigue, and promote
              overall well-being.
            </p>
            <div>
              <Link
                href="/services"
                className={cn(
                  buttonVariants(),
                  "btn-pill bg-secondary text-white hover:bg-secondary/90 gap-2"
                )}
              >
                Shop Now
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>

          {/* Video - Right side on desktop (40%) */}
          <div className="hidden lg:block lg:w-[40%]">
            <video
              className="w-full rounded-2xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/VideoBanner.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
