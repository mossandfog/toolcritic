import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Quiz } from "@/components/quiz";
import { ToolsGrid } from "@/components/tools-grid";
import { Testimonials } from "@/components/testimonials";
import { ComparisonTable } from "@/components/comparison-table";
import { DeepDive } from "@/components/deep-dive";
import { Timeline } from "@/components/timeline";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Quiz />
      <Timeline />
      <ToolsGrid />
      <Testimonials />
      <ComparisonTable />
      <DeepDive />
      <Newsletter />
      <Footer />
    </main>
  );
}
