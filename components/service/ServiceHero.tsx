"use client";

import { ArrowRight, Star, Award } from "lucide-react";
import Link from "next/link";

// Custom inline SVG to create the classic Forbes/Business Insider award wreath
const LaurelBranch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 48 C14 48, 2 34, 2 16 C2 6, 10 0, 10 0 C10 0, 6 6, 6 16 C6 28, 14 48, 14 48 Z" />
    <path d="M8 34 C4 30, 2 22, 8 16 C4 20, 2 28, 8 34 Z" />
    <path d="M8 22 C4 18, 2 10, 8 4 C4 8, 2 16, 8 22 Z" />
  </svg>
);

export function ServiceHero() {
  return (
    <section className="pt-24 md:pt-32 max-w-7xl mx-auto px-6 mb-24">

      {/* Main Hero Card Container - Forced White Background */}
      <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-12 shadow-2xl relative">

        {/* LEFT COLUMN: Text & Call to Action */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">

          {/* Ambient gold glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />

          {/* Top Review/Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
              <div className="flex text-primary">
                <Star className="w-3.5 h-3.5 fill-primary" />
                <Star className="w-3.5 h-3.5 fill-primary" />
                <Star className="w-3.5 h-3.5 fill-primary" />
                <Star className="w-3.5 h-3.5 fill-primary" />
                <Star className="w-3.5 h-3.5 fill-primary" />
              </div>
              <span className="text-xs font-bold text-primary">4.9</span>
            </div>
            <span className="text-sm font-medium text-slate-500">Trusted by families across the USA</span>
          </div>

          {/* Headlines */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Life Insurance With{" "}
            <br className="hidden md:block" />
            <span className="text-primary drop-shadow-sm">Living Benefits.</span>
          </h1>

          {/* Description Texts */}
          <p className="text-lg md:text-xl text-slate-800 font-semibold mb-3 leading-snug">
            Traditional life insurance protects your family after you're gone. But what about protecting you while you're still here?
          </p>
          <p className="text-base text-slate-600 mb-10 max-w-xl leading-relaxed">
            At Upgrade Financial Services, we specialize in policies that give you access to your death benefit if you're diagnosed with a qualifying illness.{" "}
            <strong className="text-slate-900 font-bold">No need to die to use your policy.</strong>
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base md:text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              Get a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Bottom Trust Badges (Laurel Wreath Design) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
            
            {/* Badge 1 */}
            <div className="flex items-center justify-center gap-2">
              <LaurelBranch className="w-5 h-12 text-primary" />
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Best</p>
                <p className="text-[9px] font-bold text-primary tracking-widest uppercase my-0.5">Term Life</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business Insider</p>
              </div>
              <LaurelBranch className="w-5 h-12 text-primary scale-x-[-1]" />
            </div>

            {/* Badge 2 */}
            <div className="flex items-center justify-center gap-2">
              <LaurelBranch className="w-5 h-12 text-primary" />
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">#1 Online</p>
                <p className="text-[9px] font-bold text-primary tracking-widest uppercase my-0.5">Living Benefits</p>
                <Award className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
              </div>
              <LaurelBranch className="w-5 h-12 text-primary scale-x-[-1]" />
            </div>

            {/* Badge 3 */}
            <div className="flex items-center justify-center gap-2">
              <LaurelBranch className="w-5 h-12 text-primary" />
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Trusted</p>
                <p className="text-[9px] font-bold text-primary tracking-widest uppercase my-0.5">Provider</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Forbes Advisor</p>
              </div>
              <LaurelBranch className="w-5 h-12 text-primary scale-x-[-1]" />
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Full-Bleed Image */}
        <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full w-full bg-slate-50">
          <img
            src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1200&q=80"
            alt="Happy family"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Blend edge between text and image for white card */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}