export default function CTABanner() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="wrapper">
        <div className="bg-card rounded-2xl border border-border/50 px-8 py-12 lg:px-16 lg:py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            Ready to Transform Your Comfort?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Join thousands who have discovered the soothing benefits of{" "}
            <span className="text-primary font-medium">Blueberry Solutions</span>{" "}
            gloves. Your journey to hand comfort and stress relief starts here.
          </p>
          <a
            href="https://www.amazon.com/dp/B0G7699CR7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex items-center justify-center bg-secondary text-white hover:bg-secondary/90 transition-colors font-medium text-sm"
          >
            Get Your Comfort Gloves
          </a>
        </div>
      </div>
    </section>
  );
}
