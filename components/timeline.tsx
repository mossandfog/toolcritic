"use client";

import { useRef, useEffect, useState } from "react";

const timelineItems = [
  {
    date: "May 2020",
    model: "GPT-3",
    by: "OpenAI",
    color: "#a259ff",
    milestone: false,
    desc: "175B parameters. The moment the world realized language models could write. Spawned a thousand startups.",
    tags: ["175B params", "API-first"],
  },
  {
    date: "Apr 2022",
    model: "DALL·E 2",
    by: "OpenAI",
    color: "#00d4ff",
    milestone: false,
    desc: "Text-to-image that actually worked. Designers panicked. Everyone made avatars. Image AI went mainstream overnight.",
    tags: ["Text-to-image", "Creative AI"],
  },
  {
    date: "Jul 2022",
    model: "Midjourney v1-3",
    by: "Midjourney",
    color: "#ff8c42",
    milestone: false,
    desc: "A Discord bot that made the internet fall in love with AI art. By v3, the aesthetic internet changed forever.",
    tags: ["Artistic quality", "Discord"],
  },
  {
    date: "Nov 2022",
    model: "ChatGPT",
    by: "OpenAI",
    color: "#00ffc8",
    milestone: true,
    badge: "Inflection Point",
    desc: "100M users in 2 months. Nothing since has grown this fast. Your grandma knows what AI is because of this.",
    tags: ["100M users / 2mo", "Culture shift"],
  },
  {
    date: "Mar 2023",
    model: "GPT-4",
    by: "OpenAI",
    color: "#a259ff",
    milestone: false,
    desc: 'Passed the bar exam in the 90th percentile. "AI can\'t reason" became very hard to say with a straight face.',
    tags: ["Multimodal", "Reasoning leap"],
  },
  {
    date: "Jul 2023",
    model: "Claude 2",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "200K token context - a full novel in one prompt. Writers discovered a collaborator that actually holds context.",
    tags: ["200K context", "Long docs"],
  },
  {
    date: "Dec 2023",
    model: "Gemini Ultra",
    by: "Google",
    color: "#00d4ff",
    milestone: false,
    desc: "Google's first model to genuinely challenge GPT-4. Native multimodality from day one - sees, reads, and reasons.",
    tags: ["Multimodal native", "Google integration"],
  },
  {
    date: "Mar 2024",
    model: "Claude 3 Opus",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: true,
    badge: "Reasoning Era",
    desc: 'Topped every benchmark. People said it felt different - like talking to someone actually thinking. The "vibe" gap opened up.',
    tags: ["#1 benchmarks", "Near-human reasoning"],
  },
  {
    date: "May 2024",
    model: "GPT-4o",
    by: "OpenAI",
    color: "#00ffc8",
    milestone: false,
    desc: '"Omni" - voice, vision, and text in one fluid model. Real-time voice AI that felt like pure science fiction arrived.',
    tags: ["Real-time voice", "Vision + text"],
  },
  {
    date: "Sep 2024",
    model: "OpenAI o1",
    by: "OpenAI",
    color: "#ffe566",
    milestone: true,
    badge: "New Paradigm",
    desc: "Thinks before it answers. Outperforms PhD-level humans on physics and chemistry. The reasoning model era began here.",
    tags: ["Chain-of-thought", "PhD-level science"],
  },
  {
    date: "Oct 2024",
    model: "Claude 3.5 Sonnet",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "Best coding model for months running. Introduced computer use - AI actually operating a computer. Agentic AI stopped being a demo.",
    tags: ["Best at coding", "Computer use"],
  },
  {
    date: "Feb 2025",
    model: "Gemini 2.0 Flash",
    by: "Google DeepMind",
    color: "#00d4ff",
    milestone: false,
    desc: "Fast, cheap, shockingly capable. Beats older flagships at a fraction of the cost. The race to bottom on price-per-token accelerated.",
    tags: ["Ultra-fast", "Low cost"],
  },
  {
    date: "2025",
    model: "GPT-5",
    by: "OpenAI",
    color: "#aaff00",
    milestone: true,
    badge: "New Generation",
    desc: "A unified model combining reasoning, coding, and native computer-use. OpenAI's first true next-generation model since GPT-4.",
    tags: ["Computer use", "Unified reasoning"],
  },
  {
    date: "Feb 2026",
    model: "Claude Sonnet 4.6",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: true,
    badge: "Right Now",
    desc: "Adaptive reasoning with hybrid thinking modes. 72.5% on OSWorld computer use - near-human computer operation. Powers this site.",
    tags: ["Adaptive reasoning", "Computer use SOTA", "Powers this site"],
  },
  {
    date: "Mar 2026",
    model: "GPT-5.4",
    by: "OpenAI",
    color: "#aaff00",
    milestone: true,
    badge: "Latest Drop",
    desc: "272K context, native computer use API, 33% fewer hallucinations vs GPT-5.2. OpenAI's current state-of-the-art.",
    tags: ["272K context", "Computer use API"],
  },
];

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - el.offsetLeft);
      setScrollLeft(el.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div id="timeline">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="text-xs font-bold tracking-wider uppercase text-accent mb-3">
          The Big Picture
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          How fast is this moving?{" "}
          <em className="not-italic bg-gradient-to-br from-accent to-cyan bg-clip-text text-transparent">
            Insanely fast.
          </em>
        </div>
        <p className="text-muted text-lg max-w-xl mb-0">
          6 years. 15 breakthroughs. Every model that changed what was possible.
          Drag to explore.
        </p>
      </div>

      {/* Scrollable timeline */}
      <div
        ref={scrollRef}
        className={`htl-scroll-wrap overflow-x-auto overflow-y-visible py-4 px-0 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-start px-16 pt-10 pb-8 relative min-w-max gap-0">
          {/* Track line */}
          <div
            className="absolute top-[52px] left-0 right-0 h-[3px] z-0"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent2), var(--color-cyan), var(--color-lime), var(--color-yellow), var(--color-orange), var(--color-accent))",
              backgroundSize: "400% auto",
              animation: "htlFlow 10s linear infinite",
              boxShadow:
                "0 0 12px rgba(162,89,255,0.5), 0 0 24px rgba(255,45,155,0.2)",
            }}
          />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[210px] flex-shrink-0 px-3.5 relative z-10"
              style={{ ["--c" as string]: item.color }}
            >
              {/* Dot */}
              <div
                className="w-6 h-6 rounded-full z-20 flex-shrink-0"
                style={{
                  background: item.color,
                  boxShadow: `0 0 0 4px rgba(8,8,16,0.9), 0 0 16px ${item.color}, 0 0 32px ${item.color}`,
                  animation: "dotPulse 2.5s ease-in-out infinite",
                }}
              />

              {/* Connector */}
              <div
                className="w-0.5 h-5 flex-shrink-0"
                style={{
                  background: `linear-gradient(180deg, ${item.color}, rgba(162,89,255,0.2))`,
                }}
              />

              {/* Card */}
              <div
                className={`bg-surface border rounded-[14px] p-4 w-full relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px] group ${
                  item.milestone
                    ? "border-[color-mix(in_srgb,var(--c)_28%,transparent)] shadow-[0_0_18px_color-mix(in_srgb,var(--c)_12%,transparent)]"
                    : "border-white/5"
                }`}
                style={
                  item.milestone
                    ? {
                        background: `linear-gradient(135deg, var(--color-surface), color-mix(in srgb, ${item.color} 9%, var(--color-surface)))`,
                      }
                    : {}
                }
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                  }}
                />

                {/* Badge */}
                {item.badge && (
                  <span
                    className="inline-flex items-center gap-1 rounded-[14px] px-2.5 py-0.5 text-[0.66rem] font-bold mb-1.5"
                    style={{
                      background: `color-mix(in srgb, ${item.color} 14%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${item.color} 40%, transparent)`,
                      color: item.color,
                    }}
                  >
                    {item.badge}
                  </span>
                )}

                <div
                  className="text-[0.68rem] font-bold tracking-wide uppercase mb-0.5"
                  style={{ color: item.color }}
                >
                  {item.date}
                </div>
                <div className="font-heading text-base font-extrabold mb-0.5 leading-tight">
                  {item.model}
                </div>
                <div className="text-[0.72rem] text-muted mb-1.5">{item.by}</div>
                <div className="text-[0.75rem] text-muted leading-normal mb-2">
                  {item.desc}
                </div>

                {/* Tags */}
                <div className="flex gap-1 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[5px] px-1.5 py-px text-[0.64rem] font-semibold"
                      style={{
                        background: `color-mix(in srgb, ${item.color} 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${item.color} 25%, transparent)`,
                        color: item.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-3 pb-16">
        <p className="text-muted text-sm tracking-wide">
          ← Drag or scroll to explore 6 years of AI history →
        </p>
      </div>
    </div>
  );
}
