import { CalendarClock, LineChart, ShieldCheck } from "lucide-react";

export function ProductsOffered() {
  const products = [
    {
      icon: LineChart,
      title: "Indexed Universal Life (IUL)",
      subtitle: "with Living Benefits",
      description: "Permanent coverage with cash value growth potential tied to market indexes—plus full living benefits access.",
    },
    {
      icon: CalendarClock,
      title: "Term Life",
      subtitle: "with Living Benefits Riders",
      description: "Affordable coverage for a set period with critical, chronic, and terminal illness riders included.",
    },
    {
      icon: ShieldCheck,
      title: "Whole Life",
      subtitle: "with Living Benefits",
      description: "Lifetime coverage with guaranteed cash value and living benefits built right in.",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Products We Offer
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Customized coverage vehicles designed around your financial goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col p-8 rounded-3xl border-2 border-border hover:border-primary transition-all bg-accent/5">
            <product.icon className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 mt-1">{product.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}