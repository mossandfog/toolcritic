const testimonials = [
  {
    color: "#a259ff",
    quote:
      "I paste my entire 40-page strategy doc and ask it to find the three biggest risks. In 30 seconds I have a better analysis than I'd get from a two-hour meeting.",
    author: "Priya K.",
    role: "Head of Strategy, SaaS company",
    stars: 5,
    tool: "Claude",
  },
  {
    color: "#00ffc8",
    quote:
      "Voice mode while commuting is genuinely life-changing. I work through emails, draft messages, brainstorm - all hands-free. Nothing else does this as naturally.",
    author: "James R.",
    role: "Sales Director",
    stars: 5,
    tool: "ChatGPT",
  },
  {
    color: "#aaff00",
    quote:
      "I shipped a feature in 2 hours that would have taken me 2 days. It understands the whole codebase, not just the file you have open. Nothing comes close.",
    author: "Dev B.",
    role: "Senior Engineer",
    stars: 5,
    tool: "Cursor",
  },
  {
    color: "#ff8c42",
    quote:
      "My clients can't believe it's AI. The output looks like it came from a creative director with 20 years of experience, not an algorithm. I've basically doubled my output.",
    author: "Talia R.",
    role: "Brand Designer, freelance",
    stars: 5,
    tool: "Midjourney",
  },
  {
    color: "#ff2d9b",
    quote:
      "Google but it actually answers your question, in sentences, with sources. I use it 20+ times a day. For anything time-sensitive it's the only AI I actually trust.",
    author: "Nina H.",
    role: "Market Analyst",
    stars: 5,
    tool: "Perplexity",
  },
  {
    color: "#a259ff",
    quote:
      "It's the only AI that pushes back when I'm wrong. At first that was annoying. Now I trust it more than any other tool, exactly because it doesn't just tell me what I want to hear.",
    author: "Marcus T.",
    role: "Product Manager",
    stars: 5,
    tool: "Claude",
  },
  {
    color: "#00d4ff",
    quote:
      "I live in Google Docs and Calendar. When Gemini started reading my Drive, summarizing my emails, and writing in my actual style - it stopped being a demo and started being useful.",
    author: "Tom S.",
    role: "Operations Lead",
    stars: 4,
    tool: "Gemini",
  },
  {
    color: "#00ffc8",
    quote:
      "It's just the easiest way to get everyone on the same page. My team of 12 uses it without training. That matters more than which model scores highest on some benchmark.",
    author: "Sarah L.",
    role: "Team Lead, Marketing",
    stars: 4,
    tool: "ChatGPT",
  },
  {
    color: "#ffe566",
    quote:
      "I'm not technical at all but I built an internal tool for tracking our clients. With Cursor explaining every step I was never lost. Took a weekend and saved us thousands in dev costs.",
    author: "Jordan F.",
    role: "Agency Founder",
    stars: 5,
    tool: "Cursor",
  },
];

function renderStars(count: number, color: string) {
  return (
    <span className="text-xs tracking-wider" style={{ color }}>
      {"★".repeat(count)}
    </span>
  );
}

export function Testimonials() {
  return (
    <div className="px-6 py-5 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-xs font-bold tracking-wider uppercase text-accent mb-3">
          Real Talk
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          What actual humans are saying
        </div>
        <p className="text-muted text-lg max-w-lg mb-12">
          Sourced from Reddit threads, X posts, and real conversations. Not
          testimonials - just opinions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-surface border border-border rounded-[18px] p-5 relative overflow-hidden transition-all duration-200 hover:translate-y-[-4px]"
              style={
                {
                  "--c": t.color,
                } as React.CSSProperties
              }
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: t.color,
                  boxShadow: `0 0 8px ${t.color}`,
                }}
              />

              {/* Quote mark */}
              <span
                className="block font-serif text-5xl leading-none opacity-55 mb-2.5"
                style={{ color: t.color }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-sm leading-relaxed text-[#d0d0e8] mb-4 italic">
                {t.quote}
              </p>

              {/* Footer */}
              <div className="flex items-end justify-between gap-2 flex-wrap">
                <div>
                  <div className="text-sm font-bold text-text">{t.author}</div>
                  <div className="text-xs text-muted mt-0.5">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="mb-1">{renderStars(t.stars, t.color)}</div>
                  <span
                    className="text-[0.7rem] font-bold rounded-2xl px-2.5 py-0.5 inline-block"
                    style={{
                      background: `color-mix(in srgb, ${t.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${t.color} 35%, transparent)`,
                      color: t.color,
                    }}
                  >
                    {t.tool}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
