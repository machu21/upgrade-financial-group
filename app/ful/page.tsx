"use client";

import { ArrowRight, TrendingUp, ShieldCheck, HeartPulse, PiggyBank, Anchor } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FULPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const steps = [
    {
      icon: ShieldCheck,
      title: "Permanent Security",
      desc: "Provides a guaranteed death benefit to protect your family's future, ensuring they are financially secure for your entire lifetime.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-100",
      image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1600&q=80",
      stat: "Lifetime", statLabel: "Coverage"
    },
    {
      icon: Anchor,
      title: "Guaranteed Growth",
      desc: "Your cash value grows at a declared, fixed interest rate — completely shielded from market volatility. You never lose a dime to market crashes.",
      color: "text-sky-500",
      bg: "bg-sky-50",
      border: "border-sky-100",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
      stat: "0%", statLabel: "Market Risk"
    },
    {
      icon: TrendingUp,
      title: "Flexible Payments",
      desc: "Adjust your premium payments and death benefit amount over time as your life, income, and financial needs evolve.",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
      stat: "100%", statLabel: "Adjustable"
    },
    {
      icon: PiggyBank,
      title: "Tax-Advantaged Income",
      desc: "Borrow against your guaranteed cash value tax-free to fund retirement, pay for college, or handle unexpected emergencies.",
      color: "text-violet-500",
      bg: "bg-violet-50",
      border: "border-violet-100",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
      stat: "Tax-Free", statLabel: "Withdrawals"
    },
    {
      icon: HeartPulse,
      title: "Living Benefits",
      desc: "Access your death benefit while you're still alive if diagnosed with a critical, chronic, or terminal illness — money when you need it most.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-100",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1600&q=80",
      stat: "Early", statLabel: "Access"
    },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden bg-white">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e2e8f0_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-600 font-bold text-xs tracking-widest uppercase border border-amber-100">
            Safe · Steady · Secure
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Fixed Universal<br />
            <span className="text-amber-500">Life Insurance</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            For those who value absolute certainty. Permanent protection with a guaranteed, predictable interest rate on your cash value — no market risk, ever.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { val: "4%+", label: "Guaranteed Rate" },
              { val: "0%", label: "Market Risk" },
              { val: "Tax-Free", label: "Cash Value Access" },
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 text-white font-bold text-base hover:bg-amber-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 transition-all active:scale-95"
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
              className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px] border-t border-slate-100"
            >
              {/* Image side */}
              <div className={`relative overflow-hidden min-h-[300px] lg:min-h-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Directional fade into white content panel */}
                <div className={`absolute inset-0 ${isEven
                  ? "bg-gradient-to-l from-transparent to-white/30"
                  : "bg-gradient-to-r from-transparent to-white/30"
                }`} />
                {/* Stat overlay badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-white rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-2xl font-extrabold text-slate-900 leading-none">{step.stat}</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{step.statLabel}</p>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-white ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  0{index + 1} / 0{steps.length}
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                  {step.title}
                </h2>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── GROWTH CHART ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-600 font-bold text-xs tracking-widest uppercase border border-amber-100">
              5-Year Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Power of <span className="text-amber-500">Guaranteed Growth</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              No market crashes. No guessing. Steady, predictable cash value accumulation year after year.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="relative h-64 md:h-80 w-full flex items-end justify-around pb-8 border-b-2 border-slate-100 px-4 md:px-8">
              <div className="absolute bottom-8 left-0 w-full h-px bg-slate-100" />
              <span className="absolute bottom-6 left-0 text-xs font-bold text-slate-300">0%</span>

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
                        ? "bg-slate-200 border border-slate-300"
                        : "bg-red-100 border border-red-200"
                      }`}
                    style={{
                      height: `${Math.abs(data.mktVal) + 5}%`,
                      marginBottom: data.mktVal < 0 ? `-${Math.abs(data.mktVal) + 5}%` : "0",
                    }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-slate-500">
                      {data.mktReturn}
                    </span>
                  </div>

                  {/* FUL bar */}
                  <div
                    className="w-[28%] max-w-[2rem] rounded-t-lg bg-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all duration-700 absolute bottom-8 ml-5"
                    style={{ height: `${data.fulVal}%` }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-amber-500">
                      {data.fulReturn}
                    </span>
                  </div>

                  <span className="absolute -bottom-7 text-xs text-slate-400 font-semibold">{data.year}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-500">
                <div className="w-3 h-3 rounded-sm bg-slate-200 border border-slate-300" />
                Traditional Market Account
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-500">
              <div className="w-3 h-3 rounded-sm bg-amber-500" />
                FUL Cash Value (Guaranteed)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-white border-t border-slate-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to secure your guarantees?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Our experts will design a custom FUL illustration for your unique goals — completely free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 transition-all active:scale-95"
          >
            Get Your Free FUL Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}