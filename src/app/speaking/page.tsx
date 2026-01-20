"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Speaking() {
  useScrollReveal();

  const topics = [
    "The fundamental 10 assets of a brand platform",
    "Women and leadership / authentic leadership",
    "Increasing the power of the buy-and-sell cycle within the supply chain",
    "Elevating the diverse supply chain",
    "Engagement through brand strategy and storytelling",
    "A better time to horizon - brand and venture capital",
    "Customized brand strategy topics available upon request",
  ];

  const engagementTypes = [
    { title: "Keynotes", description: "Inspiring talks that move audiences to action" },
    { title: "Panels & Moderator", description: "Expert perspective and thoughtful facilitation" },
    { title: "Judgeship", description: "Creative, marketing, and business pitch competitions" },
    { title: "Podcasts", description: "Deep-dive conversations on brand and strategy" },
    { title: "Academia", description: "Guest teaching and speaking for universities" },
  ];

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-6 opacity-0 animate-fade-in">
            Bring brand clarity to your audience.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)]">
            Leverage Jayne Agency&apos;s brand strategy thought leadership for your business, community, or members—in-person or virtual.
          </p>
        </div>
      </section>

      {/* About the Speaker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#f5f1ea] rounded-2xl overflow-hidden relative">
                <Image
                  src="/brooke.png"
                  alt="Brooke Foley"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-4">
                About the Speaker
              </p>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] leading-[1.1] mb-4">
                Brooke Foley
              </h2>
              <p className="text-xl md:text-2xl text-[#f57214] italic mb-6">
                Agent of Intrigue
              </p>

              <div className="space-y-4 text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                <p>
                  Co-founder and CEO of Jayne Agency and Clarity University.
                </p>
                <p>
                  Previously Razorfish Chief Creative Officer and Executive Creative Director at DDB and Ogilvy.
                </p>
                <p>
                  Led creative and strategy work at Kraft, Microsoft, TD Ameritrade, Pepsico, Abbott and many other organizations from SMEs to Fortune 50.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6">
            Topics that inform & empower
          </p>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-12 font-[family-name:var(--font-open-sans)]">
            Choose from the list, or work with us to create a custom solution for your audience.
          </p>

          <div className="reveal-stagger">
            {topics.map((topic, i) => (
              <div key={i} className="border-t border-[#e5e0d8] py-6 flex items-start gap-6">
                <span className="text-[#f57214] text-2xl md:text-3xl leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xl md:text-2xl text-[#1a1a1a] leading-snug">
                  {topic}
                </p>
              </div>
            ))}
            <div className="border-t border-[#e5e0d8]"></div>
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            Types of engagements
          </p>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementTypes.map((type, i) => (
              <div key={i} className="border-t border-[#e5e0d8] pt-6">
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-2">{type.title}</h3>
                <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-3xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to bring brand clarity to your audience?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about your next event.
          </p>
          <div className="reveal">
            <Link
              href="#"
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
