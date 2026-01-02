import type { Metadata } from "next";
import { Inter, Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Jayne Agency | Brand Clarity for All",
  description: "Since 2009, Jayne Agency has equipped business leaders to build dependable, scalable, repeatable revenue through evidence-based brand platforms. We're driving the Clarity Economy™.",
  openGraph: {
    title: "Jayne Agency | Brand Clarity for All",
    description: "Since 2009, Jayne Agency has equipped business leaders to build dependable, scalable, repeatable revenue through evidence-based brand platforms.",
    url: "https://jayneagency.com",
    siteName: "Jayne Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayne Agency | Brand Clarity for All",
    description: "Since 2009, Jayne Agency has equipped business leaders to build dependable, scalable, repeatable revenue through evidence-based brand platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
