"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [workWithUsOpen, setWorkWithUsOpen] = useState(false);
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

            {/* Work With Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkWithUsOpen(true)}
              onMouseLeave={() => setWorkWithUsOpen(false)}
            >
              <span
                className={`text-sm font-medium relative group transition-colors duration-300 inline-flex items-center gap-1 cursor-pointer ${
                  isWorkWithUsActive
                    ? "text-black"
                    : "text-[#1a1a1a] hover:text-[#f57214]"
                }`}
              >
                Work With Us
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${workWithUsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#f57214] to-[#f8923a] transition-all duration-300 ${
                  isWorkWithUsActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                  workWithUsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-[#faf6f0] rounded-2xl shadow-xl shadow-black/10 border border-[#e8e4dc] p-2 min-w-[280px]">
                  <Link
                    href="/work-with-us/strategy-partnership"
                    className="block px-4 py-3 rounded-xl hover:bg-[#f5f1ea] transition-colors group"
                  >
                    <div className="font-medium text-[#1a1a1a] group-hover:text-[#f57214] transition-colors">
                      Partnership
                    </div>
                    <div className="text-sm text-[#9d968c] mt-0.5">
                      For enterprise teams
                    </div>
                  </Link>
                  <Link
                    href="/work-with-us/strategy-sprint"
                    className="block px-4 py-3 rounded-xl hover:bg-[#f5f1ea] transition-colors group"
                  >
                    <div className="font-medium text-[#1a1a1a] group-hover:text-[#f57214] transition-colors">
                      Sprint
                    </div>
                    <div className="text-sm text-[#9d968c] mt-0.5">
                      For SMEs
                    </div>
                  </Link>
                  <Link
                    href="/work-with-us/clarity-university"
                    className="block px-4 py-3 rounded-xl hover:bg-[#f5f1ea] transition-colors group"
                  >
                    <div className="font-medium text-[#1a1a1a] group-hover:text-[#f57214] transition-colors">
                      Clarity University
                    </div>
                    <div className="text-sm text-[#9d968c] mt-0.5">
                      For entrepreneurs
                    </div>
                  </Link>
                </div>
              </div>
            </div>

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
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Let's talk
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

          {/* Work With Us Section in Mobile */}
          <div className="space-y-1">
            <div className="px-4 py-3 text-base font-medium text-[#8a8178]">
              Work With Us
            </div>
            <div className="pl-4 space-y-1">
              <Link
                href="/work-with-us/strategy-partnership"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isActive("/work-with-us/strategy-partnership")
                    ? "bg-[#f57214]/10 text-[#f57214]"
                    : "text-[#9d968c] hover:text-black hover:bg-[#faf6f0]"
                }`}
              >
                Partnership
              </Link>
              <Link
                href="/work-with-us/strategy-sprint"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isActive("/work-with-us/strategy-sprint")
                    ? "bg-[#f57214]/10 text-[#f57214]"
                    : "text-[#9d968c] hover:text-black hover:bg-[#faf6f0]"
                }`}
              >
                Sprint
              </Link>
              <Link
                href="/work-with-us/clarity-university"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isActive("/work-with-us/clarity-university")
                    ? "bg-[#f57214]/10 text-[#f57214]"
                    : "text-[#9d968c] hover:text-black hover:bg-[#faf6f0]"
                }`}
              >
                Clarity University
              </Link>
            </div>
          </div>

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
          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Let's talk
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
