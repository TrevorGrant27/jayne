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
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl leading-[1.1] text-[#1a1a1a] opacity-0 animate-fade-in">
            We&apos;re a tight team of entrepreneurs, designers, UX researchers, strategists and storytellers.
          </h1>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-16 text-center">
            Some companies we&apos;ve helped
          </p>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center">
            <Image src="/pepsico.png" alt="PepsiCo" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/mondelez.png" alt="Mondelēz" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/abbott.png" alt="Abbott" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/allstate.png" alt="Allstate" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/redcross.png" alt="Red Cross" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/pregis.png" alt="Pregis" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/mercer.png" alt="Mercer" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/ff.png" alt="FF" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/wbenc.png" alt="WBENC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/nmsdc.png" alt="NMSDC" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/nevermined.png" alt="Nevermined" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
            <Image src="/2818aef9ee6485cb446a0ed0f545c340.png" alt="Nationwide Insurance" width={150} height={60} className="opacity-70 grayscale hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-16">
            In their words
          </p>

          <div className="reveal grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                Jayne has become a true thought-partner to our organization and our public relations team. The team contributes regularly to much more than our brand and marketing objectives. They help us look ahead, think strategically about complex business challenges and map out authentic and integrated ways to elevate our brand and company as a whole. Their strategic approach is coupled with creative messaging that can build or refresh brand stories that are distinctive, memorable and meaningful. We have a high-performance, fast moving environment and they constantly look for ways to drive performance and make sure we never lose sight of the brand stewardship that will enable us to meet our goals.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Dache Davidson
              </p>
              <p className="text-sm text-[#9d968c]">
                Chief Marketing Officer, Pregis, LLC
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                After 36 years of not investing in marketing or branding, Jayne Agency led us to a sustainable process acting as our outsourced marketing arm and working with internal highly technical subject matter experts. They continue to craft our messaging and creative in a way that inspires our internal employees, partners and clients. Because everything is based on a solid brand platform (which we are now all super users of) you see the results in our ISO i90 Controls tracking, our social, employee surveys, our customer satisfaction, and our highly defensible position in the marketplace. They have supported us in developing content, copywriting and creative across all our deliverables going on 4+ years now. They are an integral and integrated part of Mercer Valve, they are our team.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Dick Taylor
              </p>
              <p className="text-sm text-[#9d968c]">
                President and CEO, Mercer Valve, Co.
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                The investment delivered real business value and a framework for the future.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Frank Thompson
              </p>
              <p className="text-sm text-[#9d968c]">
                Associate Director, Supplier Diversity, Mondēlez
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                The research confirmed insights around position, promise and support, helping Be Red Cross Ready make critical adjustments in brand strategy, tagline, content for best practices in marketing communication to help increase engagement. Within the first week of delivering the insights and strategic imperatives, Red Cross saw a dramatic increase in impact at a major event where the solutions and recommendations were tested.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Tom Heneghan
              </p>
              <p className="text-sm text-[#9d968c]">
                Program Manager, Community Preparedness Education and Youth Preparedness, Disaster Cycle Services, National Headquarters, American Red Cross
              </p>
            </div>

            <div className="bg-[#faf9f7] rounded-2xl p-8 lg:p-10 md:col-span-2 md:max-w-xl md:mx-auto">
              <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
              <p className="text-lg lg:text-xl text-[#1a1a1a] leading-relaxed mt-4 mb-8">
                Brooke is clearly a subject matter expert with a depth of experience working with big brands. She knows what she&apos;s talking about and provides exceptional strategic counsel while encouraging robust collaboration in the process.
              </p>
              <p className="text-base text-[#8a8178] font-medium">
                Meg Cook
              </p>
              <p className="text-sm text-[#9d968c]">
                President, Painters USA, Inc.
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
          <p className="reveal text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
            Learn more about our methodology and how we can help you <span className="text-[#f57214]">↓</span>
          </p>

          <div className="reveal">
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
