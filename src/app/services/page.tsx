import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/data";
import PageBanner from "@/components/layout/PageBanner";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Products",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Our Products"
        videoSrc="/videos/who_we_are-bnr-vid.mp4"
      />

      {/* Services Intro */}
      <section className="py-16 md:py-20">
        <div className="wrapper text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Therapeutic Comfort Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Discover our carefully crafted range of therapeutic products
            designed to bring comfort, relief, and well-being to your
            everyday life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 md:pb-20">
        <div className="wrapper">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden border bg-card transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="flex flex-col gap-4 pt-6 pb-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex h-9 items-center justify-center rounded-lg bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="wrapper text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Experience Comfort?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
            Take the first step toward relief and well-being. Our team is
            here to help you find the perfect comfort solution for your
            needs.
          </p>
          <Link
            href="/contact"
            className="btn-pill inline-flex items-center justify-center bg-secondary text-white transition-colors hover:bg-secondary/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
