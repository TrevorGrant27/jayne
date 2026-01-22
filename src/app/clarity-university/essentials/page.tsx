"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cohorts = [
  {
    month: "January",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, January 6, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, January 20, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, January 27, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "February",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, February 3, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, February 17, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, February 24, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "March",
    status: "OPEN",
    stripeUrl: "https://buy.stripe.com/5kAdRCdJPbzkfv23cK",
    weeks: [
      { week: 1, date: "Monday, March 3, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, March 17, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, March 24, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "April",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, April 7, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, April 21, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, April 28, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "May",
    status: "OPEN",
    stripeUrl: "https://buy.stripe.com/28o3cYcFLgTEaaI4go",
    weeks: [
      { week: 1, date: "Monday, May 5, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, May 19, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, May 26, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "June",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, June 2, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, June 16, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, June 23, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "July",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, July 7, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, July 21, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, July 28, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "August",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, August 4, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, August 18, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, August 25, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "September",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, September 8, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, September 22, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, September 29, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "October",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, October 6, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, October 20, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, October 27, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "November",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, November 3, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, November 17, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, November 24, 2025 | 11:00am – 12:00pm CT",
  },
  {
    month: "December",
    status: "CLOSED",
    stripeUrl: "",
    weeks: [
      { week: 1, date: "Monday, December 1, 2025", time: "11:00am – 1:00pm CT", title: "Brand Platform Primer" },
      { week: 2, date: "N/A", time: "", title: "Independent Workbook Completion" },
      { week: 3, date: "Monday, December 15, 2025", time: "11:00am – 12:00pm CT", title: "Live Q&A Webinar" },
      { week: 4, date: "N/A", time: "", title: "N/A" },
    ],
    aiAddon: "Monday, December 22, 2025 | 11:00am – 12:00pm CT",
  },
];

export default function EssentialsRegistration() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/clarity-university"
            className="text-[#f57214] hover:text-[#1a1a1a] transition-colors font-[family-name:var(--font-open-sans)] text-sm mb-6 inline-flex items-center gap-2"
          >
            <span>←</span> Back to Clarity University
          </Link>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in mb-8 uppercase tracking-wide">
            Essentials Package Cohort Registration and Payment
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)] leading-relaxed">
            Ideal for those who value independence and control over the branding process, these sessions are designed to provide the essential tools and insights you need to get started on your brand strategy without a heavy time commitment. Dive into the &ldquo;why&rdquo; of effective branding and learn how to apply these principles in your own way, at your own pace.
          </p>
        </div>
      </section>

      {/* Select Month */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-12">
            Select your month below:
          </h2>

          <div className="space-y-8">
            {cohorts.map((cohort) => (
              <div
                key={cohort.month}
                className="reveal bg-[#faf9f7] rounded-2xl p-8 lg:p-10"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-[#e5e0d8]">
                  <h3 className="text-2xl md:text-3xl text-[#1a1a1a]">{cohort.month}</h3>
                  <span className={`text-sm font-semibold uppercase tracking-widest font-[family-name:var(--font-open-sans)] ${
                    cohort.status === "OPEN" ? "text-[#f57214]" : "text-[#8a8178]"
                  }`}>
                    ESSENTIALS – {cohort.status}
                  </span>
                </div>

                {/* Week Schedule */}
                <div className="space-y-4 mb-8">
                  {cohort.weeks.map((week) => (
                    <div key={week.week} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                      <span className="text-[#f57214] font-semibold font-[family-name:var(--font-open-sans)] md:w-20 shrink-0">
                        Week {week.week}:
                      </span>
                      <div className="flex-1">
                        <p className="text-[#1a1a1a] font-medium font-[family-name:var(--font-open-sans)]">
                          {week.title}
                        </p>
                        {week.date !== "N/A" && (
                          <p className="text-[#8a8178] text-sm font-[family-name:var(--font-open-sans)]">
                            {week.date} | {week.time}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Add-On */}
                <div className="bg-[#f5f1ea] rounded-lg p-4 mb-8">
                  <p className="text-sm font-semibold text-[#1a1a1a] font-[family-name:var(--font-open-sans)] mb-1">
                    AI Educational Add-On
                  </p>
                  <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                    {cohort.aiAddon}
                  </p>
                </div>

                {/* CTA Button */}
                {cohort.status === "OPEN" ? (
                  <a
                    href={cohort.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full md:w-auto"
                  >
                    Secure Your Spot
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#ccc] text-white rounded-lg w-full md:w-auto cursor-not-allowed">
                    Registration Closed
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Not sure if Essentials is right for you?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Compare all packages or talk it through with us.
          </p>
          <div className="reveal flex flex-wrap gap-4">
            <Link
              href="/clarity-university"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Compare Packages
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
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
