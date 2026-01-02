"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutUs() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero - The Break */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#8a8178] mb-6 opacity-0 animate-fade-in">
            We spent two decades inside the machine.
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            We saw what works.
            <br />
            We saw what doesn&apos;t.
            <br />
            <span className="text-[#f57214]">We left.</span>
          </h1>
        </div>
      </section>

      {/* The Credentials - Earned, Then Rejected */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              Our founder was Executive Creative Director at Ogilvy. Chief Creative Officer at Razorfish. The big offices. The big clients. The big budgets.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              And after watching millions of dollars disappear into decks that gathered dust, she walked away to build something that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* What We Reject */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            What we reject
          </p>
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              The six-month timelines.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              The $500k minimums.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              The 47-page strategy decks that no one implements.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              The layers of account managers between you and the actual strategist.
            </p>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
              The billable hour that incentivizes busywork over breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* What We Built Instead */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            What we built instead
          </p>
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              A methodology refined over 17 years.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-6">
              Direct access to senior strategists—no layers, no handoffs.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-6">
              Engagements sized to your reality, not our overhead.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              Outcomes you can measure, not outputs you can count.
            </p>
          </div>
        </div>
      </section>

      {/* The Proof - Client Logos */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-16">
            We&apos;ve worked with
          </p>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 items-center opacity-60">
            {/* Replace with actual client logos */}
            <div className="text-2xl text-[#8a8178] font-medium">Fortune 50</div>
            <div className="text-2xl text-[#8a8178] font-medium">Series A Startups</div>
            <div className="text-2xl text-[#8a8178] font-medium">Private Equity</div>
            <div className="text-2xl text-[#8a8178] font-medium">Family Businesses</div>
            <div className="text-2xl text-[#8a8178] font-medium">Healthcare</div>
            <div className="text-2xl text-[#8a8178] font-medium">SaaS</div>
            <div className="text-2xl text-[#8a8178] font-medium">Manufacturing</div>
            <div className="text-2xl text-[#8a8178] font-medium">Professional Services</div>
          </div>
          <p className="reveal text-xl text-[#8a8178] mt-16">
            From startups finding their first message to Fortune 50 companies rediscovering theirs.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-16">
            In their words
          </p>

          <div className="reveal-stagger space-y-20">
            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;We couldn&apos;t explain what we did. Not to investors, not to customers, not even to each other. Six weeks later, our sales team was closing deals in half the time.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — CEO, Series B SaaS Company
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;We&apos;d spent $2M on agencies who gave us beautiful decks and zero clarity. Jayne gave us the strategy we actually use—every day, across every department.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — CMO, Healthcare Technology
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;For the first time in 30 years, everyone in this company can tell the same story about who we are and why we matter.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Third-Generation Owner, Manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder's Why */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              &ldquo;I left because I was tired of watching good companies waste money on the wrong problems.&rdquo;
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              The agency model is built for agencies, not clients. Long timelines justify big retainers. Complex deliverables justify complex fees. But none of it matters if you still can&apos;t answer the only question that counts: <em>why should anyone choose you?</em>
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed">
              That&apos;s the question we answer. Everything else is noise.
            </p>
            <p className="text-lg text-[#9d968c] mt-12">
              — Jayne, Founder
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready for clarity?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what&apos;s actually broken—and how to fix it.
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
