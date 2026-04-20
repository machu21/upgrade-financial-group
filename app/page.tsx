import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhyUpgrade } from "@/components/WhyUpgrade";
import { FAQ } from "@/components/FAQ";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />
      
      <main className="flex-grow relative z-10 w-full flex flex-col">
        <div className="w-full pb-12 md:pb-16">
          <Hero />
        </div>

        <ProblemSolution />
        <WhyUpgrade />
        <FAQ />
        <HowItWorks />
        <CtaSection />
      </main>
    </div>
  );
}