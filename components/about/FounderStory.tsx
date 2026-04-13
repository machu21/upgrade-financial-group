import { HeartHandshake } from "lucide-react";

export function FounderStory() {
  return (
    <section className="bg-accent/10 border-y border-border py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden bg-accent border-2 border-border relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <HeartHandshake className="w-16 h-16 text-primary mb-4 opacity-50" />
            <p className="text-muted-foreground font-medium">[ Professional Photo of Benjamin Angeles III ]</p>
          </div>
          <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] -z-10 blur-xl" />
        </div>

        {/* Founder Story */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Meet Benjamin Angeles III
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed relative">
            <span className="absolute -top-10 -left-6 text-7xl text-primary/20 font-serif leading-none select-none">"</span>
            
            <p className="text-foreground font-medium text-xl">
              I didn't start this business because I read about living benefits in a textbook. I lived it.
            </p>
            <p>
              As a kidney transplant recipient, I know what it's like to face a life-threatening illness while worrying about how to pay the bills. The financial strain was overwhelming—and I've seen too many families go through the same thing.
            </p>
            <p>
              Living benefits made a difference for me during that difficult time. It gave me breathing room when I needed it most. That experience changed my perspective on life insurance. I realized most people have no idea their policy could help them while they're still alive.
            </p>
            <p className="text-primary font-semibold text-xl">
              I'm on a mission to change that.
            </p>
            <p>
              Today, I help families, business owners, and hardworking people protect themselves the right way—with insurance that works when life throws its hardest punches.
            </p>
          </div>

          {/* Mission Box */}
          <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Mission</p>
            <p className="text-foreground font-medium">To ensure no family ever has to choose between their health and their financial security.</p>
          </div>
        </div>
      </div>
    </section>
  );
}