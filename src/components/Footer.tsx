import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-semibold tracking-tight text-white">
              <span className="font-[family-name:var(--font-playfair)]">Jayne</span>
            </Link>
            <p className="mt-4 text-[#a1a1a1] max-w-md">
              Brand clarity and alignment for all. Since 2009, we&apos;ve equipped
              business leaders to build dependable, scalable, repeatable revenue.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#a1a1a1] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-[#ff6b00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-white hover:text-[#ff6b00] transition-colors">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#a1a1a1] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@jayneagency.com"
                  className="text-white hover:text-[#ff6b00] transition-colors"
                >
                  hello@jayneagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a1a1a1]">
            © {new Date().getFullYear()} Jayne Agency. All rights reserved.
          </p>
          <p className="text-sm text-[#a1a1a1]">
            Making the world more gooder™
          </p>
        </div>
      </div>
    </footer>
  );
}
