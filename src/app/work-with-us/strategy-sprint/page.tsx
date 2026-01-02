"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StrategySprint() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Sprint
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            You don&apos;t have six months.
            <br />
            <span className="text-[#f57214]">You have now.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            For growing businesses ready to solve their most critical challenge—fast.
          </p>
        </div>
      </section>

      {/* The Growing Business Problem */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              You&apos;ve built something real. Customers. Revenue. A team that believes in the mission.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              But something&apos;s holding you back from the next level.
            </p>
          </div>
        </div>
      </section>

      {/* The Symptoms */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            Sound familiar?
          </p>
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Your website doesn&apos;t match who you&apos;ve become.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Your pitch works sometimes—but you&apos;re not sure why.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              You&apos;re losing deals to competitors who aren&apos;t better, just clearer.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              You know what you do. You just can&apos;t seem to say it right.
            </p>
          </div>
        </div>
      </section>

      {/* The Constraint */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              You don&apos;t have enterprise budgets. You don&apos;t have six months to wait.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              You need clarity now—because every day without it costs you deals.
            </p>
          </div>
        </div>
      </section>

      {/* What Sprint Is */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            What Sprint is
          </p>
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
              Enterprise-grade strategy. Startup-friendly timeline.
            </p>
          </div>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Focused scope</h3>
              <p className="text-xl text-[#8a8178]">One critical challenge. One clear outcome. No scope creep, no endless discovery phases.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Compressed timeline</h3>
              <p className="text-xl text-[#8a8178]">Weeks, not months. We move fast because you need answers, not process.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Senior strategists</h3>
              <p className="text-xl text-[#8a8178]">The same people who work with Fortune 500s—now right-sized for your reality.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Ready to use</h3>
              <p className="text-xl text-[#8a8178]">You walk away with strategy you can implement immediately. Not a deck to file away.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Execution optional</h3>
              <p className="text-xl text-[#8a8178]">Need help bringing it to life? We can build it too—websites, campaigns, the works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            How it works
          </p>
          <div className="reveal-stagger space-y-16">
            <div>
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Discovery</h3>
              <p className="text-xl text-[#8a8178]">We dig into your business, your market, and your competition. We find the real problem—not the symptom.</p>
            </div>

            <div>
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategy</h3>
              <p className="text-xl text-[#8a8178]">We develop your positioning and messaging. Clear, differentiated, and designed to convert.</p>
            </div>

            <div>
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Activation</h3>
              <p className="text-xl text-[#8a8178]">We deliver everything you need to execute: messaging frameworks, guidelines, and a 90-day roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            This is for you if
          </p>
          <div className="reveal-stagger space-y-6">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You&apos;ve found product-market fit but messaging hasn&apos;t caught up.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You&apos;re between $1M and $20M and ready to scale.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You need strategy but don&apos;t want a six-month engagement.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You&apos;re making decisions now and can&apos;t afford to wait.
            </p>
            <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mt-8">
              You&apos;re ready for clarity—fast.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to move?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what&apos;s holding you back—and how fast we can fix it.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Let&apos;s talk
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
