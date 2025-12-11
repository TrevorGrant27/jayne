import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 bg-[#f5f3ef] relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>

        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow text */}
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8 opacity-0 animate-fade-in-up">
              Strategy That Delivers
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up animation-delay-100">
              <span className="text-[#1a1a1a] block mb-4">Business</span>
              <span className="text-[#ff6b00] block italic">Breakthroughs</span>
            </h1>

            <p className="mt-12 text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200 font-light">
              We help organizations reach their most important goals and overcome their toughest challenges through data-backed strategies.
            </p>

            <div className="mt-16 opacity-0 animate-fade-in-up animation-delay-400">
              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 border-2 border-[#ff6b00] hover:border-[#1a1a1a] group"
              >
                Work With Us
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
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8">
              {/* PepsiCo logo */}
              <div className="h-32 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/pepsico.png" alt="PepsiCo" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Red Cross logo */}
              <div className="h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/redcross.png" alt="Red Cross" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Mondelez logo */}
              <div className="h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/mondelez.png" alt="Mondelez" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Allstate logo */}
              <div className="h-20 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
                <img src="/allstate.png" alt="Allstate" className="h-full w-auto object-contain bg-transparent" />
              </div>

              {/* Abbott logo */}
              <div className="h-16 opacity-60 hover:opacity-100 transition-opacity bg-transparent">
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

      {/* Founder Story Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl leading-[1.1] text-[#1a1a1a] mb-2">
            Clarity, alignment,
          </h2>
          <h2 className="text-4xl md:text-5xl italic leading-[1.1] text-[#1a1a1a] mb-10">
            and lasting impact.
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-[#666666] leading-relaxed">
              Since 2009, we&apos;ve served businesses across every industry, from startups
              to Fortune 50 companies, equipping business leaders to build dependable,
              scalable, repeatable revenue.
            </p>

            <p className="text-lg text-[#666666] leading-relaxed">
              How? By developing and executing evidence-based strategies that leverage our unique methodology refined over three decades of experience working within hundreds of brands.
            </p>

            <p className="text-lg text-[#666666] leading-relaxed">
              Our team of Jayniacs (black belt strategists in branding, marketing, and
              user-experience) demystify what &apos;brand&apos; and &apos;marketing&apos; really mean,
              eject bad advertising habits, and deliver strategy based on the
              brand promise. This is the part of your story that&apos;s ownable, unmistakable,
              and must always be <span className="font-semibold italic text-[#1a1a1a]">crystal clear.</span>
            </p>

            <p className="text-xl text-[#1a1a1a] leading-relaxed font-semibold">
              This is what we do. We help founders and CEOs get clear on their strategy
              and then execute it effortlessly across their whole business.
            </p>

            <p className="text-lg text-[#666666] leading-relaxed">
              We boldly rebuilt what strategy looks like at every level: enterprise,
              SME, and those just getting started. Cutting the timeline, right-sizing the
              cost, and raising the bar on outcomes. Designed for business leaders who
              need to move fast and spend smart.
            </p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
              How We Can Help
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight text-[#1a1a1a]">
              Choose your path to clarity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1: Work With Us */}
            <div className="group p-10 bg-white border-2 border-[#e5e3df] rounded-2xl hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#ff6b00] tabular-nums">
                  01
                </span>
              </div>
              <h3 className="text-2xl mb-4 text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                Want the strategic breakthrough that&apos;ll take your business to the next level?
              </h3>
              <p className="text-[#666666] mb-8 leading-relaxed">
                Partner with our team for hands-on strategy that delivers clarity,
                alignment, and results.
              </p>
              <Link
                href="/work-with-us"
                className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:text-[#ff8c3a] transition-colors"
              >
                Work with us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Option 2: Book as Speaker */}
            <div className="group p-10 bg-white border-2 border-[#e5e3df] rounded-2xl hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#ff6b00] tabular-nums">
                  02
                </span>
              </div>
              <h3 className="text-2xl mb-4 text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                Want to inform and empower your team or audience?
              </h3>
              <p className="text-[#666666] mb-8 leading-relaxed">
                Bring us to your next event for keynotes, workshops, and programming
                that inspire action.
              </p>
              <Link
                href="/speaking"
                className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:text-[#ff8c3a] transition-colors"
              >
                Speaking
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Option 3: Clarity University */}
            <div className="group p-10 bg-white border-2 border-[#e5e3df] rounded-2xl hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300">
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#ff6b00] tabular-nums">
                  03
                </span>
              </div>
              <h3 className="text-2xl mb-4 text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                Want to learn how to do strategy the Jayne way?
              </h3>
              <p className="text-[#666666] mb-8 leading-relaxed">
                Join Clarity University for enterprise-level strategy education
                that fits your budget and timeline.
              </p>
              <a
                href="https://clarityuniversity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:text-[#ff8c3a] transition-colors"
              >
                Join Clarity University
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl leading-tight mb-6 text-white">
            Ready for radical brand clarity?
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Let&apos;s talk about how we can help your business thrive.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff6b00]/30"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
