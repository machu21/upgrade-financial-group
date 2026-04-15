import { CheckCircle2, ShieldAlert, ShieldCheck, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProblemSolution() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Optional Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            The Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why you need a policy that works for you while you are still here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* THE PROBLEM CARD */}
          <div className="flex flex-col space-y-6 p-8 md:p-10 rounded-3xl border border-border bg-accent/20 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-2 border border-border">
              <ShieldAlert className="w-7 h-7 text-muted-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">The Problem</h3>
            
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Most people don't realize their life insurance only pays out after they die.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              But what happens if you're diagnosed with a critical illness, a chronic condition, a critical injury or face a medical emergency? Traditional life insurance won't help you when you're still alive and fighting.
            </p>

            <div className="pt-4 space-y-4 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">The medical bills pile up.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">The paychecks stop coming in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">Your life savings disappear.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* THE SOLUTION CARD (Highlighted in Gold) */}
          <div className="flex flex-col space-y-6 p-8 md:p-10 rounded-3xl border-2 border-primary bg-primary/5 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(var(--color-primary),0.2)]">
            
            {/* Subtle Gold Glow Background Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-2 border border-primary/30 relative z-10">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            
            <div className="relative z-10">
              <p className="text-primary font-bold tracking-wider uppercase text-sm mb-2">We Have The Best Solution</p>
              <h3 className="text-3xl font-bold text-foreground">Living Benefits</h3>
            </div>
            
            <p className="text-xl text-foreground font-medium leading-relaxed relative z-10">
              Access your policy's death benefit while you're still living.
            </p>
            
            <p className="text-muted-foreground leading-relaxed relative z-10">
              If you're diagnosed with a qualifying terminal, critical, or chronic illness, or a critical injury, your policy goes to work for you immediately.
            </p>

            <div className="pt-4 space-y-4 flex-grow relative z-10">
              <p className="font-semibold text-foreground">That means:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">Money when you need it most — not just when you're gone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">Income replacement if you can't work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">Medical bills covered without draining your savings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">Peace of mind for you and your family.</span>
                </li>
              </ul>
            </div>

            {/* ADDED CTA BUTTON HERE */}
            <div className="pt-6 mt-auto relative z-10">
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] hover:shadow-primary/30 transition-all active:scale-95"
              >
                Get Protected Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}