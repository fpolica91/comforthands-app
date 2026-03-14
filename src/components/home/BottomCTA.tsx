import Image from "next/image";
import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Product Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            <div className="w-1/2">
              <Image
                src="/images/btm2_img1.png"
                alt="ComfortHands product"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/btm2_img2.png"
                alt="ComfortHands product"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Experience the Comfort Difference
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our therapeutic gloves are crafted with premium materials to
              deliver unmatched comfort and support. Whether you need relief
              from daily stress or enhanced hand comfort during work, our
              products are designed with your well-being in mind.
            </p>
            <div>
              <Link
                href="/contact"
                className="btn-pill inline-flex items-center justify-center bg-secondary text-white hover:bg-secondary/90 transition-colors font-medium text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
