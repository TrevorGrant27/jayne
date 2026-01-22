"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const caseStudies = [
  {
    id: "pepsico",
    client: "PepsiCo",
    hook: "What if your supply chain could change the world?",
    result: "$800MM",
    resultLabel: "diverse supplier spend",
    teaser: "From compliance checkbox to competitive advantage.",
  },
  {
    id: "hornitos",
    client: "Hornitos",
    hook: "How do you make bartenders fall in love with a tequila?",
    result: "83%",
    resultLabel: "open rate",
    teaser: "From overlooked import to must-have mixology essential.",
  },
  {
    id: "evertec",
    client: "Pregis EverTec",
    hook: "What happens when you discover your product's real value?",
    result: "80%",
    resultLabel: "corrugated boxes displaced",
    teaser: "From eco-friendly promise to durability powerhouse.",
  },
  {
    id: "mercer-valve",
    client: "Mercer Valve Company",
    hook: "How do you protect a 36-year legacy from competitors stealing your story?",
    result: "100%",
    resultLabel: "employee engagement",
    teaser: "From borrowed equity to reclaimed brand authority.",
  },
  {
    id: "wbenc",
    client: "WBENC",
    hook: "What if the real pitch problem isn't how you present—but what you say?",
    result: "800+",
    resultLabel: "WBEs coached",
    teaser: "From generic pitch training to brand clarity breakthrough.",
  },
  {
    id: "nmsdc-eye",
    client: "NMSDC EYE",
    hook: "How do you fast-track entrepreneurs who don't know their own value yet?",
    result: "#1",
    resultLabel: "conference highlight",
    teaser: "From stragglers to standing room only.",
  },
  {
    id: "eaton",
    client: "Eaton Corporation",
    hook: "How do you align 94,000 employees across the globe around one mission?",
    result: "4",
    resultLabel: "awards across 3 shows",
    teaser: "From departmental silos to unified brand alignment.",
  },
  {
    id: "red-cross",
    client: "American Red Cross",
    hook: "Why did no one remember being offered disaster preparedness?",
    result: "98%",
    resultLabel: "brand recognition leveraged",
    teaser: "From invisible program to strategic foundation.",
  },
  {
    id: "sparks-group",
    client: "National Contract Sanitation Provider",
    hook: "How does a company with no marketing materials scale nationally?",
    result: "Multi-Year",
    resultLabel: "growth partnership",
    teaser: "From zero brand presence to scalable growth.",
  },
  {
    id: "not-just-dinner",
    client: "It's Not Just Dinner",
    hook: "How do you build a brand when all you have is urgent need?",
    result: "$20K",
    resultLabel: "donor level achieved",
    teaser: "From $150 donations to $20,000 annual giving.",
  },
  {
    id: "tms",
    client: "TMS",
    hook: "How do you position an impossible innovation for the biggest buyer in the world?",
    result: "500%",
    resultLabel: "sales increase",
    teaser: "From 1 million to 1 billion mailers in 3 years.",
  },
  {
    id: "nationwide",
    client: "Nationwide",
    hook: "How do you turn required compliance reporting into competitive advantage?",
    result: "Multi-Year",
    resultLabel: "strategic partnership",
    teaser: "From data silos to unified brand clarity.",
  },
];

export default function Results() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in">
            How we built a path to growth and stability for our clients.
          </h1>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-stagger">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className={`group block py-8 ${index !== caseStudies.length - 1 ? 'border-b border-[#e5e0d8]' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
                  <div className="md:w-48 shrink-0">
                    <span className="text-2xl md:text-3xl text-[#f57214] leading-none block">
                      {study.result}
                    </span>
                    <span className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)] block mt-1 font-[family-name:var(--font-open-sans)]">
                      {study.resultLabel}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-2">
                      {study.client}
                    </p>
                    <h2 className="text-lg md:text-xl text-[#1a1a1a] leading-snug group-hover:text-[#f57214] transition-colors">
                      {study.hook}
                    </h2>
                  </div>
                  <span className="hidden md:block text-[#8a8178] group-hover:text-[#f57214] transition-colors shrink-0 font-[family-name:var(--font-open-sans)]">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Your story next?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what&apos;s possible.
          </p>
          <div className="reveal">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
