"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Star, Award, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const LaurelBranch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 48 C14 48, 2 34, 2 16 C2 6, 10 0, 10 0 C10 0, 6 6, 6 16 C6 28, 14 48, 14 48 Z" />
    <path d="M8 34 C4 30, 2 22, 8 16 C4 20, 2 28, 8 34 Z" />
    <path d="M8 22 C4 18, 2 10, 8 4 C4 8, 2 16, 8 22 Z" />
  </svg>
);

export function ServiceHero() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => { if (address.trim()) setStep(2); };
  const handleSubmit = () => { if (contactInfo.trim()) setIsSubmitted(true); };

  return (
    <section className="pt-24 md:pt-32 max-w-7xl mx-auto px-6 mb-24">

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
            Traditional life insurance protects your family after you're gone. But what about protecting you while you're still here?
          </p>
          <p className="text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
            At Upgrade Financial Services, we specialize in policies that give you access to your death benefit if you're diagnosed with a qualifying illness.{" "}
            <strong className="text-slate-900 font-bold">No need to die to use your policy.</strong>
          </p>

          {/* ── INLINE MULTI-STEP FORM ── */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">

            {/* Progress bar */}
            {!isSubmitted && (
              <div className="flex gap-1.5 mb-5">
                <div className="h-1 flex-1 rounded-full bg-slate-800 transition-all duration-300" />
                <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step === 2 ? "bg-slate-800" : "bg-slate-200"}`} />
              </div>
            )}

            {/* STEP 1 */}
            {!isSubmitted && step === 1 && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <h4 className="text-base font-semibold text-slate-900 mb-1">
                  What is your primary residential address?
                </h4>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Confirm your address to see if you qualify to skip the medical exam.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Street Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Main St, City, State"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                      Apt <span className="text-slate-300 font-normal normal-case tracking-normal">— Optional</span>
                    </label>
                    <input
                      type="text"
                      value={apt}
                      onChange={(e) => setApt(e.target.value)}
                      placeholder="Apt #"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>Secure &amp; encrypted</span>
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!address.trim()}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                      address.trim()
                        ? "bg-slate-900 text-white hover:bg-black hover:-translate-y-px shadow-sm"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {!isSubmitted && step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <button
                  onClick={() => setStep(1)}
                  className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1 mb-4 w-fit transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>

                <h4 className="text-base font-semibold text-slate-900 mb-1">
                  Where should we send your results?
                </h4>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Enter your phone or email so an advisor can securely deliver your eligibility status.
                </p>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="you@email.com or (555) 000-0000"
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!contactInfo.trim()}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 whitespace-nowrap ${
                      contactInfo.trim()
                        ? "bg-slate-900 text-white hover:bg-black hover:-translate-y-px shadow-sm"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Submit <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-3">
                  <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>Secure &amp; encrypted</span>
                </div>
              </div>
            )}

            {/* SUCCESS */}
            {isSubmitted && (
              <div className="flex items-center gap-4 animate-in zoom-in-95 fade-in duration-500 py-2">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Request Received!</h4>
                  <p className="text-sm text-slate-500">An advisor will review your eligibility and contact you shortly.</p>
                </div>
              </div>
            )}
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
    </section>
  );
}