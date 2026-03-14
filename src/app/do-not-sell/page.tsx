import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do Not Sell My Personal Information",
};

export default function DoNotSellPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="wrapper text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Do Not Sell My Personal Information
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="wrapper max-w-3xl mx-auto">
          {/* Your Rights Under CCPA */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4">
            Your Rights Under the California Consumer Privacy Act (CCPA)
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Under the California Consumer Privacy Act (CCPA), California
            residents have the right to opt out of the &quot;sale&quot; of their
            personal information. At ComfortHands, we respect your privacy and
            want to be transparent about how we handle your data. We do not sell
            personal information in the traditional sense. However, certain
            activities such as sharing data with advertising partners may be
            considered a &quot;sale&quot; under the CCPA&apos;s broad
            definition.
          </p>

          {/* What This Means */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            What This Means for You
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If you are a California resident, you have the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-2">
            <li>
              Know what personal information is being collected about you.
            </li>
            <li>
              Know whether your personal information is sold or disclosed and to
              whom.
            </li>
            <li>Opt out of the sale of your personal information.</li>
            <li>
              Access your personal information and request it be deleted, subject
              to certain exceptions.
            </li>
            <li>
              Not be discriminated against for exercising your CCPA rights.
            </li>
          </ul>

          {/* How to Opt Out */}
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 mt-10">
            How to Submit an Opt-Out Request
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            To exercise your right to opt out, or to submit any other request
            regarding your personal information, please contact us using one of
            the following methods:
          </p>
          <div className="bg-muted rounded-xl p-6 sm:p-8 mb-8">
            <ul className="list-none text-muted-foreground space-y-3">
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
                  Submit a request through our Contact page
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            When submitting your request, please include your full name and
            email address so we can verify your identity and process your
            request. We will respond to verifiable consumer requests within 45
            days of receipt.
          </p>

          <p className="text-sm text-muted-foreground/70 mt-12 pt-6 border-t border-border">
            For more information about how we collect and use your data, please
            review our{" "}
            <Link
              href="/privacy-notice"
              className="text-secondary underline underline-offset-2 hover:text-secondary/80"
            >
              Privacy Notice
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
