import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* The Point */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Proof.
        </h1>
        <p className="text-2xl md:text-3xl text-[#666666] leading-relaxed">
          Not promises. Results.
        </p>
      </section>

      {/* Case Study: PepsiCo */}
      <section className="mb-16 border-b border-[#1a1a1a]/10 pb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
          PepsiCo
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What if your supply chain could change the world?
        </h2>
        <p className="text-lg text-[#666666] mb-6">
          Everyone treated supplier diversity as a compliance checkbox.
          A cost center. A thing you do because you have to.
        </p>
        <p className="text-lg text-[#666666] mb-6">
          We asked a different question: What if this is actually your biggest untapped competitive advantage?
        </p>
        <div className="bg-[#1a1a1a] text-white p-8 mb-6">
          <p className="text-4xl md:text-5xl font-bold text-[#ff6b00] mb-2">$800M</p>
          <p className="text-white/70">in diverse supplier spend activated</p>
        </div>
        <p className="text-lg text-[#666666] mb-6">
          335 diverse suppliers activated. 23 categories transformed.
          35+ years of relationships deepened.
        </p>
        <Link href="/case-studies/pepsico" className="text-[#ff6b00] hover:underline">
          Read the full story →
        </Link>
      </section>

      {/* Case Study: Hornitos */}
      <section className="mb-24 border-b border-[#1a1a1a]/10 pb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
          Hornitos
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          How do you make bartenders fall in love?
        </h2>
        <p className="text-lg text-[#666666] mb-6">
          Hornitos was a world-class tequila that bartenders kept forgetting.
          More advertising wasn&apos;t the answer.
        </p>
        <p className="text-lg text-[#666666] mb-6">
          We created an experience they couldn&apos;t ignore.
        </p>
        <div className="bg-[#1a1a1a] text-white p-8 mb-6">
          <p className="text-4xl md:text-5xl font-bold text-[#ff6b00] mb-2">83%</p>
          <p className="text-white/70">open rate</p>
        </div>
        <p className="text-lg text-[#666666] mb-6">
          79% attendance. Bartender advocacy that lasted.
          Because experience beats advertising. Every time.
        </p>
        <Link href="/case-studies/hornitos" className="text-[#ff6b00] hover:underline">
          Read the full story →
        </Link>
      </section>

      {/* More Coming */}
      <section className="mb-24 text-center">
        <p className="text-[#666666]">
          More stories from healthcare, technology, retail, and non-profit coming soon.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Your story next?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Let&apos;s talk about what&apos;s possible.
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
