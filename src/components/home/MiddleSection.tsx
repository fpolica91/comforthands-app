import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function MiddleSection() {
  const services = getServices();

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="wrapper">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-3">
            Our Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Comfort Solutions for Every Need
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-card border border-border/50 transition-shadow duration-300 hover:shadow-lg flex flex-col items-center text-center"
            >
              <CardHeader className="items-center pt-8">
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link
                  href="/services"
                  className="btn-pill inline-flex items-center justify-center bg-secondary text-white hover:bg-secondary/90 transition-colors mt-auto font-medium text-sm"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
