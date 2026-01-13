"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isWorkWithUsActive = pathname.startsWith("/work-with-us");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf6f0]/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/jaynelogo.png"
              alt="Jayne Agency"
              width={200}
              height={100}
              className="w-auto h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 ml-auto mr-8">
            <Link
              href="/about-us"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/about-us")
                  ? "text-black"
                  : "text-[#1a1a1a] hover:text-[#f57214]"
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 ${
                isActive("/about-us") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>

            <Link
              href="/work-with-us"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isWorkWithUsActive
                  ? "text-black"
                  : "text-[#1a1a1a] hover:text-[#f57214]"
              }`}
            >
              Work With Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 ${
                isWorkWithUsActive ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>

            <Link
              href="/results"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/results")
                  ? "text-black"
                  : "text-[#1a1a1a] hover:text-[#f57214]"
              }`}
            >
              Results
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 ${
                isActive("/results") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>

            <Link
              href="/clarity-university"
              className={`text-sm font-medium relative group transition-colors duration-300 ${
                isActive("/clarity-university")
                  ? "text-black"
                  : "text-[#1a1a1a] hover:text-[#f57214]"
              }`}
            >
              Clarity University
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 ${
                isActive("/clarity-university") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>

            <a
              href="https://devilsadvocatebyjayneagency.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium relative group transition-colors duration-300 text-[#1a1a1a] hover:text-[#f57214]"
            >
              Writing
              <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 w-0 group-hover:w-full" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[#f5f1ea] rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#faf6f0]/98 backdrop-blur-xl shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/about-us")
                ? "bg-[#f57214]/10 text-black border-l-2 border-[#f57214]"
                : "text-[#8a8178] hover:text-black hover:bg-[#faf6f0]"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/work-with-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isWorkWithUsActive
                ? "bg-[#f57214]/10 text-black border-l-2 border-[#f57214]"
                : "text-[#8a8178] hover:text-black hover:bg-[#faf6f0]"
            }`}
          >
            Work With Us
          </Link>

          <Link
            href="/results"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/results")
                ? "bg-[#f57214]/10 text-black border-l-2 border-[#f57214]"
                : "text-[#8a8178] hover:text-black hover:bg-[#faf6f0]"
            }`}
          >
            Results
          </Link>

          <Link
            href="/clarity-university"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive("/clarity-university")
                ? "bg-[#f57214]/10 text-black border-l-2 border-[#f57214]"
                : "text-[#8a8178] hover:text-black hover:bg-[#faf6f0]"
            }`}
          >
            Clarity University
          </Link>

          <a
            href="https://devilsadvocatebyjayneagency.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 text-[#8a8178] hover:text-black hover:bg-[#faf6f0]"
          >
            Writing
          </a>

          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
