import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Making the world<br />more <span className="italic text-[#ff6b00]">gooder.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed">
              We&apos;re strategists, storytellers, and builders who believe every business deserves radical clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - sticky heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
                  Our<br />Story
                </h2>
                <p className="text-xl text-[#666666]">
                  From humble beginnings to industry leaders.
                </p>
              </div>
            </div>

            {/* Right side - content */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg text-[#666666] leading-relaxed">
                Since 2009, Jayne Agency has served businesses across every industry, from startups to Fortune 50 companies. We&apos;ve equipped business leaders to build dependable, scalable, repeatable revenue through evidence-based strategies.
              </p>

              <p className="text-lg text-[#666666] leading-relaxed">
                Our journey began with a simple observation: too many businesses struggle not because they lack talent or ambition, but because they lack clarity. They don&apos;t know what makes them different. They can&apos;t articulate why they matter. And without that foundation, every marketing dollar is a gamble.
              </p>

              <p className="text-lg text-[#666666] leading-relaxed">
                So we built something different. A methodology refined over three decades of experience working within hundreds of brands. A team of Jayniacs—black belt strategists in branding, marketing, and user-experience—who demystify what &apos;brand&apos; and &apos;marketing&apos; really mean.
              </p>

              <p className="text-xl text-[#1a1a1a] leading-relaxed font-semibold">
                We help founders and CEOs get clear on their strategy and then execute it effortlessly across their whole business.
              </p>

              <p className="text-lg text-[#666666] leading-relaxed">
                We boldly rebuilt what strategy looks like at every level: enterprise, SME, and those just getting started. Cutting the timeline, right-sizing the cost, and raising the bar on outcomes. Designed for business leaders who need to move fast and spend smart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-4">
              What we believe
            </h2>
            <p className="text-xl text-white/50">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="border-t border-white/10 py-8 md:pr-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Clarity over complexity</h3>
              <p className="text-white/50 text-lg">The best strategies are simple enough to remember and clear enough to act on. We cut through the noise to find your signal.</p>
            </div>

            <div className="border-t border-white/10 py-8 md:pl-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Evidence over opinion</h3>
              <p className="text-white/50 text-lg">We don&apos;t guess. Every recommendation is backed by data, research, and proven frameworks that actually work.</p>
            </div>

            <div className="border-t border-white/10 py-8 md:pr-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Outcomes over outputs</h3>
              <p className="text-white/50 text-lg">Pretty decks don&apos;t pay the bills. We measure success by the results we deliver, not the hours we bill.</p>
            </div>

            <div className="border-t border-white/10 py-8 md:pl-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Partnership over projects</h3>
              <p className="text-white/50 text-lg">We&apos;re not vendors who disappear after delivery. We&apos;re partners invested in your long-term success.</p>
            </div>

            <div className="border-t border-b border-white/10 py-8 md:pr-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Bold over safe</h3>
              <p className="text-white/50 text-lg">Playing it safe is the riskiest thing you can do. We help you make bold moves with confidence.</p>
            </div>

            <div className="border-t border-b border-white/10 py-8 md:pl-12 group">
              <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-[#ff6b00] transition-colors">Action over analysis</h3>
              <p className="text-white/50 text-lg">Strategy without execution is just theory. We don&apos;t just plan—we help you move.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Jayniacs Section */}
      <section className="py-24 lg:py-40 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8">
            The Team
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] text-[#1a1a1a] mb-8">
            Meet the Jayniacs
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto mb-16">
            We&apos;re a team of black belt strategists in branding, marketing, and user-experience. We eject bad advertising habits and deliver strategy based on the brand promise—the part of your story that&apos;s ownable, unmistakable, and crystal clear.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">15+</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Years in Business</h3>
              <p className="text-[#666666]">Serving organizations of all sizes since 2009.</p>
            </div>

            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">100s</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Brands Served</h3>
              <p className="text-[#666666]">From startups to Fortune 50 companies.</p>
            </div>

            <div>
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">30+</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Years of Experience</h3>
              <p className="text-[#666666]">Methodology refined over three decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 lg:py-28 bg-[#ff6b00]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] italic text-white leading-tight">
            &ldquo;Brand clarity and alignment for all.<br />That&apos;s not just our mission—it&apos;s our obsession.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready to work together?
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Let&apos;s talk about how we can help your business reach its most important goals.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff6b00]/30 group"
          >
            Work With Us
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
