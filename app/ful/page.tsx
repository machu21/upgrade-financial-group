"use client";

import { ArrowRight, TrendingUp, ShieldCheck, HeartPulse, PiggyBank, Anchor } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FULPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      icon: ShieldCheck,
      title: "1. Permanent Security",
      desc: "Provides a guaranteed death benefit to protect your family's future, ensuring they are financially secure for your entire lifetime.",
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      border: "border-blue-500/30",
      image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1600&q=80"
    },
    {
      icon: Anchor,
      title: "2. Guaranteed Growth",
      desc: "Your cash value grows at a declared, fixed interest rate. It is completely shielded from market volatility—meaning you never lose a dime to market crashes.",
      color: "text-sky-400",
      bg: "bg-sky-500/20",
      border: "border-sky-500/30",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
    },
    {
      icon: TrendingUp,
      title: "3. Flexible Payments",
      desc: "Adjust your premium payments and death benefit amount over time as your life, income, and financial needs change.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/20",
      border: "border-indigo-500/30",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
    },
    {
      icon: PiggyBank,
      title: "4. Tax-Advantaged Income",
      desc: "Borrow against your guaranteed cash value tax-free to fund retirement, pay for college, or handle unexpected emergencies.",
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      border: "border-purple-500/30",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
    },
    {
      icon: HeartPulse,
      title: "5. Living Benefits",
      desc: "Access your death benefit while you are still alive if you are diagnosed with a critical, chronic, or terminal illness.",
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm tracking-widest uppercase mb-6 border border-blue-500/20">
            Safe, Steady, & Secure
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Fixed Universal Life <span className="text-blue-500 block mt-2">(FUL)</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            For those who value absolute certainty. Enjoy permanent life insurance protection with a guaranteed, predictable interest rate on your cash value.
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
        {/* Animated Guaranteed Growth Graph Section */}
        <div className="max-w-5xl mx-auto p-8 md:p-16 rounded-[3rem] bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-[600ms] fill-mode-both">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 tracking-tight">
              The Power of <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">Guaranteed Growth</span>
            </h3>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              No market crashes. No guessing. Just steady, predictable cash value accumulation year after year, regardless of economic conditions.
            </p>
            
            {/* Chart Area */}
            <div className="relative h-64 md:h-80 w-full flex items-end justify-around gap-2 md:gap-4 pb-8 border-b-2 border-slate-800 px-2 md:px-8 mt-12">
               
               {/* 0% Line Indicator */}
               <div className="absolute bottom-8 left-0 w-full h-px bg-slate-700 border-dashed border-t border-slate-600" />
               <span className="absolute bottom-8 -left-2 md:-left-6 text-xs font-bold text-slate-500 -translate-y-1/2">0%</span>

               {[
                 { year: 'Year 1', mktVal: 30, fulVal: 15, mktReturn: '+15%', fulReturn: '+4%' },
                 { year: 'Year 2', mktVal: -20, fulVal: 25, mktReturn: '-20%', fulReturn: '+4%' },
                 { year: 'Year 3', mktVal: 10, fulVal: 35, mktReturn: '+10%', fulReturn: '+4%' },
                 { year: 'Year 4', mktVal: -15, fulVal: 45, mktReturn: '-15%', fulReturn: '+4%' },
                 { year: 'Year 5', mktVal: 20, fulVal: 55, mktReturn: '+15%', fulReturn: '+4%' },
               ].map((data, i) => (
                 <div key={i} className="flex-1 flex justify-center items-end relative group h-full">
                    
                    {/* Market Bar */}
                    <div 
                       className={`w-1/3 max-w-[2.5rem] rounded-t-xl transition-all duration-1000 ease-out flex items-start justify-center pt-2 md:pt-3 text-[10px] md:text-xs font-bold absolute bottom-8 -ml-6 md:-ml-8
                          ${data.mktVal >= 0 ? 'bg-slate-500/30 text-slate-400 border border-slate-500/50' : 'bg-rose-500/30 text-rose-300 border border-rose-500/50'}
                       `}
                       style={{ height: `${Math.abs(data.mktVal) + 5}%`, marginBottom: data.mktVal < 0 ? `-${Math.abs(data.mktVal) + 5}%` : '0' }}
                    >
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity -mt-8 md:-mt-10 absolute bg-black/90 px-2 py-1 rounded-md text-white">{data.mktReturn}</span>
                    </div>

                    {/* FUL Bar */}
                    <div 
                       className="w-1/3 max-w-[2.5rem] rounded-t-xl bg-gradient-to-t from-blue-600 to-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-1000 delay-500 ease-out flex items-start justify-center pt-2 md:pt-3 text-[10px] md:text-xs font-bold text-sky-950 absolute bottom-8 ml-6 md:ml-8 animate-in slide-in-from-bottom fill-mode-both"
                       style={{ height: `${data.fulVal}%` }}
                    >
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity -mt-8 md:-mt-10 absolute bg-black/90 px-2 py-1 rounded-md text-sky-400 whitespace-nowrap">Guaranteed</span>
                    </div>

                    <span className="absolute -bottom-6 text-xs md:text-sm text-slate-400 font-medium whitespace-nowrap">{data.year}</span>
                 </div>
               ))}
            </div>

            {/* Legend */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-slate-500/50 border border-slate-500" /> 
                  Traditional Market Account
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]" /> 
                  FUL Cash Value (Steady Growth)
                </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-32 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to secure your guarantees?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find out if a Fixed Universal Life policy is the right fit for your unique goals. Our experts will design a custom illustration for you, completely free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-lg px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold hover:scale-105 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            Get Your Free FUL Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}