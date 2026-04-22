import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FounderStory() {
  return (
    <section className="bg-accent/10 border-t border-border py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Our Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Meet Benjamin Michael Angeles III
          </h2>
        </div>

        {/* Split card */}
        <div className="bg-accent/20 border border-border rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Image side */}
          <div className="relative min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0dc05fcd0064?w=900&q=80"
              alt="Benjamin Michael Angeles III"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Fade into card background */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-accent/60 to-transparent" />
            {/* Mission badge */}
            <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 shadow-lg max-w-[220px]">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Our Mission</p>
              <p className="text-xs font-semibold text-foreground leading-snug">
                No family should choose between their health and financial security.
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="p-10 md:p-14 flex flex-col justify-center space-y-6 relative bg-accent/20">
            {/* Big quote mark */}
            <span className="absolute top-6 right-8 text-8xl text-border font-serif leading-none select-none">"</span>

            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug relative z-10">
              I didn't start this business because I read about living benefits in a textbook. I lived it.
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base relative z-10">
              <p>
                As a kidney transplant recipient, I know what it's like to face a life-threatening illness while worrying about how to pay the bills. The financial strain was overwhelming — and I've seen too many families go through the same thing.
              </p>
              <p>
                Living benefits gave me breathing room when I needed it most. That experience changed my perspective on life insurance forever. Most people have no idea their policy could help them while they're still alive.
              </p>
            </div>

            <p className="text-primary font-bold text-lg relative z-10">
              I'm on a mission to change that.
            </p>

            <Link
              href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/20 w-fit relative z-10"
            >
              Join the Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}