"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClarityUniversity() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in mb-8">
            Clarity University
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)]">
            MBA-level brand strategy education + hands-on guidance for solopreneurs, small business, and early stage startups.
          </p>
        </div>
      </section>

      {/* Recognize Any of These? */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-16">
            Recognize Any of These?
          </h2>

          <div className="space-y-12">
            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">Feeling Disconnected?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Struggling to resonate with your audience?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">Lost for Words?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Don&apos;t have a strong 11-second elevator pitch?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">Market Shifts?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Finding it hard to adapt your messaging to changing customer needs?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">Content Creation Struggles?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Difficulty in crafting engaging, relevant content?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] mb-2">Feeling the pressure of Time and Money?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Don&apos;t Know Where to Start?</p>
            </div>
          </div>
        </div>
      </section>

      {/* It's Time to Strategize */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-8">
            It&apos;s Time to Strategize: Build your Brand Platform with Clarity University®
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
            Welcome to Clarity University® by Jayne Agency, a proven 4-week path to mastering the 10 essential brand assets within a brand platform that will positively impact your business&apos;s finance, culture, and market share. Designed for busy small and medium-sized business leaders, our program guides you through crafting an impactful 11-second elevator pitch and building a strong brand platform. Tailored for your schedule and budget, we offer a range of high-quality education, tools, support, and the community needed to enhance your brand&apos;s strategic potential without overburdening your resources, through flexible package options.
          </p>
        </div>
      </section>

      {/* Choose Your Package */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-16">
            Choose Your Package
          </h2>

          {/* Pricing Cards */}
          <div className="reveal grid md:grid-cols-3 gap-8 mb-16">
            {/* Essentials */}
            <div className="bg-[#faf9f7] rounded-2xl p-8 flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-4">Essentials</h3>
              <p className="text-4xl md:text-5xl text-[#f57214] font-semibold mb-6">$1,600</p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 1:</strong> Brand Platform Primer and Workbook Guidance Session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Interactive Guided Brand Platform Workbook Access/Download</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Clarity University Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ccc] mt-1">✗</span>
                  <span className="text-[#ccc]"><strong>Week 2:</strong> Workbook Homework + One-on-One Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 3:</strong> Live Q&A Webinar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ccc] mt-1">✗</span>
                  <span className="text-[#ccc]"><strong>Week 4:</strong> Test Your Messaging Workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ccc] mt-1">✗</span>
                  <span className="text-[#ccc]">Inclusion in the Clarity University Business Directory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Graduate Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ccc] mt-1">✗</span>
                  <span className="text-[#ccc]">Certificate of Program Completion</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full"
              >
                Essentials
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Plus - Most Popular */}
            <div className="bg-[#faf9f7] rounded-2xl p-8 flex flex-col border-2 border-[#f57214] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f57214] text-white text-sm font-semibold px-4 py-1 rounded-full font-[family-name:var(--font-open-sans)]">
                MOST POPULAR
              </div>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-4">Plus</h3>
              <p className="text-4xl md:text-5xl text-[#f57214] font-semibold mb-6">$2,500</p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 1:</strong> Brand Platform Primer and Workbook Guidance Session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Interactive Guided Brand Platform Workbook Access/Download</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Clarity University Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 2:</strong> 1-Hour Workbook Guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 3:</strong> Live Q&A Webinar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 4:</strong> Test Your Messaging Workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Inclusion in the Clarity University Business Directory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Graduate Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Certificate of Program Completion</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#f57214] text-white rounded-lg transition-all duration-300 w-full"
              >
                Plus
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* ConsultPlus */}
            <div className="bg-[#faf9f7] rounded-2xl p-8 flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-4">ConsultPlus</h3>
              <p className="text-4xl md:text-5xl text-[#f57214] font-semibold mb-6">$5,500</p>
              <ul className="space-y-4 text-[#8a8178] font-[family-name:var(--font-open-sans)] flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 1:</strong> Brand Platform Primer and Workbook Guidance Session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Interactive Guided Brand Platform Workbook Access/Download</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Clarity University Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 2:</strong> 2.5 Hours Brand Strategy Consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 3:</strong> Live Q&A Webinar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-[#1a1a1a]">Week 4:</strong> Test Your Messaging Workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Inclusion in the Clarity University Business Directory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to the Graduate Communication Platform <span className="text-xs text-[#f57214]">(Coming Soon)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Certificate of Program Completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f57214] mt-1">✓</span>
                  <span className="text-[#f57214]">Can apply funds towards full team Brand Strategy Session</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full"
              >
                ConsultPlus
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
