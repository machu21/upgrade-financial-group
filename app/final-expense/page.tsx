"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

interface SlideData {
  image: string;
  index: string;
  category: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

const SLIDES: SlideData[] = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    index: "01 / 05",
    category: "No Medical Exams",
    title: "Simple & Easy Qualification",
    desc: "Qualify for coverage quickly without undergoing invasive medical exams. Most applicants are approved based on a few simple health questions, making the process fast and stress-free.",
    stat: "100%",
    statLabel: "No Exam",
  },
  {
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1600&q=80",
    index: "02 / 05",
    category: "Fixed Premiums",
    title: "Premiums That Never Increase",
    desc: "Your monthly premium is locked in for life. Regardless of changes to your health or age, your rate will never increase, allowing you to budget with absolute certainty.",
    stat: "Locked",
    statLabel: "Rates",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80",
    index: "03 / 05",
    category: "Fast Payout",
    title: "Immediate Claims Processing",
    desc: "When your family needs it most, funds are disbursed quickly—often within 24 to 48 hours of claim approval. This ensures funeral costs and medical bills are covered without delay.",
    stat: "24-48h",
    statLabel: "Payout",
  },
  {
    image: "https://images.unsplash.com/photo-1518183214770-9c6742511df7?w=1600&q=80",
    index: "04 / 05",
    category: "Lifelong Coverage",
    title: "Coverage That Never Expires",
    desc: "As long as premiums are paid, your final expense policy remains in force for your entire lifetime. It cannot be canceled due to advancing age or declining health.",
    stat: "Lifetime",
    statLabel: "Protection",
  },
  {
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=1600&q=80",
    index: "05 / 05",
    category: "Peace of Mind",
    title: "Ease the Burden on Loved Ones",
    desc: "Protect your family from the financial stress of end-of-life expenses. Your benefit can be used for funeral costs, unpaid medical bills, or any other final obligations.",
    stat: "$0",
    statLabel: "Family Burden",
  },
];

const INTERVAL = 10000;

export default function FinalExpense() {
  const [current, setCurrent] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    const next = (idx + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    setAnimKey((k) => k + 1);
  }, []);

  const restartTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (progressRef.current) {
      progressRef.current.style.animation = "none";
      void progressRef.current.offsetWidth;
      progressRef.current.style.animation = `feProgress ${INTERVAL}ms linear forwards`;
    }
    timerRef.current = setTimeout(() => {
      setCurrent((c) => {
        const next = (c + 1) % SLIDES.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, INTERVAL);
  }, []);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, restartTimer]);

  const slide = SLIDES[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        @keyframes slideUp {
          from { transform: translateY(32px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animate-fe-slide {
          animation: slideUp 0.75s cubic-bezier(0.34,1.3,0.64,1) both;
        }

        @keyframes feZoom {
          from { transform: scale(1.07); }
          to   { transform: scale(1.0); }
        }
        .animate-fe-zoom {
          animation: feZoom 9s ease forwards;
        }

        @keyframes feProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <div className="bg-background text-[#f5f0e8] overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_25%,rgba(201,168,76,0.13)_0%,transparent_70%),linear-gradient(180deg,#0a0907_0%,#09090b_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(201,168,76,0.22)_1px,transparent_1px)] bg-[size:28px_28px] opacity-55 pointer-events-none" />
          <div className="relative z-10 max-w-[820px]">
            <span className="inline-block text-[0.62rem] font-bold tracking-[0.2em] uppercase bg-[#c9a84c]/[0.18] border border-[#c9a84c]/[0.28] text-[#e8c97a] py-[0.4rem] px-[1.1rem] rounded-full mb-6">
              Safe · Simple · Secure
            </span>
            <h1 className="text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[1.04] tracking-[-0.01em] mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Final Expense<br /><em className="italic text-[#e8c97a]">Life Insurance</em>
            </h1>
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#f5f0e8]/50 leading-[1.78] max-w-[540px] mx-auto mb-8 font-light">
              For those who want to ensure their loved ones are not burdened by end-of-life costs — guaranteed permanent protection that's easy to qualify for.
            </p>
            <div className="flex flex-wrap justify-center gap-[0.6rem] mb-9">
              {[
                { val: "Locked", label: "Premium Rates" },
                { val: "100%", label: "No Medical Exam" },
                { val: "Fast", label: "Claims Payout" },
              ].map((s, i) => (
                <div key={i} className="bg-white/[0.04] border border-white/[0.09] rounded-full py-[0.45rem] px-[1.2rem] text-[0.82rem] flex items-center gap-2">
                  <strong className="text-[#e8c97a] font-bold">{s.val}</strong>
                  <span className="text-[#f5f0e8]/50 font-normal">{s.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#c9a84c] to-[#a8762e] text-[#1a1200] text-[0.95rem] font-bold py-4 px-9 rounded-2xl border-none no-underline tracking-[0.02em] transition-all duration-200 shadow-[0_6px_28px_rgba(201,168,76,0.3)] hover:brightness-105 hover:scale-[1.04] hover:shadow-[0_10px_40px_rgba(201,168,76,0.45)]"
            >
              Get My Free Final Expense Quote <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* ── CAROUSEL ── */}
        <div className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
          {/* Background image */}
          <img
            key={`img-${current}`}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center animate-fe-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/95 via-[#09090b]/55 to-[#09090b]/20" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 z-10 p-[3.5rem_clamp(1.5rem,7vw,5.5rem)] max-w-[680px]">
            <div key={`ey-${animKey}`} className="animate-fe-slide flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[#e8c97a] mb-3" style={{ animationDelay: '0.05s' }}>
              <span className="inline-block w-7 h-[1.5px] bg-[#c9a84c]" />
              {slide.index} &nbsp;—&nbsp; {slide.category}
            </div>
            <h2 key={`h-${animKey}`} className="animate-fe-slide text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.01em] mb-3 text-[#f5f0e8]" style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: '0.15s' }}>
              {slide.title}
            </h2>
            <p key={`p-${animKey}`} className="animate-fe-slide text-[clamp(0.88rem,1.7vw,1rem)] text-[#f5f0e8]/50 leading-[1.78] max-w-[500px] mb-6 font-light" style={{ animationDelay: '0.25s' }}>
              {slide.desc}
            </p>
            <div key={`s-${animKey}`} className="animate-fe-slide inline-flex flex-col bg-[#c9a84c]/10 backdrop-blur-md border border-[#c9a84c]/25 rounded-xl py-3 px-5" style={{ animationDelay: '0.35s' }}>
              <strong className="text-[1.6rem] font-bold text-[#e8c97a] leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{slide.stat}</strong>
              <span className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-[#f5f0e8]/50">{slide.statLabel}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-9 right-[clamp(1.5rem,5vw,4.5rem)] flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`h-1 rounded-full cursor-pointer border-none p-0 transition-all duration-300 ease-in-out ${
                  i === current ? "bg-[#c9a84c] w-11" : "bg-white/20 w-[22px]"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] z-10 w-0" ref={progressRef} />
        </div>

        {/* ── CHART ── */}
        <section className="bg-[#0e0e10] border-t border-white/5 py-24 px-[clamp(1.5rem,6vw,4rem)] text-center">
          <span className="inline-block text-[0.62rem] font-bold tracking-[0.2em] uppercase bg-[#c9a84c]/[0.18] border border-[#c9a84c]/[0.28] text-[#e8c97a] py-[0.4rem] px-[1rem] rounded-full mb-5">
            Cost Comparison
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Rising Cost of <em className="italic text-[#e8c97a]">Final Expenses</em>
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-[500px] mx-auto mb-12 text-[0.97rem] leading-[1.75] font-light">
            Funeral and end-of-life costs continue to rise. A Final Expense policy provides a fixed, guaranteed benefit to cover these costs whenever they occur.
          </p>
          <div className="bg-white/[0.025] border border-white/[0.07] rounded-3xl pt-12 pb-8 px-4 sm:px-8 max-w-[800px] mx-auto">
            <div className="flex items-end justify-around h-[240px] border-b border-white/[0.08] gap-2 px-2">
              {[
                { year: "2024", mkt: 20, mktVal: "$8,500", fe: 60, feVal: "$15,000" },
                { year: "2029", mkt: 25, mktVal: "$9,800", fe: 60, feVal: "$15,000" },
                { year: "2034", mkt: 35, mktVal: "$11,500", fe: 60, feVal: "$15,000" },
                { year: "2039", mkt: 45, mktVal: "$13,200", fe: 60, feVal: "$15,000" },
                { year: "2044", mkt: 60, mktVal: "$15,500", fe: 60, feVal: "$15,000" },
              ].map((d, i) => (
                <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                  <div className="flex items-end gap-1 sm:gap-2 w-full justify-center h-full">
                    
                    {/* Market Bar */}
                    <div className="flex flex-col items-center justify-end h-full w-1/2 max-w-[40px]">
                      <span className={`text-[0.55rem] sm:text-[0.65rem] font-medium mb-1.5 whitespace-nowrap text-white/60`}>
                        {d.mktVal}
                      </span>
                      <div
                        className={`rounded-t-[4px] w-full bg-white/[0.13]`}
                        style={{ height: `${d.mkt + 5}%` }}
                      />
                    </div>

                    {/* FE Bar */}
                    <div className="flex flex-col items-center justify-end h-full w-1/2 max-w-[40px]">
                      <span className="text-[0.55rem] sm:text-[0.65rem] font-medium mb-1.5 whitespace-nowrap text-[#e8c97a]">
                        {d.feVal}
                      </span>
                      <div 
                        className="rounded-t-[4px] w-full bg-gradient-to-b from-[#e8c97a] to-[#c9a84c] shadow-[0_-4px_18px_rgba(201,168,76,0.4)]" 
                        style={{ height: `${d.fe}%` }} 
                      />
                    </div>

                  </div>
                  <span className="text-[0.68rem] text-[#f5f0e8]/50 font-semibold mt-4">{d.year}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-[0.78rem] text-[#f5f0e8]/50">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.18]" />
                Average Funeral Cost
              </div>
              <div className="flex items-center gap-2 text-[0.78rem] text-[#f5f0e8]/50">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#c9a84c]" />
                Final Expense Benefit
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-[clamp(1.5rem,6vw,4rem)] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[700px] mx-auto bg-[#c9a84c]/5 border-[1.5px] border-[#c9a84c]/20 rounded-[2rem] py-16 px-10">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-4 tracking-[-0.01em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Want guaranteed peace of mind?</h2>
            <p className="text-[#f5f0e8]/50 text-[0.97rem] leading-[1.78] max-w-[460px] mx-auto mb-8 font-light">
              A Final Expense policy ensures your family won't have to worry about paying for your end-of-life costs. Talk to a licensed agent today — we'll help you find an affordable plan.
            </p>
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#c9a84c] to-[#a8762e] text-[#1a1200] text-base font-bold py-[1.1rem] px-11 rounded-full border-none cursor-pointer no-underline tracking-[0.02em] transition-all shadow-[0_6px_32px_rgba(201,168,76,0.35)] hover:brightness-105 hover:scale-[1.04]"
            >
              Get Your Free Final Expense Quote <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}