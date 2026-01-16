"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function EatonCaseStudy() {
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
            All Results
          </Link>
          <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Eaton Corporation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you align 94,000 employees across the globe around one mission?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From departmental silos to unified brand alignment.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              Eaton Corporation was tasked with addressing mission-based objectives inside of bottom-line requirements.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              But mission-based approaches don&apos;t always mean the same thing to every receiver—especially across continents.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              With a new CEO transitioning in, <span className="text-[#f57214]">alignment became urgent</span>.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Facilitated alignment</h3>
              <p className="text-xl text-[#8a8178]">Using proven brand strategy methodology to align teams globally, locally, across departments, continents, and areas of focus.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Multi-department integration</h3>
              <p className="text-xl text-[#8a8178]">Working with brand strategy, supplier development, quality assurance, and quality control to develop aligned brand strategies that integrated mission-based objectives with bottom-line outcomes.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Platform as documentation</h3>
              <p className="text-xl text-[#8a8178]">Using the brand platform as a means to articulate, confirm, and document—supporting personal and professional goals across the organization.</p>
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
              4
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              awards across 3 different award shows
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">94K</div>
              <p className="text-lg text-[#8a8178]">employees aligned globally</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">#1</div>
              <p className="text-lg text-[#8a8178]">highest internal engagement</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Cross-regional respect</h3>
              <p className="text-xl text-[#8a8178]">Each discipline and region could see themselves represented within the Eaton brand—creating respect across the board.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Internal engagement</h3>
              <p className="text-xl text-[#8a8178]">The highest engagement across internally created materials—decks, videos, annual communications—in company history.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Industry recognition</h3>
              <p className="text-xl text-[#8a8178]">Multi-year award-winning crucial communications including videos, annual end-of-year global thank-yous, and internal/external pitch decks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Interpretation can be everything in a global community.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug mt-2">
              Alignment makes it one story.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to align your organization?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about creating one story across every team.
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
