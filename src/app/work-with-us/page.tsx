import Link from "next/link";

export default function WorkWithUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* The Hook */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          You know you&apos;re good.
        </h1>
        <p className="text-2xl md:text-3xl text-[#666666] leading-relaxed">
          But your market doesn&apos;t.
        </p>
      </section>

      {/* Sound Familiar */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          Sound familiar?
        </h2>
        <div className="space-y-8">
          <p className="text-lg border-l-4 border-[#1a1a1a]/10 pl-6">
            You blend in when you should stand out. You compete on price because you haven&apos;t given them a reason to pay more.
          </p>
          <p className="text-lg border-l-4 border-[#1a1a1a]/10 pl-6">
            Growth stalled and you&apos;re not sure why. What got you here won&apos;t get you there.
          </p>
          <p className="text-lg border-l-4 border-[#1a1a1a]/10 pl-6">
            Your team is rowing in six different directions. Everyone has a different answer to &ldquo;what do we stand for?&rdquo;
          </p>
          <p className="text-lg border-l-4 border-[#1a1a1a]/10 pl-6">
            You&apos;re ready for bold moves but stuck in place. Big swings feel risky when you don&apos;t know what you&apos;re swinging at.
          </p>
        </div>
      </section>

      {/* The Shift */}
      <section className="mb-24 bg-[#1a1a1a] text-white p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What changes
        </h2>
        <div className="space-y-6">
          <div>
            <p className="text-xl font-bold text-[#ff6b00]">Clarity.</p>
            <p className="text-lg text-white/70">
              You know exactly who you are, what you stand for, and why it matters.
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#ff6b00]">Alignment.</p>
            <p className="text-lg text-white/70">
              Everyone&apos;s rowing in the same direction. One story. One strategy.
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#ff6b00]">Momentum.</p>
            <p className="text-lg text-white/70">
              The kind that compounds because it&apos;s built on a foundation that works.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How we work
        </h2>
        <div className="space-y-12">
          <div className="border-b border-[#1a1a1a]/10 pb-8">
            <h3 className="text-xl font-bold mb-2">Strategy Partnership</h3>
            <p className="text-sm text-[#ff6b00] mb-4">For enterprises</p>
            <p className="text-[#666666]">
              Deep partnership over months. We become part of your team.
              We work until the job is done, not until the hours run out.
              Guaranteed outcomes because we don&apos;t leave until you have them.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-8">
            <h3 className="text-xl font-bold mb-2">Strategy Sprint</h3>
            <p className="text-sm text-[#ff6b00] mb-4">For companies $1M-$20M</p>
            <p className="text-[#666666]">
              Focused. Fast. Designed to solve your most critical challenge.
              We cut through the noise and give you a clear path forward.
              No bloat. No padding. Just the work that matters.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-8">
            <h3 className="text-xl font-bold mb-2">Clarity University</h3>
            <p className="text-sm text-[#ff6b00] mb-4">For founders building it themselves</p>
            <p className="text-[#666666]">
              Everything we know, taught step by step.
              Our full methodology, available when you are.
              Learn to do it yourself, at your pace, on your budget.
            </p>
            <a href="https://clarityuniversity.com" className="inline-block mt-4 text-[#ff6b00] hover:underline">
              Visit Clarity University →
            </a>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="mb-24 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-xl md:text-2xl leading-relaxed">
          No fluff. No generic frameworks.
          <br />
          <span className="font-bold">Just strategy that fits your reality.</span>
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Not sure which path fits?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Let&apos;s figure it out together.
        </p>
        <a
          href="mailto:hello@jayneagency.com"
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 font-bold hover:bg-[#1a1a1a]"
        >
          Start a conversation
        </a>
      </section>
    </div>
  );
}
