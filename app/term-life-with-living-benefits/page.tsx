"use client";

import { ArrowRight, ShieldCheck, HeartPulse, Activity, AlertCircle, CheckCircle2, Stethoscope, FileHeart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const triggers = [
  {
    icon: Activity,
    title: "Critical Illness",
    desc: "Heart attack, stroke, cancer, major organ failure, and other qualifying major health events.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Stethoscope,
    title: "Chronic Illness",
    desc: "Unable to perform 2 of 6 activities of daily living (bathing, dressing, eating, etc.) or severe cognitive impairment.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: FileHeart,
    title: "Terminal Illness",
    desc: "Diagnosed with a terminal illness with a life expectancy of 12-24 months or less.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: ShieldCheck,
    title: "Critical Injury",
    desc: "Severe burns, traumatic brain injury, paralysis, or coma. (Availability varies by state and carrier).",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
];

const useCases = [
  {
    title: "Income Replacement",
    desc: "If a major health event stops you from working, your policy can replace lost wages so your family doesn't suffer financially.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    stat: "Keep",
    statLabel: "Your Paycheck",
  },
  {
    title: "Medical Expenses",
    desc: "Health insurance doesn't cover everything. Use living benefits to pay deductibles, out-of-network costs, or alternative treatments.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    stat: "Cover",
    statLabel: "Medical Debt",
  },
  {
    title: "Quality of Life",
    desc: "If an illness or injury leaves you disabled, use the funds to retrofit your home, pay for home health care, or hire assistance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMlOXPZ9BNA_gHCbVdQSesBjH2KdZYk8E4Q&s",
    stat: "Adapt",
    statLabel: "Your Lifestyle",
  },
];

export default function TermLifeLivingBenefitsPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

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
            Life Insurance You Don't Have to Die to Use
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Term Life <br />
            <span className="text-primary">With Living Benefits</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Affordable, maximum coverage term insurance that protects your family if you pass away, and protects your income if you get sick or injured while you're still living.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "Tax-Free", label: "Accelerated Benefit" },
              { val: "Included", label: "At No Extra Premium" },
              { val: "10-30 Yrs", label: "Flexible Term Lengths" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-accent/30 border border-border rounded-full px-4 py-2">
                <span className="text-sm font-extrabold text-foreground">{s.val}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE TRIGGERS ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Qualifying Events
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              When Can You Use Your Benefits?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              You can accelerate a portion of your death benefit while you are still alive if you experience any of these major health events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {triggers.map((t, i) => (
              <div key={i} className={`${t.bg} border ${t.border} rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:border-primary/40 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-2xl bg-background border ${t.border} flex items-center justify-center mb-6 shadow-sm`}>
                  <t.icon className={`w-7 h-7 ${t.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS COMPARISON ── */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Traditional Term <span className="text-primary">vs</span> Living Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Card */}
            <div className="bg-background border border-border p-8 rounded-3xl shadow-lg opacity-80 hover:border-border/80 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground border-b border-border pb-4">
                Traditional Term Life
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Only pays out if you pass away during the term.</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Provides $0 if you suffer a heart attack or stroke and survive.</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">No help with medical bills or lost income during a health crisis.</span>
                </li>
              </ul>
            </div>

            {/* Living Benefits Card */}
            <div className="bg-primary/5 border-2 border-primary/40 p-8 rounded-3xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-primary/20 pb-4 relative z-10 flex items-center gap-2">
                 Term with Living Benefits
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Pays out if you pass away (just like traditional term).</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Allows you to advance cash from your death benefit if you suffer a qualifying illness.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Helps cover medical bills, replace lost income, and keep your family afloat while you recover.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Real-World Application
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              How the Money is Used
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Once you accelerate your benefit, the money is yours to use however you see fit. There are no restrictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-accent/20 border border-border rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={uc.image} alt={uc.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border rounded-xl px-3 py-2">
                    <p className="text-base font-extrabold text-foreground leading-none">{uc.stat}</p>
                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{uc.statLabel}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{uc.desc}</p>
                </div>
              </div>
            ))}
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
                Upgrade Your Term Life
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Don't settle for traditional life insurance that only pays out when you're gone. Protect your life, your income, and your family with modern living benefits.
              </p>
              <Link
                href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}