import { BookOpen, MessageSquareHeart, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: MessageSquareHeart,
      title: "We Listen First",
      description: "Your goals drive every recommendation we make. It's a client-first approach, not a sales quota.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      icon: ShieldCheck,
      title: "No Hidden Agendas",
      description: "We work for you. We partner with A-rated, trusted carriers like National Life Group to find the perfect fit.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      icon: BookOpen,
      title: "Education Over Sales",
      description: "We make sure you understand exactly what you're getting, every option available, and why it matters before you decide.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      icon: Users,
      title: "Long-Term Relationships",
      description: "We're not a one-time meeting. We grow with your family, adapting your plans as your life evolves.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
  ];

  return (
    <section className="bg-white border-t border-slate-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase border border-slate-200">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Why Families Choose<br className="hidden md:block" /> Upgrade Financial Group
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.bg} border ${value.border} rounded-3xl p-8 flex gap-5 hover:shadow-sm transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white border ${value.border} flex items-center justify-center shrink-0 shadow-sm mt-0.5`}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}