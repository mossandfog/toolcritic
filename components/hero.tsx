import Link from "next/link";

const stats = [
  { value: "42+", label: "Tools reviewed" },
  { value: "100%", label: "Independent opinions" },
  { value: "2 min", label: "To find your match" },
];

export function Hero() {
  return (
    <div className="relative text-center py-28 px-6 overflow-hidden">
      {/* Glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 0%, rgba(162,89,255,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(0,212,255,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 90%, rgba(255,45,155,0.10) 0%, transparent 60%)
          `,
        }}
      />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-1.5 bg-accent/15 border border-accent/40 rounded-3xl px-4 py-1.5 text-xs font-semibold text-accent mb-7 shadow-[0_0_14px_rgba(162,89,255,0.25)]">
        Sharp reviews. Zero fluff.
      </div>

      {/* Headline */}
      <h1 className="relative font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight mb-5">
        The AI tool critic
        <br />
        <span className="bg-gradient-to-br from-accent via-accent2 to-cyan bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(162,89,255,0.5)]">
          you actually need.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="relative max-w-xl mx-auto mb-11 text-muted text-lg">
        Every AI tool reviewed by humans who use them daily. Find yours in 2
        minutes - jokes, no sponsored rankings, no nonsense.
      </p>

      {/* CTA buttons */}
      <div className="relative flex gap-3 justify-center flex-wrap">
        <Link
          href="#quiz"
          className="bg-gradient-to-br from-accent to-accent2 text-white border-none rounded-full px-8 py-3.5 text-base font-semibold transition-all shadow-[0_0_24px_rgba(162,89,255,0.45)] hover:translate-y-[-3px] hover:shadow-[0_0_40px_rgba(162,89,255,0.7),0_8px_30px_rgba(255,45,155,0.3)]"
        >
          Take the Quiz
        </Link>
        <Link
          href="#tools"
          className="bg-transparent text-text border border-accent/30 rounded-full px-8 py-3.5 text-base font-medium transition-all hover:border-cyan hover:text-cyan hover:shadow-[0_0_18px_rgba(0,212,255,0.3)]"
        >
          Browse Reviews
        </Link>
      </div>

      {/* Stats */}
      <div className="relative flex gap-11 justify-center mt-16 flex-wrap">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-3xl font-extrabold bg-gradient-to-br from-accent3 to-cyan bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-muted mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
