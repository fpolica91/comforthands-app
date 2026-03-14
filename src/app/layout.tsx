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
    default: "ComfortHands | Therapeutic Gloves & Comfort Solutions",
    template: "%s | ComfortHands",
  },
  description:
    "ComfortHands provides therapeutic gloves and comfort solutions for stress relief, hand comfort, and overall well-being.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://comforthands.care"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ComfortHands",
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
