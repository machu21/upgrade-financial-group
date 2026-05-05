"use client";

import { ArrowRight, ShieldCheck, Banknote, HeartPulse, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose Your Term",
    desc: "Select a coverage period that matches your financial obligations — 10, 20, or 30 years.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },
  {
    number: "02",
    title: "Lock Your Rate",
    desc: "Your monthly premium is permanently locked in. It will never increase during your chosen term.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
  },
  {
    number: "03",
    title: "Live Protected",
    desc: "Enjoy peace of mind. If the unexpected happens, your family receives a 100% tax-free payout.",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=800&q=80",
  },
  {
    number: "04",
    title: "End of Term Options",
    desc: "When the term ends, let it expire, renew it, or convert to a permanent policy — no new exam needed.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
  },
];

const benefits = [
  {
    icon: Banknote,
    title: "Maximum Coverage, Lowest Cost",
    desc: "Term insurance is the most affordable way to get massive coverage — $500K or $1M — to protect mortgages and young children.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: RefreshCw,
    title: "Convertible to Permanent",
    desc: "Start affordable now. Convert to an IUL or Whole Life policy later without a new medical exam.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Death Benefit",
    desc: "Your beneficiaries are guaranteed a 100% tax-free lump sum to cover debts, income replacement, and costs.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: HeartPulse,
    title: "Living Benefits Included",
    desc: "Access cash while still alive if diagnosed with a critical or chronic illness. Most policies don't offer this.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const useCases = [
  {
    title: "Young Families",
    desc: "Replace your income so your spouse and children maintain their lifestyle, cover childcare, and fund future college tuitions.",
    image: "https://thumbs.dreamstime.com/b/young-family-two-toddler-children-outdoors-river-summer-playing-paper-boats-142951569.jpg",
    stat: "20–30 yr", statLabel: "Recommended Term",
  },
  {
    title: "New Homeowners",
    desc: "A 30-year term policy perfectly matches a 30-year mortgage, ensuring your family never loses the house.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    stat: "30 yr", statLabel: "Matches Mortgage",
  },
  {
    title: "Business Owners",
    desc: "Key Person insurance or Buy-Sell agreements — ensuring the business survives if a critical partner passes away.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    stat: "Key Person", statLabel: "Coverage",
  },
];

export default function TermLifePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* Global dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none [filter:blur(0.5px)]" />

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Pure Protection
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Term Life<br />
            <span className="text-primary">Made Simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Affordable protection with meaningful coverage for the moments that matter most.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "10–30 yr", label: "Flexible Terms" },
              { val: "Tax-Free", label: "Death Benefit" },
              { val: "No Exam", label: "Many Applicants" },
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
              Get a Free Term Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Four Simple Steps
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A straightforward journey from quote to coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-accent/20 border border-border rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                  {/* Fade to card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <span className="absolute top-4 left-4 text-4xl font-black text-white/90 drop-shadow-lg leading-none">
                    {step.number}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Why Term Life
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Built for Real Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className={`${b.bg} border ${b.border} rounded-3xl p-8 flex gap-5 hover:border-primary/40 transition-all`}>
                <div className={`w-12 h-12 rounded-2xl bg-background border ${b.border} flex items-center justify-center shrink-0 shadow-sm`}>
                  <b.icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-accent/10 border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Is Term Life Right For You?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Term life is typically the perfect fit for these common life stages.
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

      {/* ── THE UPGRADE DIFFERENCE ── */}
      <section className="border-t border-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-accent/10 border border-border rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80"
                alt="Mother and child"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-accent/40 to-transparent" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center bg-accent/10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                The Upgrade Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most term policies only pay out if you die. Our term policies include <strong className="text-foreground">Living Benefits</strong> — allowing you to access cash if you're critically or chronically ill, while you're still alive and fighting.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-primary/20 w-fit"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
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
                Protect What Matters Most
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Term life insurance is more affordable than you think. Find out how little it costs to secure your family's financial future.
              </p>
              <Link
                href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                No medical exam required for many healthy applicants.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}