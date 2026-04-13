import { 
  ArrowRight, 
  CalendarCheck, 
  ClipboardList, 
  FileText, 
  HeartHandshake, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";

export function HowWeWork() {
  const steps = [
    {
      icon: CalendarCheck,
      title: "Free Consultation",
      description: "We learn about your situation, goals, and budget in a no-pressure strategy session.",
    },
    {
      icon: ClipboardList,
      title: "Needs Analysis",
      description: "We identify the right coverage amount and type specifically tailored for you.",
    },
    {
      icon: ShieldCheck,
      title: "Carrier Matching",
      description: "We shop top-rated carriers to find the absolute best fit for your goals.",
    },
    {
      icon: FileText,
      title: "Application & Approval",
      description: "We guide you through the entire process from start to finish, handling the heavy lifting.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support",
      description: "We're here when you need us, not just at the sale. We grow with your family.",
    },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Securing your future shouldn't be complicated. Our straightforward process makes getting the right coverage simple and stress-free.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-accent/5 border border-border hover:border-primary/30 hover:bg-accent/10 transition-all group"
            >
              <div className="w-20 h-20 rounded-full bg-background border-4 border-accent flex items-center justify-center relative shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm border-2 border-background">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA Banner */}
        <div className="mt-24 p-10 md:p-14 rounded-3xl bg-primary relative overflow-hidden text-center shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">
              Ready to Upgrade Your Coverage?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
             Get life insurance that actually works for you—while you're still living.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-background text-foreground font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Free Consultation
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}