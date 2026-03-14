import { CircleCheckBig } from "lucide-react";
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
            Why <span className="text-primary">Blueberry Solutions</span> ?
          </h2>
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
                  <CircleCheckBig className="size-16 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
