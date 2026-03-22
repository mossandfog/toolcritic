"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  hint: string;
  options: { value: string; emoji: string; text: string }[];
}

interface Result {
  emoji: string;
  name: string;
  why: string;
  link: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What do you mainly want AI for?",
    hint: "Pick the one that fits best - we'll do the math.",
    options: [
      { value: "writing", emoji: "✍️", text: "Writing - emails, essays, blogs, creative stuff" },
      { value: "coding", emoji: "💻", text: "Coding - building apps, fixing bugs, learning to code" },
      { value: "research", emoji: "🔍", text: "Research - finding info, summarizing, answering questions" },
      { value: "images", emoji: "🎨", text: "Images - making art, visuals, or illustrations" },
    ],
  },
  {
    id: 2,
    question: "How do you feel about tech?",
    hint: "No judgment here - everyone starts somewhere.",
    options: [
      { value: "beginner", emoji: "🌱", text: "Total beginner - just want something that works simply" },
      { value: "intermediate", emoji: "🚀", text: "Comfortable - I pick things up pretty fast" },
      { value: "advanced", emoji: "🧠", text: "Power user - give me all the features and let me go wild" },
    ],
  },
  {
    id: 3,
    question: "What's your budget situation?",
    hint: "Totally free options exist. So do very worth-it paid ones.",
    options: [
      { value: "free", emoji: "🆓", text: "Free only please - I'm not paying for AI yet" },
      { value: "low", emoji: "💸", text: "A little - around $10-20/month is fine" },
      { value: "high", emoji: "💰", text: "Best is best - price doesn't matter much" },
    ],
  },
  {
    id: 4,
    question: "What matters more to you?",
    hint: "Almost there!",
    options: [
      { value: "speed", emoji: "⚡", text: "Speed - fast answers, get in and get out" },
      { value: "depth", emoji: "🎯", text: "Quality - I want thoughtful, thorough, nuanced answers" },
    ],
  },
];

function getRecommendation(answers: Record<number, string>): Result {
  const use = answers[1];
  const skill = answers[2];
  const budget = answers[3];
  const quality = answers[4];

  if (use === "images") {
    if (budget === "free") {
      return {
        emoji: "🖼️",
        name: "DALL·E (via ChatGPT)",
        why: "For free AI image generation, ChatGPT's built-in DALL·E is your best bet. It's not perfect, but it's powerful, free, and you don't need to install anything. When you're ready to level up, Midjourney is the destination.",
        link: "https://chat.openai.com",
      };
    }
    return {
      emoji: "🎨",
      name: "Midjourney",
      why: "If image quality is the goal, Midjourney wins. Full stop. It produces the most aesthetically striking results of any AI image tool, with a passionate community and tons of style control. Worth every penny at $10/month.",
      link: "https://midjourney.com",
    };
  }

  if (use === "coding") {
    if (skill === "beginner") {
      return {
        emoji: "🟢",
        name: "ChatGPT",
        why: "For someone just getting into coding, ChatGPT is a patient teacher. Ask it to explain anything, walk through errors step by step, or write code with a running commentary. It meets you where you are.",
        link: "https://chat.openai.com",
      };
    }
    return {
      emoji: "⚡",
      name: "Cursor",
      why: "If you're comfortable coding, Cursor is a cheat code. It's an AI-native IDE that understands your whole project - not just the current file. Developers who switch to it rarely go back. Start with the free plan.",
      link: "https://cursor.sh",
    };
  }

  if (use === "research") {
    if (quality === "speed") {
      return {
        emoji: "🔣",
        name: "Perplexity",
        why: "Perplexity is Google, but better. It answers your question directly - with citations - using the latest web content. Super fast, always up to date, and free. Perfect for quick research hits.",
        link: "https://perplexity.ai",
      };
    }
    return {
      emoji: "🟠",
      name: "Claude",
      why: "For deep research, analysis, and making sense of complex material, Claude stands apart. It reads long documents, synthesizes multiple sources, and reasons through things carefully. If you want to actually understand something, this is your tool.",
      link: "https://claude.ai",
    };
  }

  // Default: writing
  if (budget === "free" && quality === "speed") {
    return {
      emoji: "🟢",
      name: "ChatGPT",
      why: "For quick, free, solid writing help, ChatGPT is a reliable choice. It's fast, familiar, and does well on most everyday writing tasks. Great starting point if you're new to AI tools.",
      link: "https://chat.openai.com",
    };
  }
  if (skill === "beginner") {
    return {
      emoji: "🟢",
      name: "ChatGPT",
      why: "ChatGPT is the most approachable AI for beginners. It's patient, clear, and great at most everyday tasks. Once you get comfortable, you'll want to explore Claude for deeper work.",
      link: "https://chat.openai.com",
    };
  }

  return {
    emoji: "🟠",
    name: "Claude",
    why: "For writing that actually sounds like a thoughtful human wrote it, Claude is in a class of its own. It understands nuance, tone, and context in ways other tools often miss. Whether you're drafting emails, essays, or entire documents - this is the one.",
    link: "https://claude.ai",
  };
}

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const handleOptionClick = useCallback((questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    
    setTimeout(() => {
      if (questionId < 4) {
        setCurrentStep(questionId + 1);
      } else {
        const newAnswers = { ...answers, [questionId]: value };
        setResult(getRecommendation(newAnswers));
        setCurrentStep(5);
      }
    }, 350);
  }, [answers]);

  const goBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setResult(null);
    setCurrentStep(1);
  }, []);

  const copyShareLink = useCallback(() => {
    if (!result) return;
    const url = `${window.location.origin}${window.location.pathname}#result=${encodeURIComponent(result.name)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }, [result]);

  const downloadShareCard = useCallback(() => {
    if (!result) return;
    
    const TOOL_COLORS: Record<string, string> = {
      Claude: "#a259ff",
      ChatGPT: "#00ffc8",
      "DALL·E (via ChatGPT)": "#00ffc8",
      Cursor: "#aaff00",
      Midjourney: "#ff8c42",
      Perplexity: "#ff2d9b",
    };

    const color = TOOL_COLORS[result.name] || "#a259ff";
    const W = 1200, H = 630;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#080810";
    ctx.fillRect(0, 0, W, H);

    // Radial glow
    const grd = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 420);
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    grd.addColorStop(0, `rgba(${r},${g},${b},0.2)`);
    grd.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // Label
    ctx.fillStyle = color;
    ctx.font = "bold 17px Arial";
    ctx.textAlign = "center";
    ctx.fillText("MY AI MATCH", W / 2, 86);

    // Emoji
    ctx.font = "108px serif";
    ctx.fillText(result.emoji, W / 2, 255);

    // Tool name
    ctx.fillStyle = "#f0f0ff";
    ctx.font = "bold 82px Arial Black, Arial";
    ctx.fillText(result.name, W / 2, 368);

    // Why text (simplified)
    ctx.fillStyle = "#8888b0";
    ctx.font = "21px Arial";
    const words = result.why.split(" ");
    let line = "";
    let y = 418;
    for (let n = 0; n < words.length && y < 510; n++) {
      const test = line + words[n] + " ";
      if (ctx.measureText(test).width > 860 && n > 0) {
        ctx.fillText(line.trim(), W / 2, y);
        line = words[n] + " ";
        y += 32;
      } else {
        line = test;
      }
    }
    ctx.fillText(line.trim(), W / 2, y);

    // Brand
    ctx.fillStyle = color;
    ctx.font = "bold 24px Arial Black, Arial";
    ctx.fillText("toolcritic.ai", W / 2, 578);
    ctx.fillStyle = "#44445a";
    ctx.font = "16px Arial";
    ctx.fillText("Honest reviews of every AI tool worth knowing", W / 2, 602);

    // Download
    const link = document.createElement("a");
    link.download = `toolcritic-${result.name.toLowerCase().replace(/\s+/g, "-")}-match.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [result]);

  // Handle URL hash for shared results
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash);
    const match = hash.match(/^#result=(.+)$/);
    if (match) {
      const toolName = match[1];
      // Build synthetic answers for this tool
      const syntheticAnswers: Record<number, string> = {
        1: toolName === "Midjourney" || toolName === "DALL·E (via ChatGPT)" ? "images" : 
           toolName === "Cursor" ? "coding" : 
           toolName === "Perplexity" ? "research" : "writing",
        2: "advanced",
        3: "low",
        4: "depth",
      };
      setResult(getRecommendation(syntheticAnswers));
      setCurrentStep(5);
    }
  }, []);

  const currentQuestion = questions[currentStep - 1];

  return (
    <div id="quiz" className="px-6 py-5 pb-20 max-w-4xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10">
        <div className="text-xs font-bold tracking-wider uppercase text-[#a259ff] mb-3">
          The Matchmaker
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4 text-text">
          Which AI tool is right for you?
        </div>
        <p className="text-muted text-lg">
          4 questions. One honest, no-BS recommendation.
        </p>
        <div className="inline-flex items-center gap-2 mt-4 bg-[#00ffc8]/10 border border-[#00ffc8]/25 rounded-3xl px-4 py-1.5">
          <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#00ffc8]">
            <span className="w-2 h-2 rounded-full bg-[#00ffc8] shadow-[0_0_6px_#00ffc8] animate-pulse" />
            Interactive quiz - tap to begin
          </span>
        </div>
      </div>

      {/* Quiz card */}
      <div
        className="rounded-3xl max-w-3xl mx-auto p-10 md:p-14 relative overflow-hidden border-[2.5px] border-transparent bg-surface"
        style={{
          backgroundImage: `
            linear-gradient(#0f0f1a, #0f0f1a),
            linear-gradient(120deg, #a259ff, #ff2d9b, #00d4ff, #aaff00, #ff8c42, #00ffc8, #a259ff)
          `,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          backgroundSize: "auto, 400% 400%",
          animation: "quizBorderFlow 5s linear infinite, quizGlowPulse 3s ease-in-out infinite",
        }}
      >
        {/* Rainbow top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
          style={{
            background: "linear-gradient(90deg, #a259ff, #ff2d9b, #00d4ff, #aaff00, #ff8c42, #00ffc8, #a259ff)",
            backgroundSize: "300% auto",
            animation: "rainbowSlide 3s linear infinite",
          }}
        />

        {/* Progress bars */}
        <div className="flex gap-1.5 mb-9">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className="h-1.5 flex-1 rounded transition-all duration-400"
              style={{
                background: step < currentStep || (step <= 4 && currentStep === 5)
                  ? "linear-gradient(to right, #00ffc8, #00d4ff)"
                  : step === currentStep && currentStep < 5
                  ? "linear-gradient(to right, #a259ff, #ff2d9b)"
                  : "rgba(255,255,255,0.07)",
                boxShadow: step < currentStep || (step <= 4 && currentStep === 5)
                  ? "0 0 8px rgba(0,255,200,0.5)"
                  : step === currentStep && currentStep < 5
                  ? "0 0 8px rgba(162,89,255,0.7)"
                  : "none",
              }}
            />
          ))}
        </div>

        {/* Questions */}
        {currentStep <= 4 && currentQuestion && (
          <div>
            <div className="font-heading text-2xl font-bold mb-2 leading-tight text-text">
              {currentQuestion.question}
            </div>
            <div className="text-muted text-sm mb-7">{currentQuestion.hint}</div>

            <div className="grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(currentQuestion.id, option.value)}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border-[1.5px] text-left transition-all select-none relative overflow-hidden group ${
                    answers[currentQuestion.id] === option.value
                      ? "border-[#ff2d9b] bg-[#ff2d9b]/10 shadow-[0_0_16px_rgba(255,45,155,0.25)]"
                      : "border-border bg-surface2 hover:border-[#a259ff] hover:translate-x-1"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                  <span className="font-medium text-sm text-text">{option.text}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              {currentStep > 1 ? (
                <button
                  onClick={goBack}
                  className="bg-transparent border-none text-muted cursor-pointer text-sm transition-colors hover:text-[#00d4ff]"
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}
              <span className="text-muted text-sm">Step {currentStep} of 4</span>
            </div>
          </div>
        )}

        {/* Result */}
        {currentStep === 5 && result && (
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00ffc8]/10 border border-[#00ffc8]/35 rounded-3xl px-4 py-1.5 text-[#00ffc8] text-sm font-semibold mb-6 shadow-[0_0_12px_rgba(0,255,200,0.2)]">
              Your perfect match
            </div>
            <div className="text-6xl mb-4">{result.emoji}</div>
            <div className="font-heading text-4xl font-extrabold mb-3 bg-gradient-to-br from-[#a259ff] to-[#00d4ff] bg-clip-text text-transparent">
              {result.name}
            </div>
            <div className="text-muted text-base leading-relaxed mb-7 max-w-lg">
              {result.why}
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href={result.link}
                target="_blank"
                className="bg-gradient-to-br from-[#00ffc8] to-[#00d4ff] text-black border-none rounded-full px-7 py-3 text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,255,200,0.4)] hover:translate-y-[-2px] hover:shadow-[0_0_35px_rgba(0,255,200,0.65)]"
              >
                Try {result.name} free →
              </Link>
              <button
                onClick={resetQuiz}
                className="bg-transparent border border-[#a259ff]/30 text-text rounded-full px-7 py-3 text-sm cursor-pointer transition-all hover:border-[#a259ff] hover:shadow-[0_0_14px_rgba(162,89,255,0.3)]"
              >
                Start over
              </button>
            </div>

            {/* Share strip */}
            <div className="mt-7 pt-6 border-t border-[#a259ff]/15 text-center">
              <p className="text-xs font-bold tracking-wider uppercase text-[#a259ff] mb-3.5">
                Share your result
              </p>
              <div className="flex gap-2.5 justify-center flex-wrap">
                <button
                  onClick={downloadShareCard}
                  className="border-[1.5px] border-[#a259ff]/35 bg-[#a259ff]/10 text-text rounded-3xl px-5 py-2.5 text-sm font-semibold cursor-pointer transition-all hover:border-[#a259ff] hover:bg-[#a259ff]/20 hover:shadow-[0_0_16px_rgba(162,89,255,0.3)] hover:translate-y-[-2px]"
                >
                  Download card
                </button>
                <button
                  onClick={copyShareLink}
                  className={`border-[1.5px] rounded-3xl px-5 py-2.5 text-sm font-semibold cursor-pointer transition-all hover:translate-y-[-2px] ${
                    copied
                      ? "border-[#00ffc8] bg-[#00ffc8]/10 text-[#00ffc8]"
                      : "border-[#a259ff]/35 bg-[#a259ff]/10 text-text hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:shadow-[0_0_16px_rgba(0,212,255,0.25)]"
                  }`}
                >
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
