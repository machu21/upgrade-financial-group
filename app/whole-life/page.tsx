"use client";

import { ArrowRight, TrendingUp, ShieldCheck, HeartPulse, PiggyBank, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WholeLifePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      icon: ShieldCheck,
      title: "1. Lifelong Coverage",
      desc: "A permanent death benefit that never expires. As long as your premiums are paid, your family is guaranteed a tax-free payout.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      border: "border-emerald-500/30",
      image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1600&q=80"
    },
    {
      icon: Lock,
      title: "2. Fixed Premiums",
      desc: "Your premium is locked in for life. It will never increase, regardless of inflation, economic changes, or declining health as you age.",
      color: "text-slate-400",
      bg: "bg-slate-500/20",
      border: "border-slate-500/30",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
    },
    {
      icon: PiggyBank,
      title: "3. Guaranteed Cash Value",
      desc: "A portion of every premium builds a guaranteed cash reserve. This money grows tax-deferred at a legally binding, predictable rate.",
      color: "text-teal-400",
      bg: "bg-teal-500/20",
      border: "border-teal-500/30",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
    },
    {
      icon: TrendingUp,
      title: "4. Dividend Potential",
      desc: "Earn non-guaranteed dividends from the insurance company's profits. Use them to increase your cash value, pay premiums, or buy more coverage.",
      color: "text-amber-400",
      bg: "bg-amber-500/20",
      border: "border-amber-500/30",
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=1600&q=80"
    },
    {
      icon: HeartPulse,
      title: "5. Living Benefits",
      desc: "Access your death benefit while you are still alive if you are diagnosed with a qualifying critical, chronic, or terminal illness.",
      color: "text-rose-400",
      bg: "bg-rose-500/20",
      border: "border-rose-500/30",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1600&q=80"
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-sm tracking-widest uppercase mb-6 border border-emerald-500/20">
            The Foundation of Certainty
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Whole Life Insurance <span className="text-emerald-500 block mt-2">(WL)</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Traditional, timeless protection. Benefit from lifelong coverage, locked-in premiums, and a guaranteed cash value that grows year after year.
          </p>
        </div>
      </div>

      {/* Infographic Parallax Sections */}
      <div className="w-full flex flex-col mb-32">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index}
              className="relative w-full min-h-[60vh] flex items-center justify-center py-24 px-6 bg-fixed bg-center bg-cover border-y border-white/5"
              style={{ backgroundImage: `url('${step.image}')` }}
            >
              {/* Heavy Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-slate-950/70 z-0" />
              
              {/* Content Box */}
              <div className={`relative z-10 max-w-4xl w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 hover:bg-slate-900/80`}>
                 <div className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-3xl ${step.bg} flex items-center justify-center relative border ${step.border} shadow-lg`}>
                    <step.icon className={`w-10 h-10 md:w-12 md:h-12 ${step.color}`} />
                 </div>
                 <div className={`text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                   <p className="text-white/80 text-lg md:text-xl leading-relaxed">{step.desc}</p>
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Guaranteed Growth & Dividends Graph Section */}
        <div className="max-w-5xl mx-auto p-8 md:p-16 rounded-[3rem] bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-[600ms] fill-mode-both">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 tracking-tight">
              Guarantees + <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">Dividends</span>
            </h3>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              Watch how the guaranteed cash value forms a rock-solid foundation, while projected dividends can compound to significantly accelerate your wealth over time.
            </p>
            
            {/* Chart Area */}
            <div className="relative h-64 md:h-80 w-full flex items-end justify-around gap-2 md:gap-4 pb-8 border-b-2 border-slate-800 px-2 md:px-8 mt-12">
               
               {[
                 { year: 'Year 10', guaranteed: 20, dividends: 5 },
                 { year: 'Year 20', guaranteed: 35, dividends: 15 },
                 { year: 'Year 30', guaranteed: 50, dividends: 30 },
                 { year: 'Year 40', guaranteed: 65, dividends: 50 },
                 { year: 'Year 50', guaranteed: 80, dividends: 80 },
               ].map((data, i) => (
                 <div key={i} className="flex-1 flex flex-col justify-end items-center relative group h-full">
                    
                    {/* Stacked Bar Container */}
                    <div className="w-1/2 max-w-[3.5rem] flex flex-col justify-end items-center relative group-hover:scale-[1.02] transition-transform duration-300 h-full">
                        
                        {/* Dividends (Top Part) */}
                        <div 
                          className="w-full rounded-t-xl bg-gradient-to-t from-amber-600 to-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-1000 delay-[800ms] ease-out animate-in slide-in-from-bottom fill-mode-both border border-amber-400/50"
                          style={{ height: `${data.dividends}%` }}
                        />

                        {/* Guaranteed (Bottom Part) */}
                        <div 
                          className="w-full bg-gradient-to-t from-emerald-800 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-1000 delay-500 ease-out animate-in slide-in-from-bottom fill-mode-both border border-emerald-500/50 rounded-b-sm"
                          style={{ height: `${data.guaranteed}%` }}
                        />
                    </div>

                    <span className="absolute -bottom-6 text-xs md:text-sm text-slate-400 font-medium whitespace-nowrap">{data.year}</span>
                 </div>
               ))}
            </div>

            {/* Legend */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" /> 
                  Guaranteed Cash Value
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" /> 
                  Projected Dividends
                </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-32 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready for lifelong certainty?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find out if a Whole Life policy is the right fit for your family and financial legacy. Our experts will design a custom illustration for you, completely free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-lg px-10 py-5 rounded-2xl bg-emerald-600 text-white font-bold hover:scale-105 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/30 transition-all active:scale-95"
          >
            Get Your Free Whole Life Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
