import Link from "next/link";

const comparisons = [
  {
    metric: "Coding · SWE-Bench Verified",
    icon: "💻",
    claude: { value: "80%", pct: 80 },
    gpt: { value: "79.6%", pct: 79.6 },
    winner: "tie",
    verdict: "Essentially tied",
  },
  {
    metric: "Computer Use · OSWorld",
    icon: "🖥️",
    claude: { value: "72.5%", pct: 72.5 },
    gpt: { value: "64%", pct: 64 },
    winner: "claude",
    verdict: "Claude wins",
  },
  {
    metric: "Context Window · Tokens",
    icon: "📚",
    claude: { value: "200K", pct: 73.5 },
    gpt: { value: "272K", pct: 100 },
    winner: "gpt",
    verdict: "ChatGPT wins",
  },
  {
    metric: "API Price · Per 1M input tokens",
    icon: "💰",
    claude: { value: "$3.00", pct: 100 },
    gpt: { value: "$2.50", pct: 83 },
    winner: "gpt",
    verdict: "ChatGPT cheaper",
    note: "Shorter bar = better value here",
  },
  {
    metric: "Writing Quality · Editorial Score",
    icon: "✍️",
    claude: { value: "9.5/10", pct: 95 },
    gpt: { value: "8.5/10", pct: 85 },
    winner: "claude",
    verdict: "Claude wins",
    note: "ToolCritic editorial score",
  },
  {
    metric: "Feature Breadth · Score",
    icon: "🛠️",
    claude: { value: "7/10", pct: 70 },
    gpt: { value: "9/10", pct: 90 },
    winner: "gpt",
    verdict: "ChatGPT wins",
    note: "Voice, image gen, memory, plugins",
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
        <div className="text-xs font-bold tracking-wider uppercase text-accent mb-3">
          The Deep Dive
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-2.5 flex items-center gap-4 flex-wrap">
          <span className="bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">
            Claude
          </span>
          <span className="text-muted text-2xl">vs</span>
          <span className="bg-gradient-to-br from-accent3 to-cyan bg-clip-text text-transparent">
            ChatGPT
          </span>
        </div>
        <p className="text-muted text-lg max-w-xl mb-8">
          The most-Googled matchup in AI, finally settled. Claude Sonnet 4.6 vs
          GPT-5.4 - March 2026.
        </p>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {comparisons.map((comp) => (
            <div
              key={comp.metric}
              className={`bg-surface border rounded-2xl p-5 transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${
                comp.winner === "claude"
                  ? "border-accent/30"
                  : comp.winner === "gpt"
                  ? "border-accent3/20"
                  : "border-yellow/20"
              }`}
            >
              <div className="font-bold text-sm mb-4 font-heading">
                {comp.icon} {comp.metric}
              </div>

              {/* Bars */}
              <div className="flex flex-col gap-2.5 mb-3.5">
                {/* Claude bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[0.72rem] font-semibold text-accent w-[76px] flex-shrink-0">
                    Claude 4.6
                  </span>
                  <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center justify-end pr-1.5 bg-gradient-to-r from-accent/45 to-accent/85 shadow-[inset_0_0_8px_rgba(162,89,255,0.3)]"
                      style={{
                        width: `${comp.claude.pct}%`,
                        animation: "ddBarGrow 0.9s cubic-bezier(.22,1,.36,1) forwards",
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
                  <span className="text-[0.72rem] font-semibold text-accent3 w-[76px] flex-shrink-0">
                    GPT-5.4
                  </span>
                  <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center justify-end pr-1.5 bg-gradient-to-r from-accent3/35 to-cyan/75 shadow-[inset_0_0_8px_rgba(0,255,200,0.25)]"
                      style={{
                        width: `${comp.gpt.pct}%`,
                        animation: "ddBarGrow 0.9s cubic-bezier(.22,1,.36,1) forwards",
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
                    ? "bg-accent/10 text-accent"
                    : comp.winner === "gpt"
                    ? "bg-accent3/10 text-accent3"
                    : "bg-yellow/10 text-yellow"
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
            <div className="text-sm text-muted mb-2">Claude Sonnet 4.6</div>
            <div className="font-heading text-5xl font-extrabold bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">
              2
            </div>
            <div className="text-xs text-muted">categories won</div>
          </div>
          <div className="text-2xl font-extrabold text-muted">vs</div>
          <div className="text-center">
            <div className="text-sm text-muted mb-2">ChatGPT GPT-5.4</div>
            <div className="font-heading text-5xl font-extrabold bg-gradient-to-br from-accent3 to-cyan bg-clip-text text-transparent">
              3
            </div>
            <div className="text-xs text-muted">categories won</div>
          </div>
        </div>

        {/* Editorial */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            <h3 className="font-heading text-2xl font-extrabold mb-4">
              The honest take
            </h3>
            <div className="text-muted text-[0.95rem] leading-relaxed space-y-3.5">
              <p>
                On raw benchmark scores, these two are closer than they&apos;ve
                ever been - and that&apos;s actually the most interesting story.
                For most use cases, the model you&apos;ll enjoy using more
                matters as much as its benchmark numbers. And that&apos;s still
                Claude for most power users.
              </p>
              <p>
                Claude writes better. It thinks more carefully. Its answers feel
                like they came from someone who cares about being right, not
                just about sounding right. ChatGPT does more - voice mode,
                native image generation, persistent memory, a huge ecosystem -
                but its outputs can feel optimized to <em>seem</em> good rather
                than <em>be</em> good.
              </p>
              <p>
                If you live in code, Claude leads on reasoning quality and
                computer-use. If you need a do-everything AI that also talks
                back and draws pictures, ChatGPT&apos;s breadth wins. If
                you&apos;re writing anything that needs to be genuinely
                excellent - emails, essays, reports, strategy docs - Claude. No
                contest.
              </p>
            </div>
          </div>

          {/* Picks */}
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <div className="text-[0.72rem] text-muted font-bold uppercase tracking-wide mb-1.5">
                Best for writers & analysts
              </div>
              <div className="font-heading font-extrabold mb-3.5">
                Claude Sonnet 4.6
              </div>
              <Link
                href="https://claude.ai"
                target="_blank"
                className="inline-block bg-gradient-to-br from-accent to-accent2 text-white rounded-2xl px-5 py-2 text-sm font-semibold transition-all shadow-[0_0_12px_rgba(162,89,255,0.3)] hover:shadow-[0_0_24px_rgba(162,89,255,0.6)] hover:translate-y-[-1px]"
              >
                Try Claude →
              </Link>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <div className="text-[0.72rem] text-muted font-bold uppercase tracking-wide mb-1.5">
                Best for do-everything users
              </div>
              <div className="font-heading font-extrabold mb-3.5">
                ChatGPT GPT-5.4
              </div>
              <Link
                href="https://chat.openai.com"
                target="_blank"
                className="inline-block bg-gradient-to-br from-accent3 to-cyan text-black rounded-2xl px-5 py-2 text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,255,200,0.3)] hover:shadow-[0_0_24px_rgba(0,255,200,0.5)] hover:translate-y-[-1px]"
              >
                Try ChatGPT →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
