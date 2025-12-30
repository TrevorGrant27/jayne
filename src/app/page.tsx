"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered reveals
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger").forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#faf9f7] overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#ff6b00] rounded-full blur-[200px] opacity-[0.03] animate-pulse-glow" />
        <div className="absolute top-[60%] left-[5%] w-[400px] h-[400px] bg-[#ff6b00] rounded-full blur-[180px] opacity-[0.02] animate-float-slow" />
        <div className="absolute top-[80%] right-[20%] w-[300px] h-[300px] bg-[#1a1a1a] rounded-full blur-[150px] opacity-[0.02]" />
      </div>

      {/* Hero - Full viewport, minimal */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-[#767676] mb-8 opacity-0 animate-fade-in-up">
            Hi, we&apos;re Jayne.
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-[family-name:var(--font-playfair)] leading-[0.95] tracking-tight text-[#1a1a1a] opacity-0 animate-fade-in-up animation-delay-100">
            Something changed.
          </h1>

          <div className="mt-32 opacity-0 animate-fade-in-up animation-delay-400">
            <svg className="w-5 h-5 mx-auto text-[#a3a3a3] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* The Diagnosis - Flows from hero */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal-stagger">
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-6">
              Maybe you felt it coming.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-12">
              Maybe it blindsided you.
            </p>
            <p className="text-lg md:text-xl text-[#767676]">
              Either way, yesterday&apos;s story doesn&apos;t work anymore.
            </p>
          </div>
        </div>
      </section>

      {/* The Failed Attempts */}
      <section className="py-20 lg:py-24 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="reveal text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-12">
            You&apos;ve probably already tried to fix it.
          </h2>

          <div className="reveal-stagger space-y-3 text-base md:text-lg text-[#a3a3a3]">
            <p>Hired the marketing people.</p>
            <p>Refreshed the logo.</p>
            <p>Spent money on things that felt like progress but weren&apos;t.</p>
          </div>
        </div>
      </section>

      {/* The Reframe - THE moment */}
      <section className="py-32 lg:py-48 relative">
        {/* Subtle gradient backdrop for emphasis */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
          <p className="reveal text-sm md:text-base text-[#a3a3a3] uppercase tracking-[0.2em] mb-16">
            After 17 years and thousands of businesses
          </p>

          <div className="reveal reveal-delay-1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
              The problem isn&apos;t your marketing.
            </h2>

            <p className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1]">
              It&apos;s your <span className="gradient-text italic">alignment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Examples - Flowing, staggered */}
      <section className="py-32 lg:py-40 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Strategy */}
          <div className="mb-40 lg:mb-56">
            <div className="reveal-left max-w-xl">
              <p className="text-lg md:text-xl text-[#767676] leading-relaxed mb-4">
                When your team can&apos;t explain what you do in the same way twice—
              </p>
              <p className="text-sm md:text-base text-[#a3a3a3] mb-8">that&apos;s not a messaging problem.</p>
            </div>
            <p className="reveal-scale text-6xl md:text-8xl lg:text-[12rem] font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-none tracking-tight">
              Strategy.
            </p>
          </div>

          {/* Positioning */}
          <div className="mb-40 lg:mb-56 text-right">
            <div className="reveal-right max-w-xl ml-auto">
              <p className="text-lg md:text-xl text-[#767676] leading-relaxed mb-4">
                When you keep attracting the wrong clients and losing the right ones—
              </p>
              <p className="text-sm md:text-base text-[#a3a3a3] mb-8">that&apos;s not a sales problem.</p>
            </div>
            <p className="reveal-scale text-6xl md:text-8xl lg:text-[12rem] font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-none tracking-tight">
              Positioning.
            </p>
          </div>

          {/* Clarity */}
          <div>
            <div className="reveal-left max-w-xl">
              <p className="text-lg md:text-xl text-[#767676] leading-relaxed mb-4">
                When growth stalls and you can&apos;t figure out what to do next—
              </p>
              <p className="text-sm md:text-base text-[#a3a3a3] mb-8">that&apos;s not a tactics problem.</p>
            </div>
            <p className="reveal-scale text-6xl md:text-8xl lg:text-[12rem] font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-none tracking-tight">
              Clarity.
            </p>
          </div>

        </div>
      </section>

      {/* Who We Serve - Dark break */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a] relative">
        {/* Gradient edges for smooth transition */}
        <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#faf9f7] to-[#1a1a1a]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-10">
              We work with visionaries who know they&apos;re on the brink of something—
            </h2>

            <p className="text-2xl md:text-3xl lg:text-4xl gradient-text italic mb-10 font-[family-name:var(--font-playfair)]">
              a transaction, a transition, a transformation
            </p>

            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              —but can&apos;t quite name what&apos;s broken or how to move forward.
            </p>
          </div>
        </div>

        {/* Gradient edge bottom */}
        <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-b from-[#1a1a1a] to-[#faf9f7]" />
      </section>

      {/* The Promise */}
      <section className="py-40 lg:py-56 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="reveal text-sm md:text-base text-[#a3a3a3] uppercase tracking-[0.2em] mb-12">
            What we do
          </p>

          <div className="reveal reveal-delay-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight mb-6">
              We help you name the problem.
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight">
              Then we build the path through it.
            </p>
          </div>

          <div className="reveal reveal-delay-2 mt-20">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-6 text-lg font-medium bg-[#1a1a1a] text-white rounded-full hover:bg-[#ff6b00] hover:scale-105 transition-all duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>

      {/* The Pathways */}
      <section id="offerings" className="py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            <Link href="/work-with-us/strategy-partnership" className="group card-glow bg-white p-8 lg:p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-[#e5e3df]/50 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors duration-300 mb-4">
                Strategy Partnership
              </h3>
              <p className="text-[#767676] mb-8 leading-relaxed">
                For organizations navigating transactions, transitions, and transformations.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium text-sm">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/work-with-us/clarity-university" className="group card-glow bg-white p-8 lg:p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-[#e5e3df]/50 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors duration-300 mb-4">
                Clarity University
              </h3>
              <p className="text-[#767676] mb-8 leading-relaxed">
                For founders and CEOs who need the methodology on their timeline.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium text-sm">
                Explore courses
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/work-with-us/strategy-sprint" className="group card-glow bg-white p-8 lg:p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-[#e5e3df]/50 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors duration-300 mb-4">
                Strategy Sprint
              </h3>
              <p className="text-[#767676] mb-8 leading-relaxed">
                For growing businesses ready to solve their most critical challenge.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium text-sm">
                See how it works
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* The Close */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a] relative">
        {/* Gradient edge top */}
        <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-[#faf9f7] to-[#1a1a1a]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-6">
              Change is coming whether you&apos;re ready or not.
            </h2>

            <p className="text-lg md:text-xl text-white/40 mb-3">
              The question is:
            </p>

            <p className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] gradient-text italic mb-16">
              Will you steer it, or will it steer you?
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-6 text-lg font-medium bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] hover:scale-105 transition-all duration-300"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
