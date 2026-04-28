"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { tools } from "@/lib/tools-data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ToolPage() {
  const params = useParams();
  const tool = tools.find((t) => t.id === params.id);

  if (!tool) {
    return (
      <main>
        <Nav />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tool not found</h1>
            <Link href="/" className="text-[#a259ff] hover:underline">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const colorMap: Record<string, { accent: string; glow: string }> = {
    purple: { accent: "#a259ff", glow: "rgba(162,89,255,0.3)" },
    green: { accent: "#00ffc8", glow: "rgba(0,255,200,0.3)" },
    cyan: { accent: "#00d4ff", glow: "rgba(0,212,255,0.3)" },
    pink: { accent: "#ff2d9b", glow: "rgba(255,45,155,0.3)" },
    orange: { accent: "#ff8c42", glow: "rgba(255,140,66,0.3)" },
    lime: { accent: "#b8ff42", glow: "rgba(184,255,66,0.3)" },
    teal: { accent: "#42ffd9", glow: "rgba(66,255,217,0.3)" },
    yellow: { accent: "#ffe566", glow: "rgba(255,229,102,0.3)" },
    red: { accent: "#ff5050", glow: "rgba(255,80,80,0.3)" },
  };

  const colors = colorMap[tool.color] || colorMap.purple;

  return (
    <main>
      <Nav />
      
      {/* Hero section */}
      <section className="px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-[#a0a0c0] hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#a0a0c0] mx-2">/</span>
            <Link href="/#tools" className="text-[#a0a0c0] hover:text-white transition-colors">
              Tools
            </Link>
            <span className="text-[#a0a0c0] mx-2">/</span>
            <span className="text-white">{tool.name}</span>
          </div>

          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="text-6xl w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accent}10)`,
                boxShadow: `0 0 30px ${colors.glow}`
              }}
            >
              {tool.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold">{tool.name}</h1>
                {tool.editorsPick && (
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: colors.accent, color: "#080810" }}
                  >
                    EDITOR&apos;S PICK
                  </span>
                )}
              </div>
              <p className="text-[#a0a0c0] text-lg mb-4">{tool.tagline}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < tool.stars ? colors.accent : "#3a3a5c" }}>
                      {i < tool.stars ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="ml-2 text-white font-semibold">{tool.rating}</span>
                </div>
                <span className="text-[#a0a0c0]">|</span>
                <span className="text-[#a0a0c0]">{tool.price}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{ borderColor: `${colors.accent}50`, color: colors.accent }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={tool.link}
            target="_blank"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all hover:translate-y-[-2px]"
            style={{ 
              background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}cc)`,
              color: tool.color === "lime" || tool.color === "yellow" || tool.color === "green" ? "#080810" : "#ffffff",
              boxShadow: `0 0 30px ${colors.glow}`
            }}
          >
            Try {tool.name}
          </Link>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="px-5 md:px-10 py-16 bg-[#0d0d1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-8">The Good & The Bad</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-[#12121f] border border-[#1e1e38] rounded-2xl p-6">
              <h3 className="text-[#00ffc8] font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">+</span> What we like
              </h3>
              <ul className="space-y-3">
                {tool.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#00ffc8] mt-1">+</span>
                    <span className="text-[#e0e0ff]">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-[#12121f] border border-[#1e1e38] rounded-2xl p-6">
              <h3 className="text-[#ff5050] font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">-</span> What could be better
              </h3>
              <ul className="space-y-3">
                {tool.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#ff5050] mt-1">-</span>
                    <span className="text-[#e0e0ff]">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Review (if available) */}
      {tool.fullReview && (
        <section className="px-5 md:px-10 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold mb-8">Our Take</h2>
            <div className="prose prose-invert max-w-none">
              {tool.fullReview.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-xl font-bold mt-8 mb-4" style={{ color: colors.accent }}>
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("**")) {
                  const [title, ...rest] = paragraph.split(":**");
                  return (
                    <div key={i} className="mb-6">
                      <h4 className="font-bold mb-2" style={{ color: colors.accent }}>
                        {title.replace(/\*\*/g, "")}:
                      </h4>
                      <p className="text-[#e0e0ff] leading-relaxed">
                        {rest.join(":**")}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-disc list-inside space-y-2 mb-6">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-[#e0e0ff]">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[#e0e0ff] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="px-5 md:px-10 py-16 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full border border-[#3a3a5c] text-[#a0a0c0] hover:border-[#a259ff] hover:text-[#a259ff] transition-all"
        >
          ← Back to all tools
        </Link>
      </section>

      <Footer />
    </main>
  );
}
