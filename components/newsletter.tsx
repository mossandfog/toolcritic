"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div id="newsletter" className="px-6 py-5 pb-20">
      <div
        className="max-w-2xl mx-auto rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(162,89,255,0.12), rgba(255,45,155,0.08), rgba(0,212,255,0.06))",
          border: "1px solid rgba(162,89,255,0.25)",
          boxShadow:
            "0 0 80px rgba(162,89,255,0.12), 0 0 40px rgba(255,45,155,0.07)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-accent2), var(--color-cyan))",
          }}
        />

        <div className="text-4xl mb-4">📬</div>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3 text-balance">
          One tool reviewed,
          <br />
          every week.
        </h2>
        <p className="text-muted mb-7">
          Sharp, honest, short. The ToolCritic newsletter goes deep on one AI
          tool weekly - what&apos;s good, what&apos;s overhyped, and who
          it&apos;s actually for.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex gap-2.5 max-w-md mx-auto flex-col sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/5 border border-accent/25 rounded-full px-5 py-3 text-text text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_14px_rgba(162,89,255,0.3)] placeholder:text-muted"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-accent to-accent2 text-white border-none rounded-full px-6 py-3 text-sm font-semibold cursor-pointer transition-all whitespace-nowrap shadow-[0_0_16px_rgba(162,89,255,0.4)] hover:shadow-[0_0_28px_rgba(162,89,255,0.65)] hover:translate-y-[-1px]"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-accent3 text-sm mt-3">
            You&apos;re in! Welcome aboard.
          </p>
        )}
      </div>
    </div>
  );
}
