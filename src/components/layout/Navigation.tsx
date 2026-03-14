"use client";

import Link from "next/link";
import Image from "next/image";
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

export function Navigation({ items, buyNow }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation — inside the olive green header */}
      <nav className="hidden lg:block" aria-label="Main navigation">
        <div className="w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[60px]">
            {/* Nav links */}
            <ul className="flex items-center">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-5 py-4 text-[18px] font-normal uppercase text-white transition-all",
                        "hover:underline underline-offset-4",
                        isActive && "underline underline-offset-4"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Buy Now button */}
            <Link
              href={buyNow.href}
              className="relative bg-secondary text-white rounded-[28px] h-[55px] w-[165px] text-base font-normal uppercase inline-flex items-center pl-7 hover:opacity-60 transition-opacity"
            >
              {buyNow.label}
              <Image
                src="/images/icons/arrow.png"
                alt=""
                width={20}
                height={20}
                className="absolute right-8 top-1/2 -translate-y-1/2"
              />
            </Link>
          </div>
        </div>
      </nav>
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
