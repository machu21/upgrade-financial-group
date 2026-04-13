import { ArrowRight, HeartPulse, Landmark, LineChart } from "lucide-react";
import Link from "next/link";

export function AboutServices() {
  const services = [
    {
      icon: HeartPulse,
      title: "Living Benefits",
      description: "Access your life insurance benefits while you're alive — for serious illness, injury, or critical conditions. Protection that works when you need it most.",
    },
    {
      icon: LineChart,
      title: "Financial Planning",
      description: "We'll map out a clear, step-by-step plan to help you reach your short and long-term goals with absolute confidence.",
    },
    {
      icon: Landmark,
      title: "Wealth Management",
      description: "Grow and preserve your assets with smart, personalized strategies built around your unique lifestyle and future.",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Everything You Need to Financially Thrive
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive strategies designed to protect your present and secure your future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col p-8 rounded-3xl border border-border bg-background hover:bg-accent/20 transition-colors shadow-sm group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground flex-grow mb-6">{service.description}</p>
            <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-foreground transition-colors mt-auto">
              Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}