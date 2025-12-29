import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              About Jayne
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              We make businesses<br /><span className="italic text-[#ff6b00]">impossible to ignore.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed">
              $800MM+ in client outcomes. 15+ years in business. Hundreds of brands transformed. Here&apos;s how we got here.
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-16 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">$800MM+</p>
              <p className="text-white/50">Client Outcomes</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">15+</p>
              <p className="text-white/50">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">100+</p>
              <p className="text-white/50">Brands Transformed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">30+</p>
              <p className="text-white/50">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-12">
            Our Story
          </h2>
          <div className="space-y-8 text-lg text-[#666666] leading-relaxed">
            <p>
              Since 2009, we&apos;ve had one mission: help businesses stop blending in and start getting chosen.
            </p>
            <p>
              We started because we saw a problem. Too many businesses struggle not because they lack talent or ambition, but because <strong className="text-[#1a1a1a]">they lack clarity</strong>. They don&apos;t know what makes them different. They can&apos;t articulate why they matter. And without that foundation, every marketing dollar is a gamble.
            </p>
            <p>
              So we built something different. A methodology refined over three decades. A team of strategists who cut through the noise and find the signal. A process that delivers clarity in weeks, not months.
            </p>
            <p className="text-xl text-[#1a1a1a] font-semibold">
              We&apos;ve worked with Fortune 500s and startups, nonprofits and tech companies, legacy brands and disruptors. The common thread? They all had something worth saying. They just needed help saying it.
            </p>
            <p>
              Today, we offer three ways to work together: Strategy Sprint for growing businesses, Strategy Partnership for enterprises, and Clarity University for founders who want to build their own strategy. Same methodology. Different levels of support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-16">
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Clarity beats complexity</h3>
              <p className="text-white/60">The best strategies are simple enough to remember and clear enough to act on. If your team can&apos;t explain your positioning in one sentence, you don&apos;t have one.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Evidence beats opinion</h3>
              <p className="text-white/60">We don&apos;t guess. Every recommendation is backed by data, research, and frameworks that have worked for hundreds of brands before you.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Outcomes beat outputs</h3>
              <p className="text-white/60">Pretty decks don&apos;t pay the bills. We measure success by the results you get—more leads, higher close rates, premium pricing—not the deliverables we create.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Speed beats perfection</h3>
              <p className="text-white/60">Done is better than perfect. We deliver complete clarity in weeks, not months, because you don&apos;t have time to wait for a 6-month engagement.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Bold beats safe</h3>
              <p className="text-white/60">Playing it safe is the riskiest thing you can do. Blending in is expensive. We help you make bold moves with confidence.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Guarantees beat promises</h3>
              <p className="text-white/60">We put our money where our mouth is. If you don&apos;t get clarity, we keep working until you do—at no additional cost. That&apos;s not a promise. It&apos;s a guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            Companies We&apos;ve Helped
          </h2>

          <div className="flex flex-wrap justify-start items-center gap-8 md:gap-16 mb-16">
            <div className="h-16 md:h-20 opacity-60">
              <img src="/pepsico.png" alt="PepsiCo" className="h-full w-auto object-contain" />
            </div>
            <div className="h-10 md:h-14 opacity-60">
              <img src="/redcross.png" alt="Red Cross" className="h-full w-auto object-contain" />
            </div>
            <div className="h-10 md:h-14 opacity-60">
              <img src="/mondelez.png" alt="Mondelez" className="h-full w-auto object-contain" />
            </div>
            <div className="h-10 md:h-14 opacity-60">
              <img src="/allstate.png" alt="Allstate" className="h-full w-auto object-contain" />
            </div>
            <div className="h-8 md:h-12 opacity-60">
              <img src="/abbott.png" alt="Abbott" className="h-full w-auto object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/case-studies/pepsico" className="group block p-8 bg-white rounded-3xl hover:shadow-lg transition-all">
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">PepsiCo</p>
              <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                $800MM in diverse supplier spend
              </h3>
              <p className="text-[#666666] mb-6">
                Strategic brand positioning and stakeholder alignment for one of the world&apos;s largest food and beverage companies.
              </p>
              <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                Read case study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link href="/case-studies/hornitos" className="group block p-8 bg-white rounded-3xl hover:shadow-lg transition-all">
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">Hornitos Tequila</p>
              <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                83% open rate, 79% attendance
              </h3>
              <p className="text-[#666666] mb-6">
                Messaging strategy that drove record-breaking engagement for a premium tequila brand.
              </p>
              <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                Read case study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready to stop blending in?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Whether you&apos;re a Fortune 500 or a founder just getting started, we have a path for you. Let&apos;s find the right one.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 group"
          >
            See Your Options
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
