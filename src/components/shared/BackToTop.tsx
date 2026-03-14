"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center transition-opacity duration-300 cursor-pointer hover:bg-secondary/90 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="size-6" />
    </button>
  );
}
