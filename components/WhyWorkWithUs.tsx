import { Award, BookOpen, HeartHandshake, Users } from "lucide-react";

export function WhyWorkWithUs() {
  const reasons = [
    {
      icon: HeartHandshake,
      title: "Personal Experience",
      description: "I've been on the receiving end of living benefits; I understand exactly what's at stake.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      stat: "Lived It", statLabel: "Not Just Studied It",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Your needs and your family's security always come first, not a sales quota.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      stat: "100%", statLabel: "Client Focused",
    },
    {
      icon: Award,
      title: "Trusted Carriers",
      description: "We work exclusively with A-rated carriers like National Life Group, Nationwide, and Mutual of Omaha.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      stat: "A-Rated", statLabel: "Carriers Only",
    },
    {
      icon: BookOpen,
      title: "Education Focused",
      description: "We'll make sure you understand exactly what you're getting and why it matters before any decisions.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      stat: "No", statLabel: "Pressure Sales",
    },
  ];

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase border border-slate-200">
            Why Work With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Built on Trust,<br className="hidden md:block" /> Transparency & Experience
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We believe in building lifelong partnerships — not one-time transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className={`${reason.bg} border-b ${reason.border} px-8 py-6 flex items-center justify-between`}>
                {/* Icon + title row */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-white border ${reason.border} flex items-center justify-center shadow-sm`}>
                    <reason.icon className={`w-6 h-6 ${reason.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{reason.title}</h3>
                </div>
                {/* Stat pill */}
                <div className="text-right shrink-0 ml-4">
                  <p className={`text-lg font-extrabold ${reason.color} leading-none`}>{reason.stat}</p>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{reason.statLabel}</p>
                </div>
              </div>

              {/* Description */}
              <div className="px-8 py-6">
                <p className="text-slate-500 leading-relaxed text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}