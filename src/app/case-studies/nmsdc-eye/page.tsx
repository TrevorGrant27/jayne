"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function NMSDCEYECaseStudy() {
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
            NMSDC EYE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you fast-track entrepreneurs who don&apos;t know their own value yet?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              NMSDC&apos;s Emerging Young Entrepreneurs program was built to help entrepreneurs elevate on a fast track.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              But recruiting the right participants and keeping them engaged became more competitive each year.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The curriculum needed to reflect <span className="text-[#f57214]">real-world complications</span>—not theoretical exercises.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Early brand strategy access</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Ensure entrepreneurs had access to high-quality brand strategy sooner rather than later in their journey.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Pitch-driven curriculum</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Design learning that drove directly into a final deliverable—being valuable for the competitive national pitch stage the program culminated in.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Measurable impact</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Create distinguishably measurable program impacts with judge training, scoring criteria development, and year-over-year tracking.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">04</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Long-term partnership</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Build a year-over-year relationship serving the NMSDC EYE brand, leadership, judges, and cohorts.</p>
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
              #1
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              highlight of the NMSDC national conference
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">YoY</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">increasing scores and engagement</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Full</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">house requiring venue changes</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Education quality</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">High scores increasing year-over-year as curriculum was refined and participants arrived better prepared.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Judge engagement</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Training and criteria development created more meaningful evaluation and feedback for participants.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Attendance transformation</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">From stragglers in the beginning to full houses requiring venue moves—attracting high-profile corporations, partners, family, and investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to elevate your program?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about building curriculum that creates real impact.
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
