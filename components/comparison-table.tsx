import { comparisonData } from "@/lib/tools-data";

export function ComparisonTable() {
  return (
    <section id="compare" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-xs font-bold tracking-wider uppercase text-accent mb-3">
        Side by Side
      </div>
      <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
        The no-BS comparison table
      </div>
      <p className="text-muted text-lg max-w-lg mb-12">
        When you just want the facts in one place. You&apos;re welcome.
      </p>

      {/* Table wrapper */}
      <div className="overflow-x-auto rounded-[18px] border border-accent/20 shadow-[0_0_40px_rgba(162,89,255,0.08)]">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-surface2">
            <tr>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border first:rounded-tl-[16px]">
                Tool
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border">
                Best for
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border">
                Free tier
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border">
                Web access
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border">
                Image gen
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wide uppercase text-muted border-b border-border last:rounded-tr-[16px]">
                Pricing
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={row.name}
                className={`hover:bg-accent/5 ${
                  index === comparisonData.length - 1 ? "" : "border-b border-border"
                }`}
              >
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{row.icon}</span>
                    <span className="font-semibold">{row.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-muted">{row.bestFor}</td>
                <td className="px-4 py-3.5">
                  {row.freeTier ? (
                    <span className="text-accent3 font-bold">✓</span>
                  ) : (
                    <span className="text-muted">✗</span>
                  )}
                </td>
                <td className="px-4 py-3.5">
                  {row.webAccess === true ? (
                    <span className="text-accent3 font-bold">✓</span>
                  ) : row.webAccess === "Pro" ? (
                    <span className="text-accent3 font-bold">✓ (Pro)</span>
                  ) : (
                    <span className="text-muted">✗</span>
                  )}
                </td>
                <td className="px-4 py-3.5">
                  {row.imageGen === true ? (
                    <span className="text-accent3 font-bold">✓</span>
                  ) : row.imageGen === "★★★" ? (
                    <span className="text-accent3 font-bold">★★★</span>
                  ) : (
                    <span className="text-muted">✗</span>
                  )}
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${
                      row.pricing === "freemium"
                        ? "bg-yellow/10 text-yellow"
                        : row.pricing === "paid"
                        ? "bg-accent/10 text-accent"
                        : "bg-accent3/10 text-accent3"
                    }`}
                  >
                    {row.pricing === "freemium"
                      ? "Freemium"
                      : row.pricing === "paid"
                      ? "Paid"
                      : "Free"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
