"use client";

import { useState } from "react";
import { ArrowRight, Search, ShieldCheck, Clock, TrendingUp, Award, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Make sure this path matches your setup

const details = [
  {
    title: "CREDIT ANALYSIS & DISPUTE SERVICES",
    desc: "Our partners conduct a thorough review of your credit reports across all three major bureaus. Inaccurate, outdated, or unverifiable negative items are identified and formally disputed on your behalf — a process that can lead to significant score improvements over time.",
    icon: Search,
  },
  {
    title: "PERSONALIZED RESTORATION PLAN",
    desc: "No two credit situations are the same. You'll receive a customized action plan based on your specific credit profile — including guidance on paying down balances, managing credit utilization, and establishing positive credit history that lenders actually want to see.",
    icon: ShieldCheck,
  },
  {
    title: "ONGOING MONITORING & SUPPORT",
    desc: "Credit repair isn't a one-time event. Our partners provide continuous monitoring and dedicated support so you always know where your score stands, what's changing, and what steps to take next to keep building momentum.",
    icon: Clock,
  },
  {
    title: "BETTER CREDIT = BETTER FINANCIAL OPTIONS",
    desc: "Improving your credit score directly impacts the rates you qualify for on mortgages, auto loans, and even life insurance premiums. Clients who work on their credit alongside their financial plan consistently access better products and save significantly more over time.",
    icon: TrendingUp,
  },
  {
    title: "A TRUSTED REFERRAL — NOT A SIDE SERVICE",
    desc: "Upgrade Financial Group partners with vetted credit restoration professionals to make sure our clients have access to every tool they need for total financial wellness. From protection and wealth building to credit health — we're committed to your complete financial picture.",
    icon: Award,
  },
];

export default function CreditRepairPage() {
  // State for the Affiliate Form
  const [affiliateForm, setAffiliateForm] = useState({ name: "", email: "", phone: "", company: "", zipCode: "" });
  const [isAffiliateSubmitting, setIsAffiliateSubmitting] = useState(false);
  const [isAffiliateSuccess, setIsAffiliateSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAffiliateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAffiliateSubmitting(true);
    setErrorMessage(""); // Clear previous errors
    
    try {
      const { error } = await supabase
        .from('mcl_affiliates')
        .insert([
          {
            name: affiliateForm.name,
            email: affiliateForm.email,
            phone: affiliateForm.phone,
            company: affiliateForm.company,
            zip_code: affiliateForm.zipCode
          }
        ]);

      if (error) throw error;

      setIsAffiliateSuccess(true);
      setAffiliateForm({ name: "", email: "", phone: "", company: "", zipCode: "" }); // Reset form
    } catch (error: any) {
      console.error('Error submitting form:', error.message);
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsAffiliateSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Global dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none [filter:blur(0.5px)]" />

      {/* ── HERO ── */}
      <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
            Financial Wellness
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Restore Your Credit.<br />
            <span className="text-primary">Rebuild Your Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your credit score affects everything — your ability to buy a home, qualify for better rates, and secure your financial future. At Upgrade Financial Group, we connect you with trusted credit restoration specialists who take a hands-on approach to cleaning up your credit and rebuilding your financial standing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/credit-repair/form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
              What This Includes
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              A Comprehensive Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((item, i) => (
              <div
                key={i}
                className="bg-accent/10 border border-border rounded-3xl p-8 flex flex-col gap-5 hover:border-primary/30 hover:bg-accent/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC PARTNERS & AFFILIATE FORM ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-accent/20 border border-border rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black/20">
            
            {/* Background ambient light for this specific card */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Left: Partners Info */}
            <div className="space-y-8 z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">Our Strategic Partners</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We collaborate with industry leaders to provide unparalleled value. Join our network and scale your operations with us.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Current Partner</p>
                <div className="bg-background/50 border border-border rounded-2xl p-8 flex items-center justify-center max-w-sm backdrop-blur-sm shadow-inner group">
                  <img 
                    src="/images/mcl.png" 
                    alt="MCL Financial Services" 
                    className="w-full h-auto max-h-24 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right: Affiliate Form */}
            <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-xl relative z-10">
              {!isAffiliateSuccess ? (
                <form onSubmit={handleAffiliateSubmit} className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Become an Affiliate</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Partner with MCL Financial Services and Upgrade Financial Group to unlock exclusive benefits.
                    </p>
                  </div>
                  
                  {/* Error Display */}
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={affiliateForm.name}
                      onChange={(e) => setAffiliateForm({...affiliateForm, name: e.target.value})}
                      className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={affiliateForm.email}
                        onChange={(e) => setAffiliateForm({...affiliateForm, email: e.target.value})}
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={affiliateForm.phone}
                        onChange={(e) => setAffiliateForm({...affiliateForm, phone: e.target.value})}
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        required
                        type="text"
                        placeholder="Company / Agency Name"
                        value={affiliateForm.company}
                        onChange={(e) => setAffiliateForm({...affiliateForm, company: e.target.value})}
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                      <input
                        required
                        type="text"
                        placeholder="Zip Code"
                        value={affiliateForm.zipCode}
                        onChange={(e) => setAffiliateForm({...affiliateForm, zipCode: e.target.value})}
                        className="w-full bg-accent/30 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isAffiliateSubmitting}
                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isAffiliateSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                    ) : (
                      <>Apply for Partnership <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Application Received!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for your interest. Our partnership team will review your details and reach out to you shortly.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none [filter:blur(0.5px)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Ready to improve your financial standing?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Take the first step toward better credit and financial wellness. Schedule a consultation with our trusted partners today.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/credit-repair/form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
