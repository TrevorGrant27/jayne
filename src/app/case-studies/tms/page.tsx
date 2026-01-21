"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TMSCaseStudy() {
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
            TMS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you position an impossible innovation for the biggest buyer in the world?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              TMS was asked to solve an impossible problem: create a 99% curbside recyclable paper packaging solution for e-commerce.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              They did it—developing the world&apos;s only patented approach using natural paper fibers with zero waste.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Now they needed to <span className="text-[#f57214]">sell it to Amazon</span>.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8 font-[family-name:var(--font-open-sans)]">
              TMS was a machining company—not marketing strategists.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
              Selling to the <span className="text-[#f57214]">largest purchaser of protective packaging</span> required a different skill set.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              And competitors were already circling.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Research identified three core strategies that were urgent to protect through intellectual property.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              TMS needed to get ahead of competitive inquiry while simultaneously positioning for acquisition.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Competitive defense</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Develop competitive research and user-centered research to help TMS get out ahead of competitive inquiry and infiltration.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">IP guidance</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Provide guidance on all three critical strategies that needed intellectual property protection.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Dual narrative</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Create the narrative and script for both securing Amazon orders AND securing the acquisition commitment from Pregis.</p>
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
              500%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              sales increase in 3 years
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">1MM→1B</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">mailers in 3 years</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">3 Years</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">reduced time to horizon</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Watershed</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">industry acquisition</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Amazon secured</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The narrative positioned TMS to secure Amazon&apos;s orders as the largest purchaser of protective packaging.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Acquisition achieved</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The EcoMailer acquisition by Pregis (via Warburg Pincus) was seen as the watershed deal of the industry.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Accelerated timeline</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Reduced time to horizon by over 3 years through strategic positioning and clear narrative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to position your innovation?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about creating narratives that open doors.
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
