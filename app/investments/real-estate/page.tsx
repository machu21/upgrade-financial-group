"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle2, 
  Workflow,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Make sure this path matches your setup

export default function RealEstatePage() {
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
        .from('capital_holdings_affiliates')
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

  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Strategic Property Investments",
      description: "Partner with industry-leading real estate firms to diversify your portfolio and secure tangible assets that appreciate over time."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Wealth Accumulation",
      description: "Leverage real estate investments as part of a comprehensive financial plan to accelerate your wealth building and secure your family's future."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Expert Network Access",
      description: "Gain access to a vetted ecosystem of real estate professionals, from acquisition specialists to property managers, all dedicated to your success."
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Seamless Integration",
      description: "We bridge the gap between life insurance protection and real estate investing, offering a unified strategy for generational wealth."
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      
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
      
      {/* 2. THEME-MATCHED OPACITY OVERLAY */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px] -z-10" />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase">
              <Zap className="w-4 h-4" /> Real Estate Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Legacy Property  <br />
              <span className="text-primary">Investment</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-lg">
              Start building your future with a minimum monthly investment designed to help you move closer to acquiring your own property or land, while protecting your family through smart financial planning. 
            </p>
            
          </div>

          {/* Conceptual Image/Graphic */}
          <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border-[4px] border-border">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80" 
              alt="Modern Real Estate Office" 
              className="absolute inset-0 w-full h-full object-cover"
            />

          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Diversify with Real Estate</h2>
            <p className="text-muted-foreground font-medium text-lg">
              Comprehensive investment strategies designed to build tangible wealth and secure your legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-lg shadow-black/20 hover:border-primary/50 hover:bg-accent/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary/10 transition-colors">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGIC PARTNERS & AFFILIATE FORM */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-accent/20 border border-border rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black/20">
            
            {/* Background ambient light for this specific card */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Left: Partners Info */}
            <div className="space-y-8 z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">Our Strategic Partners</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We collaborate with industry leaders to provide unparalleled value. Join our network and scale your real estate operations with us.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Current Partner</p>
                <div className="bg-background/50 border border-border rounded-2xl p-8 flex items-center justify-center max-w-sm backdrop-blur-sm shadow-inner group">
                  <img 
                    src="https://i0.wp.com/capitalholdingsinc.com/wp-content/uploads/2026/01/cropped-CHIwLogoTypeReversed1.png?fit=1444%2C289&ssl=1" 
                    alt="Capital Holdings, Inc." 
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
                      Partner with Capital Holdings, Inc. and Upgrade Financial Group to unlock exclusive real estate investment opportunities.
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

        {/* BOTTOM CTA */}
        <div className="bg-accent/40 border border-border rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-background border border-border rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Ready to expand your investment portfolio?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Take the next step in your financial journey. Let's build a comprehensive wealth strategy that includes premium real estate opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/20"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}