"use client";

import Link from "next/link";
import type { Tool } from "@/lib/tools-data";

const colorStyles: Record<string, { glow: string; border: string; shadow: string; stars: string }> = {
  purple: {
    glow: "linear-gradient(135deg, rgba(162,89,255,0.6), rgba(100,50,255,0.4))",
    border: "rgba(162,89,255,0.9)",
    shadow: "0 0 50px rgba(162,89,255,0.4)",
    stars: "#a259ff",
  },
  green: {
    glow: "linear-gradient(135deg, rgba(0,255,200,0.5), rgba(0,212,255,0.3))",
    border: "rgba(0,255,200,0.8)",
    shadow: "0 0 50px rgba(0,255,200,0.35)",
    stars: "#00ffc8",
  },
  cyan: {
    glow: "linear-gradient(135deg, rgba(0,212,255,0.55), rgba(0,255,200,0.3))",
    border: "rgba(0,212,255,0.85)",
    shadow: "0 0 50px rgba(0,212,255,0.4)",
    stars: "#00d4ff",
  },
  pink: {
    glow: "linear-gradient(135deg, rgba(255,45,155,0.55), rgba(255,100,80,0.3))",
    border: "rgba(255,45,155,0.85)",
    shadow: "0 0 50px rgba(255,45,155,0.4)",
    stars: "#ff2d9b",
  },
  orange: {
    glow: "linear-gradient(135deg, rgba(255,140,66,0.55), rgba(255,45,155,0.3))",
    border: "rgba(255,140,66,0.85)",
    shadow: "0 0 50px rgba(255,140,66,0.4)",
    stars: "#ff8c42",
  },
  lime: {
    glow: "linear-gradient(135deg, rgba(170,255,0,0.5), rgba(0,255,200,0.3))",
    border: "rgba(170,255,0,0.8)",
    shadow: "0 0 50px rgba(170,255,0,0.35)",
    stars: "#aaff00",
  },
  teal: {
    glow: "linear-gradient(135deg, rgba(0,212,170,0.55), rgba(0,212,255,0.3))",
    border: "rgba(0,212,170,0.85)",
    shadow: "0 0 50px rgba(0,212,170,0.4)",
    stars: "#00d4aa",
  },
  yellow: {
    glow: "linear-gradient(135deg, rgba(255,229,102,0.5), rgba(255,140,66,0.3))",
    border: "rgba(255,229,102,0.85)",
    shadow: "0 0 50px rgba(255,229,102,0.4)",
    stars: "#ffe566",
  },
  red: {
    glow: "linear-gradient(135deg, rgba(255,80,80,0.55), rgba(255,45,155,0.3))",
    border: "rgba(255,80,80,0.85)",
    shadow: "0 0 50px rgba(255,80,80,0.4)",
    stars: "#ff5050",
  },
};

const defaultStyle = colorStyles.purple;

function renderStars(count: number, color: string) {
  const fullStars = Math.floor(count);
  const hasHalfStar = count % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (hasHalfStar) {
    stars.push("★");
  }

  return (
    <span className="text-sm tracking-wider" style={{ color }}>
      {stars.join("")}
    </span>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  const styles = colorStyles[tool.color] ?? defaultStyle;

  return (
    <div className="group bg-surface border border-border rounded-[18px] p-6 transition-all duration-300 cursor-pointer relative overflow-hidden hover:translate-y-[-6px] hover:scale-[1.01]">
      <div
        className="absolute inset-[-1px] rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-0"
        style={{ background: styles.glow }}
      />

      <div className="absolute inset-[1px] rounded-[17px] bg-surface -z-10" />

      <div
        className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1.5px ${styles.border}, 0 20px 60px rgba(0,0,0,0.5), ${styles.shadow}`,
        }}
      />

      {tool.editorsPick && (
        <div className="absolute top-3.5 right-3.5 bg-[#ffe566]/15 border border-[#ffe566]/40 text-[#ffe566] rounded-2xl px-2.5 py-0.5 text-[0.72rem] font-bold shadow-[0_0_12px_rgba(255,229,102,0.25)] z-10">
          Editor&apos;s Pick
        </div>
      )}

      <div className="text-4xl mb-3.5">{tool.icon}</div>

      <div className="font-heading text-xl font-bold mb-1 group-hover:text-white transition-colors text-text">
        {tool.name}
      </div>

      <div className="text-muted text-sm mb-3.5 group-hover:text-[#c8c8e8] transition-colors">
        {tool.tagline}
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="bg-surface2 border border-white/5 rounded-lg px-2.5 py-0.5 text-xs text-muted font-medium group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-[#d8d8f0] transition-all"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        {renderStars(tool.stars, styles.stars)}
        <span className="text-sm font-semibold text-text group-hover:text-text transition-colors">
          {tool.rating}
        </span>
      </div>

      <div className="h-px bg-border my-4" />

      <div className="grid grid-cols-2 gap-3">
        <div>
          <h4 className="text-[0.72rem] font-bold tracking-wide uppercase text-[#00ffc8] mb-2">
            Pros
          </h4>
          <ul className="list-none">
            {tool.pros.map((pro) => (
              <li
                key={pro}
                className="text-xs text-muted py-0.5 group-hover:text-[#c8c8e8] transition-colors"
              >
                <span className="text-[#00ffc8] font-bold mr-1">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.72rem] font-bold tracking-wide uppercase text-[#ff2d9b] mb-2">
            Cons
          </h4>
          <ul className="list-none">
            {tool.cons.map((con) => (
              <li
                key={con}
                className="text-xs text-muted py-0.5 group-hover:text-[#c8c8e8] transition-colors"
              >
                <span className="text-[#ff2d9b] font-bold mr-1">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted group-hover:text-[#c8c8e8] transition-colors">
          <strong className="text-text">{tool.price.split(" / ")[0]}</strong>
          {tool.price.includes(" / ") && ` / ${tool.price.split(" / ")[1]}`}
        </div>
        <Link
          href={tool.link}
          target="_blank"
          className="bg-gradient-to-br from-[#a259ff] to-[#ff2d9b] text-white border-none rounded-2xl px-4 py-1.5 text-sm font-semibold transition-all shadow-[0_0_10px_rgba(162,89,255,0.3)] hover:shadow-[0_0_20px_rgba(162,89,255,0.6)] hover:scale-105"
        >
          Try it
        </Link>
      </div>
    </div>
  );
}
