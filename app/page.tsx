import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhyUpgrade } from "@/components/WhyUpgrade";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] pointer-events-none" />

      <Navbar />

      <main className="flex-grow relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Hero />
        </div>

        <ProblemSolution />
        <WhyUpgrade />
        <FAQ />
        
        
      </main>

      <Footer />
    </div>
  );
}