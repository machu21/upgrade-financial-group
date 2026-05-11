"use client";

import { ArrowRight, Search, ShieldCheck, Clock, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

const details = [
  {
    title: "CREDIT ANALYSIS & DISPUTE SERVICES",
    desc: "Our partners conduct a thorough review of your credit reports across all three major bureaus. Inaccurate, outdated, or unverifiable negative items are identified and formally disputed on your behalf — a process that can lead to significant score improvements over time.",
    icon: Search,
  },
  {
    title: "PERSONALIZED RESTORATION PLAN",
    desc: "No two credit situations are the same. You'll receive a customized action plan based on your specific credit profile — including guidance on paying down balances, managing credit utilization, and establishing positive credit history that lenders actually want to see.",
    icon: ShieldCheck,
  },
  {
    title: "ONGOING MONITORING & SUPPORT",
    desc: "Credit repair isn't a one-time event. Our partners provide continuous monitoring and dedicated support so you always know where your score stands, what's changing, and what steps to take next to keep building momentum.",
    icon: Clock,
  },
  {
    title: "BETTER CREDIT = BETTER FINANCIAL OPTIONS",
    desc: "Improving your credit score directly impacts the rates you qualify for on mortgages, auto loans, and even life insurance premiums. Clients who work on their credit alongside their financial plan consistently access better products and save significantly more over time.",
    icon: TrendingUp,
  },
  {
    title: "A TRUSTED REFERRAL — NOT A SIDE SERVICE",
    desc: "Upgrade Financial Group partners with vetted credit restoration professionals to make sure our clients have access to every tool they need for total financial wellness. From protection and wealth building to credit health — we're committed to your complete financial picture.",
    icon: Award,
  },
];

export default function CreditRepairPage() {
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
            Financial Wellness
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Restore Your Credit.<br />
            <span className="text-primary">Rebuild Your Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your credit score affects everything — your ability to buy a home, qualify for better rates, and secure your financial future. At Upgrade Financial Group, we connect you with trusted credit restoration specialists who take a hands-on approach to cleaning up your credit and rebuilding your financial standing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/credit-repair/form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              What This Includes
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              A Comprehensive Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((item, i) => (
              <div
                key={i}
                className="bg-accent/10 border border-border rounded-3xl p-8 flex flex-col gap-5 hover:border-primary/30 hover:bg-accent/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
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
                Ready to improve your financial standing?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Take the first step toward better credit and financial wellness. Schedule a consultation with our trusted partners today.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
