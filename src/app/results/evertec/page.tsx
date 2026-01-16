"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function EverTecCaseStudy() {
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
            Pregis EverTec
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            What happens when you discover your product&apos;s real value?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From eco-friendly promise to durability powerhouse.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              In the vortex of a pandemic, a multi-million dollar deal, and public outrage at packaging waste.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              The sale of TMS EcoMailer to Pregis was an industry watershed.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              But the product&apos;s <span className="text-[#f57214]">true value</span> was hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              Everyone assumed the value was
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed line-through decoration-[#f57214]/50 mb-8">
              &ldquo;eco-friendly packaging.&rdquo;
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              The research revealed something different:
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              &ldquo;Customers would pay more for <span className="text-[#f57214]">durability</span>.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              The eco-friendly promise was <span className="text-[#f57214]">tolerated</span> by distributors and retailers—but not at a higher price point.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              What they would pay more for? Less breakage. Fewer returns. Longer customer lifetime value.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Research-driven clarity</h3>
              <p className="text-xl text-[#8a8178]">User research with customers, prospects, non-buyers, Private Equity, and distributors revealed the true value proposition hiding in the product.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategic alignment</h3>
              <p className="text-xl text-[#8a8178]">Counseled founders, new ownership, and marketing teams to embrace the clarity—deliverable by deliverable, day by day—through an urgent acquisition process.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Brand transformation</h3>
              <p className="text-xl text-[#8a8178]">Complete rebrand from EcoMailer to EverTec, with new identity, messaging, and positioning built on durability rather than eco-friendliness.</p>
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
              80%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              of small corrugated boxes displaced
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">100%</div>
              <p className="text-lg text-[#8a8178]">rebrand engagement</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">14+</div>
              <p className="text-lg text-[#8a8178]">product line expansion</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">#1</div>
              <p className="text-lg text-[#8a8178]">Amazon protective packaging supplier</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Transaction value multiplied</h3>
              <p className="text-xl text-[#8a8178]">Clear alignment and focus prior to acquisition increased the transaction value for Warburg Pinkus in industry-watershed multiples.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Amazon relationship transformed</h3>
              <p className="text-xl text-[#8a8178]">Became the largest volume of protective packaging purchased by Amazon from a single source provider in history.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Commodity to solution</h3>
              <p className="text-xl text-[#8a8178]">Created billions of dollars of displacement and redirection from what was once a commodity to a 14+ product packaging solution line.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The product didn&apos;t change.
            </p>
            <p className="text-3xl md:text-4xl text-[#8a8178] leading-snug mt-2">
              The story did.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to discover your real value?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what your customers actually want to pay for.
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
