import Link from "next/link";

export default function StrategySprint() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <Link href="/work-with-us" className="inline-flex items-center text-[#ff6b00] hover:text-[#ff8c3a] mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Work With Us
            </Link>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              For SMEs
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
              Strategy<br /><span className="italic text-[#ff6b00]">Sprint</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              Focused, fast, and designed to solve your most critical challenge. Get enterprise-level strategy in a fraction of the time.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
                  Who it&apos;s for
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-[#666666] leading-relaxed">
                Strategy Sprint is built for businesses between $1M-$20M in revenue who are ready to unlock their next level of growth. You&apos;ve found product-market fit, but something&apos;s holding you back from scaling.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed">
                Maybe your brand doesn&apos;t reflect where you&apos;re headed. Maybe your messaging isn&apos;t converting. Maybe you&apos;re struggling to differentiate in a crowded market. You need clarity—fast.
              </p>
              <p className="text-xl text-[#1a1a1a] font-semibold leading-relaxed">
                If you&apos;re ready to invest in strategy but don&apos;t need (or want) a long-term engagement, this is your answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">1</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Discovery</h3>
              <p className="text-[#666666]">We dive deep into your business, market, and competition. Interviews, research, and analysis to understand your unique situation.</p>
            </div>
            <div className="relative">
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">2</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Strategy Development</h3>
              <p className="text-[#666666]">We develop your positioning, messaging, and go-to-market strategy. Clear, actionable, and designed for immediate implementation.</p>
            </div>
            <div className="relative">
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">3</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Activation</h3>
              <p className="text-[#666666]">We deliver everything you need to execute: brand guidelines, messaging frameworks, and a 90-day implementation roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            What you get
          </h2>
          <div className="space-y-0">
            <div className="border-t border-[#e5e3df] py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1">
                <svg className="w-6 h-6 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">Brand Positioning & Strategy Document</h3>
              </div>
            </div>
            <div className="border-t border-[#e5e3df] py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1">
                <svg className="w-6 h-6 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">Messaging Framework & Voice Guidelines</h3>
              </div>
            </div>
            <div className="border-t border-[#e5e3df] py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1">
                <svg className="w-6 h-6 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">Competitive Analysis & Market Positioning</h3>
              </div>
            </div>
            <div className="border-t border-[#e5e3df] py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1">
                <svg className="w-6 h-6 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">90-Day Implementation Roadmap</h3>
              </div>
            </div>
            <div className="border-t border-b border-[#e5e3df] py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1">
                <svg className="w-6 h-6 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">Two Follow-Up Strategy Sessions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready to sprint?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Book a discovery call to see if Strategy Sprint is the right fit for your business.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
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
