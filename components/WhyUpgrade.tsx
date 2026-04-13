import { Baby, Briefcase, Calculator, Landmark, ShieldHalf } from "lucide-react";

export function WhyUpgrade() {
  const audiences = [
    {
      icon: Baby,
      title: "Families with young children",
      description: "Protect your income so your family stays secure if illness strikes.",
    },
    {
      icon: Calculator,
      title: "Middle-income earners",
      description: "You can't afford to miss paychecks; we make sure you don't have to.",
    },
    {
      icon: Briefcase,
      title: "Small business owners",
      description: "Keep your business running even when you can't.",
    },
    {
      icon: ShieldHalf,
      title: "Ages 30s–50s",
      description: "Your prime earning years deserve prime protection.",
    },
    {
      icon: Landmark,
      title: "Retirees",
      description: "Don't let medical costs drain your retirement savings.",
    },
  ];

  return (
    <section className="py-24 bg-accent/10 border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Why Upgrade / Founder Story Section */}
        <div className="max-w-4xl mx-auto mb-24 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center">
            Why Upgrade Financial Services?
          </h2>
          
          <div className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm relative overflow-hidden">
            {/* Subtle Gold Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 relative z-10">
              This isn't just business for us. <span className="text-primary">It's personal.</span>
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed relative z-10">
              <p>
                Founder Benjamin Angeles III is a kidney transplant recipient who experienced the financial strain of a major health crisis firsthand. Living benefits helped him through that difficult time.
              </p>
              <p className="font-medium text-foreground">
                Now he's on a mission to make sure no family has to choose between their health and their financial security.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Help Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Who We Help</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored living benefit strategies designed for your specific stage of life and financial responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors shadow-sm group"
              >
                <item.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}