"use client";

import { ArrowRight, Clock, ShieldCheck, Banknote, HeartPulse, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TermLifePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-border/40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="inline-block text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-6">
            Pure Protection
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
            Term Life Insurance <br />
            <span className="text-primary">Made Simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Affordable, high-coverage protection for the years your family needs it most. Secure their future today with policies that include modern living benefits.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Get a Free Term Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 2. THE INFOGRAPHIC SECTION (How it Works) */}
      <section className="py-24 bg-accent/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Term Life Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, straightforward timeline of your coverage.
            </p>
          </div>

          {/* CSS Infographic / Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-background border border-border/50 rounded-2xl p-6 text-center shadow-lg relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/30">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Choose Your Term</h3>
                <p className="text-sm text-muted-foreground">Select a coverage period that matches your financial obligations (10, 20, or 30 years).</p>
              </div>

              {/* Step 2 */}
              <div className="bg-background border border-border/50 rounded-2xl p-6 text-center shadow-lg relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/30">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Lock Your Rate</h3>
                <p className="text-sm text-muted-foreground">Your monthly premium is permanently locked in. It will never increase during your chosen term.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-background border border-border/50 rounded-2xl p-6 text-center shadow-lg relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/30">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Live Protected</h3>
                <p className="text-sm text-muted-foreground">Enjoy peace of mind. If the unexpected happens, your family receives a 100% tax-free payout.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-background border border-border/50 rounded-2xl p-6 text-center shadow-lg relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto bg-accent text-accent-foreground border border-border rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">End of Term</h3>
                <p className="text-sm text-muted-foreground">When the term ends, you can let it expire, renew it, or convert it to a permanent policy.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY BENEFITS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80" 
                alt="Mother and child" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-border/50">
                  <div className="flex items-center gap-4 mb-2">
                    <HeartPulse className="w-8 h-8 text-primary" />
                    <h4 className="font-bold text-xl">The Upgrade Difference</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Most term policies only pay out if you die. Our term policies include Living Benefits, allowing you to access cash if you get critically or chronically ill.</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Term Life?</h2>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Maximum Coverage, Lowest Cost</h4>
                    <p className="text-muted-foreground leading-relaxed">Term insurance is the most affordable way to get massive coverage (like $500,000 or $1,000,000) to protect mortgages and young children.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Convertible to Permanent</h4>
                    <p className="text-muted-foreground leading-relaxed">Start with affordable term now. If you want lifelong coverage later, our policies allow you to convert to an IUL or Whole Life policy without a new medical exam.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Guaranteed Death Benefit</h4>
                    <p className="text-muted-foreground leading-relaxed">As long as your premiums are paid, your beneficiaries are guaranteed a 100% tax-free lump sum payout to cover debts, income replacement, and funeral costs.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR (Use Cases) */}
      <section className="py-20 bg-accent/5 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Term Life Right For You?</h2>
            <p className="text-lg text-muted-foreground">Term life is typically the perfect fit for these common life stages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Young Families
              </h3>
              <p className="text-muted-foreground">Replace your income so your spouse and children can maintain their lifestyle, pay for childcare, and cover future college tuitions.</p>
            </div>
            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> New Homeowners
              </h3>
              <p className="text-muted-foreground">Often called "Mortgage Protection," a 30-year term policy perfectly matches a 30-year mortgage, ensuring your family never loses the house.</p>
            </div>
            <div className="bg-background border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Business Owners
              </h3>
              <p className="text-muted-foreground">Used for "Key Person" insurance or to fund a Buy-Sell agreement, ensuring the business survives if a critical founder or partner passes away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 via-background to-background border border-primary/30 p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Protect What Matters Most</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Term life insurance is more affordable than you think. Find out how little it costs to secure your family's financial future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-all shadow-lg"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> No medical exam required for many healthy applicants.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}