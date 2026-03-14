"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="w-full bg-primary">
      <div className="wrapper">
        {/* Mobile: image on top, text below */}
        <div className="flex flex-col lg:flex-row items-center gap-8 py-10 lg:py-16">
          {/* Image - shows first on mobile, second on desktop */}
          <div className="w-full lg:hidden">
            <Image
              src="/images/products/IMG-20251006-WA0027.jpg"
              alt="Comfort Hands Gloves"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* Text Content - Left side on desktop (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <h1 className="text-4xl lg:text-6xl font-bold !text-white leading-tight">
              Embrace Comfort, Release Tension
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Our innovative gloves provide gentle support for those
              experiencing hand tension or stress-related fist clenching.
              Discover the power of comfort in every moment.
            </p>
            <div>
              <a
                href="https://www.amazon.com/dp/B0G7699CR7"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "btn-pill bg-secondary text-white hover:bg-secondary/90 gap-2"
                )}
              >
                Experience Relief
                <ArrowRight className="size-5" />
              </a>
            </div>
          </div>

          {/* Image - Right side on desktop (40%) */}
          <div className="hidden lg:block lg:w-[40%]">
            <Image
              src="/images/products/IMG-20251006-WA0027.jpg"
              alt="Comfort Hands Gloves"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
