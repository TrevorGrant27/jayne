"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
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
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#8a8178] mb-6 opacity-0 animate-fade-in">
            Hi, we&apos;re Jayne.
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1] tracking-tight text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            Something changed.
          </h1>
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center reveal-stagger">
          <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
            Maybe you felt it coming.
          </p>
          <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
            Maybe it blindsided you.
          </p>
          <p className="text-xl md:text-2xl text-[#8a8178]">
            Either way, yesterday&apos;s story doesn&apos;t work anymore.
          </p>
        </div>
      </section>

      {/* The Failed Attempts */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
            You&apos;ve probably already tried to fix it.
          </h2>
          <div className="reveal-stagger text-xl md:text-2xl text-[#8a8178] space-y-2">
            <p>Hired the marketing people.</p>
            <p>Refreshed the logo.</p>
            <p>Spent money on things that felt like progress but weren&apos;t.</p>
          </div>
        </div>
      </section>

      {/* The Reframe */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            After 17 years and thousands of businesses
          </p>
          <h2 className="reveal text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1]">
            The problem isn&apos;t your marketing.
          </h2>
        </div>
      </section>

      {/* The Three Problems */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-24 lg:space-y-32">

          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When your team can&apos;t explain what you do the same way twice, it&apos;s not your messaging.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">clarity</span> problem.
            </p>
          </div>

          <div className="reveal text-right">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When you attract the wrong clients and lose the right ones, it&apos;s not your sales team.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">positioning</span> problem.
            </p>
          </div>

          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When growth stalls and you don&apos;t know where to focus, it&apos;s not your tactics.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">strategy</span> problem.
            </p>
          </div>

        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
            We work with leaders who know they&apos;re on the brink of something.
          </h2>
          <p className="text-xl md:text-2xl text-[#f57214] italic mb-8">
            A transaction. A transition. A transformation.
          </p>
          <p className="text-xl md:text-2xl text-[#8a8178]">
            They can&apos;t quite name what&apos;s broken or how to move forward.
          </p>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            What we do
          </p>
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1] mb-4">
              We help you name the problem.
            </h2>
            <p className="text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1]">
              Then we build the path through it.
            </p>
          </div>
          <div className="reveal mt-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-full hover:bg-[#f57214] transition-colors duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>

      {/* The Pathways */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-16 text-center">
            How we do it
          </p>
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            <Link href="/work-with-us/strategy-partnership" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Partnership
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                For organizations navigating major transitions and transformations.
              </p>
              <span className="text-[#f57214]">
                Learn more →
              </span>
            </Link>

            <Link href="/work-with-us/clarity-university" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Clarity University
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                For founders who need the methodology on their own timeline.
              </p>
              <span className="text-[#f57214]">
                Explore courses →
              </span>
            </Link>

            <Link href="/work-with-us/strategy-sprint" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Sprint
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                For growing businesses ready to solve their most critical challenge.
              </p>
              <span className="text-[#f57214]">
                See how it works →
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
