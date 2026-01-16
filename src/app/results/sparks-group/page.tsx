"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function SparksGroupCaseStudy() {
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
            All Results
          </Link>
          <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            National Contract Sanitation Provider
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How does a company with no marketing materials scale nationally?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From zero brand presence to scalable growth.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              This company was founded on full transparency in cost-plus billing—a revolutionary approach in the sanitation industry.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              As the only female-owned national sanitation provider, they had grown significantly. But the industry itself was becoming harder to navigate.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Competitors were <span className="text-[#f57214]">destroying the industry&apos;s reputation</span>—and they had no brand to stand apart.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8">
              With no brand or marketing materials, it was hard to:
            </p>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Grow and take on new plants.
              </p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Recruit the right talent.
              </p>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Provide the philanthropy they intended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Corporations were scrutinizing national contract sanitation suppliers more than ever.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              Leadership, board members, and decision-makers needed clear materials to evaluate and expand.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Align leadership</h3>
              <p className="text-xl text-[#8a8178]">Use proven brand strategy methodology to align leadership and create a single message around position and promise.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Educate internally and externally</h3>
              <p className="text-xl text-[#8a8178]">Build materials that could communicate the company&apos;s value to employees, partners, and prospective clients alike.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Enable scalable growth</h3>
              <p className="text-xl text-[#8a8178]">Create the repeatable, dependable foundation the company was known for—now applied to marketing and brand.</p>
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
          <div className="reveal">
            <div className="text-6xl md:text-7xl lg:text-8xl text-[#f57214] leading-none mb-4">
              Multi-Year
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              integrated growth partnership
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Fractional</div>
              <p className="text-lg text-[#8a8178]">CMO services ongoing</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">National</div>
              <p className="text-lg text-[#8a8178]">scale now achievable</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Clear market position</h3>
              <p className="text-xl text-[#8a8178]">Leadership now has clear marketing and brand materials to address expansion goals with board members and decision-making bodies.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Team integration</h3>
              <p className="text-xl text-[#8a8178]">Jayne Agency is integrated across internal and external efforts, creating a team environment between two organizations.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Scalable foundation</h3>
              <p className="text-xl text-[#8a8178]">The company can now scale with the same repeatable, dependable approach they&apos;ve always been known for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              You can&apos;t scale what you can&apos;t explain.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug mt-2">
              Now they can do both.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to build your growth foundation?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about creating materials that enable scale.
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
