"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full bg-muted py-16 lg:py-24">
      <div className="wrapper">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading">
            What Our Community Says
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="pt-10">
                  <Card className="bg-white relative overflow-visible border-none shadow-sm">
                    <CardContent className="flex flex-col items-center text-center pt-12 pb-8 px-6">
                      {/* Avatar */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      {/* Name and Age */}
                      <h3 className="text-lg font-semibold text-heading mb-1">
                        {testimonial.name}
                        {testimonial.age !== null && (
                          <span className="text-muted-foreground font-normal">
                            , {testimonial.age}
                          </span>
                        )}
                      </h3>

                      {/* Quote */}
                      <p className="text-muted-foreground italic text-sm leading-relaxed mt-3">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-300",
                  i === current ? "bg-secondary" : "bg-secondary/30"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
