"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("admin@jayneagency.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#f5f1ea] border-t border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/jaynelogo.png"
                alt="Jayne Agency"
                width={150}
                height={75}
                className="w-auto h-16"
              />
            </Link>
            <p className="mt-4 text-[#8a8178] max-w-md">
              Brand clarity and alignment for all. Since 2009, we&apos;ve equipped
              business leaders to build dependable, scalable, repeatable revenue.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8a8178] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/clarity-university" className="text-[#1a1a1a] hover:text-[#f57214] transition-colors">
                  Clarity University
                </Link>
              </li>
              <li>
                <a
                  href="https://devilsadvocatebyjayneagency.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] hover:text-[#f57214] transition-colors"
                >
                  Devil&apos;s Advocate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8a8178] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={copyEmail}
                  className="text-[#1a1a1a] hover:text-[#f57214] transition-colors cursor-pointer"
                >
                  {copied ? "Copied!" : "admin@jayneagency.com"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e8e4dc] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8a8178]">
            © {new Date().getFullYear()} Jayne Agency. All rights reserved.
          </p>
          <p className="text-sm text-[#8a8178]">
            Making the world more gooder❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
