import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export function FounderStory() {
  return (
    <section className="bg-accent/10 border-t border-border py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Our Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Meet Benjamin Michael Angeles III
          </h2>
        </div>

        <div className="relative bg-accent/20 border border-border rounded-[2rem] p-10 md:p-16 overflow-hidden">

          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.06] pointer-events-none [filter:blur(0.5px)]" />

          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Big quote mark */}
          <span className="absolute top-6 left-8 text-[120px] text-primary/10 font-serif leading-none select-none">"</span>

          <div className="relative z-10 space-y-8">

            {/* Pull quote */}
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-snug max-w-2xl">
              I didn't start this business because I read about living benefits in a textbook.{" "}
              <span className="text-primary">I lived it.</span>
            </p>

            {/* Divider */}
            <div className="h-px w-16 bg-primary/40" />

            {/* Story paragraphs */}
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                As a kidney transplant recipient, I know what it's like to face a life-threatening illness while worrying about how to pay the bills. The financial strain was overwhelming — and I've seen too many families go through the same thing.
              </p>
              <p>
                Living benefits gave me breathing room when I needed it most. That experience changed my perspective on life insurance forever. Most people have no idea their policy could help them while they're still alive.
              </p>
            </div>

            {/* Mission highlight */}
            <div className="flex items-start gap-4 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-5 max-w-xl">
              <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Our Mission</p>
                <p className="text-foreground font-semibold leading-snug">
                  No family should have to choose between their health and their financial security.
                </p>
              </div>
            </div>

            <p className="text-primary font-bold text-lg">
              I'm on a mission to change that.
            </p>

            <Link
              href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/20 w-fit"
            >
              Join the Mission <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}