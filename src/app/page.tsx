import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* The Big Idea */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Most brands don&apos;t have a marketing problem.
        </h1>
        <p className="text-2xl md:text-3xl text-[#666666] leading-relaxed mb-8">
          They have a clarity problem.
        </p>
        <p className="text-lg text-[#666666] leading-relaxed max-w-2xl">
          You know what you do. But can you explain why it matters? Can your team?
          Can everyone who touches your brand say it the same way?
        </p>
      </section>

      {/* The Promise */}
      <section className="mb-24 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-xl md:text-2xl leading-relaxed">
          We help you figure out what you stand for.
          <br />
          <span className="font-bold">Then we help you stand for it.</span>
        </p>
      </section>

      {/* The Proof */}
      <section className="mb-24">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          This works
        </h2>
        <div className="space-y-6">
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold mb-1">PepsiCo</p>
            <p className="text-[#666666]">
              Turned supplier diversity from a compliance checkbox into an $800M competitive advantage.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="text-lg font-bold mb-1">Hornitos</p>
            <p className="text-[#666666]">
              83% open rate on a campaign that made bartenders fall in love with the brand.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-block text-[#ff6b00] hover:underline"
          >
            Read the stories →
          </Link>
        </div>
      </section>

      {/* The Choice */}
      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Three ways forward
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Strategy Partnership</h3>
            <p className="text-[#666666] mb-2">
              For enterprises. Deep work. Guaranteed outcomes.
            </p>
            <Link href="/work-with-us" className="text-[#ff6b00] hover:underline">
              Learn more →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Strategy Sprint</h3>
            <p className="text-[#666666] mb-2">
              For growing companies ($1M-$20M). Focused. Fast.
            </p>
            <Link href="/work-with-us" className="text-[#ff6b00] hover:underline">
              Learn more →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Clarity University</h3>
            <p className="text-[#666666] mb-2">
              For founders who want to learn. Our methodology. Your pace.
            </p>
            <a href="https://clarityuniversity.com" className="text-[#ff6b00] hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* The CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stuck?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Clarity is one conversation away.
        </p>
        <Link
          href="/work-with-us"
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 font-bold hover:bg-[#1a1a1a]"
        >
          Let&apos;s talk
        </Link>
      </section>
    </div>
  );
}
