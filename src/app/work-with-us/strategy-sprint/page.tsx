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
            Drive dependable, repeatable, and scalable revenue in six weeks.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            Our <span className="text-[#f57214]">evidence-based</span> approach to brand building has been proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue.
          </p>
        </div>
      </section>

      {/* Week 1: The Strategy Session */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            Week 1
          </p>
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-12">
            The Strategy Session
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            An eight-hour, expertly facilitated deep-dive into the 10 evidence-based elements that define your brand.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            This isn&apos;t a workshop where everyone shares feelings and leaves with vague inspiration. This is a rigorous, structured process that extracts the provable reality of your business.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            The session includes your key stakeholders. The debates happen in the room, facilitated by professionals trained to push through discomfort to clarity. Everyone leaves on the same page.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-4">
            By the end of the day, we&apos;ve captured everything we need. You&apos;ve done the hard work. Now we take over.
          </p>
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest">
            Your time investment: One full day
          </p>
        </div>
      </section>

      {/* Weeks 2 & 3 */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            Weeks 2 &amp; 3
          </p>
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-12">
            We Build Your Platform
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            While you get back to running your business, our strategists integrate everything—including the conflicting perspectives—into a cohesive brand platform.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            We cross-check, challenge, pressure-test, and create alternatives. We consolidate 60+ pages of input into a focused 16-page platform.
          </p>
        </div>
      </section>

      {/* Week 4: Alignment Review */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            Week 4
          </p>
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-12">
            Alignment Review
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            We present your draft platform to your team. Your job: be critics.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed">
            What doesn&apos;t sit right? What needs refinement? What&apos;s missing? This is a collaborative session where we kick the tires together and refine until it feels unmistakably yours.
          </p>
        </div>
      </section>

      {/* Week 5 & 6: Final Delivery */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            Weeks 5 &amp; 6
          </p>
          <h2 className="reveal text-4xl md:text-6xl text-[#1a1a1a] leading-[1.1] mb-12">
            Final Delivery
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
            We incorporate your feedback and deliver your completed Brand Platform—a comprehensive document containing all 10 assets, fully refined and ready to use.
          </p>
          <p className="reveal text-xl md:text-2xl text-[#1a1a1a] leading-relaxed">
            Plus: An action plan for your top three marketing priorities so you can start executing immediately.
          </p>
        </div>
      </section>
    </main>
  );
}
