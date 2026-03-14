import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import BackToTop from "@/components/shared/BackToTop";
import { getOrganizationJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Blueberry Solutions | Comfort Hands Gloves",
    template: "%s | Blueberry Solutions",
  },
  description:
    "Blueberry Solutions provides Comfort Hands Gloves designed to relax your hands and relieve your stress. Therapeutic gloves for comfort and well-being.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://comforthands.care"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Blueberry Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
