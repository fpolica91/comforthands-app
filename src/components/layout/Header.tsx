import Link from "next/link";
import Image from "next/image";
import { Mail, Search, Linkedin, Instagram } from "lucide-react";
import { getSiteConfig, getNavigation } from "@/lib/data";
import { Navigation, MobileMenuTrigger } from "./Navigation";

export default function Header() {
  const config = getSiteConfig();
  const nav = getNavigation();

  return (
    <header className="w-full bg-white border-b border-border">
      {/* Top Info Bar - hidden on mobile */}
      <div className="hidden sm:block bg-white border-b border-border">
        <div className="w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-10">
            {/* Email */}
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-secondary transition-colors"
            >
              <Mail className="size-3.5" />
              {config.email}
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
              {config.social.instagram && (
                <a
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[70px] sm:h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={config.logo}
              alt={config.companyName}
              width={180}
              height={60}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop: Search icon placeholder */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>
          </div>

          {/* Mobile: hamburger menu */}
          <MobileMenuTrigger
            items={nav.primary}
            buyNow={nav.buyNow}
            logo={config.logo}
            companyName={config.companyName}
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <Navigation
        items={nav.primary}
        buyNow={nav.buyNow}
        logo={config.logo}
        companyName={config.companyName}
      />
    </header>
  );
}
