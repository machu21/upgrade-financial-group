"use client";

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  MapPin,
  UserCheck,
  Star,
  Lock,
  Unlock,
  ShieldAlert,
  CheckCircle2,
  XCircle
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const features = [
    { name: "Death Benefit", trad: true, living: true },
    { name: "Terminal Illness", trad: true, living: true },
    { name: "LTC / Chronic Illness", trad: true, living: true, noteTrad: "(Requires 6 ADLs)", noteLiving: "(Requires 2 ADLs)" },
    { name: "Chronic Illness", trad: false, living: true},
    { name: "Critical Illness", trad: false, living: true },
    { name: "Critical Injury", trad: false, living: true },
    { name: "Alzheimer’s/Dementia", trad: false, living: true },
    { name: "Lifetime Retirement Plan", trad: false, living: true },
  ];

  return (
    <div className="relative w-full pb-16 md:pb-24 lg:pb-32 overflow-hidden">

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
      
      {/* 2. OPACITY OVERLAY */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px] -z-10" />

      {/* 3. WRAPPER FOR CONTENT */}
      <div className="relative z-10 space-y-20 px-6 max-w-7xl mx-auto pt-32 lg:pt-48">

        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] drop-shadow-xl">
              Smart Protection and <span className="text-primary">Investment Solutions</span> for Life Today and Tomorrow
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed drop-shadow-md">
              Protect your family, your income, your investments, and your future, without waiting until it’s too late. Our partners provide access to living benefits when you need them most, including coverage for Terminal Illness, Chronic Illness, Long-Term Care, Critical Illness, Critical Injury, Alzheimer’s/Dementia, and Lifetime Income Retirement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 text-lg px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Interactive Conceptual Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">

            {!isUnlocked ? (
              /* LOCKED STATE (Dark/Themed) */
              // Keeping locked state width consistent for the flip animation
              <div className="w-full aspect-square max-w-[420px] border-[3px] border-border/50 rounded-3xl p-6 bg-accent/30 shadow-2xl flex flex-col justify-between overflow-hidden relative backdrop-blur-md animate-in fade-in zoom-in-95 duration-500 hover:border-primary/50 transition-colors">

                {/* Top Card - Traditional */}
                <div className="p-4 border border-border/50 rounded-xl bg-background/90 backdrop-blur-md relative z-10 shadow-xl w-[85%]">
                  <ShieldAlert className="h-8 w-8 text-muted-foreground mb-3" />
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-tight">Old Traditional Life Insurance</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">You have to die to use it.</p>
                </div>

                {/* Center Glow & Unlock Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-30 shadow-2xl pointer-events-none" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={() => setIsUnlocked(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
                  >
                    <Lock className="w-4 h-4" /> Click to Unlock
                  </button>
                </div>

                {/* Bottom Card - Living Benefits */}
                <div className="p-4 border border-primary/30 rounded-xl bg-background/90 backdrop-blur-md self-end relative z-10 shadow-xl w-[85%]">
                  <HeartPulse className="h-8 w-8 text-primary mb-3" />
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-tight">Living Benefits</p>
                  <p className="text-xs sm:text-sm text-primary mt-1 font-medium">The new, evolved life insurance.</p>
                </div>
              </div>
            ) : (
              /* UNLOCKED STATE (Forced Light Mode) */
              /* CHANGED: max-w-[450px] is now max-w-[500px] */
              <div className="w-full max-w-[500px] border-[3px] border-primary/30 rounded-3xl p-5 sm:p-6 bg-white shadow-2xl relative animate-in fade-in flip-in-y duration-700">

                {/* Header & Relock */}
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                  <h3 className="font-bold text-lg text-slate-900">Coverage Comparison</h3>
                  <button
                    onClick={() => setIsUnlocked(false)}
                    className="text-xs font-semibold flex items-center gap-1 text-slate-500 hover:text-primary transition-colors bg-gray-100 px-3 py-1.5 rounded-full"
                  >
                    <Unlock className="w-3 h-3" /> Relock
                  </button>
                </div>

                {/* Comparison List */}
                <div className="space-y-4">
                  {/* Column Headers */}
                  <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
                    <span className="w-1/2">Feature</span>
                    <div className="w-1/2 flex justify-between text-center">
                      <span className="w-1/2">Traditional</span>
                      <span className="w-1/2 text-amber-600 font-extrabold drop-shadow-sm">Living Benefits</span>
                    </div>
                  </div>

                  {/* Data Rows */}
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">

                      {/* Feature Name */}
                      <div className="w-1/2 pr-2">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{feature.name}</p>
                      </div>

                      {/* Checkmarks */}
                      <div className="w-1/2 flex justify-between items-center text-center">
                        {/* Traditional Column */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                          {feature.trad ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-700 " />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          {feature.noteTrad && <span className="text-[9px] text-slate-400 mt-1 leading-none">{feature.noteTrad}</span>}
                        </div>

                        {/* Living Benefits Column */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                          {feature.living ? (
                            <CheckCircle2 className="w-5 h-5 text-amber-600 stroke-[3px] scale-110 drop-shadow-md" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-300" />
                          )}
                          {feature.noteLiving && <span className="text-[9px] text-amber-700 font-bold mt-1 leading-none">{feature.noteLiving}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Trust Bar Section */}
        <div className="pt-6 border-t border-border/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-accent/80 backdrop-blur-md text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-sm md:text-base font-semibold text-foreground leading-tight drop-shadow-sm">Licensed & Trusted<br /><span className="text-foreground/70 font-normal">Advisors</span></p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-accent/80 backdrop-blur-md text-primary group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="text-sm md:text-base font-semibold text-foreground leading-tight drop-shadow-sm">Serving Families<br /><span className="text-foreground/70 font-normal">Across USA</span></p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-accent/80 backdrop-blur-md text-primary group-hover:scale-110 transition-transform">
                <UserCheck className="h-6 w-6" />
              </div>
              <p className="text-sm md:text-base font-semibold text-foreground leading-tight drop-shadow-sm">Personalized Plans<br /><span className="text-foreground/70 font-normal">No Cookie-Cutter Advice</span></p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-accent/80 backdrop-blur-md text-primary group-hover:scale-110 transition-transform">
                <Star className="h-6 w-6" />
              </div>
              <p className="text-sm md:text-base font-semibold text-foreground leading-tight drop-shadow-sm">5-Star Client<br /><span className="text-foreground/70 font-normal">Experience</span></p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}