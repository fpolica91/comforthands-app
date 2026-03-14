import siteConfig from "../../content/data/site.json";
import navigationData from "../../content/data/navigation.json";
import servicesData from "../../content/data/services.json";
import testimonialsData from "../../content/data/testimonials.json";
import type {
  SiteConfig,
  NavigationData,
  Service,
  Testimonial,
} from "@/types";

export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig;
}

export function getNavigation(): NavigationData {
  return navigationData as NavigationData;
}

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}
