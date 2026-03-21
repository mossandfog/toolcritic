"use client";

import { useState } from "react";
import { tools } from "@/lib/tools-data";
import { ToolCard } from "./tool-card";

const filters = [
  { key: "all", label: "All Tools" },
  { key: "writing", label: "Writing", emoji: "✍️" },
  { key: "coding", label: "Coding", emoji: "💻" },
  { key: "research", label: "Research", emoji: "🔍" },
  { key: "images", label: "Images", emoji: "🎨" },
];

export function ToolsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTools =
    activeFilter === "all"
      ? tools
      : tools.filter((tool) => tool.categories.includes(activeFilter));

  return (
    <div id="tools" className="bg-white/[0.015] py-20 border-y border-border">
      <section className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-xs font-bold tracking-wider uppercase text-accent mb-3">
          The Reviews
        </div>
        <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          Every AI tool worth knowing
        </div>
        <p className="text-muted text-lg max-w-lg mb-12">
          Straight talk. No affiliate-first rankings. These are the tools we
          actually live in.
        </p>

        {/* Filters */}
        <div className="flex gap-2.5 flex-wrap mb-9">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`bg-surface border rounded-3xl px-4 py-1.5 text-sm font-medium cursor-pointer transition-all ${
                activeFilter === filter.key
                  ? "border-accent text-text bg-accent/15 shadow-[0_0_12px_rgba(162,89,255,0.25)]"
                  : "border-border text-muted hover:border-accent hover:text-text hover:bg-accent/15 hover:shadow-[0_0_12px_rgba(162,89,255,0.25)]"
              }`}
            >
              {filter.emoji && <span className="mr-1">{filter.emoji}</span>}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
