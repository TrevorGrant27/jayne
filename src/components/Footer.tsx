import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]/10 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link href="/" className="text-lg font-bold">
              Jayne
            </Link>
            <p className="text-sm text-[#666666] mt-1">
              Clarity for people who ship.
            </p>
          </div>

          <div className="text-sm text-[#666666]">
            <a href="mailto:hello@jayneagency.com" className="hover:text-[#ff6b00]">
              hello@jayneagency.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
