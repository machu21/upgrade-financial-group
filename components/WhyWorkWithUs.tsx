import { Award, BookOpen, HeartHandshake, Users } from "lucide-react";

export function WhyWorkWithUs() {
  const reasons = [
    {
      icon: HeartHandshake,
      title: "Personal Experience",
      description: "I've been on the receiving end of living benefits; I understand exactly what's at stake.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      stat: "Lived It", statLabel: "Not Just Studied It",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Your needs and your family's security always come first, not a sales quota.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      stat: "100%", statLabel: "Client Focused",
    },
    {
      icon: Award,
      title: "Trusted Carriers",
      description: "We work exclusively with A-rated carriers like National Life Group, Nationwide, and Mutual of Omaha.",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      stat: "A-Rated", statLabel: "Carriers Only",
    },
    {
      icon: BookOpen,
      title: "Education Focused",
      description: "We'll make sure you understand exactly what you're getting and why it matters before any decisions.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      stat: "No", statLabel: "Pressure Sales",
    },
  ];

  return (
    <section className="border-t border-border py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/30 text-muted-foreground font-bold text-xs tracking-widest uppercase border border-border">
            Why Work With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Built on Trust,<br className="hidden md:block" /> Transparency & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We believe in building lifelong partnerships — not one-time transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-accent/20 border border-border rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Header band */}
              <div className={`${reason.bg} border-b ${reason.border} px-8 py-6 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-background border ${reason.border} flex items-center justify-center shadow-sm`}>
                    <reason.icon className={`w-6 h-6 ${reason.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className={`text-lg font-extrabold ${reason.color} leading-none`}>{reason.stat}</p>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{reason.statLabel}</p>
                </div>
              </div>

              {/* Description */}
              <div className="px-8 py-6 bg-accent/20">
                <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}