"use client";

import Link from "next/link";
import { useEffect } from "react";

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
];

export default function Results() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Results
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Not promises.
            <br />
            <span className="text-[#f57214]">Proof.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            Real transformations. Measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/results/${study.id}`}
                className="group block"
              >
                <div className="text-4xl md:text-5xl text-[#f57214] leading-none mb-4">
                  {study.result}
                </div>
                <p className="text-base text-[#8a8178] mb-6">
                  {study.resultLabel}
                </p>
                <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-3">
                  {study.client}
                </p>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-4 group-hover:text-[#f57214] transition-colors">
                  {study.hook}
                </h2>
                <p className="text-lg text-[#8a8178] mb-6">
                  {study.teaser}
                </p>
                <span className="text-[#f57214] inline-flex items-center gap-2">
                  Read the story <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            More stories loading
          </p>
          <p className="reveal text-2xl md:text-3xl text-[#8a8178]">
            Healthcare. Technology. Retail. Non-Profit.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8 italic">
              &ldquo;Jayne helped us see what was right in front of us. The clarity they brought transformed not just our brand, but how we think about our entire business.&rdquo;
            </p>
            <p className="text-lg text-[#8a8178]">
              — CMO, Fortune 100 Company
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Your story next?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what&apos;s possible.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Let&apos;s talk
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
