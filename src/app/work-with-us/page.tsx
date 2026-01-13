"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function WorkWithUs() {
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
      <section className="min-h-[60vh] flex items-center pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-6 opacity-0 animate-fade-in">
            A complete path to dependable, repeatable, and scalable revenue, in six weeks.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            Our approach to brand strategy has been proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue.
          </p>
        </div>
      </section>

      {/* 10 Assets Graphic */}
      <section className="py-8 lg:py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/10assets.png"
            alt="The 10 brand assets"
            width={896}
            height={600}
            className="w-full h-auto reveal"
          />
        </div>
      </section>

      {/* The Path We Build Together */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            The path we build together
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            These 10 brand assets hold the levers, controls, opportunity, creativity, boundaries, and blue sky on your finances, marketing, culture, market share and innovation. Success comes when you nail all 10. With our help, you will.
          </p>
        </div>
      </section>

      {/* The 10 Brand Assets */}
      <section className="py-8 lg:py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">1. Goals</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                Your north star is financial. Goals define the business outcomes your brand must deliver—they&apos;re the measurable targets that keep your organization solvent and growing. Every brand decision flows from here.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">2. Objectives</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                S.M.A.R.T. objectives translate goals into action. They sharpen focus, track progress, and align your teams across finance, marketing, and operations. Objectives answer one question: what exactly are we trying to accomplish, and how will we know when we&apos;ve done it?
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">3. Barriers</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                What&apos;s standing in your way? Barriers expose the obstacles—internal and external—that could derail success. Identifying them early helps you prioritize investments, build smarter plans, and create alignment across teams, departments, and leadership.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">4. Strategies</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                Strategies are where you place your bets. They&apos;re the deliberate investments of time, talent, energy, and budget designed to overcome barriers and deliver on your objectives. Good strategies are focused, resourced, and directly tied to measurable outcomes.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">5. Audience</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                One primary. Two secondary. Tertiary as needed. But here&apos;s the key: get the primary audience right, and it radiates outward—reaching all the audiences that matter. Precision here unlocks everything downstream.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">6. Insight</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed mb-2">
                Insight is truth distilled into four layers:
              </p>
              <ul className="text-lg text-[#8a8178] leading-relaxed space-y-1 ml-6">
                <li><span className="text-[#1a1a1a]">Overarching Insight:</span> The undeniable human truth</li>
                <li><span className="text-[#1a1a1a]">Behavioral Truth:</span> A consistent pattern your audience demonstrates</li>
                <li><span className="text-[#1a1a1a]">Unmet Need:</span> What they&apos;re not getting from your category</li>
                <li><span className="text-[#1a1a1a]">Brand Offering:</span> How your brand uniquely solves that gap</li>
              </ul>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">7. Position</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                Your position is your filter. It attracts the right clients, talent, and opportunities—and deflects what doesn&apos;t belong. It determines which shortlists you land on, who wants to work for you, and whether what you promise aligns with who you hire.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">8. Promise</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                This is what you deliver—day in, day out. It&apos;s not a tagline or a clever turn of phrase. Your promise is real, valuable, and provable. It&apos;s what you&apos;d stake your reputation on in a court of law.
              </p>
            </div>

            <div className="reveal border-t border-[#e5e0d8] pt-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">9. Support</h3>
              <p className="text-lg text-[#8a8178] leading-relaxed">
                Proof points. Evidence. Demonstrations that your promise isn&apos;t just words. Support is how you show—not tell—that your brand delivers on what it claims.
              </p>
            </div>

            <div className="reveal border-t border-b border-[#e5e0d8] pt-4 pb-4">
              <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">10. Tone &amp; Personality</h3>
              <ul className="text-lg text-[#8a8178] leading-relaxed space-y-1">
                <li><span className="text-[#1a1a1a]">Tone:</span> How your brand speaks—the words, cadence, and voice it uses</li>
                <li><span className="text-[#1a1a1a]">Personality:</span> How your brand behaves—the actions, beliefs, and character it embodies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Week 1: The Strategy Sprint */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-3">
            Week 1
          </p>
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            The Strategy Sprint
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
            An eight-hour, expertly facilitated deep-dive into the 10 evidence-based elements that define your brand.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
            This isn&apos;t a workshop where everyone shares feelings and leaves with vague inspiration. This is a rigorous, structured process that extracts the provable reality of your business.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
            The session includes your key stakeholders. The debates happen in the room, facilitated by professionals trained to push through discomfort to clarity. Everyone leaves on the same page.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            By the end of the day, we&apos;ve captured everything we need. You&apos;ve done the hard work. Now we take over.
          </p>
        </div>
      </section>

      {/* Weeks 2 & 3 */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-3">
            Weeks 2 &amp; 3
          </p>
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            We Build Your Platform
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
            While you get back to running your business, our strategists integrate everything—including the conflicting perspectives—into a cohesive brand platform.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            We cross-check, challenge, pressure-test, and create alternatives. We consolidate 60+ pages of input into a focused 16-page platform.
          </p>
        </div>
      </section>

      {/* Week 4: Alignment Review */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-3">
            Week 4
          </p>
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            Alignment Review
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
            We present your draft platform to your team. Your job: be critics.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            What doesn&apos;t sit right? What needs refinement? What&apos;s missing? This is a collaborative session where we kick the tires together and refine until it feels unmistakably yours.
          </p>
        </div>
      </section>

      {/* Week 5 & 6: Final Delivery */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-3">
            Weeks 5 &amp; 6
          </p>
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            Final Delivery
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            We incorporate your feedback and deliver your completed Brand Platform—a comprehensive document containing all 10 assets, fully refined and ready to use.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-6">
            What happens next?
          </h2>
        </div>
      </section>
    </main>
  );
}
