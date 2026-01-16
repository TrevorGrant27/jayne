"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HornitosCaseStudy() {
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
            Hornitos
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you make bartenders fall in love with a tequila?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From overlooked import to must-have mixology essential.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              Hornitos was a globally renowned mixing tequila.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              But in the U.S., bartenders overlooked it, preferring familiar brands.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The question wasn&apos;t <span className="text-[#f57214]">&ldquo;how do we advertise?&rdquo;</span>
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              It was &ldquo;how do we create an experience they&apos;ll never forget?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              We stopped trying to <span className="text-[#f57214]">tell</span> bartenders about the tequila.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              We let them discover its flexible nature for themselves.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Problem</h3>
              <p className="text-xl text-[#8a8178]">Hornitos was globally renowned, but U.S. bartenders overlooked it. They preferred familiar brands. Traditional advertising wasn&apos;t breaking through.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Solution</h3>
              <p className="text-xl text-[#8a8178]">Create a consumer (and bartender) event around mixology. Make the tequila and its flexible nature unforgettable through hands-on experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Execution */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The execution
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Nimble process</h3>
              <p className="text-xl text-[#8a8178]">Training NYC bartenders live as a means to force education and mixology usage.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Innovative solutions</h3>
              <p className="text-xl text-[#8a8178]">Branded mixology handbook developed to further engage bartenders and consumers post event.</p>
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
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="text-7xl md:text-8xl text-[#f57214] leading-none mb-2">83%</div>
              <p className="text-xl text-[#8a8178]">open rate</p>
            </div>
            <div>
              <div className="text-7xl md:text-8xl text-[#f57214] leading-none mb-2">79%</div>
              <p className="text-xl text-[#8a8178]">attendance</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Bartender advocacy</h3>
              <p className="text-xl text-[#8a8178]">NYC&apos;s top bartenders became brand ambassadors, recommending Hornitos to customers and peers.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Cultural moment</h3>
              <p className="text-xl text-[#8a8178]">Partnership with Bon Jovi&apos;s 25th anniversary and Showtime created massive cultural relevance.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Lasting engagement</h3>
              <p className="text-xl text-[#8a8178]">The &ldquo;Mischievous Cocktails&rdquo; handbook extended the experience beyond the event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Experience beats advertising.
            </p>
            <p className="text-3xl md:text-4xl text-[#8a8178] leading-snug mt-2">
              Every time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to create experiences that stick?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about turning your audience into advocates.
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
