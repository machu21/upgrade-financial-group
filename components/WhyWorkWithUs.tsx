import { Award, BookOpen, HeartHandshake, Users } from "lucide-react";

export function WhyWorkWithUs() {
  const reasons = [
    {
      icon: HeartHandshake,
      title: "Personal Experience",
      description: "I've been on the receiving end of living benefits; I understand exactly what's at stake.",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Your needs and your family's security always come first, not a sales quota.",
    },
    {
      icon: Award,
      title: "Trusted Carriers",
      description: "We work exclusively with A-rated carriers like National Life Group, Nationwide, and Mutual of Omaha.",
    },
    {
      icon: BookOpen,
      title: "Education Focused",
      description: "We'll make sure you understand exactly what you're getting and why it matters before making any decisions.",
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Why Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We believe in building lifelong partnerships based on trust, transparency, and personal experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 rounded-2xl bg-accent/10 border border-border hover:border-primary/40 hover:bg-accent/20 transition-all group"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}