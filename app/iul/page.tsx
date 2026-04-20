"use client";

import { ArrowRight, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2, XCircle, LineChart, Lock } from "lucide-react";
import Link from "next/link";

export default function IULPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      
{/* 1. HERO SECTION */}
<section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
  {/* Ambient glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

  <div className="max-w-7xl mx-auto px-6">
    <div className="relative rounded-[2rem] overflow-hidden bg-primary/10 border border-primary/20 grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      
      {/* Dot pattern inside card */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none [filter:blur(0.5px)]" />
      
      {/* Gold glow inside card */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none" />

      {/* Left: Text Content */}
      <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 lg:p-16 space-y-6">
        <p className="text-primary text-xs font-bold tracking-widest uppercase">
          Complete Coverage Guide
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Indexed Universal <br />
          <span className="text-primary">Life Insurance</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
          Permanent protection with market-linked growth and zero downside risk. Build cash value while keeping your family covered for life.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/25 text-sm"
          >
            Get Your Custom IUL Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right: Photo */}
      <div className="relative hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?w=900&auto=format&fit=crop&q=80"
          alt="Family protected by IUL"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-r-[2rem]"
        />
        {/* Fade from left to blend into card */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent rounded-r-[2rem]" />
      </div>

    </div>
  </div>
</section>

      {/* 2. KEY TAKEAWAYS */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">How it Works</h3>
              <p className="text-muted-foreground leading-relaxed">
                IUL combines a traditional death benefit with a cash value account. As you pay premiums, a portion builds cash value that earns interest tied to a stock market index (like the S&P 500).
              </p>
            </div>
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexibility & Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional whole life, IUL allows you to adjust your premium payments and death benefit over time. It offers higher growth potential than fixed policies.
              </p>
            </div>
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Who It's For</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for individuals seeking permanent, lifelong coverage who want to simultaneously build a tax-advantaged asset they can borrow against during their lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Caps & Floors) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Magic of <span className="text-primary">Caps & Floors</span></h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The most powerful feature of an IUL policy is how it credits your interest. Your money is never directly invested in the stock market, which protects you from crashes.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The Cap (Upside Potential)</h4>
                  <p className="text-muted-foreground mt-1">When the market goes up, you capture the gains up to a specific "cap" (typically around 9% to 12%).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The Floor (Downside Protection)</h4>
                  <p className="text-muted-foreground mt-1">When the market crashes, your account locks in at a "floor" of 0%. <strong>You never lose a single penny due to a market downturn.</strong></p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Visual Data Card */}
          <div className="bg-accent/10 border border-border p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <h4 className="font-bold text-xl mb-6 text-center">Hypothetical Performance</h4>
            <div className="space-y-4">
              <div className="bg-background border border-border/50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase">Year 1: Market goes UP +15%</p>
                  <p className="font-bold text-emerald-500">You get +10% (Hits the Cap)</p>
                </div>
                <TrendingUp className="text-emerald-500 w-6 h-6" />
              </div>
              <div className="bg-background border border-border/50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase">Year 2: Market goes DOWN -20%</p>
                  <p className="font-bold text-primary">You get 0% (Saved by the Floor)</p>
                </div>
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <div className="bg-background border border-border/50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase">Year 3: Market goes UP +8%</p>
                  <p className="font-bold text-emerald-500">You get +8% (Full Market Gain)</p>
                </div>
                <TrendingUp className="text-emerald-500 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROS AND CONS */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pros & Cons of IUL</h2>
            <p className="text-lg text-muted-foreground">Every financial tool has trade-offs. Here is the honest breakdown of Indexed Universal Life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros Card */}
            <div className="bg-background border border-emerald-500/20 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500 w-6 h-6" /> The Advantages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Zero Market Risk:</strong> The 0% floor ensures you never lose principal to stock market crashes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Tax-Free Income:</strong> You can borrow against your cash value later in life entirely tax-free.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Living Benefits:</strong> Access your death benefit early if diagnosed with a critical or chronic illness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Flexibility:</strong> You can adjust your premiums down the road if your financial situation changes.</span>
                </li>
              </ul>
            </div>

            {/* Cons Card */}
            <div className="bg-background border border-red-500/20 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500 w-6 h-6" /> The Trade-Offs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Capped Upside:</strong> Because you are protected from losses, your maximum gains are usually capped.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Cost:</strong> IUL is more expensive than standard Term Life because you are building cash value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Complexity:</strong> These policies require annual check-ins with an advisor to ensure they are performing correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Internal Fees:</strong> Policies have administrative fees and insurance costs that are deducted from the cash value.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 via-background to-background border border-primary/30 p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Is IUL Right For You?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              IUL isn't for everyone. It is best for those maxing out their 401(k)s, looking for tax-free retirement strategies, or wanting lifelong family protection with aggressive cash accumulation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-all"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}