"use client";

import { ArrowRight, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2, XCircle, LineChart, Lock, DollarSign, Heart, Users } from "lucide-react";
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
                One of the most powerful financial tools available today — permanent life insurance protection combined with tax-advantaged cash value growth linked to market performance, with zero downside risk.
              </p>
              <div className="pt-2">
                <Link
                  href="/iul/form"
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

      {/* 2. FIVE CORE BENEFITS */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why IUL Stands Apart</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Five reasons why an Indexed Universal Life policy is unlike anything else in the financial world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Benefit 1 */}
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Market-Linked Growth, Zero Downside Risk</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Earn when markets rise. Lose nothing when they fall. Your cash value is credited based on a market index — but a guaranteed floor means you'll never be credited a negative return. The upside of investing, without the sleepless nights.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tax-Free Retirement Income</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build a retirement paycheck the IRS can't touch. Cash value grows tax-deferred, and qualified policy loans and withdrawals in retirement are generally received income tax-free — letting you accumulate, grow, and distribute wealth without a tax bill.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Living Benefits Included</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your coverage works for you while you're still here. Access a portion of your death benefit early if you're diagnosed with a qualifying critical, chronic, or terminal illness — you don't have to wait until you pass for your policy to matter.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Flexible Premiums & Adjustable Coverage</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A policy that adapts as your life changes. Adjust your premium payments and death benefit as your income and needs evolve — whether you're growing a family, scaling a business, or approaching retirement.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-lg md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tax-Free Legacy for Your Family</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leave behind more than memories. Your death benefit is paid to your named beneficiaries income tax-free — bypassing probate and delivering an immediate financial legacy that spans generations.
              </p>
            </div>

            {/* Benefit 6 - Highlighted CTA Card */}
            <div className="bg-primary border border-primary p-8 rounded-3xl shadow-lg shadow-primary/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Ready to Build Your Tax-Free Future?</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  An IUL isn't just life insurance — it's a complete financial strategy. Our licensed agents will walk you through a custom illustration at no cost, no pressure.
                </p>
              </div>
              <Link
                href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:brightness-95 hover:scale-105 transition-all shadow-lg"
              >
                Start Now <ArrowRight className="w-4 h-4" />
              </Link>
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
              The most powerful feature of an IUL policy is how it credits your interest. Your money is never directly invested in the stock market — which protects you from crashes — but it still participates in market gains.
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
                  <span className="text-muted-foreground"><strong>Tax-Free Income:</strong> Qualified policy loans and withdrawals in retirement are generally received income tax-free.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Living Benefits:</strong> Access your death benefit early if diagnosed with a critical, chronic, or terminal illness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Flexibility:</strong> Adjust your premiums and death benefit as your income and family needs evolve over time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Tax-Free Legacy:</strong> Death benefit passes to beneficiaries income tax-free, bypassing probate entirely.</span>
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
                  <span className="text-muted-foreground"><strong>Capped Upside:</strong> Because you are protected from losses, your maximum gains are usually capped by the policy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Higher Cost:</strong> IUL is more expensive than standard Term Life because you are building permanent, cash-value coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Complexity:</strong> These policies benefit from annual reviews with a licensed advisor to ensure they perform as designed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-500/70 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Internal Fees:</strong> Administrative fees and insurance costs are deducted from the cash value, reducing net growth.</span>
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
              An IUL isn't one-size-fits-all — it's built around your goals. It's best for those maxing out their 401(k)s, seeking tax-free retirement strategies, or wanting lifelong protection with serious cash accumulation. Speak with one of our licensed agents to see exactly how a policy can be designed for your situation.
            </p>
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
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