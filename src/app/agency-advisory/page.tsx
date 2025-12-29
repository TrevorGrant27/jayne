import Link from "next/link";

export default function AgencyAdvisory() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* The Rule */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Strategy first.
        </h1>
        <p className="text-2xl md:text-3xl text-[#666666] leading-relaxed">
          Always.
        </p>
      </section>

      {/* The Why */}
      <section className="mb-24">
        <p className="text-lg text-[#666666] mb-6">
          Most agencies will take your money and start making things.
          Websites. Logos. Campaigns. Without asking the hard questions first.
        </p>
        <p className="text-lg text-[#666666] mb-6">
          We won&apos;t.
        </p>
        <p className="text-lg font-bold">
          Because execution without strategy is expensive noise.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-24 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-xl md:text-2xl leading-relaxed">
          Agency and advisory services are available after you&apos;ve done strategy work with us.
          <br /><br />
          This isn&apos;t gatekeeping. It&apos;s how we make sure everything we build actually works.
        </p>
      </section>

      {/* Agency Services */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          Agency Services
        </h2>
        <div className="space-y-4">
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Design</p>
            <p className="text-sm text-[#666666]">Visual identity. Brand systems. Creative direction.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Copywriting</p>
            <p className="text-sm text-[#666666]">Brand voice. Messaging. Content that connects.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Websites</p>
            <p className="text-sm text-[#666666]">Digital experiences that convert.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Campaigns</p>
            <p className="text-sm text-[#666666]">Integrated marketing that drives results.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Brand Assets</p>
            <p className="text-sm text-[#666666]">Everything you need to scale.</p>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          Advisory Services
        </h2>
        <div className="space-y-4">
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Fractional CMO</p>
            <p className="text-sm text-[#666666]">Senior marketing leadership. No full-time commitment.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Board Prep</p>
            <p className="text-sm text-[#666666]">Present your strategy with confidence.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">On-Demand Advisory</p>
            <p className="text-sm text-[#666666]">Access for high-stakes decisions.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Monthly Retainer</p>
            <p className="text-sm text-[#666666]">Continuous strategic counsel.</p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <p className="font-bold">Executive Coaching</p>
            <p className="text-sm text-[#666666]">One-on-one guidance for leaders.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          The door opens with strategy.
        </p>
        <Link
          href="/work-with-us"
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 font-bold hover:bg-[#1a1a1a]"
        >
          Start with strategy
        </Link>
      </section>
    </div>
  );
}
