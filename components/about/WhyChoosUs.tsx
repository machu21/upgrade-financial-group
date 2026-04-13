import { BookOpen, MessageSquareHeart, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: MessageSquareHeart,
      title: "We Listen First",
      description: "Your goals drive every recommendation we make. It's a client-first approach, not a sales quota.",
    },
    {
      icon: ShieldCheck,
      title: "No Hidden Agendas",
      description: "We work for you. We partner with A-rated, trusted carriers like National Life Group to find the perfect fit.",
    },
    {
      icon: BookOpen,
      title: "Education Over Sales",
      description: "We make sure you understand exactly what you're getting, every option available, and why it matters before you decide.",
    },
    {
      icon: Users,
      title: "Long-Term Relationships",
      description: "We're not a one-time meeting. We grow with your family, adapting your plans as your life evolves.",
    },
  ];

  return (
    <section className="py-24 bg-accent/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-16">
          Why Families Choose Upgrade Financial Group
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}