import { ArrowRight, HeartPulse, Landmark, LineChart } from "lucide-react";
import Link from "next/link";

export function AboutServices() {
  const services = [
    {
      icon: HeartPulse,
      title: "Living Benefits",
      description: "Access your life insurance benefits while you're alive — for serious illness, injury, or critical conditions. Protection that works when you need it most.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    },
    {
      icon: LineChart,
      title: "Financial Planning",
      description: "We'll map out a clear, step-by-step plan to help you reach your short and long-term goals with absolute confidence.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    },
    {
      icon: Landmark,
      title: "Wealth Management",
      description: "Grow and preserve your assets with smart, personalized strategies built around your unique lifestyle and future.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=800&q=80",
    },
  ];

  return (
    <section className="bg-white border-t border-slate-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-3">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase border border-slate-200">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Financially Thrive
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Comprehensive strategies designed to protect your present and secure your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                {/* Icon badge floating over image */}
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-2xl ${service.bg} border ${service.border} flex items-center justify-center shadow-sm`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed flex-grow mb-6 text-sm">{service.description}</p>
                <Link
                  href="/services"
                  className={`inline-flex items-center text-sm font-bold ${service.color} hover:opacity-70 transition-opacity mt-auto`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}