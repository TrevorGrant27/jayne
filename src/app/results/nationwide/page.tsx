"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NationwideCaseStudy() {
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
            Nationwide
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you turn required compliance reporting into competitive advantage?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From data silos to unified brand clarity.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              Nationwide was required to prove plan performance to end clients—large organizations and plan sponsors demanding tangible evidence.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              But they also wanted to improve marketing and communications at both B2B and B2C levels.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Meeting both mandates <span className="text-[#f57214]">simultaneously</span> introduced significant complexity.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              Key challenges emerged:
            </p>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                <span className="text-[#f57214]">Data without narrative:</span> Metrics existed, but didn&apos;t translate into compelling stories.
              </p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                <span className="text-[#f57214]">Dual-audience tension:</span> Messaging needed to work for B2B decision-makers and B2C plan users.
              </p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                <span className="text-[#f57214]">Under-leveraged insight:</span> Reporting risked becoming compliance exercise rather than strategic asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Nationwide needed a way to connect proof of performance with perception of value.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              Transforming required satisfaction deliverables into strategic advantage.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Annual satisfaction surveys</h3>
              <p className="text-xl text-[#8a8178]">Design and analyze surveys capturing how people actually experienced plans across tools, service, communication, and ease of use—tracking patterns year over year.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Competitive landscape analysis</h3>
              <p className="text-xl text-[#8a8178]">At key moments, step back to examine how Nationwide was showing up, where competitors were sounding the same, and where Nationwide had real strengths not being communicated.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Connect the efforts</h3>
              <p className="text-xl text-[#8a8178]">Translate satisfaction data and competitive insight into clearer messaging and stronger communication for both decision-makers and plan users.</p>
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
            <div className="text-6xl md:text-7xl lg:text-8xl text-[#f57214] leading-none mb-4">
              Multi-Year
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              strategic partnership with Fortune 100 enterprise
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">24K+</div>
              <p className="text-lg text-[#8a8178]">employees supported</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">YoY</div>
              <p className="text-lg text-[#8a8178]">consistent data tracking</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Clearer view</h3>
              <p className="text-xl text-[#8a8178]">Nationwide gained reliable insight into what mattered most to clients and plan users, backed by consistent data gathered year after year.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Better communication</h3>
              <p className="text-xl text-[#8a8178]">Marketing and messaging now aligned with real experience, not assumptions—working for both B2B and B2C audiences.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Informed decisions</h3>
              <p className="text-xl text-[#8a8178]">Instead of isolated reports, Nationwide had insight, language, and perspective needed to better serve partners and plan users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Required reporting became strategic asset.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug mt-2">
              The impact was clarity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to turn data into clarity?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about connecting proof with perception.
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
