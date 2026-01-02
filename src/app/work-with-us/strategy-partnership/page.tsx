"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StrategyPartnership() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Partnership
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            The bigger you are, the harder it is to <span className="text-[#f57214]">stay clear.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            For enterprises navigating complexity, transitions, and transformations.
          </p>
        </div>
      </section>

      {/* The Enterprise Problem */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              You have the budget. You have the team. You&apos;ve hired the agencies.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              And somehow, clarity keeps slipping away.
            </p>
          </div>
        </div>
      </section>

      {/* What Goes Wrong */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            The enterprise trap
          </p>
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Every business unit tells a different story.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Every acquisition adds another layer of confusion.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Your agency assigned you a team of juniors charging senior rates.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              Meetings multiply. Decks accumulate. Clarity evaporates.
            </p>
          </div>
        </div>
      </section>

      {/* The Cost */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              The bigger the company, the more expensive the confusion.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Misalignment at scale isn&apos;t a nuisance. It&apos;s millions in wasted motion.
            </p>
          </div>
        </div>
      </section>

      {/* What Partnership Means */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            What partnership means
          </p>
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
              Not a vendor. Not a retainer. A true strategic partner.
            </p>
          </div>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Senior strategists only</h3>
              <p className="text-xl text-[#8a8178]">Direct access to the people doing the thinking. No layers. No handoffs. No account managers between you and the work.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Deep integration</h3>
              <p className="text-xl text-[#8a8178]">We learn your business, your politics, your constraints. We become an extension of your leadership team—not an outside voice.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Ongoing, not one-time</h3>
              <p className="text-xl text-[#8a8178]">Strategy isn&apos;t a deliverable you file away. We stay with you as markets shift, priorities change, and new challenges emerge.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Outcomes over outputs</h3>
              <p className="text-xl text-[#8a8178]">We measure success by what changes in your business—not by the volume of work we produce.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategy to execution</h3>
              <p className="text-xl text-[#8a8178]">We don&apos;t just hand you a plan and walk away. When you&apos;re ready to build, we can build with you.</p>
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
              Your decisions impact millions in revenue.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You&apos;re navigating a merger, acquisition, or major market shift.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Your brand architecture has become a liability, not an asset.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              You need executive-level counsel—not another vendor relationship.
            </p>
            <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mt-8">
              You&apos;re ready for a partner who can match your complexity with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Let&apos;s talk about what&apos;s broken.
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            No pitch. No pressure. Just a conversation about where you are and where you need to be.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Start the conversation
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
