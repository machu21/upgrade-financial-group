"use client";

import { ArrowRight, TrendingUp, ShieldCheck, HeartPulse, PiggyBank, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WholeLifePage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const steps = [
    {
      icon: ShieldCheck,
      title: "Lifelong Coverage",
      desc: "A permanent death benefit that never expires. As long as your premiums are paid, your family is guaranteed a tax-free payout — for life.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      video: "/videos/whole-life-1.mp4",
      stat: "Lifetime", statLabel: "Coverage Guaranteed",
    },
    {
      icon: Lock,
      title: "Fixed Premiums",
      desc: "Your premium is locked in for life. It will never increase, regardless of inflation, economic changes, or declining health as you age.",
      color: "text-muted-foreground",
      bg: "bg-accent/30",
      border: "border-border",
      video: "/videos/whole-life-2.mp4",
      stat: "Locked In", statLabel: "Premium Forever",
    },
    {
      icon: PiggyBank,
      title: "Guaranteed Cash Value",
      desc: "A portion of every premium builds a guaranteed cash reserve. This money grows tax-deferred at a legally binding, predictable rate.",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
      video: "/videos/whole-life-3.mp4",
      stat: "Tax-Deferred", statLabel: "Cash Growth",
    },
    {
      icon: TrendingUp,
      title: "Dividend Potential",
      desc: "Earn non-guaranteed dividends from the insurance company's profits. Use them to increase cash value, pay premiums, or buy more coverage.",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      video: "/videos/whole-life-4.mp4",
      stat: "Compounding", statLabel: "Dividend Growth",
    },
    {
      icon: HeartPulse,
      title: "Living Benefits",
      desc: "Access your death benefit while still alive if diagnosed with a qualifying critical, chronic, or terminal illness — money when you need it most.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      video: "/videos/whole-life-5.mp4",
      stat: "Early", statLabel: "Benefit Access",
    },
  ];

  if (!isMounted) return null;

  return (
    <>
      <style>{`
        @keyframes animatedGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-animated-gradient {
          background-size: 200% 200%;
          background-image: linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--accent) / 0.15) 50%, hsl(var(--background)) 100%);
          animation: animatedGradient 18s ease infinite;
        }
      `}</style>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* Global dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none [filter:blur(0.5px)]" />

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/85 pointer-events-none" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs tracking-widest uppercase border border-emerald-500/20">
            The Foundation of Certainty
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Whole Life<br />
            <span className="text-emerald-400">Insurance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Traditional, timeless protection. Lifelong coverage, locked-in premiums, and a guaranteed cash value that grows year after year — no surprises, ever.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "Lifetime", label: "Coverage" },
              { val: "Fixed", label: "Premiums Forever" },
              { val: "Tax-Free", label: "Death Benefit" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-accent/30 border border-border rounded-full px-4 py-2">
                <span className="text-sm font-extrabold text-foreground">{s.val}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/whole-life/form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get My Free Whole Life Quote <ArrowRight className="w-5 h-5" />
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                >
                  <source src={step.video} type="video/mp4" />
                </video>
                <div className={`absolute inset-0 ${isEven
                  ? "bg-gradient-to-l from-transparent to-background/60"
                  : "bg-gradient-to-r from-transparent to-background/60"}`}
                />
                {/* Stat badge */}
                <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-2xl font-extrabold text-foreground leading-none">{step.stat}</p>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{step.statLabel}</p>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-animated-gradient ${isEven ? "lg:order-1" : "lg:order-2"}`}>
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

      {/* ── DIVIDENDS + GROWTH CHART ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs tracking-widest uppercase border border-emerald-500/20">
              Long-Term Projection
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Guarantees + <span className="text-primary">Dividends</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The guaranteed cash value forms a rock-solid foundation, while projected dividends compound to significantly accelerate your wealth over time.
            </p>
          </div>

          <div className="bg-accent/20 border border-border rounded-3xl p-8 md:p-12">
            <div className="relative h-64 md:h-80 w-full flex items-end justify-around pb-8 border-b-2 border-border px-4 md:px-8">

              {[
                { year: "Yr 10", guaranteed: 20, dividends: 5 },
                { year: "Yr 20", guaranteed: 35, dividends: 15 },
                { year: "Yr 30", guaranteed: 50, dividends: 30 },
                { year: "Yr 40", guaranteed: 65, dividends: 50 },
                { year: "Yr 50", guaranteed: 80, dividends: 80 },
              ].map((data, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center relative group h-full">
                  <div className="w-1/2 max-w-[3.5rem] flex flex-col justify-end items-center h-full group-hover:scale-[1.03] transition-transform duration-300">

                    {/* Dividends — top */}
                    <div
                      className="w-full rounded-t-xl bg-primary shadow-[0_4px_20px_rgba(var(--color-primary),0.2)] border border-primary/30 relative"
                      style={{ height: `${data.dividends}%` }}
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-primary">
                        +Dividends
                      </span>
                    </div>

                    {/* Guaranteed — bottom */}
                    <div
                      className="w-full bg-emerald-500 shadow-[0_4px_20px_rgba(16,185,129,0.15)] border border-emerald-500/30 rounded-b-sm"
                      style={{ height: `${data.guaranteed}%` }}
                    />
                  </div>
                  <span className="absolute -bottom-7 text-xs text-muted-foreground font-semibold">{data.year}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <div className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                Guaranteed Cash Value
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                Projected Dividends
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
                Ready for lifelong certainty?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Find out if a Whole Life policy is the right fit for your family and financial legacy. Our experts will design a custom illustration for you, completely free.
              </p>
              <Link
                href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Get Your Free Whole Life Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}