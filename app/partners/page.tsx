"use client";

import { 
  ShieldCheck, 
  CheckCircle2, 
  Network,
  Handshake
} from "lucide-react";

export default function PartnersPage() {
  const coreValues = [
    {
      icon: <Network className="w-6 h-6 text-primary" />,
      title: "Vetted Ecosystem",
      description: "We carefully select industry leaders across real estate, finance, and technology to ensure our network delivers unparalleled value."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Iron-Clad Security",
      description: "Every partner in our ecosystem operates with the highest level of integrity, ensuring your assets and data are always protected."
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary" />,
      title: "Mutual Growth",
      description: "Our alliances are built on synergistic relationships, designed to scale operations and maximize wealth generation for everyone involved."
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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary text-sm font-bold uppercase tracking-widest">Strategic Alliances</p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            The Power of <br />
            <span className="text-primary">Our Network</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
            Upgrade Financial Group partners with elite organizations across the nation to provide comprehensive, secure, and highly efficient wealth-building solutions.
          </p>
        </div>

        {/* PARTNER LOGOS GRID */}
        <div className="mb-32">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Our Trusted Partners</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          </div>
          
          {/* Centered Flexbox for Logos */}
          <div className="flex flex-wrap justify-center gap-6">
            
            {/* Capital Holdings Link */}
            <a 
              href="https://capitalholdingsinc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-sm bg-accent/20 border border-border rounded-2xl p-8 flex items-center justify-center hover:border-primary/50 hover:bg-accent/40 backdrop-blur-sm transition-all group h-32 shadow-lg"
            >
              <img 
                src="https://i0.wp.com/capitalholdingsinc.com/wp-content/uploads/2026/01/cropped-CHIwLogoTypeReversed1.png?fit=1444%2C289&ssl=1" 
                alt="Capital Holdings, Inc." 
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 brightness-125"
              />
            </a>

            {/* MCL Financial Services Link */}
            <a 
              href="https://www.mclfinancialservices.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-sm bg-accent/20 border border-border rounded-2xl p-8 flex items-center justify-center hover:border-primary/50 hover:bg-accent/40 backdrop-blur-sm transition-all group h-32 shadow-lg"
            >
              <img 
                src="/images/mcl.png" 
                alt="MCL Financial Services" 
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 brightness-125"
              />
            </a>

          </div>
        </div>

        {/* VALUE PROP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-accent/20 border border-border p-8 rounded-3xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-6 shadow-lg">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "{value.description}"
              </p>
            </div>
          ))}
        </div>

        {/* THE "WHY" SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why Partner With Us?</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are building a comprehensive ecosystem where financial protection meets tangible asset accumulation and CRM automation. By aligning with Upgrade Financial Group, you tap into a network designed for high-velocity growth.
            </p>
            <ul className="space-y-4">
              {[
                "Access to exclusive, high-converting lead pipelines",
                "Shared resources and industry-leading training",
                "Co-branded marketing and scalable infrastructure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden border border-border shadow-2xl">
            <img 
              src="https://www.aristocracy.london/wp-content/uploads/2019/08/the-81-rules-of-handshake-etiquette.jpg" 
              alt="Partnership Handshake" 
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </div>
  );
}