import Link from "next/link";
import Image from "next/image";
import { getSiteConfig, getNavigation } from "@/lib/data";
import { Navigation, MobileMenuTrigger } from "./Navigation";
import SearchBar from "./SearchBar";

export default function Header() {
  const config = getSiteConfig();
  const nav = getNavigation();

  return (
    <header className="w-full bg-primary">
      {/* Main Header Area */}
      <div className="w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between min-h-[100px] lg:min-h-[117px] py-4">
          {/* Logo — larger, prominent */}
          <Link href="/" className="flex-shrink-0 relative z-50">
            <Image
              src={config.logo}
              alt={config.companyName}
              width={350}
              height={120}
              className="h-16 sm:h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          {/* Right side — Info + Social + Search (desktop) */}
          <div className="hidden lg:flex flex-col items-end gap-3 ml-auto">
            {/* Top row: header info items + social */}
            <div className="flex items-center gap-6">
              {/* Email */}
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2 text-[17px] text-white hover:underline transition-colors font-light"
              >
                Email Us Today! {config.email}
              </a>

              {/* Divider */}
              <span className="w-px h-5 bg-white/30" />

              {/* Social Icons */}
              <div className="flex items-center gap-1.5">
                {config.social.linkedin && (
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:opacity-50 transition-opacity"
                  >
                    <Image
                      src="/images/icons/linkend-icon.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </a>
                )}
                {config.social.instagram && (
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:opacity-50 transition-opacity"
                  >
                    <Image
                      src="/images/icons/insta-icon.png"
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Separator line */}
            <div className="w-full h-px bg-white/30" />

            {/* Bottom row: Search bar */}
            <div className="flex items-center gap-4">
              <SearchBar />
            </div>
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

      {/* Desktop Navigation — sits within the olive green header */}
      <Navigation
        items={nav.primary}
        buyNow={nav.buyNow}
        logo={config.logo}
        companyName={config.companyName}
      />
    </header>
  );
}
