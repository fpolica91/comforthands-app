import Image from "next/image";

export default function BottomCTA() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/uploads/about_thumb.jpg"
              alt="Blueberry Solutions product"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Blueberry Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At <span className="text-primary font-medium">Blueberry Solutions</span>, we believe that peace of mind starts with comfort you can feel. Our therapeutic gloves are designed to provide gentle compression, soothing warmth, and breathable relaxation — helping to ease stress, anxiety, and restlessness.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you&apos;re winding down after a long day or looking for natural ways to support calm and better sleep, <span className="text-primary font-medium">Blueberry Solutions</span> brings you relief through thoughtful design and science-backed comfort.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Experience the soft touch that makes all the difference — because your hands deserve to feel as calm as your mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
