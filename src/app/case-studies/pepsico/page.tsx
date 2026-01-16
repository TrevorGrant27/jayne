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
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-12"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-base text-[#f57214] uppercase tracking-widest mb-8 opacity-0 animate-fade-in">
            PepsiCo
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1] text-[#1a1a1a] mb-10 opacity-0 animate-fade-in animation-delay-100">
            What if your supply chain could change the world?
          </h1>
          <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            $250 million in spending power. Not a checkbox.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal space-y-12">
            <div>
              <p className="text-lg text-[#8a8178] mb-4">The question wasn&apos;t</p>
              <p className="text-2xl md:text-3xl text-[#8a8178] line-through decoration-[#f57214]/50">
                &ldquo;How do we track diverse suppliers?&rdquo;
              </p>
            </div>
            <div>
              <p className="text-lg text-[#8a8178] mb-4">It was</p>
              <p className="text-3xl md:text-5xl text-[#1a1a1a] leading-tight">
                &ldquo;How do we build an engine that creates opportunity at scale?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-16">
            The approach
          </p>
          <div className="reveal-stagger space-y-20">
            <div>
              <p className="text-lg text-[#8a8178] mb-4">Challenge</p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Transform a compliance program into an enterprise platform.
              </p>
            </div>
            <div>
              <p className="text-lg text-[#8a8178] mb-4">Response</p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Rally internal advocates. Leverage existing style guides. Speak to PepsiCo&apos;s performance culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-16">
            The impact
          </p>
          <div className="reveal mb-24">
            <p className="text-[8rem] md:text-[12rem] lg:text-[16rem] text-[#f57214] leading-none font-light tracking-tight">
              $800MM
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] mt-4">
              forecasted diverse supplier spend
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-3 gap-8 md:gap-16">
            <div>
              <p className="text-4xl md:text-6xl text-[#1a1a1a] leading-none mb-2">335</p>
              <p className="text-base text-[#8a8178]">suppliers activated</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl text-[#1a1a1a] leading-none mb-2">23</p>
              <p className="text-base text-[#8a8178]">categories transformed</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl text-[#1a1a1a] leading-none mb-2">35+</p>
              <p className="text-base text-[#8a8178]">years deepened</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base text-[#f57214] uppercase tracking-widest mb-16">
            What changed
          </p>
          <div className="reveal-stagger space-y-16">
            <h3 className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              A pipeline of qualified suppliers. Ready.
            </h3>
            <h3 className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Fresh perspectives driving new ideas.
            </h3>
            <h3 className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Streamlined processes. Ecosystem-wide.
            </h3>
          </div>
        </div>
      </section>

      {/* Kicker */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-4xl md:text-6xl text-[#1a1a1a] leading-tight">
              Impact beyond the supply chain.
            </p>
            <p className="text-4xl md:text-6xl text-[#8a8178] leading-tight mt-2">
              That&apos;s the part that matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-8">
            So, what if your supply chain could change the world?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-12">
            Let&apos;s talk about how we can make that happen.
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
