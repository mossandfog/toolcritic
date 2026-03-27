const testimonials = [
  {
    quote:
      "I paste my entire 40-page strategy doc and ask it to find the three biggest risks. In 30 seconds I have a better analysis than I'd get from a two-hour meeting.",
    source: "r/ChatGPT",
    role: "Strategy consultant",
    stars: 5,
    tool: "Claude",
    colorHex: "#a259ff",
  },
  {
    quote:
      "Voice mode while commuting is genuinely life-changing. I work through emails, draft messages, brainstorm - all hands-free. Nothing else does this as naturally.",
    source: "X/@productmanager",
    role: "Sales Director",
    stars: 5,
    tool: "ChatGPT",
    colorHex: "#00ffc8",
  },
  {
    quote:
      "I shipped a feature in 2 hours that would have taken me 2 days. It understands the whole codebase, not just the file you have open. Nothing comes close.",
    source: "r/programming",
    role: "Senior Engineer",
    stars: 5,
    tool: "Cursor",
    colorHex: "#aaff00",
  },
  {
    quote:
      "My clients can't believe it's AI. The output looks like it came from a creative director with 20 years of experience. I've basically doubled my output.",
    source: "r/midjourney",
    role: "Freelance Designer",
    stars: 5,
    tool: "Midjourney",
    colorHex: "#ff8c42",
  },
  {
    quote:
      "Google but it actually answers your question, in sentences, with sources. I use it 20+ times a day. For anything time-sensitive it's the only AI I actually trust.",
    source: "Hacker News",
    role: "Market Analyst",
    stars: 5,
    tool: "Perplexity",
    colorHex: "#ff2d9b",
  },
  {
    quote:
      "It's the only AI that pushes back when I'm wrong. At first that was annoying. Now I trust it more than any other tool, exactly because it doesn't just tell me what I want to hear.",
    source: "r/ClaudeAI",
    role: "Product Manager",
    stars: 4,
    tool: "Claude",
    colorHex: "#a259ff",
  },
  {
    quote:
      "The free tier is actually usable. It reads my Drive, summarizes emails, and writes in my voice. Stopped being a demo and started being useful when it got Google integration.",
    source: "X/@techwriter",
    role: "Operations Lead",
    stars: 4,
    tool: "Gemini",
    colorHex: "#00d4ff",
  },
  {
    quote:
      "Honestly it's gotten worse since they added all the guardrails. Used to be more helpful. Now I have to rephrase things 3 times to get past the 'I can't help with that' messages.",
    source: "r/ChatGPT",
    role: "Copywriter",
    stars: 3,
    tool: "ChatGPT",
    colorHex: "#00ffc8",
  },
  {
    quote:
      "I'm not technical at all but I built an internal tool for tracking clients. With Cursor explaining every step I was never lost. Took a weekend and saved us thousands.",
    source: "r/Entrepreneur",
    role: "Agency Founder",
    stars: 5,
    tool: "Cursor",
    colorHex: "#aaff00",
  },
];

function renderStars(count: number, colorHex: string) {
  const fullStars = Math.floor(count);
  const emptyStars = 5 - fullStars;
  return (
    <span className="text-xs tracking-wider">
      <span style={{ color: colorHex }}>{"★".repeat(fullStars)}</span>
      <span style={{ color: `${colorHex}40` }}>{"★".repeat(emptyStars)}</span>
    </span>
  );
}

export function Testimonials() {
  return (
    <div className="px-6 py-5 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-xs font-bold tracking-wider uppercase text-[#a259ff] mb-3">
          Real Talk
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          What people are actually saying
        </div>
        <p className="text-muted text-lg max-w-lg mb-12">
          Paraphrased from Reddit threads, X posts, and Hacker News. The good,
          the bad, and the honest.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-surface border border-border rounded-[18px] p-5 relative overflow-hidden transition-all duration-200 hover:translate-y-[-4px]"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: t.colorHex,
                  boxShadow: `0 0 8px ${t.colorHex}`,
                }}
              />

              {/* Quote mark */}
              <span
                className="block font-serif text-5xl leading-none opacity-55 mb-2.5"
                style={{ color: t.colorHex }}
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
                  <div className="text-sm font-bold text-text">{t.source}</div>
                  <div className="text-xs text-muted mt-0.5">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="mb-1">{renderStars(t.stars, t.colorHex)}</div>
                  <span
                    className="text-[0.7rem] font-bold rounded-2xl px-2.5 py-0.5 inline-block"
                    style={{
                      background: `${t.colorHex}1a`,
                      border: `1px solid ${t.colorHex}50`,
                      color: t.colorHex,
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
