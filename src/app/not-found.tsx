import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/404-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/main-logo.png"
            alt="ComfortHands"
            width={200}
            height={60}
            className="brightness-0 invert"
          />
        </div>

        <p className="text-[8rem] sm:text-[10rem] font-bold leading-none text-white/90 mb-2">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-white/70 text-base sm:text-lg mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center btn-pill bg-primary text-secondary-foreground hover:bg-primary/90 font-semibold transition-all"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
