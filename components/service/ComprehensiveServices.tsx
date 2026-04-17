import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "retirement",
    title: "Retirement Plans",
    description: "Strategic planning to ensure a comfortable and financially secure retirement.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&q=80",
  },
  {
    id: "tax-free",
    title: "Tax-Free Retirement",
    description: "Strategies designed to minimize tax liabilities and maximize your usable income.",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1000&q=80",
  },
  {
    id: "wealth",
    title: "Wealth Management",
    description: "Comprehensive oversight and active growth strategies for your financial assets.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=80",
  },
  {
    id: "legacy",
    title: "Legacy Creation",
    description: "Structuring your wealth to leave a lasting, generational impact on your family.",
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=1000&q=80",
  },
  {
    id: "college",
    title: "College Funding",
    description: "Smart savings strategies to comfortably cover future higher education expenses.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=80",
  },
  {
    id: "child",
    title: "Child Protection",
    description: "Securing your children's future with dedicated, lifelong financial protection.",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1000&q=80",
  },
  {
    id: "estate",
    title: "Estate Planning",
    description: "Organizing your assets for a seamless and protected transfer to your beneficiaries.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80",
  },
  {
    id: "credit",
    title: "Credit Repair",
    description: "Actionable steps to restore your credit score and improve your financial standing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80",
  },
];

export function ComprehensiveServices() {
  return (
    <section className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Planning for the Future</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond life insurance, we provide full-spectrum financial planning to protect your assets, grow your wealth, and secure your family's legacy.
          </p>
        </div>

        {/* 2-Column Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              id={service.id} 
              className="group relative h-[400px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-black"
            >
              
              {/* Edge-to-Edge Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Heavy Dark Gradient Overlay for perfect text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

              {/* Card Content - Anchored to the bottom */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-6 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Subtle Interactive Link */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link w-fit"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}