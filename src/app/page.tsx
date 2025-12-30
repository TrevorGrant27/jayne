import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center pt-20 bg-[#f5f3ef] relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>

        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow text */}
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8 opacity-0 animate-fade-in-up">
              Find Your
            </p>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up animation-delay-100">
              <span className="text-[#1a1a1a] block mb-4">Business</span>
              <span className="text-[#ff6b00] block italic">Breakthrough</span>
            </h1>

            <p className="mt-12 text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200 font-light">
              You&apos;ve built something real. But if your market doesn&apos;t see what makes you different, growth stalls. We fix that.
            </p>

            <div className="mt-16 opacity-0 animate-fade-in-up animation-delay-400">
              <Link
                href="#offerings"
                className="inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 border-2 border-[#ff6b00] hover:border-[#1a1a1a] group"
              >
                See How We Work
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Client Logo Carousel */}
        <div className="w-full py-12 border-t border-[#e5e3df]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm text-[#ff6b00] uppercase tracking-widest mb-8 font-semibold">
              Companies we are proud to have partnered with
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mb-8">
              {/* PepsiCo logo */}
              <div className="h-20 md:h-32 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/pepsico.png" alt="PepsiCo" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Red Cross logo */}
              <div className="h-12 md:h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/redcross.png" alt="Red Cross" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Mondelez logo */}
              <div className="h-12 md:h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/mondelez.png" alt="Mondelez" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Allstate logo */}
              <div className="h-12 md:h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/allstate.png" alt="Allstate" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Abbott logo */}
              <div className="h-10 md:h-16 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/abbott.png" alt="Abbott" className="h-full w-auto object-contain bg-transparent" />
              </div>
            </div>

            {/* Many more text on separate line */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] italic text-[#1a1a1a]">
                + many more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Familiar? - Dark & Dramatic */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - sticky heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-6">
                  Sound<br />familiar?
                </h2>
                <p className="text-xl text-white/50">
                  If any of these hit home, we should talk.
                </p>
              </div>
            </div>

            {/* Right side - pain points */}
            <div className="lg:col-span-8 space-y-0">
              <div className="border-t border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">You know you&apos;re good. Your market doesn&apos;t.</h3>
                <p className="text-white/50 text-lg">The work speaks for itself—except it doesn&apos;t. You&apos;re waiting to be discovered instead of being impossible to ignore.</p>
              </div>

              <div className="border-t border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">You blend in when you should stand out.</h3>
                <p className="text-white/50 text-lg">You look like everyone else in your space. You compete on price because you haven&apos;t given them a reason to pay more.</p>
              </div>

              <div className="border-t border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Growth stalled and you&apos;re not sure why.</h3>
                <p className="text-white/50 text-lg">What got you here won&apos;t get you there. The tactics that worked are running out of steam.</p>
              </div>

              <div className="border-t border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Your team is rowing in six different directions.</h3>
                <p className="text-white/50 text-lg">Everyone has a different answer to &quot;what do we stand for?&quot; Decisions take forever because there&apos;s no North Star.</p>
              </div>

              <div className="border-t border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">You&apos;re leaving money on the table.</h3>
                <p className="text-white/50 text-lg">You create real value but can&apos;t capture it. Margins shrink while the work gets harder.</p>
              </div>

              <div className="border-t border-b border-white/10 py-8 group">
                <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">You&apos;re ready for bold moves but stuck in place.</h3>
                <p className="text-white/50 text-lg">You feel the urgency but lack the clarity. Big swings feel risky when you&apos;re not sure what you&apos;re swinging at.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome - Minimal & Bold */}
      <section className="py-24 lg:py-40 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8">
            What Changes
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] text-[#1a1a1a] mb-16">
            Clarity. Alignment.<br />Momentum.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">1</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Clear</h3>
              <p className="text-[#666666]">About who you are, what you stand for, and why it matters. No more second-guessing.</p>
            </div>

            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">2</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Aligned</h3>
              <p className="text-[#666666]">Everyone rowing in the same direction. One story. One strategy. One team.</p>
            </div>

            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">3</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Moving</h3>
              <p className="text-[#666666]">Real momentum. The kind that compounds because it&apos;s built on a foundation that works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Are You In Your Journey - Offerings */}
      <section id="offerings" className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-4">
              Where are you?
            </h2>
            <p className="text-xl text-white/50">
              Different stages. Different strategies.
            </p>
          </div>

          {/* Stacked full-width rows */}
          <div className="space-y-0">
            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group border-t border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block">
              <div className="lg:col-span-5">
                <p className="text-white/50 text-lg lg:text-xl">
                  You&apos;re an established enterprise navigating complex markets and competing priorities.
                </p>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white group-hover:text-[#ff6b00] transition-colors mb-3">
                  Strategy Partnership
                </h3>
                <p className="text-white/70 text-lg">
                  Deep partnership. Guaranteed outcomes. Built for scale.
                </p>
              </div>
            </Link>

            {/* Strategy Sprint */}
            <Link href="/work-with-us/strategy-sprint" className="group border-t border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block">
              <div className="lg:col-span-5">
                <p className="text-white/50 text-lg lg:text-xl">
                  You&apos;re between $1M-$20M and ready to unlock your next level of growth.
                </p>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white group-hover:text-[#ff6b00] transition-colors mb-3">
                  Strategy Sprint
                </h3>
                <p className="text-white/70 text-lg">
                  Focused. Fast. Designed to solve your most critical challenge.
                </p>
              </div>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group border-t border-b border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block">
              <div className="lg:col-span-5">
                <p className="text-white/50 text-lg lg:text-xl">
                  You&apos;re a solopreneur, small business, or startup wanting to build your own strategy.
                </p>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white group-hover:text-[#ff6b00] transition-colors mb-3">
                  Clarity University
                </h3>
                <p className="text-white/70 text-lg">
                  Learn our methodology. At your pace. On your budget.
                </p>
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="text-xl md:text-2xl text-white/70">
              Not sure which path fits? Let&apos;s figure it out together.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-white text-[#1a1a1a] rounded-full hover:bg-[#ff6b00] hover:text-white transition-all duration-300 group whitespace-nowrap"
            >
              Book a Call
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
