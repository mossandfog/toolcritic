import Link from "next/link";

const comparisons = [
  {
    metric: "Coding · SWE-Bench Verified",
    icon: "💻",
    claude: { value: "72%", pct: 96 },
    gpt: { value: "69%", pct: 92 },
    winner: "claude",
    verdict: "Claude edges it",
    note: "Claude 4 Opus vs GPT-5.5",
  },
  {
    metric: "Reasoning · GPQA Diamond",
    icon: "🧠",
    claude: { value: "78%", pct: 91 },
    gpt: { value: "81%", pct: 95 },
    winner: "gpt",
    verdict: "GPT-5.5 wins",
    note: "PhD-level science questions",
  },
  {
    metric: "Context Window · Tokens",
    icon: "📚",
    claude: { value: "200K", pct: 50 },
    gpt: { value: "400K", pct: 100 },
    winner: "gpt",
    verdict: "GPT-5.5 wins",
    note: "GPT-5.5 doubled it",
  },
  {
    metric: "API Price · Per 1M input",
    icon: "💰",
    claude: { value: "$3.00", pct: 50 },
    gpt: { value: "$6.00", pct: 100 },
    winner: "claude",
    verdict: "Claude cheaper",
    note: "Shorter bar = better value",
  },
  {
    metric: "Writing Quality · Editorial",
    icon: "✍️",
    claude: { value: "9.5/10", pct: 95 },
    gpt: { value: "8.5/10", pct: 85 },
    winner: "claude",
    verdict: "Claude wins",
    note: "ToolCritic editorial score",
  },
  {
    metric: "Feature Breadth · Ecosystem",
    icon: "🛠️",
    claude: { value: "8/10", pct: 80 },
    gpt: { value: "9.5/10", pct: 95 },
    winner: "gpt",
    verdict: "ChatGPT wins",
    note: "Voice, video, images, memory",
  },
];

export function DeepDive() {
  return (
    <div
      id="deep-dive"
      className="bg-white/[0.015] py-20 border-y border-border"
    >
      <section className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-xs font-bold tracking-wider uppercase text-[#a259ff] mb-3">
          The Deep Dive
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-2.5 flex items-center gap-4 flex-wrap">
          <span className="bg-gradient-to-br from-[#a259ff] to-[#ff2d9b] bg-clip-text text-transparent">
            Claude 4
          </span>
          <span className="text-muted text-2xl">vs</span>
          <span className="bg-gradient-to-br from-[#00ffc8] to-[#00d4ff] bg-clip-text text-transparent">
            GPT-5.5
          </span>
        </div>
        <p className="text-muted text-lg max-w-xl mb-8">
          The current frontier matchup. Claude 4 Opus vs GPT-5.5 - closer than ever, but different vibes.
        </p>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {comparisons.map((comp) => (
            <div
              key={comp.metric}
              className={`bg-surface border rounded-2xl p-5 transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${
                comp.winner === "claude"
                  ? "border-[#a259ff]/30"
                  : comp.winner === "gpt"
                  ? "border-[#00ffc8]/20"
                  : "border-[#ffe566]/20"
              }`}
            >
              <div className="font-bold text-sm mb-4 font-heading text-text">
                {comp.icon} {comp.metric}
              </div>

              {/* Bars */}
              <div className="flex flex-col gap-2.5 mb-3.5">
                {/* Claude bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[0.72rem] font-semibold text-[#a259ff] w-[76px] flex-shrink-0">
                    Claude 4
                  </span>
                  <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center justify-end pr-1.5"
                      style={{
                        width: `${comp.claude.pct}%`,
                        background: "linear-gradient(to right, rgba(162,89,255,0.45), rgba(162,89,255,0.85))",
                        boxShadow: "inset 0 0 8px rgba(162,89,255,0.3)",
                      }}
                    >
                      <span className="text-[0.68rem] font-bold text-white/95 whitespace-nowrap">
                        {comp.claude.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* GPT bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[0.72rem] font-semibold text-[#00ffc8] w-[76px] flex-shrink-0">
                    GPT-5.5
                  </span>
                  <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center justify-end pr-1.5"
                      style={{
                        width: `${comp.gpt.pct}%`,
                        background: "linear-gradient(to right, rgba(0,255,200,0.35), rgba(0,212,255,0.75))",
                        boxShadow: "inset 0 0 8px rgba(0,255,200,0.25)",
                      }}
                    >
                      <span className="text-[0.68rem] font-bold text-white/95 whitespace-nowrap">
                        {comp.gpt.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verdict */}
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 ${
                  comp.winner === "claude"
                    ? "bg-[#a259ff]/10 text-[#a259ff]"
                    : comp.winner === "gpt"
                    ? "bg-[#00ffc8]/10 text-[#00ffc8]"
                    : "bg-[#ffe566]/10 text-[#ffe566]"
                }`}
              >
                {comp.winner === "claude"
                  ? "🟠"
                  : comp.winner === "gpt"
                  ? "🟢"
                  : "🤝"}{" "}
                {comp.verdict}
              </span>
              {comp.note && (
                <div className="text-[0.7rem] text-muted mt-1.5">{comp.note}</div>
              )}
            </div>
          ))}
        </div>

        {/* Score tally */}
        <div className="flex items-center justify-center gap-10 bg-surface border border-border rounded-2xl p-7 mb-11 flex-wrap">
          <div className="text-center">
            <div className="text-sm text-muted mb-2">Claude 4 Opus</div>
            <div className="font-heading text-5xl font-extrabold bg-gradient-to-br from-[#a259ff] to-[#ff2d9b] bg-clip-text text-transparent">
              3
            </div>
            <div className="text-xs text-muted">categories won</div>
          </div>
          <div className="text-2xl font-extrabold text-muted">vs</div>
          <div className="text-center">
            <div className="text-sm text-muted mb-2">ChatGPT GPT-5.5</div>
            <div className="font-heading text-5xl font-extrabold bg-gradient-to-br from-[#00ffc8] to-[#00d4ff] bg-clip-text text-transparent">
              3
            </div>
            <div className="text-xs text-muted">categories won</div>
          </div>
        </div>

        {/* Editorial */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            <h3 className="font-heading text-2xl font-extrabold mb-4 text-text">
              The honest take
            </h3>
            <div className="text-muted text-[0.95rem] leading-relaxed space-y-3.5">
              <p>
                For the first time, these two are genuinely neck-and-neck on benchmarks. 
                GPT-5.5 brought massive improvements to reasoning and context length, 
                while Claude 4 Opus doubled down on what made Claude special: thoughtful, 
                careful, genuinely good writing.
              </p>
              <p>
                Claude still writes better. Its answers feel considered rather than 
                generated. Extended thinking mode lets it work through complex problems 
                for hours. For anyone doing serious knowledge work - research, analysis, 
                strategy - Claude remains the obvious choice.
              </p>
              <p>
                GPT-5.5 does more. Sora integration means video generation. Voice mode 
                is seamless. The 400K context window is massive. And the raw reasoning 
                scores have finally caught up. If you want one AI that does everything, 
                GPT-5.5 is hard to beat. But if you want one AI that does the important 
                things exceptionally well, Claude 4 is still the answer.
              </p>
            </div>
          </div>

          {/* Picks */}
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <div className="text-[0.72rem] text-muted font-bold uppercase tracking-wide mb-1.5">
                Best for writers & analysts
              </div>
              <div className="font-heading font-extrabold mb-3.5 text-text">
                Claude 4 Opus
              </div>
              <Link
                href="https://claude.ai"
                target="_blank"
                className="inline-block bg-gradient-to-br from-[#a259ff] to-[#ff2d9b] text-white rounded-2xl px-5 py-2 text-sm font-semibold transition-all shadow-[0_0_12px_rgba(162,89,255,0.3)] hover:shadow-[0_0_24px_rgba(162,89,255,0.6)] hover:translate-y-[-1px]"
              >
                Try Claude
              </Link>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <div className="text-[0.72rem] text-muted font-bold uppercase tracking-wide mb-1.5">
                Best for do-everything users
              </div>
              <div className="font-heading font-extrabold mb-3.5 text-text">
                ChatGPT (GPT-5.5)
              </div>
              <Link
                href="https://chat.openai.com"
                target="_blank"
                className="inline-block bg-gradient-to-br from-[#00ffc8] to-[#00d4ff] text-black rounded-2xl px-5 py-2 text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,255,200,0.3)] hover:shadow-[0_0_24px_rgba(0,255,200,0.5)] hover:translate-y-[-1px]"
              >
                Try ChatGPT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
