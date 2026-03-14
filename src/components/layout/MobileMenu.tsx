"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  items: NavItem[];
  buyNow: { label: string; href: string };
  logo: string;
  companyName: string;
}

export function MobileMenu({ items, buyNow, logo, companyName }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden flex items-center justify-center p-2">
        <Menu className="size-6 text-secondary" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[280px] max-w-[280px] p-0 bg-primary border-l-0"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Link href="/">
            <Image
              src={logo}
              alt={companyName}
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <SheetClose className="p-1 text-white hover:text-white/80">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col">
            {items.map((item) => {
              const isActive = pathname === item.href;

              if (item.children && item.children.length > 0) {
                return (
                  <li key={item.href} className="border-b border-white/20">
                    <Accordion>
                      <AccordionItem value={item.href} className="border-b-0">
                        <AccordionTrigger className="px-4 py-3 text-white text-sm font-medium uppercase tracking-wide hover:no-underline hover:bg-white/10 **:data-[slot=accordion-trigger-icon]:text-white">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <ul className="flex flex-col gap-1">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <SheetClose render={<div />}>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded",
                                      pathname === child.href && "text-white bg-white/10"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                );
              }

              return (
                <li key={item.href} className="border-b border-white/20">
                  <SheetClose render={<div />}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-white/10 transition-colors",
                        isActive && "bg-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Buy Now Button */}
        <div className="p-4 mt-auto">
          <SheetClose render={<div />}>
            <Link
              href={buyNow.href}
              className="block w-full text-center bg-secondary text-white rounded-[31px] h-[48px] leading-[48px] text-sm font-medium uppercase tracking-wide hover:bg-secondary/90 transition-colors"
            >
              {buyNow.label}
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
