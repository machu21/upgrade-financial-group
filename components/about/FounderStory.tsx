export function FounderStory() {
  return (
    <section className="bg-accent/10 border-y border-border py-24">
      {/* Changed to max-w-4xl and removed the grid layout for a clean, centered reading experience */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Founder Story */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-4">
            Meet Benjamin Angeles III
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed relative bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            {/* Adjusted the quote mark position slightly to fit the new card layout */}
            <span className="absolute -top-6 left-6 text-7xl text-primary/20 font-serif leading-none select-none">"</span>
            
            <p className="text-foreground font-medium text-xl relative z-10">
              I didn't start this business because I read about living benefits in a textbook. I lived it.
            </p>
            <p className="relative z-10">
              As a kidney transplant recipient, I know what it's like to face a life-threatening illness while worrying about how to pay the bills. The financial strain was overwhelming—and I've seen too many families go through the same thing.
            </p>
            <p className="relative z-10">
              Living benefits made a difference for me during that difficult time. It gave me breathing room when I needed it most. That experience changed my perspective on life insurance. I realized most people have no idea their policy could help them while they're still alive.
            </p>
            <p className="text-primary font-semibold text-xl relative z-10">
              I'm on a mission to change that.
            </p>
            <p className="relative z-10">
              Today, I help families, business owners, and hardworking people protect themselves the right way—with insurance that works when life throws its hardest punches.
            </p>
          </div>

          {/* Mission Box */}
          <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Mission</p>
            <p className="text-foreground font-medium text-lg">To ensure no family ever has to choose between their health and their financial security.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}