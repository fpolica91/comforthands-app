import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { getSiteConfig } from "@/lib/data";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  const config = getSiteConfig();

  return (
    <>
      {/* Page Banner */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="wrapper text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - shows first on mobile */}
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="bg-muted rounded-xl p-6 sm:p-8 h-fit sticky top-8">
                <h2 className="text-2xl font-semibold text-secondary mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our therapeutic gloves or comfort
                  solutions? We&apos;d love to hear from you. Reach out using
                  any of the methods below.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary text-sm mb-0.5">
                        Email
                      </h3>
                      <a
                        href={`mailto:${config.email}`}
                        className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                      >
                        {config.email || "gioceci18@gmail.com"}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary text-sm mb-0.5">
                        Phone
                      </h3>
                      {config.phone ? (
                        <a
                          href={`tel:${config.phone}`}
                          className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                        >
                          {config.phone}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          Contact us via email
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary text-sm mb-0.5">
                        Address
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {config.address || "United States"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-last lg:order-first">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
