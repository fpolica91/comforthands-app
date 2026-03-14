export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavigationData {
  primary: NavItem[];
  footer: NavItem[];
  buyNow: { label: string; href: string };
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  social: {
    linkedin: string;
    instagram: string;
    [key: string]: string;
  };
  logo: string;
  footerLogo: string;
  copyright: string;
  designedBy: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number | null;
  rating: number;
  quote: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  content: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
  recaptchaToken: string;
}
