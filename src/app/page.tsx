import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center pt-20 bg-[#f5f3ef] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8">
              $800MM+ in Client Outcomes
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.9] tracking-tighter">
              <span className="text-[#1a1a1a] block mb-4">Stop Blending In.</span>
              <span className="text-[#ff6b00] block italic">Start Getting Chosen.</span>
            </h1>

            <p className="mt-12 text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed font-light">
              We help businesses become impossible to ignore. Get the brand clarity that turns &quot;maybe later&quot; into &quot;take my money.&quot;
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#offerings"
                className="inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
              >
                See Your Options
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold bg-transparent text-[#1a1a1a] rounded-full border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                See the Proof
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="w-full py-8 border-t border-[#e5e3df] bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] font-bold">$800MM+</div>
                <div className="text-sm text-[#666666]">Client Outcomes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] font-bold">15+</div>
                <div className="text-sm text-[#666666]">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] font-bold">100+</div>
                <div className="text-sm text-[#666666]">Brands Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-12">
              Here&apos;s the problem:
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-white/80 leading-relaxed">
              <p>
                You&apos;re <span className="text-white font-semibold">leaving money on the table</span> every single day because your market can&apos;t tell you apart from your competitors.
              </p>
              <p>
                You compete on price when you should compete on value. You chase leads that ghost you. You discount to close deals you shouldn&apos;t have to discount.
              </p>
              <p>
                The average business loses <span className="text-[#ff6b00] font-bold">20-40% of potential revenue</span> due to unclear positioning. That&apos;s not a branding problem. That&apos;s a cash flow problem.
              </p>
              <p className="text-white font-semibold">
                We fix that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths Section */}
      <section id="offerings" className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              Three ways to work with us
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Pick the path that matches your budget and timeline. All three use the same proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy Sprint */}
            <Link href="/work-with-us/strategy-sprint" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#1a1a1a] rounded-3xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">Most Popular</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Strategy Sprint
                  </h3>
                  <p className="text-white/60 mb-6">
                    Complete brand strategy in 6 weeks. For businesses $1M-$20M ready to stop blending in.
                  </p>
                  <div className="space-y-3 text-white/80 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Brand positioning & strategy
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Messaging framework
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      90-day implementation roadmap
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      2 follow-up strategy sessions
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-white">$25,000</span>
                    <span className="text-white/50">one-time</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#f5f3ef] rounded-3xl border-2 border-[#e5e3df] hover:border-[#ff6b00] hover:scale-[1.02] transition-all duration-300 flex flex-col">
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">For Enterprise</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Strategy Partnership
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Ongoing strategic partner for enterprises. Dedicated team, guaranteed outcomes.
                  </p>
                  <div className="space-y-3 text-[#666666] text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Dedicated strategy team
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Executive advisory access
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Performance guarantees
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Quarterly strategy reviews
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#e5e3df]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#1a1a1a]">$15,000</span>
                    <span className="text-[#666666]">/month</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group block">
              <div className="h-full p-8 lg:p-10 bg-[#f5f3ef] rounded-3xl border-2 border-[#e5e3df] hover:border-[#ff6b00] hover:scale-[1.02] transition-all duration-300 flex flex-col">
                <div className="mb-auto">
                  <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">DIY Option</p>
                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4 group-hover:text-[#ff6b00] transition-colors">
                    Clarity University
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Learn our methodology yourself. Same frameworks, fraction of the cost.
                  </p>
                  <div className="space-y-3 text-[#666666] text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      12+ hours of video training
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Templates & worksheets
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Private community access
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      Monthly group coaching
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#e5e3df]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#1a1a1a]">$997</span>
                    <span className="text-[#666666]">one-time</span>
                  </div>
                  <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-6">
              Don&apos;t take our word for it
            </h2>
            <p className="text-xl text-white/60">
              Here&apos;s what happens when clarity meets execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/case-studies/pepsico" className="group block p-8 lg:p-12 bg-white/5 rounded-3xl hover:bg-white/10 transition-all">
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">PepsiCo</p>
              <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-4">
                $800MM
              </h3>
              <p className="text-white/60 mb-6">
                in diverse supplier spend achieved through strategic brand positioning and stakeholder alignment.
              </p>
              <div className="inline-flex items-center text-[#ff6b00] font-semibold group-hover:translate-x-2 transition-transform">
                Read case study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link href="/case-studies/hornitos" className="group block p-8 lg:p-12 bg-white/5 rounded-3xl hover:bg-white/10 transition-all">
              <p className="text-[#ff6b00] font-bold text-sm uppercase tracking-wider mb-4">Hornitos Tequila</p>
              <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-4">
                83% Open Rate
              </h3>
              <p className="text-white/60 mb-6">
                on campaign communications with 79% event attendance through targeted messaging strategy.
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

      {/* Guarantee Section */}
      <section className="py-24 lg:py-32 bg-[#ff6b00] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-8">
            Our Guarantee
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            If you complete the Strategy Sprint and don&apos;t feel like you have complete clarity on your brand positioning and messaging, we&apos;ll keep working with you until you do—at no additional cost.
          </p>
          <p className="text-lg text-white/70">
            We&apos;ve never had to use this guarantee. But it&apos;s there so you can say yes with confidence.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-6">
            Ready to stop leaving money on the table?
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Book a free 30-minute strategy call. We&apos;ll diagnose your biggest positioning gaps and tell you exactly how to fix them—whether you work with us or not.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 group"
          >
            Book Your Free Strategy Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
