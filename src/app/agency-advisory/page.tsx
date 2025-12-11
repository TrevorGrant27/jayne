import Link from "next/link";

export default function AgencyAdvisory() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] leading-[1.1] tracking-tight opacity-0 animate-fade-in-up">
              Agency &
              <br />
              <span className="text-[#ff6b00]">advisory.</span>
            </h1>
            <p className="mt-8 text-xl text-[#a1a1a1] max-w-2xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
              Strategic counsel and execution support for leadership teams
              navigating complex brand and business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
                Agency Services
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight mb-8">
                Full-service brand strategy & execution
              </h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
                  <p className="text-[#a1a1a1]">
                    Evidence-based brand platforms that create lasting competitive
                    advantage.
                  </p>
                </div>
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">
                    Marketing Execution
                  </h3>
                  <p className="text-[#a1a1a1]">
                    Converting strategy into campaigns and content that drive
                    measurable results.
                  </p>
                </div>
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">
                    Brand Asset Development
                  </h3>
                  <p className="text-[#a1a1a1]">
                    Creating the 10 essential brand assets every business needs to
                    scale.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
                Advisory Services
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight mb-8">
                Strategic counsel for leadership teams
              </h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">
                    Executive Advisory
                  </h3>
                  <p className="text-[#a1a1a1]">
                    Ongoing strategic support for CEOs and founders making
                    high-stakes decisions.
                  </p>
                </div>
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">Board Preparation</h3>
                  <p className="text-[#a1a1a1]">
                    Helping leadership teams articulate strategy clearly for board
                    presentations.
                  </p>
                </div>
                <div className="pb-6 border-b border-[#262626]">
                  <h3 className="text-xl font-semibold mb-2">
                    M&A Brand Integration
                  </h3>
                  <p className="text-[#a1a1a1]">
                    Strategic guidance through mergers, acquisitions, and brand
                    transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight mb-12">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your business" },
              { step: "02", title: "Strategy", desc: "Develop the brand platform" },
              { step: "03", title: "Execution", desc: "Create and deploy assets" },
              { step: "04", title: "Evolution", desc: "Measure and optimize" },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <span className="text-5xl font-bold text-[#ff6b00] tabular-nums">
                  {phase.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-2 text-[#a1a1a1]">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how our agency and advisory services can support
            your goals.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff6b00]/30"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
