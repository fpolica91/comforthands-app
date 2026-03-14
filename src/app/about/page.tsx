import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Shield, Users, Award } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Who We Are",
};

const values = [
  {
    icon: Heart,
    title: "Quality",
    description:
      "Every product is crafted with the highest standards of quality, using premium materials that ensure lasting comfort and therapeutic benefit.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Built on years of research and customer feedback, our products are trusted by healthcare professionals and individuals worldwide.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are dedicated to supporting a community of individuals seeking comfort and relief, connecting people through shared well-being goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our commitment to excellence drives us to continually innovate and improve, setting the standard in therapeutic comfort solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Who We Are"
        videoSrc="/videos/who_we_are-bnr-vid.mp4"
      />

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="wrapper">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/about/about_img.jpg"
                alt="About ComfortHands"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                About ComfortHands
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                ComfortHands was founded with a simple yet powerful mission: to
                bring relief and comfort to those who need it most. Our
                therapeutic gloves are the result of years of research and
                development, combining advanced materials with ergonomic design
                to deliver products that truly make a difference in people&apos;s
                daily lives.
              </p>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                We understand that hand fatigue, stress, and tension can affect
                every aspect of your well-being. Whether you spend long hours at
                a desk, work with your hands, or simply seek comfort during
                stressful moments, our products are designed to provide the
                soothing relief your hands deserve.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                From our state-of-the-art manufacturing process to our
                dedicated customer support team, every aspect of ComfortHands is
                built around your comfort. We take pride in creating products
                that our customers rely on day after day, and we are committed
                to continuous innovation in the therapeutic comfort space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="wrapper text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            At ComfortHands, our mission is to improve quality of life through
            innovative comfort solutions. We believe that everyone deserves
            relief from the daily stresses that affect their hands and overall
            well-being. Through continuous research, thoughtful design, and
            unwavering commitment to quality, we strive to set the standard in
            therapeutic comfort — empowering people to live, work, and thrive
            without discomfort holding them back.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-4 pt-8 pb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
