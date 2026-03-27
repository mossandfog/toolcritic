"use client";

import { useRef, useEffect, useState } from "react";

const timelineItems = [
  {
    date: "Jun 2020",
    model: "GPT-3",
    by: "OpenAI",
    color: "#a259ff",
    milestone: false,
    desc: "175B parameters. The moment the world realized language models could write. Spawned a thousand startups and the modern AI gold rush.",
    tags: ["175B params", "API-first"],
  },
  {
    date: "Jan 2021",
    model: "DALL·E",
    by: "OpenAI",
    color: "#00d4ff",
    milestone: false,
    desc: "First glimpse of text-to-image. The outputs were weird, surreal, and suddenly everyone wanted AI art.",
    tags: ["Text-to-image", "12B params"],
  },
  {
    date: "Apr 2022",
    model: "DALL·E 2",
    by: "OpenAI",
    color: "#00d4ff",
    milestone: false,
    desc: "Text-to-image that actually worked. Designers panicked. Everyone made avatars. AI art went mainstream overnight.",
    tags: ["Photorealistic", "Inpainting"],
  },
  {
    date: "Jul 2022",
    model: "Midjourney v1-3",
    by: "Midjourney",
    color: "#ff8c42",
    milestone: false,
    desc: "A Discord bot that made the internet fall in love with AI art. By v3, the aesthetic internet changed forever.",
    tags: ["Artistic style", "Discord-native"],
  },
  {
    date: "Aug 2022",
    model: "Stable Diffusion",
    by: "Stability AI",
    color: "#aaff00",
    milestone: true,
    badge: "Open Source Moment",
    desc: "The weights leaked, then officially released. Suddenly anyone could run image AI locally. Democratized AI art overnight.",
    tags: ["Open source", "Run locally"],
  },
  {
    date: "Nov 2022",
    model: "ChatGPT",
    by: "OpenAI",
    color: "#00ffc8",
    milestone: true,
    badge: "Inflection Point",
    desc: "100M users in 2 months. Nothing has grown this fast before or since. Your grandma knows what AI is because of this.",
    tags: ["100M users / 2mo", "Culture shift"],
  },
  {
    date: "Feb 2023",
    model: "Bing Chat",
    by: "Microsoft",
    color: "#00d4ff",
    milestone: false,
    desc: "Microsoft moved fast. GPT-4 in a search engine, before GPT-4 was even announced. Also: Sydney became a meme.",
    tags: ["GPT-4 preview", "Sydney incident"],
  },
  {
    date: "Mar 2023",
    model: "GPT-4",
    by: "OpenAI",
    color: "#a259ff",
    milestone: true,
    badge: "Reasoning Leap",
    desc: "Passed the bar exam in the 90th percentile. \"AI can't reason\" became very hard to say with a straight face.",
    tags: ["Multimodal", "Bar exam: 90th %ile"],
  },
  {
    date: "Mar 2023",
    model: "Claude (1.0)",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "Anthropic enters the chat. Built by ex-OpenAI researchers focused on AI safety. The vibe was different from day one.",
    tags: ["Constitutional AI", "Safety-focused"],
  },
  {
    date: "Jul 2023",
    model: "Claude 2",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "100K token context - an entire novel in one prompt. Writers discovered an AI that actually holds context.",
    tags: ["100K context", "Long documents"],
  },
  {
    date: "Jul 2023",
    model: "Llama 2",
    by: "Meta",
    color: "#a259ff",
    milestone: true,
    badge: "Open Source War",
    desc: "Meta goes open. Free weights, commercial use allowed. The open-source AI movement had its flagship.",
    tags: ["Open weights", "70B params"],
  },
  {
    date: "Sep 2023",
    model: "Mistral 7B",
    by: "Mistral AI",
    color: "#ffe566",
    milestone: false,
    desc: "A tiny French startup released a 7B model that punched way above its weight. Europe entered the AI race.",
    tags: ["7B params", "Apache 2.0"],
  },
  {
    date: "Dec 2023",
    model: "Gemini Ultra",
    by: "Google",
    color: "#00d4ff",
    milestone: false,
    desc: "Google's first model to genuinely challenge GPT-4. Native multimodality from day one - sees, reads, and reasons.",
    tags: ["Multimodal native", "1M context"],
  },
  {
    date: "Dec 2023",
    model: "Mixtral 8x7B",
    by: "Mistral AI",
    color: "#ffe566",
    milestone: false,
    desc: "Mixture of experts goes mainstream. GPT-3.5 level quality at a fraction of the compute. Efficiency breakthrough.",
    tags: ["MoE architecture", "Sparse model"],
  },
  {
    date: "Feb 2024",
    model: "Sora",
    by: "OpenAI",
    color: "#00ffc8",
    milestone: true,
    badge: "Video Revolution",
    desc: "AI video that looked like actual cinematography. Hollywood took notice. Still in limited access but changed expectations forever.",
    tags: ["Text-to-video", "60 seconds"],
  },
  {
    date: "Mar 2024",
    model: "Claude 3 Opus",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: true,
    badge: "Vibe Shift",
    desc: "Topped every benchmark. People said it felt different - like talking to someone actually thinking. The \"vibe\" gap opened up.",
    tags: ["#1 benchmarks", "200K context"],
  },
  {
    date: "Apr 2024",
    model: "Llama 3",
    by: "Meta",
    color: "#a259ff",
    milestone: false,
    desc: "8B and 70B models that finally competed with closed-source. The 400B model was coming. Open-source caught up.",
    tags: ["8B / 70B", "15T tokens"],
  },
  {
    date: "May 2024",
    model: "GPT-4o",
    by: "OpenAI",
    color: "#00ffc8",
    milestone: false,
    desc: "\"Omni\" - voice, vision, and text in one fluid model. Real-time voice AI that felt like science fiction. Also, free.",
    tags: ["Real-time voice", "Free tier"],
  },
  {
    date: "Jun 2024",
    model: "Claude 3.5 Sonnet",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: true,
    badge: "Coding King",
    desc: "Best coding model, period. Introduced Artifacts - AI that shows its work. Became the default for serious developers.",
    tags: ["Best at coding", "Artifacts"],
  },
  {
    date: "Jul 2024",
    model: "Llama 3.1 405B",
    by: "Meta",
    color: "#a259ff",
    milestone: true,
    badge: "Open Frontier",
    desc: "Largest open model ever. Rivals GPT-4. Meta proved open-source could compete at the frontier. Industry shook.",
    tags: ["405B params", "Open weights"],
  },
  {
    date: "Sep 2024",
    model: "o1",
    by: "OpenAI",
    color: "#ffe566",
    milestone: true,
    badge: "New Paradigm",
    desc: "Thinks before it answers. Chain-of-thought reasoning built in. PhD-level performance on math and science. Reasoning models began here.",
    tags: ["Chain-of-thought", "PhD-level"],
  },
  {
    date: "Oct 2024",
    model: "Claude 3.5 Sonnet (New)",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "Computer use arrived. AI actually operating a computer - clicking, typing, navigating. Agentic AI stopped being a demo.",
    tags: ["Computer use", "Agentic AI"],
  },
  {
    date: "Dec 2024",
    model: "Gemini 2.0 Flash",
    by: "Google",
    color: "#00d4ff",
    milestone: false,
    desc: "Fast, cheap, shockingly capable. Native tool use. Google finally found its groove in the AI race.",
    tags: ["Low latency", "Native tools"],
  },
  {
    date: "Jan 2025",
    model: "DeepSeek-V3",
    by: "DeepSeek",
    color: "#00d4ff",
    milestone: true,
    badge: "China Arrives",
    desc: "A Chinese lab trained a GPT-4 competitor for $5.5M. The world realized frontier AI might not stay expensive. Markets panicked.",
    tags: ["$5.5M training", "MoE 671B"],
  },
  {
    date: "Jan 2025",
    model: "DeepSeek-R1",
    by: "DeepSeek",
    color: "#00d4ff",
    milestone: true,
    badge: "Reasoning Shock",
    desc: "Open-source reasoning model rivaling o1. MIT licensed. The AI cost curve bent. Nvidia stock dropped 17% in a day.",
    tags: ["Open source", "o1 competitor"],
  },
  {
    date: "Feb 2025",
    model: "Grok 3",
    by: "xAI",
    color: "#ffe566",
    milestone: false,
    desc: "Trained on Colossus - 100K H100s. xAI flexed compute muscle. Real-time X data integration. Elon's AI bet got serious.",
    tags: ["100K H100s", "Real-time X data"],
  },
  {
    date: "Mar 2025",
    model: "Claude 3.5 Opus",
    by: "Anthropic",
    color: "#ff2d9b",
    milestone: false,
    desc: "The most capable Claude yet. Extended thinking, better reasoning, improved computer use. The thinking model evolved.",
    tags: ["Extended thinking", "Best writing"],
  },
  {
    date: "Present",
    model: "Where we are",
    by: "The AI Race",
    color: "#aaff00",
    milestone: true,
    badge: "Right Now",
    desc: "5 frontier labs. Open-source catching up. Reasoning models standard. Computer use emerging. AI agents becoming real. Everything accelerating.",
    tags: ["Multi-model era", "Agents emerging"],
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
        <div className="text-xs font-bold tracking-wider uppercase text-[#a259ff] mb-3">
          The Big Picture
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          How fast is this moving?{" "}
          <em className="not-italic bg-gradient-to-br from-[#a259ff] to-[#00d4ff] bg-clip-text text-transparent">
            Insanely fast.
          </em>
        </div>
        <p className="text-muted text-lg max-w-xl mb-0">
          5 years. 28 breakthroughs. From GPT-3 to agents. Drag to explore the timeline that changed everything.
        </p>
      </div>

      {/* Scrollable timeline */}
      <div
        ref={scrollRef}
        className={`htl-scroll-wrap overflow-x-auto overflow-y-visible py-4 px-0 select-none hide-scrollbar ${
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
                "linear-gradient(90deg, #a259ff, #ff2d9b, #00d4ff, #aaff00, #ffe566, #ff8c42, #a259ff)",
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
            >
              {/* Dot */}
              <div
                className="w-6 h-6 rounded-full z-20 flex-shrink-0"
                style={{
                  background: item.color,
                  boxShadow: `0 0 0 4px rgba(8,8,16,0.9), 0 0 16px ${item.color}, 0 0 32px ${item.color}`,
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
                    ? "shadow-lg"
                    : ""
                }`}
                style={{
                  borderColor: item.milestone ? `${item.color}40` : "rgba(255,255,255,0.05)",
                  background: item.milestone
                    ? `linear-gradient(135deg, #0f0f1a, ${item.color}15)`
                    : undefined,
                  boxShadow: item.milestone ? `0 0 18px ${item.color}20` : undefined,
                }}
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
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}60`,
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
                <div className="font-heading text-base font-extrabold mb-0.5 leading-tight text-text">
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
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}40`,
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
          Drag or scroll to explore 5 years of AI history
        </p>
      </div>
    </div>
  );
}
