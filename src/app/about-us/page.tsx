"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutUs() {
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
            We&apos;re a tight team of entrepreneurs, designers, UX researchers, strategists and storytellers.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            We specialize in helping organizations of all sizes overcome their most pressing challenges while building sustainable long-term growth through a brand strategy methodology developed and refined over 17 years and hundreds of businesses.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-16 text-center">
            Some companies we&apos;ve helped
          </p>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center">
            <Image src="/pepsico.png" alt="PepsiCo" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/mondelez.png" alt="Mondelēz" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/abbott.png" alt="Abbott" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/allstate.png" alt="Allstate" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/redcross.png" alt="Red Cross" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/pregis.png" alt="Pregis" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/mercer.png" alt="Mercer" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/ff.png" alt="FF" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/wbenc.png" alt="WBENC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/nmsdc.png" alt="NMSDC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/nevermined.png" alt="Nevermined" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-16">
            In their words
          </p>

          <div className="reveal-stagger space-y-20">
            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;Jayne has become a true thought-partner to our organization and our public relations team. The team contributes regularly to much more than our brand and marketing objectives. They help us look ahead, think strategically about complex business challenges and map out authentic and integrated ways to elevate our brand and company as a whole. Their strategic approach is coupled with creative messaging that can build or refresh brand stories that are distinctive, memorable and meaningful. We have a high-performance, fast moving environment and they constantly look for ways to drive performance and make sure we never lose sight of the brand stewardship that will enable us to meet our goals.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Dache Davidson, Chief Marketing Officer, Pregis, LLC
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;We couldn&apos;t explain what we did. Not to investors, not to customers, not even to each other. Six weeks later, our sales team was closing deals in half the time.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — CEO, Series B SaaS Company
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;We&apos;d spent $2M on agencies who gave us beautiful decks and zero clarity. Jayne gave us the strategy we actually use—every day, across every department.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — CMO, Healthcare Technology
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;For the first time in 30 years, everyone in this company can tell the same story about who we are and why we matter.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Third-Generation Owner, Manufacturing
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;I&apos;ve worked with McKinsey, Bain, and the big creative agencies. This was the first time someone told me something I didn&apos;t already know—and could actually prove it.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — VP of Strategy, Fortune 500 CPG
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;They didn&apos;t just hand us a strategy. They made sure we could defend it to the board, the investors, and ourselves.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Founder, Private Equity Portfolio Company
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;The process was uncomfortable. They pushed back on everything. And it was worth every minute.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — CEO, Industrial Services
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-8 italic">
                &ldquo;We thought we needed a rebrand. Turns out we needed to understand why our best customers chose us in the first place.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Marketing Director, B2B Technology
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
