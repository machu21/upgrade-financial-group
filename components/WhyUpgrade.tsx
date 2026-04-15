import { Baby, Briefcase, Calculator, Landmark, ShieldHalf, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyUpgrade() {
  const audiences = [
    {
      icon: Baby,
      title: "Families with young children",
      description: "Protect your income so your family stays secure if illness strikes.",
    },
    {
      icon: Calculator,
      title: "Middle-income earners",
      description: "You can't afford to miss paychecks; we make sure you don't have to.",
    },
    {
      icon: Briefcase,
      title: "Small business owners",
      description: "Keep your business running even when you can't.",
    },
    {
      icon: ShieldHalf,
      title: "Ages 30s–50s",
      description: "Your prime earning years deserve prime protection.",
    },
    {
      icon: Landmark,
      title: "Retirees",
      description: "Don't let medical costs drain your retirement savings.",
    },
    {
      icon: Star, // Swapped to Star for the "What sets us apart" theme
      title: "What Sets Us Apart",
      description: "We are the only company that can insure anyone from a 10-month-old baby to an 88-year-old senior.",
      isCta: true, // This flag tells the map function to style this card differently
      ctaText: "Start Today"
    },
  ];

  return (
    <section className="py-24 bg-accent/10 border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Why Upgrade / Founder Story Section */}
        <div className="max-w-4xl mx-auto mb-24 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center">
            Why Upgrade Financial Services?
          </h2>

          <div className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm relative overflow-hidden">
            {/* Subtle Gold Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 relative z-10">
              This isn't just business for us. <span className="text-primary">It's personal.</span>
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed relative z-10">
              <p>
                Founder Benjamin Michael Angeles III is a kidney transplant recipient who experienced the financial strain of a major health crisis firsthand. The living benefits provided by these companies didn't just help him survive his health crisis—they sustained him and his family when they needed it most.
              </p>

              <p className="font-medium text-foreground">
                Now he's on a mission to make sure no family has to choose between their health and their financial security.
              </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Join him in his crusade.
            </Link>
            </div>
          </div>
        </div>

        {/* Who We Help Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Who We Help</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored living benefit strategies designed for your specific stage of life and financial responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all shadow-sm group flex flex-col ${item.isCta
                    ? "bg-primary/5 border-2 border-primary/50 relative overflow-hidden hover:shadow-primary/10 hover:shadow-lg"
                    : "bg-background border border-border hover:border-primary/50"
                  }`}
              >
                {/* Add a subtle glow inside the CTA card */}
                {item.isCta && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                )}

                <item.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform relative z-10" />

                <h4 className={`text-xl font-bold mb-2 relative z-10 ${item.isCta ? 'text-primary' : 'text-foreground'}`}>
                  {item.title}
                </h4>

                {/* flex-grow ensures this paragraph takes up the middle space, pushing the button to the bottom */}
                <p className="text-muted-foreground flex-grow relative z-10">
                  {item.description}
                </p>

                {/* Conditionally render the CTA Button if the item has isCta set to true */}
                {item.isCta && (
                  <div className="mt-8 pt-6 border-t border-primary/20 relative z-10">
                    <Link
                      href="/contact"
                      className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:scale-[1.02] transition-transform active:scale-95"
                    >
                      {item.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}