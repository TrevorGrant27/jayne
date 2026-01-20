"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MercerValveCaseStudy() {
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
            Mercer Valve Company
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you protect a 36-year legacy from competitors stealing your story?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From borrowed equity to reclaimed brand authority.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              For 36 years, Mercer Valve had been the premier provider of safety pressure relief valves.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              They&apos;d built it on the strength of their patented solution alone. No marketing. No brand investment.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Then competitors started claiming they sold <span className="text-[#f57214]">&ldquo;Mercer-like valves.&rdquo;</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              The problem wasn&apos;t product quality.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed mb-8">
              The problem was that Mercer had become the <span className="text-[#f57214]">Kleenex of valves</span>—a benchmark everyone borrowed from.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Without an articulated brand identity, they couldn&apos;t protect what they&apos;d built.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Research revealed competitors were promoting <span className="text-[#f57214]">faulty products</span> using Mercer&apos;s credibility.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              By not branding themselves, Mercer was allowing their own reputation to sell someone else&apos;s failures.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Define the brand</h3>
              <p className="text-xl text-[#8a8178]">Develop a brand identity that spoke to the power of safety as only Mercer could define it—backed by 36 years of protecting people, equipment, and communities.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Reclaim the position</h3>
              <p className="text-xl text-[#8a8178]">Work to reclaim Mercer&apos;s rightful place atop the life-saving category of safety relief valves through new messaging, position, and promise.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Combat the perception</h3>
              <p className="text-xl text-[#8a8178]">Create a campaign addressing the misconception that Mercer lead times were compromised—when in fact they performed three times more testing than any competitor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Campaign */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              The campaign that emerged:
            </p>
            <p className="text-4xl md:text-5xl text-[#f57214] leading-snug italic">
              &ldquo;Because Safety Takes Time.&rdquo;
            </p>
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
              100%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              employee engagement on brand rollout
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">36</div>
              <p className="text-lg text-[#8a8178]">years of legacy protected</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">9+</div>
              <p className="text-lg text-[#8a8178]">years of ongoing partnership</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Defensible position</h3>
              <p className="text-xl text-[#8a8178]">Mercer now has a highly defensible position in the marketplace—competitors can no longer borrow their equity unchallenged.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Sustained sales</h3>
              <p className="text-xl text-[#8a8178]">While the oil industry saw an overall dip in production demand in late 2019, Mercer sustained its level of sales and continued serving existing clients.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Integrated partnership</h3>
              <p className="text-xl text-[#8a8178]">Jayne Agency continues as Mercer&apos;s outsourced marketing arm, crafting messaging and creative that inspires employees, partners, and clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to protect what you&apos;ve built?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about reclaiming your rightful position.
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
