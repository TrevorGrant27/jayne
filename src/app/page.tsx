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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Copy */}
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-8 opacity-0 animate-fade-in-up">
                Brand Strategy for SMEs
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] tracking-tight opacity-0 animate-fade-in-up animation-delay-100">
                <span className="text-[#1a1a1a] block mb-2">Stop competing</span>
                <span className="text-[#1a1a1a] block mb-2">on price.</span>
                <span className="text-[#ff6b00] block italic">Start commanding it.</span>
              </h1>

              <p className="mt-10 text-xl text-[#666666] max-w-xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                We help $1M–$20M businesses build brands so clear and compelling, customers stop asking "how much?" and start asking "how soon?"
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-400">
                <Link
                  href="/work-with-us/strategy-sprint"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
                >
                  See How It Works
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-[#1a1a1a] rounded-full border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  View Results
                </Link>
              </div>
            </div>

            {/* Right side - Visual placeholder */}
            <div className="hidden lg:block">
              {/*
                ============================================
                DESIGN DIRECTION: Hero Visual
                ============================================
                Option A: Before/After Brand Transformation
                - Split screen showing a generic "before" brand
                  (bland, commodity messaging) transforming into
                  a distinctive "after" brand (bold, premium positioning)
                - Use animation: the "before" fades/morphs into "after"
                - Show actual client work if available

                Option B: Abstract Strategy Visualization
                - Animated diagram showing scattered elements
                  (representing chaos) coalescing into a clear,
                  aligned structure (representing clarity)
                - Use brand colors: orange nodes, dark connections
                - Subtle, sophisticated motion design

                Option C: Client Results Showcase
                - Rotating cards showing client logos with
                  specific outcomes: "+47% revenue", "3x leads", etc.
                - More concrete, proof-focused

                Specifications:
                - Dimensions: ~500x500px display area
                - Style: Clean, minimal, premium feel
                - Animation: Subtle, not distracting (3-5s loops)
                - Mobile: Hide or show simplified version
                ============================================
              */}
              <div className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b00]/20 to-transparent"></div>
                <div className="relative z-10 text-center p-12">
                  <div className="text-8xl font-[family-name:var(--font-playfair)] text-white/10 mb-4">?</div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Visual Placeholder</p>
                  <p className="text-white/60 text-xs mt-2">See design direction in code</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Bar - Replaces generic logo parade */}
        <div className="w-full py-10 border-t border-[#e5e3df] bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">$47M+</div>
                <p className="text-sm text-[#666666] uppercase tracking-wider">Revenue Generated</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">200+</div>
                <p className="text-sm text-[#666666] uppercase tracking-wider">Brands Transformed</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">15</div>
                <p className="text-sm text-[#666666] uppercase tracking-wider">Years in Business</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">94%</div>
                <p className="text-sm text-[#666666] uppercase tracking-wider">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Specific Results */}
      <section className="py-20 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-[#666666] uppercase tracking-widest mb-12">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/*
              ============================================
              DESIGN DIRECTION: Logo Treatment
              ============================================
              - Show logos at FULL opacity (confident, not shy)
              - Consistent sizing (normalize heights to ~40-50px)
              - Consider adding a subtle tooltip or caption
                on hover showing a specific result:
                "PepsiCo: Repositioned 3 beverage brands"
              - Monochrome treatment (all black/dark gray)
                for visual consistency
              ============================================
            */}
            <div className="flex justify-center">
              <img src="/pepsico.png" alt="PepsiCo" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-center">
              <img src="/redcross.png" alt="Red Cross" className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-center">
              <img src="/mondelez.png" alt="Mondelez" className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-center">
              <img src="/allstate.png" alt="Allstate" className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-center col-span-2 md:col-span-1">
              <img src="/abbott.png" alt="Abbott" className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
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
                <p className="text-xl text-white/50 mb-8">
                  If any of these hit home, we should talk.
                </p>
                {/*
                  ============================================
                  DESIGN DIRECTION: Pain Point Illustration
                  ============================================
                  Small, subtle illustration or icon set that
                  visualizes the "chaos" state:
                  - Scattered puzzle pieces
                  - Tangled lines
                  - Faded/unclear shape

                  Style: Line art, single color (white at 20% opacity)
                  Size: ~200x200px
                  Purpose: Visual anchor for the sticky sidebar
                  ============================================
                */}
                <div className="hidden lg:block w-48 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl text-white/20 mb-2">◇◇◇</div>
                    <p className="text-white/30 text-xs">Illustration placeholder</p>
                  </div>
                </div>
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

      {/* The Transformation - Visual Before/After */}
      <section className="py-24 lg:py-40 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              The Transformation
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] text-[#1a1a1a]">
              From chaos to clarity<br />in 6 weeks.
            </h2>
          </div>

          {/* Before/After Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/*
              ============================================
              DESIGN DIRECTION: Before/After Comparison
              ============================================
              Two side-by-side panels showing transformation:

              BEFORE panel:
              - Muted colors, slightly blurred/unfocused
              - Scattered brand elements (inconsistent logos,
                mixed messages, generic taglines)
              - Visual metaphor: puzzle pieces scattered
              - Headline: "Before: Scattered"

              AFTER panel:
              - Vibrant, sharp, focused
              - Unified brand system (consistent colors,
                clear message, distinctive positioning)
              - Visual metaphor: puzzle complete, glowing
              - Headline: "After: Aligned"

              Could use:
              - Actual client before/after (with permission)
              - Abstract representation
              - Animated transition on scroll

              Specifications:
              - Equal height panels (~400px)
              - Subtle shadow/depth difference
              - Mobile: Stack vertically
              ============================================
            */}
            <div className="bg-[#f5f3ef] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-xs uppercase tracking-widest text-[#999] font-semibold">Before</div>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-[#ccc] mb-4 blur-[2px]">◇ ◆ ◇</div>
                  <p className="text-[#999] text-lg">Scattered. Unclear. Competing on price.</p>
                  <p className="text-[#bbb] text-sm mt-2">[Before state visual placeholder]</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">After</div>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-[#ff6b00] mb-4">◆</div>
                  <p className="text-white text-lg">Aligned. Distinctive. Premium pricing.</p>
                  <p className="text-white/40 text-sm mt-2">[After state visual placeholder]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Clear</h3>
              <p className="text-[#666666]">Define who you are, what you stand for, and why it matters. No more second-guessing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Aligned</h3>
              <p className="text-[#666666]">Everyone rowing in the same direction. One story. One strategy. One team.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Get Moving</h3>
              <p className="text-[#666666]">Real momentum. The kind that compounds because it&apos;s built on a foundation that works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Are You In Your Journey - Now Clickable */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-4">
              Where are you?
            </h2>
            <p className="text-xl text-white/50">
              Different stages. Different strategies.
            </p>
          </div>

          {/* Stacked full-width rows - NOW CLICKABLE */}
          <div className="space-y-0">
            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group border-t border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block hover:bg-white/5 transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8">
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
            <Link href="/work-with-us/strategy-sprint" className="group border-t border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block hover:bg-white/5 transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8">
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
            <Link href="/work-with-us/clarity-university" className="group border-t border-b border-white/10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center block hover:bg-white/5 transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8">
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
              href="/work-with-us"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-white text-[#1a1a1a] rounded-full hover:bg-[#ff6b00] hover:text-white transition-all duration-300 group whitespace-nowrap"
            >
              View All Options
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial/Case Study Teaser */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          {/*
            ============================================
            DESIGN DIRECTION: Featured Case Study
            ============================================
            This section should feature ONE compelling
            client story with:

            1. Client logo (prominent, full color)
            2. Key metric: "3x increase in qualified leads"
            3. Quote from client (1-2 sentences)
            4. Link to full case study

            Visual treatment:
            - Large quotation marks as decorative element
            - Client photo (optional, adds trust)
            - Subtle background pattern or texture

            This provides the "proof" that the rest
            of the page is missing.
            ============================================
          */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-[#ff6b00] font-semibold mb-4">Featured Result</p>
            {/* Placeholder for client logo */}
            <div className="w-32 h-12 bg-[#ddd] rounded mx-auto mb-8 flex items-center justify-center">
              <span className="text-xs text-[#999]">Client Logo</span>
            </div>
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight mb-8">
            &ldquo;They helped us stop being the best-kept secret in our industry.&rdquo;
          </blockquote>

          <p className="text-xl text-[#666666] mb-4">
            — [Client Name], [Title] at [Company]
          </p>

          <p className="text-lg text-[#ff6b00] font-semibold mb-10">
            Result: 3x increase in qualified leads within 90 days
          </p>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center text-lg font-bold text-[#1a1a1a] hover:text-[#ff6b00] transition-colors group"
          >
            Read the full story
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-6">
            Ready to stop blending in?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We&apos;ll discuss your biggest challenge and whether we&apos;re the right fit.
          </p>
          <Link
            href="/work-with-us/strategy-sprint"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Book Your Free Strategy Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-white/40 text-sm mt-6">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
