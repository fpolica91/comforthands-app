"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so the slide-up animation is visible
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 bg-secondary text-white shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="banner"
      aria-label="Cookie consent"
    >
      <div className="max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-center sm:text-left">
          We use cookies to improve your experience. By continuing, you agree to
          our{" "}
          <Link
            href="/privacy-notice"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-full border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-primary text-secondary px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
