import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "ToolCritic - Honest Reviews of Every AI Tool Worth Knowing",
  description:
    "ToolCritic gives you sharp, human-tested reviews of every AI tool worth knowing. No hype. No affiliate fluff. Just honest takes and a 2-minute quiz to find yours.",
  openGraph: {
    title: "ToolCritic - Honest Reviews of Every AI Tool Worth Knowing",
    description:
      "Sharp, human-tested reviews of every AI tool worth knowing. No hype. No affiliate fluff.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
