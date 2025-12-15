import Link from "next/link";

export default function AgencyAdvisory() {
  const agencyServices = [
    { title: "Design", description: "Visual identity, brand systems, and creative direction" },
    { title: "Copywriting", description: "Brand voice, messaging, and content that connects" },
    { title: "Websites", description: "Strategic digital experiences that convert" },
    { title: "Campaigns", description: "Integrated marketing that drives results" },
    { title: "Brand Assets", description: "The essential materials every brand needs to scale" },
  ];

  const advisoryServices = [
    { title: "Fractional CMO", description: "Senior marketing leadership without the full-time commitment" },
    { title: "Board Preparation", description: "Articulate your strategy clearly for board presentations and investor meetings" },
    { title: "On-Demand Advisory", description: "Regular access to senior advisors for high-stakes decisions" },
    { title: "Monthly Strategy Retainer", description: "Continuous strategic counsel for leadership teams" },
    { title: "Executive Coaching", description: "One-on-one guidance for leaders navigating growth and change" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Agency & Advisory
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Execution that follows strategy.
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed mb-10">
              Full-service agency capabilities and senior advisory—available to clients who&apos;ve built their foundation with us.
            </p>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              Start With Strategy
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Strategy First - The Key Message */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - heading */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-6">
                  Strategy first.<br />Always.
                </h2>
                <p className="text-xl text-white/50">
                  Here&apos;s how it works.
                </p>
              </div>
            </div>

            {/* Right side - explanation */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-[family-name:var(--font-playfair)]">
                  Every relationship with Jayne begins with strategy.
                </p>
              </div>
              <div>
                <p className="text-xl text-white/70 leading-relaxed">
                  We don&apos;t do tactics without direction. We don&apos;t design without knowing what we&apos;re building toward. We don&apos;t advise without understanding the full picture.
                </p>
              </div>
              <div>
                <p className="text-xl text-white/70 leading-relaxed">
                  That&apos;s why our agency and advisory services are only available after you&apos;ve completed a <span className="text-[#ff6b00]">Strategy Sprint</span> or are ongoing with a <span className="text-[#ff6b00]">Strategy Partnership</span>.
                </p>
              </div>
              <div>
                <p className="text-2xl text-white leading-relaxed font-[family-name:var(--font-playfair)]">
                  This isn&apos;t gatekeeping. It&apos;s how we ensure everything we build actually works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Path - Visual Journey */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-24">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              The Path
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1]">
              How to unlock agency & advisory
            </h2>
          </div>

          {/* Stacked full-width rows */}
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="group border-t border-[#1a1a1a]/10 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
              <div className="lg:col-span-1 flex items-center gap-4 lg:block">
                <span className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">1</span>
                <h3 className="lg:hidden text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Start with strategy
                </h3>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Start with strategy
                </h3>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#666666] text-base lg:text-xl">
                  Begin with a Strategy Sprint or Strategy Partnership to build your foundation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group border-t border-[#1a1a1a]/10 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
              <div className="lg:col-span-1 flex items-center gap-4 lg:block">
                <span className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">2</span>
                <h3 className="lg:hidden text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Get clear
                </h3>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Get clear
                </h3>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#666666] text-base lg:text-xl">
                  Define who you are, what you stand for, and where you&apos;re going.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group border-t border-[#1a1a1a]/10 border-b py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
              <div className="lg:col-span-1 flex items-center gap-4 lg:block">
                <span className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00]">3</span>
                <h3 className="lg:hidden text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Execute with us
                </h3>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors">
                  Execute with us
                </h3>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#666666] text-base lg:text-xl">
                  Access our full suite of agency and advisory services to bring it all to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Services */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-4">
                  Agency Services
                </p>
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
                  Full-service execution.
                </h2>
                <p className="text-xl text-[#666666]">
                  Strategy sets the direction. Execution makes it real. When you&apos;re ready, we bring it to life.
                </p>
              </div>
            </div>

            {/* Right side - services list */}
            <div className="lg:col-span-8">
              {agencyServices.map((service, i) => (
                <div key={i} className="border-t border-[#1a1a1a]/10 py-8 group">
                  <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3 font-[family-name:var(--font-playfair)] group-hover:text-[#ff6b00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#666666]">{service.description}</p>
                </div>
              ))}
              <div className="border-t border-[#1a1a1a]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-4">
                  Advisory Services
                </p>
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-6">
                  Strategic counsel.
                </h2>
                <p className="text-xl text-white/50">
                  Ongoing access to senior advisors for the decisions that matter most.
                </p>
              </div>
            </div>

            {/* Right side - services list */}
            <div className="lg:col-span-8">
              {advisoryServices.map((service, i) => (
                <div key={i} className="border-t border-white/10 py-8 group">
                  <h3 className="text-2xl md:text-3xl text-white mb-3 font-[family-name:var(--font-playfair)] group-hover:text-[#ff6b00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/50">{service.description}</p>
                </div>
              ))}
              <div className="border-t border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-8">
            Ready to start?
          </h2>
          <p className="text-xl text-[#666666] max-w-xl mx-auto mb-6">
            The door to agency and advisory opens with strategy.
          </p>
          <p className="text-lg text-[#666666]/70 max-w-xl mx-auto mb-12">
            Book a call to explore whether a Strategy Sprint or Strategy Partnership is right for you.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
          >
            Book a Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
