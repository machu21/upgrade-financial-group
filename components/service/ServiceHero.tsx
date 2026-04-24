"use client";

import { useState } from "react";
import { ArrowRight, Star, Award, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const LaurelBranch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 48 C14 48, 2 34, 2 16 C2 6, 10 0, 10 0 C10 0, 6 6, 6 16 C6 28, 14 48, 14 48 Z" />
    <path d="M8 34 C4 30, 2 22, 8 16 C4 20, 2 28, 8 34 Z" />
    <path d="M8 22 C4 18, 2 10, 8 4 C4 8, 2 16, 8 22 Z" />
  </svg>
);

export function ServiceHero() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setIsSubmitted(true);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

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

            {/* ── INLINE SIMPLE FORM ── */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
                  <h4 className="text-base font-semibold text-slate-900 mb-1">
                    Find Out If You Qualify
                  </h4>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                    Connect with an advisor to see how living benefits can protect your family.
                  </p>

                  <div className="space-y-3 mb-5">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                    />
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={3}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>Secure &amp; encrypted</span>
                    </div>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                        isFormValid
                          ? "bg-slate-900 text-white hover:bg-black hover:-translate-y-px shadow-sm"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Submit Request <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                /* SUCCESS STATE */
                <div className="flex items-center gap-4 animate-in zoom-in-95 fade-in duration-500 py-2">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">Request Received!</h4>
                    <p className="text-sm text-slate-500">An advisor will review your information and contact you shortly.</p>
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
      </div>
    </section>
  );
}