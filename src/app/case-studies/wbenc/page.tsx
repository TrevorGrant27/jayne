"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WBENCCaseStudy() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8 font-[family-name:var(--font-open-sans)]"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            WBENC
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            What if the real pitch problem isn&apos;t how you present—but what you say?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              WBENCPitch is a signature program helping women business owners strengthen their pitches and compete for funding.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              But participants needed more than presentation tips.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              They needed to get to the <span className="text-[#f57214]">root of their business clarity</span>.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8 font-[family-name:var(--font-open-sans)]">
              Many WBEs had invested in marketing—websites, logos, campaigns—but still struggled to articulate what made their business different.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
              The underlying issue wasn&apos;t about <span className="text-[#f57214]">how to present</span>.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              It was about <span className="text-[#f57214]">what to say</span>.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Without brand clarity—a clear understanding of position, promise, and value—
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              WBEs couldn&apos;t protect their businesses when opportunities came through the gateway of a pitch.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The AMPLIFY Series</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Three sessions focused on strengthening message, voice, and delivery—incorporating elements of Clarity University and the 10 Assets of a Brand methodology tested across 5,000+ brand platforms.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Brand clarity first</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Help participants gain clarity and command around their brand platform to develop an 11-second elevator pitch rooted in who they actually are—not who they think they should be.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Hands-on coaching</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Virtual sessions and in-person support at pitch competitions. Constructive feedback identifying where participants spent too much time, what was unclear, and where they rambled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The result
          </p>
          <div className="reveal">
            <div className="text-5xl md:text-7xl lg:text-9xl text-[#f57214] leading-none mb-4">
              800+
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              WBEs coached through the program
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">75</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">semi-finalists received group coaching</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">24</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">live contestants coached on-site</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">#1</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">best pitch series in WBENC history</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            What changed
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Tangible clarity</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Participants walked away able to articulate their brand&apos;s strengths with confidence and precision. The first-place winner credited the coaching as &ldquo;essential.&rdquo;</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Prepared and confident</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Every single pitch was better than the next. Everyone was prepared, on time, and had a clear ask of the room.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Gateway protection</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">&ldquo;Pitches are gateways, and if you don&apos;t know what you&apos;re inviting into the gateway, you can&apos;t protect your company.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to find your clarity?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what you actually want to say.
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
