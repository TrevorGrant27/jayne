"use client";

import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Fortune 50 Brand Transformation",
    client: "Global Consumer Goods",
    industry: "Consumer Packaged Goods",
    year: "2024",
    description: "Complete brand repositioning resulting in 34% market share growth",
    size: "large", // Takes 2/3 width
    image: "/case1.jpg"
  },
  {
    id: 2,
    title: "Market Entry Strategy",
    client: "Healthcare Technology",
    industry: "Healthcare",
    year: "2024",
    description: "Strategic launch that captured 12% market share in year one",
    size: "small",
    image: "/case2.jpg"
  },
  {
    id: 3,
    title: "Digital Ecosystem Redesign",
    client: "Financial Services",
    industry: "Finance",
    year: "2023",
    description: "User experience overhaul driving 156% increase in customer engagement",
    size: "small",
    image: "/case3.jpg"
  },
  {
    id: 4,
    title: "Purpose-Driven Rebranding",
    client: "Non-Profit Organization",
    industry: "Non-Profit",
    year: "2023",
    description: "Brand clarity that increased donations by 89% and volunteer applications by 124%",
    size: "large",
    image: "/case4.jpg"
  },
  {
    id: 5,
    title: "Product Line Innovation",
    client: "Food & Beverage",
    industry: "Consumer Goods",
    year: "2023",
    description: "Strategic product portfolio realignment generating $42M in new revenue",
    size: "small",
    image: "/case5.jpg"
  },
  {
    id: 6,
    title: "Startup to Scale",
    client: "Tech Startup",
    industry: "Technology",
    year: "2024",
    description: "Brand foundation and go-to-market strategy enabling Series B funding",
    size: "small",
    image: "/case6.jpg"
  },
];

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] leading-[0.95] tracking-tight text-[#1a1a1a]">
              Our Work
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-[#666666] max-w-3xl leading-relaxed">
              Real businesses. Real challenges. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href="#"
                className={`group relative overflow-hidden cursor-pointer ${
                  study.size === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-[#f5f3ef] overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] transition-transform duration-500 ease-out group-hover:scale-110">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#666666] text-sm font-mono">
                        {study.client}
                      </span>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#ff6b00]/0 group-hover:bg-[#ff6b00]/10 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-sm text-[#999999] mb-3">
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.year}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] leading-tight text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors duration-300 mb-4">
                    {study.title}
                  </h3>

                  <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                    {study.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-[#ff6b00] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View case study</span>
                    <svg
                      className="w-5 h-5 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">
                200+
              </div>
              <div className="text-lg md:text-xl text-[#a1a1a1]">
                Successful Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">
                15+
              </div>
              <div className="text-lg md:text-xl text-[#a1a1a1]">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">
                50+
              </div>
              <div className="text-lg md:text-xl text-[#a1a1a1]">
                Industries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-[#1a1a1a]">
            Ready to write your<br />success story?
          </h2>
          <p className="text-xl md:text-2xl text-[#666666] max-w-2xl mx-auto mb-12 leading-relaxed">
            Let&apos;s discuss how we can help your business achieve similar results.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#ff6b00]/20"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
