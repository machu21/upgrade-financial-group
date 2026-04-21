"use client";

import { ArrowRight, Clock, ShieldCheck, Banknote, HeartPulse, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
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
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
  {
    icon: RefreshCw,
    title: "Convertible to Permanent",
    desc: "Start affordable now. Convert to an IUL or Whole Life policy later without a new medical exam.",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Death Benefit",
    desc: "Your beneficiaries are guaranteed a 100% tax-free lump sum to cover debts, income replacement, and costs.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: HeartPulse,
    title: "Living Benefits Included",
    desc: "Access cash while still alive if diagnosed with a critical or chronic illness. Most policies don't offer this.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

const useCases = [
  {
    title: "Young Families",
    desc: "Replace your income so your spouse and children maintain their lifestyle, cover childcare, and fund future college tuitions.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
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
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e2e8f0_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Pure Protection
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Term Life<br />
            <span className="text-primary">Made Simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Affordable, high-coverage protection for the years your family needs it most — with modern living benefits built right in.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "10–30 yr", label: "Flexible Terms" },
              { val: "Tax-Free", label: "Death Benefit" },
              { val: "No Exam", label: "Many Applicants" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
                <span className="text-sm font-extrabold text-slate-900">{s.val}</span>
                <span className="text-xs text-slate-400 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get a Free Term Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — 4 image cards ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Four Simple Steps
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              A straightforward journey from quote to coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-4xl font-black text-white/90 drop-shadow-lg leading-none">
                    {step.number}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS — 2x2 card grid ── */}
      <section className="bg-white border-t border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase border border-slate-200">
              Why Term Life
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Built for Real Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className={`${b.bg} border ${b.border} rounded-3xl p-8 flex gap-5 hover:shadow-sm transition-shadow`}>
                <div className={`w-12 h-12 rounded-2xl bg-white border ${b.border} flex items-center justify-center shrink-0 shadow-sm`}>
                  <b.icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR — image cards ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase border border-slate-200">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Is Term Life Right For You?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Term life is typically the perfect fit for these common life stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={uc.image} alt={uc.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  {/* Stat badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow">
                    <p className="text-base font-extrabold text-slate-900 leading-none">{uc.stat}</p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{uc.statLabel}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE UPGRADE DIFFERENCE — split card ── */}
      <section className="bg-white border-t border-slate-100 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80"
                alt="Mother and child"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                The Upgrade Difference
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Most term policies only pay out if you die. Our term policies include <strong className="text-slate-900">Living Benefits</strong> — allowing you to access cash if you're critically or chronically ill, while you're still alive and fighting.
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
      <section className="bg-slate-50 border-t border-slate-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect What Matters Most
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Term life insurance is more affordable than you think. Find out how little it costs to secure your family's financial future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            No medical exam required for many healthy applicants.
          </p>
        </div>
      </section>

    </div>
  );
}