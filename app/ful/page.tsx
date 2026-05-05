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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    index: "01 / 05",
    category: "Guaranteed Rate",
    title: "Guaranteed Fixed Interest Rate",
    desc: "Unlike indexed or variable products, a Fixed Universal Life policy credits your cash value at a guaranteed interest rate. You always know exactly how your money is growing — predictable, stress-free wealth accumulation.",
    stat: "4%+",
    statLabel: "Guaranteed Rate",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    index: "02 / 05",
    category: "Zero Risk",
    title: "Zero Market Risk — Ever",
    desc: "Your cash value is completely insulated from market volatility. Whether markets are booming or crashing, your policy grows at its guaranteed rate without interruption. True certainty for your hard-earned wealth.",
    stat: "0%",
    statLabel: "Market Risk",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
    index: "03 / 05",
    category: "Tax Advantage",
    title: "Tax-Deferred Cash Value Growth",
    desc: "Cash value accumulates tax-deferred — no taxes on growth until you access it. When structured properly, withdrawals and loans in retirement can be taken income tax-free, making it an excellent retirement complement.",
    stat: "Tax-Free",
    statLabel: "Withdrawals",
  },
  {
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1600&q=80",
    index: "04 / 05",
    category: "Living Benefits",
    title: "Living Benefits Included",
    desc: "Access a portion of your death benefit if diagnosed with a qualifying critical, chronic, or terminal illness. Your policy isn't just a safety net for your family — it's a financial lifeline for you too.",
    stat: "Early",
    statLabel: "Access",
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80",
    index: "05 / 05",
    category: "Flexibility",
    title: "Permanent Coverage with Flexible Premiums",
    desc: "Adjust your premium payments within certain limits to accommodate changes in income or expenses. Coverage stays in force permanently — your family is always protected regardless of what life brings your way.",
    stat: "Lifetime",
    statLabel: "Coverage",
  },
];

const INTERVAL = 10000;

export default function FULPage() {
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
      progressRef.current.style.animation = `fulProgress ${INTERVAL}ms linear forwards`;
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
        .animate-ful-slide {
          animation: slideUp 0.75s cubic-bezier(0.34,1.3,0.64,1) both;
        }

        @keyframes fulZoom {
          from { transform: scale(1.07); }
          to   { transform: scale(1.0); }
        }
        .animate-ful-zoom {
          animation: fulZoom 9s ease forwards;
        }

        @keyframes fulProgress {
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
              Safe · Steady · Secure
            </span>
            <h1 className="text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[1.04] tracking-[-0.01em] mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Fixed Universal<br /><em className="italic text-[#e8c97a]">Life Insurance</em>
            </h1>
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#f5f0e8]/50 leading-[1.78] max-w-[540px] mx-auto mb-8 font-light">
              For those who value stability above all else — permanent protection with
              predictable, guaranteed growth. No market exposure, no surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-[0.6rem] mb-9">
              {[
                { val: "4%+", label: "Guaranteed Rate" },
                { val: "0%", label: "Market Risk" },
                { val: "Tax-Free", label: "Cash Value Access" },
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
              Get My Free FUL Quote <ArrowRight size={17} />
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
            className="absolute inset-0 w-full h-full object-cover object-center animate-ful-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/95 via-[#09090b]/55 to-[#09090b]/20" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 z-10 p-[3.5rem_clamp(1.5rem,7vw,5.5rem)] max-w-[680px]">
            <div key={`ey-${animKey}`} className="animate-ful-slide flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[#e8c97a] mb-3" style={{ animationDelay: '0.05s' }}>
              <span className="inline-block w-7 h-[1.5px] bg-[#c9a84c]" />
              {slide.index} &nbsp;—&nbsp; {slide.category}
            </div>
            <h2 key={`h-${animKey}`} className="animate-ful-slide text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.01em] mb-3 text-[#f5f0e8]" style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: '0.15s' }}>
              {slide.title}
            </h2>
            <p key={`p-${animKey}`} className="animate-ful-slide text-[clamp(0.88rem,1.7vw,1rem)] text-[#f5f0e8]/50 leading-[1.78] max-w-[500px] mb-6 font-light" style={{ animationDelay: '0.25s' }}>
              {slide.desc}
            </p>
            <div key={`s-${animKey}`} className="animate-ful-slide inline-flex flex-col bg-[#c9a84c]/10 backdrop-blur-md border border-[#c9a84c]/25 rounded-xl py-3 px-5" style={{ animationDelay: '0.35s' }}>
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
            5-Year Comparison
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Power of <em className="italic text-[#e8c97a]">Guaranteed Growth</em>
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-[500px] mx-auto mb-12 text-[0.97rem] leading-[1.75] font-light">
            No market crashes. No guessing. Steady, predictable cash value accumulation year after year.
          </p>
          <div className="bg-white/[0.025] border border-white/[0.07] rounded-3xl pt-12 pb-8 px-4 sm:px-8 max-w-[800px] mx-auto">
            <div className="flex items-end justify-around h-[240px] border-b border-white/[0.08] gap-2 px-2">
              {[
                { year: "Yr 1", mkt: 30, mktNeg: false, mktVal: "$10,800", ful: 15, fulVal: "$10,400" },
                { year: "Yr 2", mkt: 20, mktNeg: true,  mktVal: "$9,504",  ful: 25, fulVal: "$10,816" },
                { year: "Yr 3", mkt: 10, mktNeg: false, mktVal: "$9,789",  ful: 35, fulVal: "$11,248" },
                { year: "Yr 4", mkt: 15, mktNeg: true,  mktVal: "$9,299",  ful: 45, fulVal: "$11,698" },
                { year: "Yr 5", mkt: 20, mktNeg: false, mktVal: "$9,857",  ful: 55, fulVal: "$12,166" },
              ].map((d, i) => (
                <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                  <div className="flex items-end gap-1 sm:gap-2 w-full justify-center h-full">
                    
                    {/* Market Bar */}
                    <div className="flex flex-col items-center justify-end h-full w-1/2 max-w-[40px]">
                      <span className={`text-[0.55rem] sm:text-[0.65rem] font-medium mb-1.5 whitespace-nowrap ${d.mktNeg ? "text-red-400" : "text-white/60"}`}>
                        {d.mktVal}
                      </span>
                      <div
                        className={`rounded-t-[4px] w-full ${d.mktNeg ? "bg-red-500/30" : "bg-white/[0.13]"}`}
                        style={{ height: `${d.mkt + 5}%` }}
                      />
                    </div>

                    {/* FUL Bar */}
                    <div className="flex flex-col items-center justify-end h-full w-1/2 max-w-[40px]">
                      <span className="text-[0.55rem] sm:text-[0.65rem] font-medium mb-1.5 whitespace-nowrap text-[#e8c97a]">
                        {d.fulVal}
                      </span>
                      <div 
                        className="rounded-t-[4px] w-full bg-gradient-to-b from-[#e8c97a] to-[#c9a84c] shadow-[0_-4px_18px_rgba(201,168,76,0.4)]" 
                        style={{ height: `${d.ful}%` }} 
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
                Traditional Market Account
              </div>
              <div className="flex items-center gap-2 text-[0.78rem] text-[#f5f0e8]/50">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#c9a84c]" />
                FUL Cash Value (Guaranteed)
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
              A Fixed Universal Life policy may be exactly what your financial plan needs.
              Talk to a licensed agent today — we'll design a custom FUL illustration free of charge.
            </p>
            <Link
              href="https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#c9a84c] to-[#a8762e] text-[#1a1200] text-base font-bold py-[1.1rem] px-11 rounded-full border-none cursor-pointer no-underline tracking-[0.02em] transition-all shadow-[0_6px_32px_rgba(201,168,76,0.35)] hover:brightness-105 hover:scale-[1.04]"
            >
              Get Your Free FUL Quote <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}