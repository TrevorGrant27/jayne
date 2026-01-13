"use client";

import Image from "next/image";
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
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#8a8178] mb-6 opacity-0 animate-fade-in">
            If you&apos;re here...
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1] tracking-tight text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            something changed
          </h1>
        </div>
      </section>

      {/* Visual connector */}
      <section className="relative -mt-8 md:-mt-12 -mb-16 md:-mb-24 opacity-0 animate-fade-in animation-delay-200">
        <div className="flex justify-center">
          <Image
            src="/Illustration 26 from Trevor.png"
            alt=""
            width={800}
            height={400}
            className="w-[90vw] md:w-[50vw] lg:w-[40vw] max-w-2xl h-auto rotate-90"
          />
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto reveal-stagger">
          <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
            Maybe you felt it coming.
          </p>
          <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
            Maybe it blindsided you.
          </p>
          <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
            Maybe you already know but it&apos;s not here yet.
          </p>
          <p className="text-xl md:text-2xl text-[#8a8178]">
            Either way, yesterday&apos;s story won&apos;t work anymore.
          </p>
        </div>
      </section>

      {/* The Failed Attempts - 3 illustrations with text */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Part 1: Top tangle */}
          <div className="reveal flex items-center gap-6 md:gap-12 mb-8 md:mb-12">
            <div className="w-24 md:w-32 flex-shrink-0">
              <Image
                src="/top tangle.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl md:text-3xl text-[#1a1a1a] leading-snug">
                Maybe you&apos;ve already tried to fix it.
              </p>
            </div>
          </div>

          {/* Part 2: Middle line (false hope) */}
          <div className="reveal flex items-center gap-6 md:gap-12 mb-8 md:mb-12">
            <div className="w-24 md:w-32 flex-shrink-0">
              <Image
                src="/falsehope.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-2xl text-[#8a8178]">Hired the marketing people.</p>
              <p className="text-lg md:text-2xl text-[#8a8178] mt-1">Refreshed the logo.</p>
            </div>
          </div>

          {/* Part 3: Bottom tangle */}
          <div className="reveal flex items-center gap-6 md:gap-12">
            <div className="w-24 md:w-32 flex-shrink-0">
              <Image
                src="/Bottomtangle.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl md:text-3xl text-[#1a1a1a] leading-snug">
                Spent money on things that felt like progress but weren&apos;t.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The Reframe */}
      <section className="pt-24 lg:pt-32 pb-8 lg:pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-12">
            After 17 years and hundreds of businesses
          </p>
          <h2 className="reveal text-5xl md:text-7xl text-[#1a1a1a] leading-[1.1]">
            The problem isn&apos;t your <span className="text-[#f57214]">marketing</span>.
          </h2>
          <div className="reveal mt-12 flex justify-center">
            <Image
              src="/Untitled Artwork 23.png"
              alt=""
              width={600}
              height={400}
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Three Problems */}
      <section className="pt-16 lg:pt-20 pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20 lg:space-y-24">

          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When your team can&apos;t explain what you do the same way twice, it&apos;s not your messaging.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">clarity</span> problem.
            </p>
          </div>

          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When you attract the wrong clients and lose the right ones, it&apos;s not your sales team.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">positioning</span> problem.
            </p>
          </div>

          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4">
              When your customers seek to lower your pricing, or it seems like you can&apos;t give your work away for free, it&apos;s not a pricing issue.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a]">
              It&apos;s a <span className="text-[#f57214]">value</span> problem.
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
      <section className="pt-24 lg:pt-32 pb-8 lg:pb-12 px-6">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
            We work with leaders who know they&apos;re on the brink of something.
          </h2>
          <p className="text-xl md:text-2xl text-[#8a8178]">
            They often can&apos;t quite name what&apos;s happening or how to <span className="text-[#f57214]">untangle</span> it.
          </p>
          <div className="mt-12 flex justify-center">
            <Image
              src="/untangletransparent.png"
              alt=""
              width={600}
              height={400}
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="pt-16 lg:pt-20 pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl text-[#1a1a1a] leading-[1.15]">
              We help you name the problem.
            </h2>
            <p className="text-5xl md:text-7xl text-[#1a1a1a] leading-[1.15] mt-4">
              Then we build the path through it.
            </p>
          </div>
          <div className="reveal mt-16">
            <Link
              href="/work-with-us"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Work with Us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
