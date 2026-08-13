"use client";

import { CheckCircle2, ShieldAlert, ShieldCheck, XCircle, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export function ProblemSolution() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex flex-col justify-between pointer-events-none -z-10 opacity-30">
        <div className="w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] self-start" />
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] self-end" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            The Reality of <span className="text-primary">Life Insurance</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Why you need a policy that works for you while you are still here.
          </p>
        </div>

        <div className="flex flex-col items-center w-full">
          
          {/* STEP 1: THE PROBLEM (Red Themed) */}
          <div className="w-full bg-accent/20 border border-red-500/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl group hover:border-red-500/40 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-red-500)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 relative z-10 items-center">
              {/* Left Side: Context */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold uppercase tracking-widest text-sm mb-2">
                  <ShieldAlert className="w-5 h-5" />
                  The Problem
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Most people don't realize their life insurance only pays out <span className="text-red-500">after they die.</span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  But what happens if you're diagnosed with a critical illness, a chronic condition, a critical injury or face a medical emergency? Traditional life insurance won't help you when you're still alive and fighting.
                </p>
              </div>

              {/* Right Side: Impacts */}
              <div className="bg-background/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-border/50 shadow-inner group-hover:bg-background/80 transition-colors duration-500">
                <ul className="space-y-5">
                  {[
                    "The medical bills pile up.",
                    "The paychecks stop coming in.",
                    "Your life savings disappear.",
                    "Investment Loss.",
                    "Ending Your marriage."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <XCircle className="w-6 h-6 text-red-500 shrink-0 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                      <span className="text-foreground/90 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ANIMATED CONNECTOR */}
          <div className="h-24 md:h-32 w-1 border-l-2 border-dashed border-primary/30 relative flex items-center justify-center animate-in fade-in duration-1000 delay-300">
            <div className="absolute top-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-border text-muted-foreground animate-bounce shadow-lg shadow-primary/5">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* STEP 2: THE SOLUTION (Primary Themed) */}
          <div className="w-full bg-primary/5 border-2 border-primary/40 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(var(--color-primary),0.25)] group hover:border-primary/60 hover:shadow-[0_0_80px_-15px_rgba(var(--color-primary),0.35)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 relative z-10 items-center">
              {/* Left Side: Context */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold uppercase tracking-widest text-sm mb-2 shadow-inner">
                  <ShieldCheck className="w-5 h-5" />
                  We Have The Best Solution
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                  Living Benefits
                </h3>
                
                <p className="text-xl text-foreground font-semibold leading-relaxed">
                  Access your policy's death benefit while you're still living.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  If you're diagnosed with a qualifying terminal, critical, or chronic illness, or a critical injury, your policy goes to work for you immediately.
                </p>
                
                <div className="pt-6 hidden md:block">
                  <Link
                    href="/form"
                    className="group/btn inline-flex items-center justify-center gap-3 py-4 px-8 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-xl shadow-primary/25 hover:brightness-110 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Get Protected Today
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Impacts */}
              <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-primary/20 shadow-2xl shadow-primary/5 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 rounded-t-3xl" />
                
                <p className="font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  That means:
                </p>
                
                <ul className="space-y-5">
                  {[
                    "Money when you need it most — not just when you're gone.",
                    "Income replacement if you can't work.",
                    "Medical bills covered without draining your savings.",
                    "Peace of mind for you and your family.",
                    "All the benefits you receive are tax-free."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(var(--color-primary),0.6)] group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-foreground font-medium leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-6 md:hidden w-full">
                <Link
                  href="/form"
                  className="group/btn flex items-center justify-center gap-3 w-full py-4 px-6 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-xl shadow-primary/25 hover:brightness-110 transition-all active:scale-95"
                >
                  Get Protected Today
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}