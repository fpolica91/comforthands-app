"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import type { NavItem } from "@/types";

interface NavigationProps {
  items: NavItem[];
  buyNow: { label: string; href: string };
  logo: string;
  companyName: string;
}

export function Navigation({ items, buyNow, logo, companyName }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-primary">
        <div className="w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[55px]">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-[13px] font-medium uppercase tracking-wider text-white transition-colors relative",
                        "hover:after:absolute hover:after:bottom-0 hover:after:left-4 hover:after:right-4 hover:after:h-[2px] hover:after:bg-white",
                        isActive &&
                          "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={buyNow.href}
              className="bg-secondary text-white rounded-[31px] h-[40px] px-7 text-[13px] font-medium uppercase tracking-wider inline-flex items-center justify-center hover:bg-secondary/90 transition-colors"
            >
              {buyNow.label}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile: hamburger trigger is inside the Header via MobileMenuTrigger */}
    </>
  );
}

/** Standalone mobile menu trigger + sheet, placed in Header for mobile */
export function MobileMenuTrigger({
  items,
  buyNow,
  logo,
  companyName,
}: NavigationProps) {
  return (
    <div className="lg:hidden">
      <MobileMenu
        items={items}
        buyNow={buyNow}
        logo={logo}
        companyName={companyName}
      />
    </div>
  );
}
