"use client";

import { ArrowRight, Star, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";

const LaurelBranch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 48 C14 48, 2 34, 2 16 C2 6, 10 0, 10 0 C10 0, 6 6, 6 16 C6 28, 14 48, 14 48 Z" />
    <path d="M8 34 C4 30, 2 22, 8 16 C4 20, 2 28, 8 34 Z" />
    <path d="M8 22 C4 18, 2 10, 8 4 C4 8, 2 16, 8 22 Z" />
  </svg>
);

export function ServiceHero() {
  return (
    <section className="relative w-full pt-48 pb-24 md:pt-56 md:pb-32 overflow-hidden mb-24">
      
      {/* 1. BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* 2. DARK OPACITY OVERLAY (Makes the white card pop) */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm -z-10" />

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-12 shadow-2xl relative">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative z-10">

            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />

            {/* Review Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary" />)}
                </div>
                <span className="text-xs font-bold text-primary">4.9</span>
              </div>
              <span className="text-sm font-medium text-slate-500">Trusted by families across the USA</span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Life Insurance With The{" "}
              <br className="hidden md:block" />
              <span className="text-primary drop-shadow-sm">New Evolving Living Benefits.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-800 font-semibold mb-3 leading-snug">
              Traditional life insurance is designed for when you're gone. But real protection should support you while you're still living.
            </p>
            <p className="text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              At Upgrade Financial Services, we specialize in policies that give you access to your death benefit if you're diagnosed with a qualifying illness.{" "}
              <strong className="text-slate-900 font-bold">No need to die to use your policy.</strong>
            </p>

            {/* ── CALL TO ACTION BUTTON ── */}
            <div className="mb-12">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 text-base md:text-lg px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-black hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-900/20 w-full sm:w-auto group"
              >
                Gift Card – Coming Soon
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-2 mt-4 text-sm font-medium text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                No medical exam required for qualifying applicants.
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {[
                { top: "Best", mid: "Term Life", bottom: "Business Insider" },
                { top: "#1 Online", mid: "Living Benefits", bottom: null },
                { top: "Trusted", mid: "Provider", bottom: "Forbes Advisor" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <LaurelBranch className="w-5 h-12 text-primary" />
                  <div className="flex flex-col items-center text-center">
                    <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">{badge.top}</p>
                    <p className="text-[9px] font-bold text-primary tracking-widest uppercase my-0.5">{badge.mid}</p>
                    {badge.bottom
                      ? <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{badge.bottom}</p>
                      : <Award className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
                    }
                  </div>
                  <LaurelBranch className="w-5 h-12 text-primary scale-x-[-1]" />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full w-full bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1200&q=80"
              alt="Happy family"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}