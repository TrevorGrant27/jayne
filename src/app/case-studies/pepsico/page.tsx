"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PepsiCoCaseStudy() {
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
      {/* Navigation */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            PepsiCo
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            $250 million was going somewhere. The question was where—and to whom.
          </h1>
        </div>
      </section>

      {/* The Tension */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal space-y-8">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
              PepsiCo had committed to supplier diversity. Real money. Real intention.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              But intention doesn&apos;t build pipelines. And a spreadsheet isn&apos;t a strategy.
            </p>
          </div>
        </div>
      </section>

      {/* The Reframe */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal space-y-12">
            <p className="text-xl text-[#8a8178]">
              The brief asked us to improve tracking. We asked a different question:
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              How might we turn supplier diversity from something PepsiCo reports on into something PepsiCo is known for?
            </p>
          </div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-12">
            What we learned
          </p>
          <div className="reveal-stagger space-y-10">
            <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed">
              The advocates were already inside. Procurement leaders, category managers, people who believed in the mission but didn&apos;t have the language to champion it.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              They didn&apos;t need permission. They needed a story they could tell.
            </p>
          </div>
        </div>
      </section>

      {/* What We Did */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-12">
            What we did
          </p>
          <div className="reveal-stagger space-y-10">
            <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed">
              We built that story. Not as a campaign—as a platform. Tools, talking points, and a narrative that connected supplier diversity to what PepsiCo already cared about: performance.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Then we equipped the believers to spread it.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24 lg:py-32 px-6 bg-[#f5f1ea]">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-12">
            The shift
          </p>
          <div className="reveal-stagger space-y-6">
            <div className="flex items-start gap-6">
              <p className="text-xl text-[#8a8178] line-through">Compliance obligation</p>
              <span className="text-[#f57214]">→</span>
              <p className="text-xl text-[#1a1a1a]">Competitive advantage</p>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-xl text-[#8a8178] line-through">Annual report</p>
              <span className="text-[#f57214]">→</span>
              <p className="text-xl text-[#1a1a1a]">Operating system</p>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-xl text-[#8a8178] line-through">HR initiative</p>
              <span className="text-[#f57214]">→</span>
              <p className="text-xl text-[#1a1a1a]">Enterprise platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-16">
            Where it went
          </p>
          <div className="reveal mb-20">
            <p className="text-6xl md:text-8xl text-[#f57214] leading-none mb-4">
              $800MM
            </p>
            <p className="text-xl text-[#8a8178]">
              in forecasted diverse supplier spend
            </p>
          </div>

          <div className="reveal-stagger space-y-8">
            <div className="flex items-baseline gap-4">
              <p className="text-4xl md:text-5xl text-[#1a1a1a]">335</p>
              <p className="text-lg text-[#8a8178]">diverse suppliers activated</p>
            </div>
            <div className="flex items-baseline gap-4">
              <p className="text-4xl md:text-5xl text-[#1a1a1a]">23</p>
              <p className="text-lg text-[#8a8178]">categories transformed</p>
            </div>
            <div className="flex items-baseline gap-4">
              <p className="text-4xl md:text-5xl text-[#1a1a1a]">35+</p>
              <p className="text-lg text-[#8a8178]">years of relationships deepened</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed mb-6">
              The money was always there. What changed was the story around it.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed">
              Impact beyond the supply chain. That&apos;s the part that matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed mb-10">
            What story is your organization waiting to tell?
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-lg text-[#f57214] hover:text-[#1a1a1a] transition-colors"
            >
              Let&apos;s find out
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
