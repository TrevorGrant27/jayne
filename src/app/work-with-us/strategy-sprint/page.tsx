"use client";

import { useEffect } from "react";

export default function StrategySprint() {
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
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in">
            This is user-centered research applied to brand strategy.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-6 opacity-0 animate-fade-in animation-delay-100">
            Which means we&apos;re not going to ask you what you think your company does. We&apos;re going to find out why your customers actually buy from you.
          </p>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            Those are rarely the same thing, and the gap between them is where most of your problems live.
          </p>
        </div>
      </section>

      {/* The Methodology - Section Header */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1]">
            The Methodology
          </h2>
        </div>
      </section>

      {/* The Methodology - Evidence-Based */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
              Evidence-based
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              We build a hypothesis, design a protocol to test it, and go gather data that would hold up in court.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Not focus groups. Not vibes. <span className="text-[#f57214]">Evidence.</span> The kind your CFO can&apos;t dismiss and your sales team can&apos;t argue with.
            </p>
          </div>
        </div>
      </section>

      {/* The Methodology - Facilitation */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
              Facilitation
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              Then we facilitate sessions with your team. Our people are trained to be immovable.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              If you want someone to validate your existing beliefs, we&apos;re expensive disappointment. If you want someone to push until you actually own your position in the market, we&apos;re useful.
            </p>
          </div>
        </div>
      </section>

      {/* The Deliverables */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
              What you get
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Ten concrete assets that define your brand platform.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Not aspirational fluff. Documented positions based on evidence. Your objectives, your barriers, your audience insights, your value articulation—all of it grounded in reality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
