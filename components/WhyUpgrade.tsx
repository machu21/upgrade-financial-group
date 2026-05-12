"use client";

import { useState } from "react";
import { Baby, Briefcase, Calculator, Landmark, ShieldHalf, Star, ArrowRight, CheckCircle2, User, Mail, MessageSquare, Send, X } from "lucide-react";
import Link from "next/link";

export function WhyUpgrade() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form payload ready for automation:", formData);
    setIsSubmitted(true);
  };

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
      title: "Small Business Owners",
      description: "As the driving force behind your business, your absence could put everything at risk. Ensure your operations, employees, and legacy are protected if the unexpected happens.",
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
      icon: Star,
      title: "What Sets Us Apart",
      description: "We are the only company that can insure anyone from a 10-day-old baby to an 88-year-old senior.",
      isCta: true,
      ctaText: "Start Today"
    },
  ];

  const fields = [
    { key: "name", label: "Full Name", placeholder: "e.g. Jane Smith", type: "text", icon: User, required: true },
    { key: "email", label: "Email Address", placeholder: "e.g. jane@email.com", type: "email", icon: Mail, required: true },
  ];

  return (
    <section className="py-24 bg-accent/10 border-y border-border relative z-10 overflow-hidden">
      {/* Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">

        {/* Why Upgrade / Founder Story Section */}
        <div className="max-w-4xl mx-auto mb-24 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center">
            Why Upgrade Financial Group?
          </h2>

          <div className="bg-background/60 p-8 md:p-12 rounded-3xl border border-border shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 relative z-10">
              This isn't just business for us. <span className="text-primary">It's personal.</span>
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed relative z-10">
              <p>
                Founder Benjamin is a kidney transplant recipient who experienced the financial strain of a major health crisis firsthand. During that time, he tapped into the business system — and the passive income he built helped him continue providing for his family while undergoing dialysis for over a year. The living benefits provided by these companies didn't just help him survive his health crisis, they sustained him and his family when they needed it most.
              </p>
              <p className="font-medium text-foreground">
                Now he's on a mission to make sure no family has to choose between their health and their financial security.
              </p>

              {/* Form Toggle */}
              <div className="pt-2">
                {showForm ? (
                  isSubmitted ? (
                    /* ── SUCCESS STATE ── */
                    <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground">You're in the crusade.</p>
                        <p className="text-muted-foreground mt-1">Thank you, {formData.name.split(" ")[0]}. We'll be in touch at {formData.email}.</p>
                      </div>
                    </div>
                  ) : (
                    /* ── FORM ── */
                    <div className="mt-6 rounded-2xl border border-border bg-background shadow-lg overflow-hidden">
                      {/* Form header */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-accent/20">
                        <div>
                          <p className="font-bold text-foreground text-sm">Join the Mission</p>
                          <p className="text-xs text-muted-foreground mt-0.5">We'll reach out within 24 hours.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Name & Email fields */}
                        {fields.map((field) => (
                          <div key={field.key} className="space-y-1.5">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                              <field.icon className="w-3 h-3" />
                              {field.label}
                            </label>
                            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 bg-accent/10 ${
                              focused === field.key
                                ? "border-primary/60 ring-2 ring-primary/15 bg-background"
                                : "border-border hover:border-primary/30"
                            }`}>
                              <input
                                type={field.type}
                                required={field.required}
                                placeholder={field.placeholder}
                                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
                                value={formData[field.key as keyof typeof formData]}
                                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                onFocus={() => setFocused(field.key)}
                                onBlur={() => setFocused(null)}
                              />
                            </div>
                          </div>
                        ))}

                        {/* Message field */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                            <MessageSquare className="w-3 h-3" />
                            Message <span className="normal-case font-normal text-muted-foreground/60">(optional)</span>
                          </label>
                          <div className={`px-4 py-3 rounded-xl border transition-all duration-200 bg-accent/10 ${
                            focused === "message"
                              ? "border-primary/60 ring-2 ring-primary/15 bg-background"
                              : "border-border hover:border-primary/30"
                          }`}>
                            <textarea
                              rows={3}
                              placeholder="Tell us a bit about your situation or what you're looking for..."
                              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none resize-none"
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              onFocus={() => setFocused("message")}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.email}
                          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md shadow-primary/20"
                        >
                          <Send className="w-4 h-4" />
                          Send Message
                        </button>

                        <p className="text-center text-xs text-muted-foreground/60">
                          No spam, ever. Your information is kept private.
                        </p>
                      </form>
                    </div>
                  )
                ) : (
                  <button
                    onClick={() => setShowForm(true)}
                    className="text-primary font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer text-lg"
                  >
                    Join him in his crusade.
                  </button>
                )}
              </div>
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
                {item.isCta && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                )}
                <item.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform relative z-10" />
                <h4 className={`text-xl font-bold mb-2 relative z-10 ${item.isCta ? 'text-primary' : 'text-foreground'}`}>
                  {item.title}
                </h4>
                <p className="text-muted-foreground flex-grow relative z-10">
                  {item.description}
                </p>
                {item.isCta && (
                  <div className="mt-8 pt-6 border-t border-primary/20 relative z-10">
                    <Link
                      href="/form"
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