import Link from "next/link";

export default function PepsiCoCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* Back */}
      <Link href="/case-studies" className="text-[#ff6b00] hover:underline mb-12 inline-block">
        ← Back to all stories
      </Link>

      {/* The Hook */}
      <section className="mb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
          PepsiCo
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          What if your supply chain could change the world?
        </h1>
      </section>

      {/* The Story */}
      <section className="mb-16 space-y-6">
        <p className="text-lg text-[#666666]">
          PepsiCo had a supplier diversity program. A checkbox. A report filed once a year.
        </p>
        <p className="text-lg text-[#666666]">
          But $250 million in spending power isn&apos;t a checkbox.
        </p>
        <p className="text-lg font-bold">
          It&apos;s a lever.
        </p>
      </section>

      {/* The Question */}
      <section className="mb-16 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-lg text-[#666666] mb-4">
          The question wasn&apos;t &ldquo;how do we track diverse suppliers?&rdquo;
        </p>
        <p className="text-xl font-bold">
          It was &ldquo;how do we build an engine that creates opportunity at scale?&rdquo;
        </p>
      </section>

      {/* The Insight */}
      <section className="mb-16 bg-[#1a1a1a] text-white p-8 md:p-12">
        <p className="text-lg mb-6">
          We stopped thinking about supplier diversity as compliance.
        </p>
        <p className="text-xl font-bold text-[#ff6b00]">
          We started treating it like what it actually is: a competitive advantage hiding in plain sight.
        </p>
      </section>

      {/* The Result */}
      <section className="mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          The result
        </h2>
        <div className="bg-[#1a1a1a] text-white p-8 mb-6">
          <p className="text-5xl md:text-6xl font-bold text-[#ff6b00] mb-2">$800M</p>
          <p className="text-white/70">in forecasted diverse supplier spend</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[#ff6b00]">335</p>
            <p className="text-sm text-[#666666]">suppliers activated</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff6b00]">23</p>
            <p className="text-sm text-[#666666]">categories transformed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ff6b00]">35+</p>
            <p className="text-sm text-[#666666]">years of relationships</p>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          What changed
        </h2>
        <div className="space-y-6">
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Highly valued pipeline</p>
            <p className="text-[#666666]">
              A steady flow of qualified diverse suppliers ready to meet PepsiCo&apos;s needs.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Disruptive innovation</p>
            <p className="text-[#666666]">
              Fresh perspectives from diverse suppliers driving new ideas.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Supply chain efficiency</p>
            <p className="text-[#666666]">
              Streamlined processes that benefit the entire ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* The Point */}
      <section className="mb-16 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-xl font-bold">
          Impact beyond the supply chain. That&apos;s the part that matters.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to find your lever?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Let&apos;s talk about what&apos;s hiding in plain sight in your business.
        </p>
        <Link
          href="/work-with-us"
          className="inline-block bg-[#ff6b00] text-white px-8 py-4 font-bold hover:bg-[#1a1a1a]"
        >
          Work with us
        </Link>
      </section>
    </div>
  );
}
