"use client";

import { useEffect } from "react";

export default function StrategySprint() {
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
            Drive dependable, repeatable, and scalable revenue in six weeks.
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            Our <span className="text-[#f57214]">evidence-based</span> approach to brand building has been proven globally over 17 years with hundreds of businesses ranging from $20K to $2B in revenue.
          </p>
        </div>
      </section>
    </main>
  );
}
