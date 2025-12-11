"use client";

import { useState } from "react";
import Link from "next/link";

export default function WorkWithUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#f5f3ef] via-white to-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6b00] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Main heading */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[1.1] text-[#1a1a1a] mb-6">
              Let&apos;s work together.
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto">
              Here&apos;s what happens when you work with us:
            </p>
          </div>

          {/* Three column benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Benefit 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff6b00] mb-4">
                    Get Clear
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  Crystal clear. About who you are, what you stand for, and why it matters.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff6b00] mb-4">
                    Get Aligned
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  Everyone rowing in the same direction. No more confusion about what you&apos;re building or who it&apos;s for.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#ff6b00]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff6b00] mb-4">
                    Get Momentum
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  Real, measurable growth. The kind that compounds because it&apos;s built on a foundation that actually works.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-[#ff6b00]/5 blur-xl rounded-full"></div>
              <p className="relative text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] italic text-[#ff6b00] px-8 py-4">
                No fluff. No generic frameworks.<br />Just strategy that fits your reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-20 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl leading-tight text-[#ff6b00] mb-6">
              Where are you in your journey?
            </h2>
            <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
              Different stages require different strategies.<br />Here&apos;s how we meet you where you&nbsp;are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="flex flex-col items-center">
              <div className="text-center mb-8 min-h-[140px] flex items-center px-4">
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  You&apos;re an established enterprise navigating complex markets and competing priorities.
                </p>
              </div>
              <div className="mb-8">
                <svg className="w-12 h-12 text-[#ff6b00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-[#ff6b00] w-full text-center">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Strategy Partnership
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  Deep partnership. Guaranteed outcomes. Built for scale.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-center mb-8 min-h-[140px] flex items-center px-4">
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  You&apos;re between $1M-$20M and ready to unlock your next level of growth.
                </p>
              </div>
              <div className="mb-8">
                <svg className="w-12 h-12 text-[#ff6b00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-[#ff6b00] w-full text-center">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Strategy Sprint
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  Focused. Fast. Designed to solve your most critical challenge.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-center mb-8 min-h-[140px] flex items-center px-4">
                <p className="text-lg leading-relaxed text-[#1a1a1a]">
                  You&apos;re a solopreneur, small business, or startup wanting to build your own strategy with our help.
                </p>
              </div>
              <div className="mb-8">
                <svg className="w-12 h-12 text-[#ff6b00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-[#ff6b00] w-full text-center">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  Clarity University
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  Learn our methodology. At your pace. On your budget.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl md:text-2xl text-[#1a1a1a] font-semibold mb-10">
              Not sure which path fits? Let&apos;s figure it out together.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] text-white rounded-full hover:shadow-xl hover:shadow-[#ff6b00]/40 hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl leading-tight text-[#1a1a1a]">
                Start a conversation.
              </h2>
              <p className="mt-6 text-lg text-[#666666] leading-relaxed">
                Tell us about your organization and the challenges you&apos;re
                facing. We&apos;ll get back to you within 48 hours to discuss how
                we might help.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider text-[#666666] mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@jayneagency.com"
                    className="text-lg text-[#1a1a1a] hover:text-[#ff6b00] transition-colors"
                  >
                    hello@jayneagency.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="p-8 bg-white border-2 border-[#e5e3df] rounded-2xl text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ff6b00]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#ff6b00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                    Message received.
                  </h3>
                  <p className="text-[#666666]">
                    We&apos;ll be in touch within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border-2 border-[#e5e3df] rounded-lg focus:outline-none focus:border-[#ff6b00] transition-colors text-[#1a1a1a]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border-2 border-[#e5e3df] rounded-lg focus:outline-none focus:border-[#ff6b00] transition-colors text-[#1a1a1a]"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border-2 border-[#e5e3df] rounded-lg focus:outline-none focus:border-[#ff6b00] transition-colors text-[#1a1a1a]"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border-2 border-[#e5e3df] rounded-lg focus:outline-none focus:border-[#ff6b00] transition-colors resize-none text-[#1a1a1a]"
                      placeholder="Tell us about your challenges and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-base font-semibold bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] text-white rounded-full hover:shadow-lg hover:shadow-[#ff6b00]/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
