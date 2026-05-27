"use client";

import { 
  ArrowRight, 
  Target, 
  CalendarDays, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  const membershipBenefits = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Vetted, High-Intent Leads",
      description: "No cold calling or shared lists. Receive a consistent, predictable flow of exclusive leads delivered directly to your pipeline."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "FAR Agents CRM Access",
      description: "Manage your 1-year lead supply with our proprietary automation platform, featuring pre-built SMS and email follow-up sequences."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Conversion Coaching",
      description: "Weekly strategic scaling calls with our top producers to ensure you are maximizing the ROI on every lead we send your way."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Territory Exclusivity",
      description: "We limit our membership pool to prevent saturation. Once you secure a market, your lead flow is ring-fenced and protected."
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
      
      {/* 2. THEME OVERLAY */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] -z-10" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase mb-8">
            <Award className="w-4 h-4" /> The Elite Partner Program
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8">
            Stop Chasing. <br />
            <span className="text-primary">Start Closing.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto mb-10">
            Join our exclusive membership and we will fuel your pipeline with <strong className="text-foreground">consistent, high-quality leads for 1 Full Year.</strong> You focus on closing deals; we focus on filling your calendar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership/payment"
              className="inline-flex items-center justify-center gap-2 text-lg px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 hover:-translate-y-1 transition-all shadow-xl shadow-primary/20 w-full sm:w-auto"
            >
              Apply For Membership <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-muted-foreground font-medium sm:ml-4">
              *Limited availability per territory.
            </p>
          </div>
        </div>

        {/* THE 1-YEAR GUARANTEE BANNER */}
        <div className="mb-24">
          <div className="bg-accent/30 border border-primary/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-primary/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
              <div className="w-24 h-24 bg-background border-2 border-primary rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(var(--color-primary),0.3)]">
                <CalendarDays className="w-12 h-12 text-primary" />
              </div>
              
              <div className="flex-grow text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">The 365-Day Pipeline Guarantee</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you become a member, lead generation is no longer your problem. For 12 continuous months, our internal marketing engine works exclusively for you, delivering pre-vetted prospects directly into your hands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MEMBERSHIP BENEFITS GRID */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">What's Included in the Membership?</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {membershipBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-accent/20 border border-border p-8 rounded-3xl backdrop-blur-sm hover:border-primary/40 hover:bg-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS / TIMELINE */}
        <div className="mb-32 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-16">The Path to Scale</h2>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Application & Territory Check",
                desc: "We review your application to ensure you are a fit and verify that your desired territory is available."
              },
              {
                step: "02",
                title: "System Onboarding",
                desc: "You get full access to the FAR Agents CRM. We plug our lead-generation engine directly into your new customized pipeline."
              },
              {
                step: "03",
                title: "1 Year of Lead Delivery",
                desc: "The tap turns on. For the next 365 days, you receive a steady, predictable flow of prospects ready to do business."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-primary">{item.step}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-accent/40 border border-border rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Ready to secure your pipeline?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We are looking for serious operators ready to handle serious volume. Submit your application today to lock in your territory before it's gone.
            </p>
            <Link
              href="/membership/payment"
              className="inline-flex items-center justify-center gap-2 text-base px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/20 hover:scale-105"
            >
              Submit Membership Application <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}