import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSiteConfig, getNavigation } from "@/lib/data";

export default function Footer() {
  const siteConfig = getSiteConfig();
  const navigation = getNavigation();
  const footerLinks = navigation.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary w-full">
      <div className="mx-auto max-w-[1375px] px-6 py-12 lg:py-16">
        {/* Footer Logo */}
        <div className="mb-10 flex justify-center lg:justify-start">
          <Link href="/">
            <Image
              src={siteConfig.footerLogo}
              alt={`${siteConfig.companyName} Logo`}
              width={220}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* 3-Column Layout */}
        <div
          className={cn(
            "flex flex-col items-center gap-10 text-center",
            "lg:flex-row lg:items-start lg:justify-between lg:text-left"
          )}
        >
          {/* Column 1: About */}
          <div className="max-w-sm space-y-4">
            <p className="text-sm leading-relaxed text-white/90">
              ComfortHands is dedicated to providing high-quality therapeutic
              gloves and comfort solutions designed to relieve stress, improve
              hand comfort, and promote overall well-being.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-white/90">
              {siteConfig.email && (
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Mail className="h-4 w-4 shrink-0 text-white" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
              {siteConfig.address && (
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 text-white" />
                  <span>{siteConfig.address}</span>
                </li>
              )}
              {siteConfig.phone && (
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Phone className="h-4 w-4 shrink-0 text-white" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>

            {/* Do Not Sell Link */}
            <div className="pt-2">
              <Link
                href="/privacy-notice"
                className="text-xs text-white/80 hover:underline"
              >
                Do Not Sell/Share My Personal Information
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-4 pt-2 lg:justify-start">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm uppercase text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-8 border-white/20" />
        <div
          className={cn(
            "flex flex-col items-center gap-2 text-center text-xs text-white/80",
            "lg:flex-row lg:justify-between"
          )}
        >
          <p>
            &copy; Copyright {currentYear} {siteConfig.copyright}.{" "}
            <Link href="/privacy-notice" className="underline hover:opacity-80">
              Privacy Notice
            </Link>
          </p>
          <p>
            Designed by{" "}
            <span className="font-medium">{siteConfig.designedBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
