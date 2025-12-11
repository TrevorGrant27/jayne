import Link from "next/link";

export default function Speaking() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] leading-[1.1] tracking-tight opacity-0 animate-fade-in-up">
              Speaking &
              <br />
              <span className="text-[#ff6b00]">workshops.</span>
            </h1>
            <p className="mt-8 text-xl text-[#a1a1a1] max-w-2xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
              Book Brooke to inspire, educate, and empower your team or audience
              with keynotes and workshops on brand strategy and business clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 lg:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
            Topics
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight mb-12">
            Keynotes & Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Building Brand Clarity",
                description:
                  "Learn the frameworks and methodologies behind creating brand platforms that drive real business results.",
              },
              {
                title: "The Clarity Economy",
                description:
                  "Understanding how clarity creates competitive advantage in a noisy marketplace.",
              },
              {
                title: "Strategic Leadership",
                description:
                  "Equipping leadership teams with the tools to make confident, aligned strategic decisions.",
              },
              {
                title: "Custom Workshops",
                description:
                  "Tailored programs designed specifically for your team's unique challenges and goals.",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="p-8 bg-[#0a0a0a] border-2 border-[#262626] rounded-2xl hover:border-[#ff6b00] transition-all duration-300"
              >
                <span className="text-4xl font-bold text-[#ff6b00] tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{topic.title}</h3>
                <p className="mt-4 text-[#a1a1a1] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brooke */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff6b00] mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight mb-8">
            Meet Brooke
          </h2>
          <div className="space-y-6 text-lg text-[#a1a1a1] leading-relaxed">
            <p>
              Brooke Sellas is a recognized thought leader in brand strategy and
              the founder of Jayne Agency. With over a decade of experience working
              with Fortune 50 companies and startups alike, she brings practical
              frameworks and actionable insights to every engagement.
            </p>
            <p>
              Her speaking style is direct, engaging, and rooted in real-world
              application. Audiences leave with clarity on how to apply strategic
              thinking to their own organizations immediately.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6">
            Book Brooke for your next event
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how Brooke can add value to your conference,
            retreat, or team gathering.
          </p>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#0a0a0a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff6b00]/30"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
