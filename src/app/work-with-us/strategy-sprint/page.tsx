"use client";

import Link from "next/link";
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
            Drive dependable, repeatable, and scalable revenue in six weeks.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-12 opacity-0 animate-fade-in animation-delay-100">
            Our user-centered and evidence-based approach to brand building has been proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue.
          </p>
          <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in animation-delay-200">
            <div className="flex items-start gap-3">
              <span className="text-[#f57214] text-xl">→</span>
              <p className="text-lg text-[#8a8178]">10 concrete brand assets delivered</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#f57214] text-xl">→</span>
              <p className="text-lg text-[#8a8178]">Complete platform in six weeks</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#f57214] text-xl">→</span>
              <p className="text-lg text-[#8a8178]">We do the heavy lifting</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#f57214] text-xl">→</span>
              <p className="text-lg text-[#8a8178]">Ready to implement immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* User-Centered Research */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-3xl md:text-5xl leading-[1.2] text-[#1a1a1a] mb-8">
            This is user-centered research applied to brand strategy.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-6">
            Which means we&apos;re not going to ask you what you think your company does. We&apos;re going to find out why your customers actually buy from you.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            Those are rarely the same thing, and the gap between them is where most of your problems live.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1] mb-16">
            The Process
          </h2>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-4">
                Weeks 1–2
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Discovery & Research</h3>
              <p className="text-xl text-[#8a8178]">We gather evidence about your customers and market. You provide access; we do the work.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-4">
                Weeks 3–4
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategy Sessions</h3>
              <p className="text-xl text-[#8a8178]">Facilitated working sessions with your team. We guide you through every decision.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-4">
                Weeks 5–6
              </p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Platform Delivery</h3>
              <p className="text-xl text-[#8a8178]">Complete brand platform with 10 assets. Ready to implement immediately.</p>
            </div>
          </div>
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

      {/* The Experience */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
              The experience
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              We do the heavy lifting.
            </p>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
                You don&apos;t need to prepare anything—we guide you through every step.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
                One focused engagement, not months of workshops and reviews.
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
                Our facilitation is intensive so yours doesn&apos;t have to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
              What you get
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Ten concrete assets that define your brand platform.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-12">
              Not aspirational fluff. Documented positions based on evidence. Everything you need to eliminate the endless debates about messaging and get your entire team aligned.
            </p>
          </div>
          <div className="reveal-stagger grid md:grid-cols-2 gap-4">
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Brand positioning statement</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Value proposition</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Audience insights documentation</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Competitive differentiation</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Messaging framework</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Brand voice guidelines</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Visual direction recommendations</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Marketing priority roadmap</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-[#e5e0d8]">Team alignment playbook</p>
            <p className="text-lg text-[#1a1a1a] py-3 border-t border-b border-[#e5e0d8]">Implementation guide</p>
          </div>
        </div>
      </section>

      {/* This Is For You If */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            This is for you if
          </p>
          <div className="reveal-stagger space-y-6">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You&apos;re tired of strategy processes that drag on for months.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Your team debates messaging in every meeting.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You need clarity you can actually implement.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You want evidence, not opinions.
            </p>
            <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mt-8">
              You&apos;re ready to move fast.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to get clear?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Six weeks from now, you could have complete brand clarity.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a discovery call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
