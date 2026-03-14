import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
};

export default function PrivacyNoticePage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="wrapper text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Privacy Notice
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="wrapper max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            At ComfortHands, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Notice explains how we collect, use, disclose, and safeguard your
            information when you visit our website, purchase our products, or
            interact with our services. Please read this notice carefully.
          </p>

          {/* Information We Collect */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We may collect the following types of personal information when you
            use our website or services:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-2">
            <li>
              <strong>Personal Identifiers:</strong> Name, email address, phone
              number, mailing address, and billing information.
            </li>
            <li>
              <strong>Order Information:</strong> Products purchased, order
              history, payment details, and shipping information.
            </li>
            <li>
              <strong>Health-Related Information:</strong> Information you
              voluntarily provide regarding your health conditions or therapeutic
              needs to help us recommend suitable products.
            </li>
            <li>
              <strong>Usage Data:</strong> Browser type, IP address, pages
              visited, time spent on pages, and referring URLs.
            </li>
            <li>
              <strong>Communication Data:</strong> Messages submitted through our
              contact forms, customer service inquiries, and feedback.
            </li>
          </ul>

          {/* How We Use Your Information */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-2">
            <li>To process and fulfill your orders, including shipping and payment processing.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To personalize your experience and recommend products suited to your needs.</li>
            <li>To send you updates about your orders, promotional offers, and company news (with your consent).</li>
            <li>To improve our website, products, and services based on usage patterns and feedback.</li>
            <li>To comply with legal obligations and protect against fraud.</li>
          </ul>

          {/* Information Sharing */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            Information Sharing
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We do not sell your personal information to third parties. We may
            share your information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-2">
            <li>
              <strong>Service Providers:</strong> We share information with
              trusted third-party vendors who assist us with order fulfillment,
              payment processing, shipping, and website analytics.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information
              when required by law, regulation, legal process, or governmental
              request.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your personal information may be
              transferred as part of the transaction.
            </li>
          </ul>

          {/* Data Security */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            Data Security
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. These measures include encrypted data
            transmission (SSL/TLS), secure payment processing through PCI-DSS
            compliant providers, and regular security assessments. However, no
            method of transmission over the Internet or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          {/* Your Rights */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            Your Rights
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-2">
            <li>
              <strong>Access:</strong> You have the right to request a copy of
              the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You may request that we correct any
              inaccurate or incomplete personal information.
            </li>
            <li>
              <strong>Deletion:</strong> You may request that we delete your
              personal information, subject to certain legal exceptions.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt out of receiving marketing
              communications at any time by following the unsubscribe
              instructions in our emails or by contacting us directly.
            </li>
            <li>
              <strong>Do Not Sell:</strong> California residents have the right
              to opt out of the sale of their personal information. Visit our{" "}
              <Link
                href="/do-not-sell"
                className="text-secondary underline underline-offset-2 hover:text-secondary/80"
              >
                Do Not Sell My Personal Information
              </Link>{" "}
              page for more details.
            </li>
          </ul>

          {/* Contact Us */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            Contact Us
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If you have any questions or concerns about this Privacy Notice or
            our data practices, please contact us:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 mb-6 ml-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gioceci18@gmail.com"
                className="text-secondary underline underline-offset-2 hover:text-secondary/80"
              >
                gioceci18@gmail.com
              </a>
            </li>
            <li>
              <strong>Contact Form:</strong>{" "}
              <Link
                href="/contact"
                className="text-secondary underline underline-offset-2 hover:text-secondary/80"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <p className="text-sm text-muted-foreground/70 mt-12 pt-6 border-t border-border">
            This Privacy Notice was last updated on January 1, 2026.
            ComfortHands reserves the right to update this notice at any time.
            We encourage you to review this page periodically for changes.
          </p>
        </div>
      </section>
    </>
  );
}
