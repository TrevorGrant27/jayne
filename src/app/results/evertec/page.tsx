"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function EverTecCaseStudy() {
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
            All Case Studies
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] font-bold mb-12 opacity-0 animate-fade-in">
            Value was hiding in product features. When we isolated it, a new narrative multiplied everything.
          </h1>

          {/* Client Info Bar */}
          <div className="opacity-0 animate-fade-in animation-delay-100 bg-[#faf9f7] rounded-lg p-8 md:p-10">
            {/* Top row - Key facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#e5e0d8] font-[family-name:var(--font-open-sans)]">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] mb-2">Client</p>
                <p className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                  <span className="text-[#f57214] text-[8px]">●</span>
                  <span>Pregis EverTec</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] mb-2">Industry</p>
                <p className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                  <span className="text-[#f57214] text-[8px]">●</span>
                  <span>Packaging Manufacturing</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] mb-2">Size</p>
                <p className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                  <span className="text-[#f57214] text-[8px]">●</span>
                  <span>3k - 5k Employees</span>
                </p>
              </div>
            </div>

            {/* Bottom row - Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8 font-[family-name:var(--font-open-sans)]">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] mb-4">Strategic Deliverables</p>
                <ul className="space-y-2 text-sm text-[#1a1a1a]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>User Research (Customer, prospective, non-buyers, Private Equity, Distributor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Brand Platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Strategic Consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Brand Change Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Content Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Sales Consulting</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] mb-4">Creative Deliverables</p>
                <ul className="space-y-2 text-sm text-[#1a1a1a]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Brand Naming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Brand Identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Collateral Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>User Experience Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57214] mt-1.5 text-[8px]">●</span>
                    <span>Content Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-8">
            Situation
          </p>
          <div className="reveal flex items-start gap-3">
            <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
              In the vortex of a pandemic, a multi-million dollar deal, a rise in ecommerce demands, and public outrage at the damage being done through the waste stream, the sale of TMS EcoMailer (now rebranded to EverTec) to Pregis was industry watershed.
            </p>
          </div>
        </div>
      </section>

      {/* Complication */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-8">
            Complication
          </p>
          <ul className="reveal space-y-4 text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
              <span>Research revealed TMS&apos;s EcoMailer&apos;s environmental promise was &ldquo;tolerated&rdquo; by distributors and large retailers...but not at a higher price point.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
              <span>The primary audience was willing to pay more for increased durability, specifically the kind the EcoMailer naturally provided due to how the mailer was designed.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
              <span>More durability meant less breakage, fewer returns, longer lifetime value of the customer—a selling point not so obvious due to the assumption that &lsquo;environmental&rsquo; was the story.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-8">
            Approach
          </p>
          <div className="reveal flex items-start gap-3">
            <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
              Jayne Agency carefully counseled the EcoMailer founders, Pregis, the new ownership organization, and the marketing team to embrace the clarity demonstrated in the research data and how to integrate that clarity – on a deliverable by deliverable, day by day basis. With ongoing demands from the sales team, new ownership, new markets, and the largest consumer of ecommerce protective packaging (Amazon) the need for clarity and alignment became urgent. Jayne Agency performed as an extension of the Pregis Marketing team, leading marketing and sales strategy partnering with Pregis&apos;s CMO and SVP of Innovation, as well as the business unit leader who innovated the original product line. With Jayne&apos;s focus on durability, vs. eco-friendly, the relationship development with Amazon became more hard hitting - for original owners, for Warburg Pinkus, for Pregis and for the multiple teams at Amazon banking on the EcoMailer solving more than just environmental concerns. By creating clear alignment and focus prior to acquisition, the value of the transaction for Warburg Pinkus increased in multiples that were industry watershed. It also secured the long term sales at Amazon to becoming the largest volume of protective packaging purchased by Amazon in the history of a single source providers. Securing the brand position based on evidence allowed Pregis (EverTec aka EcoMailer) to displace 80% of small use corrugated card board boxes - making the relationship more valuable than just the commodity of an envelope.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-8">
            Impact
          </p>
          <div className="reveal flex items-start gap-3">
            <span className="text-[#f57214] mt-2 text-[10px] flex-shrink-0">●</span>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
              Sales for EcoMailer skyrocketed with the new resources and distribution available through Pregis. A rebrand was incited to secure that the brand ownership of the original product was aligned with Pregis. Newly branded as EcoMailer now known as the award winning brand and product of EverTec has created billions of dollars of displacement and redirection of what was once a commodity, and is now a packaging solution line of over 14 products. The rebrand took place swiftly, with 100% engagement and led to increased sales commitment, driving more pressure for demand than Pregis can supply. The new brand holds an exciting position for sales, as the dominant next step to eliminate small corrugated boxes, with the upside of zero waste. The day to day marketing needs are &ldquo;ever-present&rdquo; as the demand for EverTec continues to rise across sell sheets, digital strategy, public relations, sales collateral, website, tool kits and more.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            Testimonials
          </p>
          <div className="reveal-stagger space-y-16">
            <div className="border-l-2 border-[#f57214] pl-8">
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-8">
                &ldquo;Jayne Agency has become a true thought-partner to our organization and our public relations team. The team contributes regularly to much more than our brand and marketing objectives. They help us look ahead, think strategically about complex business challenges and map out authentic and integrated ways to elevate our brand and company as a whole. Their strategic approach is coupled with creative messaging that can build or refresh brand stories that are distinctive, memorable and meaningful. We have a high-performance, fast moving environment and they constantly look for ways to drive performance and make sure we never lose sight of the brand stewardship that will enable us to meet our goals.&rdquo;
              </p>
              <p className="text-lg text-[#f57214]">
                —Dache Davidson, Chief Marketing Officer, Pregis, LLC
              </p>
            </div>

            <div className="border-l-2 border-[#f57214] pl-8">
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-8">
                &ldquo;Having worked with Jayne Agency through multiple branding and ongoing daily marketing efforts for over 4 years, one of which resulted in a major sale to Pregis, we found the strategic grounding to be helpful, not only from the business standpoint, but also from the cultural and employee engagement perspective. Their day-to-day (devil&apos;s in the details) work proved powerful through research, marketing implementation and transcends still to this day on an ongoing basis, where they remained a valued relationship upon a major transaction. They still serve the brand today, in partnership with the new ownership&apos;s marketing team and it&apos;s been a professional achievement for all of us to see the ongoing integration and elevation of the brand, the deliverables and the communications.&rdquo;
              </p>
              <p className="text-lg text-[#f57214]">
                —Stephan Carter, SVP & GM, Pregis EGV
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to unlock your value?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what your customers actually want to pay for.
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
