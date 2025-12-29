import Link from "next/link";

export default function HornitosCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* Back */}
      <Link href="/case-studies" className="text-[#ff6b00] hover:underline mb-12 inline-block">
        ← Back to all stories
      </Link>

      {/* The Hook */}
      <section className="mb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
          Hornitos
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          How do you make bartenders fall in love with a tequila?
        </h1>
      </section>

      {/* The Story */}
      <section className="mb-16 space-y-6">
        <p className="text-lg text-[#666666]">
          Hornitos was a globally renowned mixing tequila. But in the U.S., bartenders overlooked it.
        </p>
        <p className="text-lg text-[#666666]">
          They preferred familiar brands. More advertising wasn&apos;t the answer.
        </p>
        <p className="text-lg font-bold">
          Experience was.
        </p>
      </section>

      {/* The Question */}
      <section className="mb-16 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-lg text-[#666666] mb-4">
          The question wasn&apos;t &ldquo;how do we advertise?&rdquo;
        </p>
        <p className="text-xl font-bold">
          It was &ldquo;how do we create an experience they&apos;ll never forget?&rdquo;
        </p>
      </section>

      {/* The Insight */}
      <section className="mb-16 bg-[#1a1a1a] text-white p-8 md:p-12">
        <p className="text-lg mb-6">
          We stopped trying to tell bartenders about the tequila.
        </p>
        <p className="text-xl font-bold text-[#ff6b00]">
          We let them discover its flexible nature for themselves.
        </p>
      </section>

      {/* The Approach */}
      <section className="mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          The approach
        </h2>
        <div className="space-y-6">
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Live training</p>
            <p className="text-[#666666]">
              NYC bartenders learned mixology with Hornitos firsthand.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Cultural moment</p>
            <p className="text-[#666666]">
              Partnership with Bon Jovi&apos;s 25th anniversary created massive relevance.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Lasting tool</p>
            <p className="text-[#666666]">
              &ldquo;Mischievous Cocktails&rdquo; handbook extended the experience beyond the event.
            </p>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-8">
          The result
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a] text-white p-8">
            <p className="text-4xl md:text-5xl font-bold text-[#ff6b00] mb-2">83%</p>
            <p className="text-white/70">open rate</p>
          </div>
          <div className="bg-[#1a1a1a] text-white p-8">
            <p className="text-4xl md:text-5xl font-bold text-[#ff6b00] mb-2">79%</p>
            <p className="text-white/70">attendance</p>
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
            <p className="font-bold mb-1">Bartender advocacy</p>
            <p className="text-[#666666]">
              NYC&apos;s top bartenders became brand ambassadors.
            </p>
          </div>
          <div className="border-b border-[#1a1a1a]/10 pb-6">
            <p className="font-bold mb-1">Lasting engagement</p>
            <p className="text-[#666666]">
              The handbook kept the conversation going long after the event.
            </p>
          </div>
        </div>
      </section>

      {/* The Point */}
      <section className="mb-16 border-l-4 border-[#ff6b00] pl-8">
        <p className="text-xl font-bold">
          Experience beats advertising. Every time.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a]/10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to create experiences that stick?
        </h2>
        <p className="text-lg text-[#666666] mb-8">
          Let&apos;s talk about turning your audience into advocates.
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
