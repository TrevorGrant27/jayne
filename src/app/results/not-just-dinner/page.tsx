"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotJustDinnerCaseStudy() {
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
            It&apos;s Not Just Dinner
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you build a brand when all you have is urgent need?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From $150 donations to $20,000 annual giving.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              It&apos;s Not Just Dinner developed out of need. Five WBEs created a 501c3 with no infrastructure, vision, mission, or brand.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              When COVID hit, developing a brand and communication platform became urgent.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              They needed to <span className="text-[#f57214]">tell their story</span> and <span className="text-[#f57214]">report their impact</span>—fast.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Foundation first</h3>
              <p className="text-xl text-[#8a8178]">Lead two brand strategy sessions—the first to form the 501c3 properly, the second to allow the brand identity to emerge.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Adaptive strategy</h3>
              <p className="text-xl text-[#8a8178]">As times around supplier development changed quickly, adjust the vision, mission, and promise to match changing realities while maintaining core identity.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Complete execution</h3>
              <p className="text-xl text-[#8a8178]">Brand strategy, identity, naming, trademark, content strategy, social media, email marketing, donation strategy, and donor outreach.</p>
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
              $20K
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              donor level achieved (up from $150-200)
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">800+</div>
              <p className="text-lg text-[#8a8178]">WBEs served globally</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">4</div>
              <p className="text-lg text-[#8a8178]">years of conference scholarships</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">$18K</div>
              <p className="text-lg text-[#8a8178]">annual donations now standard</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Powerful community</h3>
              <p className="text-xl text-[#8a8178]">A strong brand that allows emerging and existing entrepreneurs to learn to leverage supplier development inside supply chains.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Multi-faceted support</h3>
              <p className="text-xl text-[#8a8178]">A community dedicated to magic, mentorship, education, development, information, and connection.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Major donor evolution</h3>
              <p className="text-xl text-[#8a8178]">Donors evolved from $150-200 to consistently giving at $14,000, $18,000, and $20,000 annually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Urgent need became lasting impact.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug mt-2">
              That&apos;s what brand clarity makes possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to turn need into impact?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about building something that lasts.
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
