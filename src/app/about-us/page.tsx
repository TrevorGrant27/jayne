"use client";

import Image from "next/image";
import Link from "next/link";
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
      <section className="min-h-[60vh] flex items-center pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in">
            We&apos;re a tight team of entrepreneurs, designers, UX researchers, strategists and storytellers.
          </h1>
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
                &ldquo;After 36 years of not investing in marketing or branding, Jayne Agency led us to a sustainable process acting as our outsourced marketing arm and working with internal highly technical subject matter experts. They continue to craft our messaging and creative in a way that inspires our internal employees, partners and clients. Because everything is based on a solid brand platform (which we are now all super users of) you see the results in our ISO i90 Controls tracking, our social, employee surveys, our customer satisfaction, and our highly defensible position in the marketplace. They have supported us in developing content, copywriting and creative across all our deliverables going on 4+ years now. They are an integral and integrated part of Mercer Valve, they are our team.&rdquo;
              </p>
              <p className="text-lg text-[#8a8178]">
                — Dick Taylor, President and CEO, Mercer Valve, Co.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl leading-[1.2] text-[#1a1a1a] mb-8">
            We help organizations of all sizes overcome their most pressing challenges while building sustainable long-term growth through a brand strategy methodology developed and refined over 17 years in service of hundreds of businesses.
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] mb-16">
            Learn more about our methodology and how we can help you <span className="text-[#f57214]">↓</span>
          </p>

          <div className="reveal grid md:grid-cols-3 gap-12 lg:gap-16">
            <Link href="/work-with-us/strategy-partnership" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Partnership
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                For established enterprises navigating complex markets and competing priorities.
              </p>
              <span className="text-[#f57214] inline-flex items-center gap-1">
                Learn more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link href="/work-with-us/strategy-sprint" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Sprint
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                For businesses ready to solve their most critical blockers and unlock their next level of growth.
              </p>
              <span className="text-[#f57214] inline-flex items-center gap-1">
                See how it works <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link href="/work-with-us/clarity-university" className="group">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#f57214] transition-colors mb-4">
                Clarity University
              </h3>
              <p className="text-lg text-[#8a8178] mb-4">
                MBA-level brand strategy education + hands on guidance for solopreneurs and early stage startups.
              </p>
              <span className="text-[#f57214] inline-flex items-center gap-1">
                Explore <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
