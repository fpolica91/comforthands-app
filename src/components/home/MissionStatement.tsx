import Image from "next/image";
import Link from "next/link";

export default function MissionStatement() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Mission Statement
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At <span className="text-primary font-medium">Blueberry Solutions</span>, our mission is to bring relief and ease to those experiencing hand discomfort through thoughtfully designed, therapeutic gloves. Inspired by personal experience and built on years of expertise in psychology and elderly care, we create products that combine comfort, functionality, and compassionate design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Partnering with skilled artisans, we are committed to delivering quality gloves that improve daily life while honoring the care and craftsmanship behind each pair.
            </p>
            <div>
              <Link
                href="/about"
                className="btn-pill inline-flex items-center justify-center bg-secondary text-white hover:bg-secondary/90 transition-colors font-medium text-sm"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right: Product Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            <div className="w-1/2">
              <Image
                src="/images/btm2_img1.png"
                alt="A glove with color gray"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/btm2_img2.png"
                alt="A glove color gray"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
