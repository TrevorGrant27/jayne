export default function Speaking() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* The Hook */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Ideas that change rooms.
        </h1>
        <p className="text-2xl md:text-3xl text-[#666666] leading-relaxed">
          Not motivation. Transformation.
        </p>
      </section>

      {/* Topics */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          Topics
        </h2>
        <div className="space-y-6">
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold">The 10 assets every brand needs</p>
            <p className="text-[#666666]">Most brands are missing half of them.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold">Clarity as competitive advantage</p>
            <p className="text-[#666666]">Why the clearest brand wins.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold">Supply chain as strategy</p>
            <p className="text-[#666666]">Turning supplier diversity into a growth engine.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold">Women and authentic leadership</p>
            <p className="text-[#666666]">What changes when you stop pretending.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold">Custom topics available</p>
            <p className="text-[#666666]">Built around your audience&apos;s needs.</p>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          Formats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <p className="font-bold">Keynotes</p>
          </div>
          <div>
            <p className="font-bold">Panels</p>
          </div>
          <div>
            <p className="font-bold">Workshops</p>
          </div>
          <div>
            <p className="font-bold">Podcasts</p>
          </div>
          <div>
            <p className="font-bold">Universities</p>
          </div>
          <div>
            <p className="font-bold">Judging</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-24 bg-[#1a1a1a] text-white p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Brooke Foley
        </h2>
        <div className="space-y-4 text-white/70">
          <p>
            CEO of Jayne Agency. Previously Chief Creative Officer at Razorfish.
            Executive Creative Director at DDB and Ogilvy.
          </p>
          <p>
            30+ years turning confusion into clarity for Kraft, Microsoft,
            TD Ameritrade, PepsiCo, Abbott, and dozens more.
          </p>
          <p className="text-white font-bold">
            She doesn&apos;t do motivation. She does transformation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Book Brooke
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Let&apos;s discuss your event.
        </p>
        <a
          href="mailto:hello@jayneagency.com"
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 font-bold hover:bg-[#1a1a1a]"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
