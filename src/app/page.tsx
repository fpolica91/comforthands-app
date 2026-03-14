import HeroBanner from "@/components/home/HeroBanner";
import MiddleSection from "@/components/home/MiddleSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import BottomCTA from "@/components/home/BottomCTA";
import { getTestimonials } from "@/lib/data";

export default function Home() {
  const testimonials = getTestimonials();

  return (
    <>
      <HeroBanner />
      <MiddleSection />
      <TestimonialsCarousel testimonials={testimonials} />
      <BottomCTA />
    </>
  );
}
