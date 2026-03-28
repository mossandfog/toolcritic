import Link from "next/link";

const footerLinks = [
  { href: "#tools", label: "Reviews" },
  { href: "#quiz", label: "Quiz" },
  { href: "#compare", label: "Compare" },
  { href: "#deep-dive", label: "Deep Dive" },
  { href: "#timeline", label: "Timeline" },
  { href: "#newsletter", label: "Newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border p-10 text-center text-muted text-sm">
      <div className="mb-4">
        {footerLinks.map((link, index) => (
          <span key={link.href}>
            <Link
              href={link.href}
              className="text-muted hover:text-[#a259ff] transition-colors"
            >
              {link.label}
            </Link>
            {index < footerLinks.length - 1 && <span className="mx-2">·</span>}
          </span>
        ))}
      </div>
      <div className="text-text">Made with care and actual opinions. © 2025 ToolCritic</div>
      <div className="mt-2 text-xs opacity-60">
        Built by a human who uses these tools daily. No sponsored rankings.
      </div>
    </footer>
  );
}
