"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PepsiCoCaseStudy() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8 font-[family-name:var(--font-open-sans)]"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            PepsiCo
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            What if your supply chain could change the world?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              PepsiCo had a supplier diversity program.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              A checkbox. A report filed once a year.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              But <span className="text-[#f57214]">$250 million</span> in spending power isn&apos;t a checkbox—it&apos;s a lever.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4 font-[family-name:var(--font-open-sans)]">
              The question wasn&apos;t
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed line-through decoration-[#f57214]/50 mb-8 font-[family-name:var(--font-open-sans)]">
              &ldquo;how do we track diverse suppliers?&rdquo;
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4 font-[family-name:var(--font-open-sans)]">
              It was
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              &ldquo;how do we build an engine that creates opportunity at scale?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              We stopped thinking about supplier diversity as <span className="text-[#f57214]">compliance</span> and started treating it like what it actually is:
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              a competitive advantage hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Moving from a Supplier Diversity program to an enterprise platform. The old way was transactional. Check the box. File the report. Move on.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Solution</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Call all advocates to help create opportunity and awareness. Use an approved style guide to condense timing. Appeal to PepsiCo&apos;s culture of performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The result
          </p>
          <div className="reveal">
            <div className="text-5xl md:text-7xl lg:text-9xl text-[#f57214] leading-none mb-4">
              $800MM
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              in forecasted diverse supplier spend
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">335</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">diverse suppliers activated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">23</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">categories transformed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">35+</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">years of relationships deepened</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            What changed
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Highly valued pipeline</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">A steady flow of qualified diverse suppliers ready to meet PepsiCo&apos;s needs.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Disruptive innovation</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Fresh perspectives from diverse suppliers driving new ideas across the organization.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Supply chain efficiency</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Streamlined processes that benefit the entire ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to find your lever?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what&apos;s hiding in plain sight in your business.
          </p>
          <div className="reveal">
            <Link
              href="#"
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
