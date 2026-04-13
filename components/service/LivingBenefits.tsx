import { Activity, Hourglass, Stethoscope } from "lucide-react";

export function LivingBenefits() {
  const benefits = [
    {
      icon: Activity,
      title: "Critical Illness",
      description: "Diagnosed with a covered condition like heart attack, stroke, cancer, or major organ failure? Access funds to cover treatment, lost income, or whatever you need.",
    },
    {
      icon: Stethoscope,
      title: "Chronic Illness",
      description: "Unable to perform two or more activities of daily living (bathing, dressing, eating, etc.)? Your policy can help cover long-term care costs and daily expenses.",
    },
    {
      icon: Hourglass,
      title: "Terminal Illness",
      description: "Facing a terminal diagnosis? Access your benefit to spend time with loved ones, check off your bucket list, or simply reduce financial stress during a difficult time.",
    },
  ];

  return (
    <section className="py-24 bg-accent/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What Are Living Benefits?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Living benefits are riders or features built into your life insurance policy that allow you to access a portion of your death benefit early if you experience:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-3xl border border-border bg-background hover:border-primary/50 transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary/10" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 relative z-10 border border-primary/20">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}