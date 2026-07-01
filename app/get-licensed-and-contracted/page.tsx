"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  Award, 
  CalendarClock, 
  TrendingUp,
  CheckCircle2,
  Users
} from "lucide-react";

export default function JoinTheTeamPage() {
  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Direct Carrier Appointments",
      description: "You are not a captive agent. Get your own appointments and truly own your book of business."
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-primary" />,
      title: "Ultimate Flexibility",
      description: "Set your own schedule. Work from anywhere. Scale your business at a pace that fits your lifestyle."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Elite Mentorship",
      description: "Tap into the experience of top producers. We provide the blueprint, you provide the work ethic."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Back-Office Support",
      description: "Focus on closing deals and building relationships while our network helps streamline the operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center pt-40 pb-24">
      
      {/* BACKGROUND VIDEO & GLOWS */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm -z-10" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Hero Text with staggered animation */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase">
              <Award className="w-4 h-4" /> Independent Agent Network
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Build <span className="text-primary">Your</span> Business. <br />
              Keep <span className="text-primary">Your</span> Independence.
            </h1>
            
            {/* THE CORE MESSAGE YOU PROVIDED */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium border-l-4 border-primary pl-6">
              Upgrade Financial Group isn’t a company you join as an employee — it’s a network of independently licensed insurance agents building their own businesses with the support of an experienced team. 
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an independent contractor, you’ll get your own carrier appointments, set your own schedule, and keep control of your business while tapping into our training, mentorship, and back-office support.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Hero Animated Image Composition */}
          <div className="relative h-[600px] w-full hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[3rem] overflow-hidden border border-border shadow-2xl hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Business Mentorship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Overlay Image */}
            <div className="absolute bottom-10 left-0 w-[60%] h-[50%] rounded-[2rem] overflow-hidden border-[6px] border-background shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 z-20">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JYXaSYMji485uQrftev9-YKHW_os2EOJKTD1GArlH6OgCPII5GsU7QEq&s=10" 
                alt="Closing a Deal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-20 -left-10 bg-background/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4 z-30 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">100% Independent</p>
                <p className="text-xs text-muted-foreground">You own your book</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BENEFITS GRID */}
        <div className="mb-32">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">The Best of Both Worlds</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Enjoy the freedom of being an independent business owner without sacrificing the infrastructure and support of a massive agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-accent/20 border border-border p-8 rounded-3xl backdrop-blur-sm hover:border-primary/40 hover:bg-accent/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
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

        {/* 3. BOTTOM CTA WITH IMAGE BACKGROUND */}
        <div className="relative rounded-[3rem] overflow-hidden border border-border shadow-2xl group animate-in fade-in duration-1000">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          </div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-24 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Ready to take control of your financial future?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              Whether you are a seasoned producer looking for better support, or a newly licensed agent looking for the right mentorship, Upgrade Financial Group is your platform for scale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/20 hover:scale-105"
            >
              Apply to Join Our Network <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}