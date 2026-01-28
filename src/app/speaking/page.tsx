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

      {/* About the Speakers */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-16">
            About the Speakers
          </p>

          <div className="space-y-16">
            {/* Brooke */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/brooke.png"
                  alt="Brooke Foley"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Brooke Foley
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Agent of Intrigue | Program Leader
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Co-founder and CEO of Jayne and Clarity University; Previous DDB, Ogilvy, Razorfish UX and Chief Creative Officer; Branding Expert for Celebrity Brands, Fortune 50s and the emerging entrepreneur sectors.
                  </p>
                  <p>
                    Investor | Author | Pitch Expert | Board Chair
                  </p>
                </div>
              </div>
            </div>

            {/* Brad */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/brad.png"
                  alt="Brad Pierce"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Brad Pierce
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Program Facilitator | Chief Strategy Officer
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Co-developer of the Clarity University® methodology and core curriculum; 13+ years at Jayne leading, facilitating, and evolving the firm&apos;s strategic approach.
                  </p>
                  <p>
                    Serves as lead strategist across engagements spanning early-stage startups to Fortune 50 enterprises; responsible for translating complex organizational, market, and brand challenges into actionable strategy frameworks.
                  </p>
                  <p>
                    Primary facilitator of Clarity University cohorts, guiding leaders through brand clarity, positioning, and growth clarity and alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Varronica */}
            <div className="reveal flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <Image
                  src="/varonnica.png"
                  alt="Varronica Kirn"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-[1.1] mb-2">
                  Varronica Kirn
                </h2>
                <p className="text-lg md:text-xl text-[#f57214] italic mb-4">
                  Program Facilitator | Brand Consultant and Strategist
                </p>
                <div className="space-y-3 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  <p>
                    Co-developer of the Clarity University® methodology and core curriculum, testing and adaptation working with Jayne custom platform partners for custom education including NMSDC (501c3), WBENC (501c3) overseeing cohorts and Jayne Private Clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
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
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
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
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
