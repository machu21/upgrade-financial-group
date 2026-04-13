import { Baby, Briefcase, HeartPulse, ShieldAlert, Wallet } from "lucide-react";

export function WhoItsFor() {
  const audiences = [
    { icon: Baby, text: "Anyone with dependents — Spouse, children, aging parents relying on your income." },
    { icon: Wallet, text: "Primary breadwinners — If your paycheck stops, your family's security shouldn't." },
    { icon: Briefcase, text: "Small business owners — Protect your livelihood if you can't work." },
    { icon: ShieldAlert, text: "People without substantial savings — Most Americans can't cover a $10,000 emergency; living benefits fill that gap." },
    { icon: HeartPulse, text: "Anyone with a family history of illness — Heart disease, cancer, diabetes—don't wait until it's too late." },
  ];

  return (
    <section className="py-24 bg-primary/5 border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -ml-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-12">
          Who Should Consider Living Benefits?
        </h2>
        
        <div className="space-y-4">
          {audiences.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="mt-1 bg-primary/20 p-2 rounded-lg border border-primary/30 shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}