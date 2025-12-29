"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/work-with-us", label: "Work" },
    { href: "/case-studies", label: "Proof" },
    { href: "/speaking", label: "Speaking" },
    { href: "/agency-advisory", label: "Agency" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffdf9]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 border-b border-[#1a1a1a]/10">
          {/* Logo - just text */}
          <Link href="/" className="text-lg font-bold tracking-tight">
            Jayne
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  isActive(link.href)
                    ? "text-[#ff6b00]"
                    : "text-[#1a1a1a] hover:text-[#ff6b00]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fffdf9] border-b border-[#1a1a1a]/10">
          <div className="max-w-4xl mx-auto px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${
                  isActive(link.href)
                    ? "text-[#ff6b00]"
                    : "text-[#1a1a1a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
