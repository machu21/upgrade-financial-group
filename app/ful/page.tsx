"use client";

import { ArrowRight, TrendingUp, ShieldCheck, HeartPulse, PiggyBank, Anchor, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FULPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const steps = [
    {
      icon: Anchor,
      title: "Guaranteed Fixed Interest Rate",
      desc: "Unlike indexed or variable products, a Fixed Universal Life policy credits your cash value at a guaranteed interest rate set by the policy. You always know exactly how your money is growing — making it one of the most predictable and stress-free wealth accumulation tools available.",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      image: "https://www.investopedia.com/thmb/oIfTckfPLQjuYMtQCROIssl557Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FixedInterestRateDefinitionProsConsvs.VariableRate-f6b6175af4af47b7a9d3b86cbf2983b2.jpg",
      stat: "4%+", statLabel: "Guaranteed Rate"
    },
    {
      icon: Lock,
      title: "Zero Market Risk — Ever",
      desc: "Your cash value is completely insulated from market volatility. Whether markets are booming or crashing, your policy continues to grow at its guaranteed rate without interruption. For clients who've worked hard to build their wealth, this level of certainty is invaluable.",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
      stat: "0%", statLabel: "Market Risk"
    },
    {
      icon: PiggyBank,
      title: "Tax-Deferred Cash Value Growth",
      desc: "The cash value inside your Fixed Universal Life policy accumulates on a tax-deferred basis — meaning you won't owe taxes on the growth until you access it. When structured properly, withdrawals and loans in retirement can be taken income tax-free, making it an excellent complement to any retirement plan.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
      stat: "Tax-Free", statLabel: "Withdrawals"
    },
    {
      icon: HeartPulse,
      title: "Living Benefits Included",
      desc: "Our Fixed Universal Life policies include Living Benefits that allow you to access a portion of your death benefit if you're diagnosed with a qualifying critical, chronic, or terminal illness. Your policy isn't just a safety net for your family — it's a financial lifeline for you too.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1600&q=80",
      stat: "Early", statLabel: "Access"
    },
    {
      icon: TrendingUp,
      title: "Permanent Coverage with Flexible Premiums",
      desc: "As a universal life policy, you have the ability to adjust your premium payments within certain limits to accommodate changes in your income or expenses. Your coverage stays in force permanently — so your family is always protected regardless of what life brings your way.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
      stat: "Lifetime", statLabel: "Coverage"
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* Global dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none [filter:blur(0.5px)]" />

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Safe · Steady · Secure
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Fixed Universal<br />
            <span className="text-primary">Life Insurance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For those who value stability above all else — permanent protection with predictable, guaranteed growth. No market exposure, no surprises. Just steady, reliable accumulation you can count on year after year.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "4%+", label: "Guaranteed Rate" },
              { val: "0%", label: "Market Risk" },
              { val: "Tax-Free", label: "Cash Value Access" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-accent/30 border border-border rounded-full px-4 py-2">
                <span className="text-sm font-extrabold text-foreground">{s.val}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get My Free FUL Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE FEATURE SECTIONS ── */}
      <div className="flex flex-col">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={index}
              className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px] border-t border-border"
            >
              {/* Image side */}
              <div className={`relative overflow-hidden min-h-[300px] lg:min-h-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 ${isEven
                  ? "bg-gradient-to-l from-transparent to-background/60"
                  : "bg-gradient-to-r from-transparent to-background/60"
                }`} />
                {/* Stat badge */}
                <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-2xl font-extrabold text-foreground leading-none">{step.stat}</p>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{step.statLabel}</p>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-background ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  0{index + 1} / 0{steps.length}
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4 leading-tight">
                  {step.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── GROWTH CHART ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
              5-Year Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              The Power of <span className="text-primary">Guaranteed Growth</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No market crashes. No guessing. Steady, predictable cash value accumulation year after year.
            </p>
          </div>

          <div className="bg-accent/20 border border-border rounded-3xl p-8 md:p-12">
            <div className="relative h-64 md:h-80 w-full flex items-end justify-around pb-8 border-b-2 border-border px-4 md:px-8">
              <div className="absolute bottom-8 left-0 w-full h-px bg-border" />
              <span className="absolute bottom-6 left-0 text-xs font-bold text-muted-foreground">0%</span>

              {[
                { year: "Yr 1", mktVal: 30, fulVal: 15, mktReturn: "+15%", fulReturn: "+4%" },
                { year: "Yr 2", mktVal: -20, fulVal: 25, mktReturn: "-20%", fulReturn: "+4%" },
                { year: "Yr 3", mktVal: 10, fulVal: 35, mktReturn: "+10%", fulReturn: "+4%" },
                { year: "Yr 4", mktVal: -15, fulVal: 45, mktReturn: "-15%", fulReturn: "+4%" },
                { year: "Yr 5", mktVal: 20, fulVal: 55, mktReturn: "+15%", fulReturn: "+4%" },
              ].map((data, i) => (
                <div key={i} className="flex-1 flex justify-center items-end relative group h-full">
                  {/* Market bar */}
                  <div
                    className={`w-[28%] max-w-[2rem] rounded-t-lg transition-all duration-700 absolute bottom-8 -ml-5
                      ${data.mktVal >= 0
                        ? "bg-muted border border-border"
                        : "bg-rose-500/20 border border-rose-500/30"
                      }`}
                    style={{
                      height: `${Math.abs(data.mktVal) + 5}%`,
                      marginBottom: data.mktVal < 0 ? `-${Math.abs(data.mktVal) + 5}%` : "0",
                    }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-muted-foreground">
                      {data.mktReturn}
                    </span>
                  </div>

                  {/* FUL bar */}
                  <div
                    className="w-[28%] max-w-[2rem] rounded-t-lg bg-primary shadow-[0_4px_20px_rgba(var(--color-primary),0.25)] transition-all duration-700 absolute bottom-8 ml-5"
                    style={{ height: `${data.fulVal}%` }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary">
                      {data.fulReturn}
                    </span>
                  </div>

                  <span className="absolute -bottom-7 text-xs text-muted-foreground font-semibold">{data.year}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <div className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                <div className="w-3 h-3 rounded-sm bg-muted border border-border" />
                Traditional Market Account
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                FUL Cash Value (Guaranteed)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-border py-24 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none [filter:blur(0.5px)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                Want the peace of mind that comes with guaranteed growth?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                A Fixed Universal Life policy may be exactly what your financial plan needs. Talk to one of our licensed agents today — we'll design a custom FUL illustration for your unique goals, completely free of charge.
              </p>
              <Link
                href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Get Your Free FUL Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}