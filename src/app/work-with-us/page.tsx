import Link from "next/link";

export default function WorkWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Work With Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Choose your path<br />to <span className="italic text-[#ff6b00]">clarity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed">
              Whether you&apos;re a Fortune 500 or just getting started, we have a solution designed for where you are right now.
            </p>
          </div>
        </div>
      </section>

      {/* Three Offerings Section - Redesigned */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Strategy Sprint - Full Width Feature */}
          <Link href="/work-with-us/strategy-sprint" className="group block mb-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-12 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff6b00] font-semibold mb-4">For SMEs</p>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-6 group-hover:text-[#ff6b00] transition-colors duration-300">
                    Strategy Sprint
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-8">
                    For businesses between $1M-$20M ready to unlock their next level. Focused, fast, and designed for your most critical challenge.
                  </p>
                  <div className="inline-flex items-center text-white font-semibold group-hover:text-[#ff6b00] transition-colors">
                    Learn more
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Two Column Grid for Partnership and University */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group block">
              <div className="relative h-full overflow-hidden rounded-3xl border-2 border-[#e5e3df] bg-[#fafaf9] p-10 lg:p-12 transition-all duration-500 hover:border-[#ff6b00] hover:shadow-xl hover:shadow-[#ff6b00]/5">
                <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-gradient-to-tl from-[#ff6b00]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff6b00] font-semibold mb-4">For Enterprise</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors duration-300">
                    Strategy Partnership
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-8">
                    Deep, ongoing partnership for established enterprises navigating complex markets. Guaranteed outcomes, built for scale.
                  </p>
                  <div className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-[#ff6b00] transition-colors">
                    Explore Partnership
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group block">
              <div className="relative h-full overflow-hidden rounded-3xl border-2 border-[#e5e3df] bg-[#fafaf9] p-10 lg:p-12 transition-all duration-500 hover:border-[#ff6b00] hover:shadow-xl hover:shadow-[#ff6b00]/5">
                <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-gradient-to-tl from-[#ff6b00]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff6b00] font-semibold mb-4">For Entrepreneurs</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors duration-300">
                    Clarity University
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-8">
                    Learn our proven methodology at your own pace. Enterprise-level strategy education that fits your budget and timeline.
                  </p>
                  <div className="inline-flex items-center text-[#1a1a1a] font-semibold group-hover:text-[#ff6b00] transition-colors">
                    Start learning
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-[#1a1a1a]">
            Not sure which path fits?
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto mb-10">
            Let&apos;s figure it out together. Book a free discovery call and we&apos;ll help you find the right solution for your business.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
          >
            Book a Discovery Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
