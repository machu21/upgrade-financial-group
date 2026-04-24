"use client";

import {
  ArrowRight, TrendingUp, ShieldCheck, PiggyBank, BarChart3,
  Landmark, RefreshCw, Lock, Globe, ChevronRight
} from "lucide-react";
import Link from "next/link";

const strategies = [
  {
    icon: TrendingUp,
    title: "Indexed Universal Life (IUL)",
    category: "Growth + Protection",
    desc: "Market-linked growth with a 0% floor. Build tax-free cash value while keeping your family protected for life.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    href: "/iul",
    stat: "0%", statLabel: "Market Risk",
  },
  {
    icon: Lock,
    title: "Fixed Universal Life (FUL)",
    category: "Guaranteed Growth",
    desc: "A declared, fixed interest rate on your cash value — completely shielded from market volatility.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    href: "/ful",
    stat: "4%+", statLabel: "Guaranteed Rate",
  },
  {
    icon: PiggyBank,
    title: "Whole Life",
    category: "Legacy Building",
    desc: "Permanent coverage with guaranteed cash value growth and dividend potential. The foundation of generational wealth.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    href: "/whole-life",
    stat: "Tax-Free", statLabel: "Cash Access",
  },
  {
    icon: BarChart3,
    title: "Term Life",
    category: "Pure Protection",
    desc: "Guaranteed income you can't outlive. Capture market upside with full downside protection for your retirement years.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    href: "/term-life",
    stat: "Lifetime", statLabel: "Income Stream",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Protection First",
    desc: "Every strategy we recommend protects your principal. You build wealth without risking what you already have.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: RefreshCw,
    title: "Tax Efficiency",
    desc: "We prioritize tax-advantaged vehicles so more of your money compounds — and stays — in your pocket.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Globe,
    title: "Diversified Approach",
    desc: "We don't put all your eggs in one basket. We layer strategies to cover protection, growth, and income.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Landmark,
    title: "Legacy Planning",
    desc: "Wealth isn't just for now. We help you build assets that transfer efficiently to the next generation.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const steps = [
  { number: "01", title: "Discovery Call", desc: "We learn about your goals, income, family situation, and existing coverage." },
  { number: "02", title: "Custom Strategy", desc: "We design a layered plan using the right products for your specific needs." },
  { number: "03", title: "Illustration Review", desc: "We walk you through projections in plain language — no jargon, no pressure." },
  { number: "04", title: "Ongoing Partnership", desc: "We review your plan annually and adapt as your life evolves." },
];

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* Global dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none [filter:blur(0.5px)]" />

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Wealth Strategies
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Grow Wealth.<br />
            <span className="text-primary">Eliminate Risk.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don't gamble with your future. Our investment strategies use insurance-based vehicles that grow your money with zero downside — protecting your family while building lasting wealth.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "0%", label: "Market Risk Floor" },
              { val: "Tax-Free", label: "Growth Available" },
              { val: "Lifetime", label: "Income Options" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-accent/30 border border-border rounded-full px-4 py-2">
                <span className="text-sm font-extrabold text-foreground">{s.val}</span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Build My Strategy <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-accent/30 text-foreground font-bold text-base hover:bg-accent/50 border border-border transition-all"
            >
              View Our Carriers
            </Link>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT STRATEGIES ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Smart Strategies for Every Goal
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Each vehicle is designed to protect your principal while giving your money room to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group bg-accent/10 border border-border rounded-3xl p-8 hover:border-primary/40 hover:bg-accent/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center`}>
                    <s.icon className={`w-7 h-7 ${s.color}`} />
                  </div>
                  {/* Stat */}
                  <div className="text-right">
                    <p className={`text-2xl font-extrabold ${s.color} leading-none`}>{s.stat}</p>
                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{s.statLabel}</p>
                  </div>
                </div>

                <p className={`text-xs font-bold uppercase tracking-widest ${s.color} mb-2`}>{s.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{s.desc}</p>

                <div className={`mt-6 pt-4 border-t border-border flex items-center text-sm font-bold ${s.color} gap-1`}>
                  Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT PRINCIPLES ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              How We Think About Your Money
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-accent/10 border border-border rounded-3xl p-8 flex gap-5 hover:border-primary/30 hover:bg-accent/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center shrink-0 mt-0.5`}>
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — stepper ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              The Process
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              From First Call to<br className="hidden md:block" /> Lasting Wealth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-accent/10 border border-border rounded-3xl p-8 flex gap-6 hover:border-primary/30 hover:bg-accent/20 transition-all group"
              >
                <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none shrink-0 select-none">
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none [filter:blur(0.5px)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Ready to Put Your Money to Work?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let us design a custom wealth strategy built around your goals, your timeline, and your family's future — completely free of charge.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/edit" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Get My Free Strategy Session <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent/40 text-foreground font-bold rounded-full hover:bg-accent/60 border border-border transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}