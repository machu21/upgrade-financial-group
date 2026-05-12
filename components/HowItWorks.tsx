import { CalendarCheck, ClipboardEdit, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      icon: CalendarCheck,
      title: "Schedule a free consultation",
      description: "We'll discuss your needs, goals, and budget in a no-pressure environment.",
    },
    {
      icon: ClipboardEdit,
      title: "Get a customized plan",
      description: "We'll design coverage that protects you while you're living.",
    },
    {
      icon: FileCheck,
      title: "Get pre-approved for Living Benefits",
      description: "Complete the straightforward application with our expert guidance.",
    },
    {
      icon: ShieldCheck,
      title: "Enjoy peace of mind",
      description: "Know that you and your family are protected no matter what life brings.",
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Securing your future shouldn't be complicated. Our four-step process makes getting the right coverage simple and stress-free.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative mb-16">
          
          {/* Subtle connecting line for desktop view (Updated to fit 4 columns) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              {/* Icon Circle with Number Badge */}
              <div className="w-24 h-24 rounded-full bg-background border-4 border-accent flex items-center justify-center relative shadow-lg mb-8 group-hover:border-primary/50 transition-colors">
                <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                
                {/* Step Number Indicator */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm border-2 border-background shadow-sm">
                  {index + 1}
                </div>
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Action-Oriented CTA Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/form"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/30 transition-all active:scale-95 text-lg"
          >
            Start Step 1 Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}