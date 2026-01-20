"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RedCrossCaseStudy() {
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
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            American Red Cross
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Why did no one remember being offered disaster preparedness?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From invisible program to strategic foundation.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              The American Red Cross has four pillars to its brand. One was failing.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              People were no longer motivated to engage in disaster preparedness education or purchase the tools for it.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              How do you get past the <span className="text-[#f57214]">glazed look in people&apos;s eyes</span> when you talk about disaster relief?
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              Research showed something unexpected:
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
              No one was <span className="text-[#f57214]">rejecting</span> the brand.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              There were no negatives. Just acceptance. When asked why they didn&apos;t participate, many didn&apos;t recall it being offered.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              The program wasn&apos;t failing because people didn&apos;t want it.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              It was invisible—lost in the shadow of a 98% recognized global brand.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Global user research</h3>
              <p className="text-xl text-[#8a8178]">Surveys and interviews to prove out the brand platform and identify critical gaps that went undetected in standardized testing.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Diversity nuances</h3>
              <p className="text-xl text-[#8a8178]">Identify 3 critical gaps related to the crucial nuances of visible and invisible diversity—factors standard testing couldn&apos;t capture.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategic imperatives</h3>
              <p className="text-xl text-[#8a8178]">Develop critical insights and strategic imperatives that could serve as a foothold—not just for Preparedness, but for the whole American Red Cross brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The result
          </p>
          <div className="reveal">
            <div className="text-7xl md:text-8xl lg:text-9xl text-[#f57214] leading-none mb-4">
              98%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              brand recognition leveraged for Preparedness revival
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">3</div>
              <p className="text-lg text-[#8a8178]">critical gaps identified</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Global</div>
              <p className="text-lg text-[#8a8178]">brand impact potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            What changed
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Understanding motivation</h3>
              <p className="text-xl text-[#8a8178]">The preparedness education team now understands what motivates individuals to take steps to be better prepared before disasters and emergencies.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Applied knowledge</h3>
              <p className="text-xl text-[#8a8178]">Insights were applied directly to the Be Red Cross Ready program with measurable improvements.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Brand-wide foundation</h3>
              <p className="text-xl text-[#8a8178]">The findings became a foothold for strengthening not just Preparedness, but the entire American Red Cross brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to uncover what&apos;s really happening?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about finding the insights that standard testing misses.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
