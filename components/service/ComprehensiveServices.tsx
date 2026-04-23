"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const CONSULTATION_LINK = "https://docs.google.com/forms/u/0/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/viewform?edit_requested=true";

const services = [
  {
    id: "retirement",
    title: "Retirement Plans",
    description:
      "Your retirement deserves more than a savings account. We help individuals and families build a financially secure future through tax-advantaged strategies, guaranteed income options, and protection that lasts a lifetime.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&q=80",
    details: [
      "FIXED INDEXED ANNUITIES (FIA) — Grow your savings with zero market risk. Earn interest linked to market performance while your principal stays fully protected. FIAs offer guaranteed retirement income you can't outlive — no matter what the market does.",
      "INDEXED UNIVERSAL LIFE (IUL) — Build a tax-free income stream for retirement. Our IUL policies include Living Benefits that let your money grow tax-deferred with the ability to take tax-free withdrawals in retirement. Coverage that protects your family today and funds your future tomorrow.",
      "TERM LIFE WITH LIVING BENEFITS — Affordable protection with benefits you can use while you're alive. Our term policies include living benefits that pay out if you're diagnosed with a critical, chronic, or terminal illness — giving you access to your benefit when you need it most.",
      "SIMPLIFIED ISSUE COVERAGE — Get covered quickly with no medical exam required. Qualifying individuals may be eligible for life insurance coverage without a medical exam — a fast, straightforward option to make sure your retirement plan is backed by solid protection from day one.",
    ],
  },
  {
    id: "tax-free",
    title: "Tax-Free Retirement",
    description:
      "What you keep matters just as much as what you earn. At Upgrade Financial Group, we help you build a retirement strategy designed to minimize your tax burden — so more of your money stays where it belongs: with you and your family.",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1000&q=80",
    details: [
      "TAX-FREE INCOME WITH IUL — Grow your money tax-deferred. Access it tax-free. Indexed Universal Life insurance is one of the most powerful tax-advantaged tools available today. Your cash value grows linked to market performance with no direct market risk — and qualified withdrawals in retirement are completely tax-free.",
      "ZERO-LOSS GROWTH STRATEGY — Earn more in good years. Lose nothing in bad ones. Our fixed indexed annuity solutions use a floor-and-cap strategy — your account is credited with gains when markets rise, but protected from losses when they fall, all while accumulating on a tax-deferred basis.",
      "LIVING BENEFITS — USE YOUR MONEY NOW — Your benefit isn't just for when you're gone. Our policies with Living Benefits allow you to access a portion of your death benefit while still alive if you're diagnosed with a qualifying critical, chronic, or terminal illness.",
      "LEGACY PLANNING — PASS IT ON TAX-EFFICIENTLY — Life insurance death benefits are generally received income tax-free by your beneficiaries. Combined with the right retirement structure, this creates a powerful wealth transfer strategy ensuring your legacy isn't diminished by unnecessary taxes.",
    ],
  },
  {
    id: "wealth",
    title: "Wealth Management",
    description:
      "Building wealth isn't just about earning more — it's about protecting what you have, growing it strategically, and making sure it works for you at every stage of life. We take a comprehensive approach so nothing gets left to chance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=80",
    details: [
      "ASSET PROTECTION — Keep what you've worked hard to build. We structure your financial plan using principal-protected products so your assets are shielded from loss — giving you a stable foundation no matter what economic conditions arise.",
      "INDEXED GROWTH STRATEGIES — Participate in market gains without the downside. We leverage indexed financial products that credit interest based on market index performance while protecting your principal from negative returns.",
      "TAX-ADVANTAGED ACCUMULATION — Grow your wealth and keep more of it. Our strategies use tax-deferred and tax-free vehicles to maximize how much of your growth you actually get to keep — putting compounding interest fully on your side.",
      "GUARANTEED LIFETIME INCOME — A paycheck for life, even when you stop working. We build income strategies that guarantee a consistent monthly benefit for as long as you live — no market dependency, no running out of money.",
      "LEGACY & WEALTH TRANSFER — Life insurance death benefits pass to your beneficiaries income tax-free, allowing you to leave a meaningful financial legacy without the erosion that comes from probate or unnecessary taxation.",
    ],
  },
  {
    id: "legacy",
    title: "Legacy Creation",
    description:
      "True wealth isn't just about what you accumulate — it's about what you leave behind. We help families structure their finances so their hard work creates a lasting impact that extends far beyond their own lifetime.",
    image: "https://static.vecteezy.com/system/resources/previews/033/397/887/non_2x/a-stack-of-rocks-on-the-beach-at-sunset-ai-generated-free-photo.jpg",
    details: [
      "TAX-FREE WEALTH TRANSFER — Life insurance death benefits are generally received income tax-free by your beneficiaries, making it one of the most efficient tools for transferring wealth to the next generation — ensuring your family receives the full value of what you've built.",
      "GENERATIONAL FINANCIAL PROTECTION — A properly structured life insurance policy creates a financial foundation your children and grandchildren can build on — from covering final expenses to funding education or a business.",
      "LIVING BENEFITS — PROTECTION NOW & LATER — Our policies with Living Benefits allow you to access a portion of your coverage if you're diagnosed with a critical, chronic, or terminal illness. Your legacy plan works for you while you're still here.",
      "CASH VALUE GROWTH FOR FUTURE GENERATIONS — Permanent life insurance policies accumulate cash value over time on a tax-deferred basis — an asset that can be borrowed against, used to supplement retirement income, or left intact to compound.",
      "FINAL EXPENSE & ESTATE PLANNING SUPPORT — End-of-life costs can put unexpected strain on grieving families. A dedicated coverage plan ensures those costs are covered immediately, so your loved ones can focus on healing rather than financial stress.",
    ],
  },
  {
    id: "college",
    title: "College Funding",
    description:
      "A college education is one of the biggest investments a family can make. We help parents and grandparents build smart, tax-advantaged strategies so higher education expenses never become a financial crisis.",
    image: "https://moderncampus.com/_resources/images/blog/students-looking-at-laptop.jpg",
    details: [
      "TAX-FREE SAVINGS THROUGH LIFE INSURANCE — Unlike 529 plans, a properly structured permanent life insurance policy lets your cash value grow tax-deferred and be accessed tax-free — without affecting your child's financial aid eligibility.",
      "PROTECTED GROWTH — NO MARKET RISK — Our indexed strategies credit growth linked to market performance while guaranteeing your principal is never at risk, so the funds you're counting on are always there.",
      "START EARLY, GROW MORE — Even modest monthly contributions started when a child is young can grow into a substantial college fund over 10 to 18 years. We help you map out exactly what it takes to hit your education savings goal on time.",
      "BUILT-IN FAMILY PROTECTION — If a parent passes away unexpectedly, the death benefit ensures the education fund is fully intact. Your child's future stays on track no matter what life brings.",
      "FLEXIBILITY — NOT LOCKED INTO ONE PURPOSE — The cash value in a life insurance policy can be used for any purpose — tuition, a business, a home, or retirement. You stay in control of your money at every stage of life.",
    ],
  },
  {
    id: "child",
    title: "Child Protection",
    description:
      "No parent wants to think about worst-case scenarios — but the greatest act of love is making sure your children are protected no matter what happens. We help families put lifelong financial protection in place, starting as early as possible.",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1000&q=80",
    details: [
      "LOCK IN COVERAGE WHILE THEY'RE YOUNG & HEALTHY — Insuring a child while they're young locks in the lowest possible premiums and guarantees their insurability for life — regardless of any health conditions that may develop as they grow.",
      "CASH VALUE THEY CAN USE AS ADULTS — Permanent life insurance policies for children accumulate cash value over time. By adulthood, that built-up value can fund college tuition, a first home, a business, or any major life milestone.",
      "PROTECTION FOR THE WHOLE FAMILY — Child life insurance provides a death benefit that helps grieving families cover immediate expenses — medical bills, funeral costs, and time away from work.",
      "LIVING BENEFITS FOR CHILDHOOD ILLNESS — Our policies include Living Benefits that allow access to a portion of the coverage if a child is diagnosed with a qualifying critical or chronic illness, ensuring families don't have to choose between care and financial stability.",
      "PARENT PROTECTION — THE FOUNDATION OF IT ALL — Making sure you have the right coverage in place means your family's income, home, and lifestyle are protected if something happens to you. A comprehensive family protection plan covers both parent and child.",
    ],
  },
  {
    id: "estate",
    title: "Estate Planning",
    description:
      "Organizing your assets for a seamless and protected transfer to your beneficiaries. We help ensure your wishes are honored and your loved ones are taken care of — without unnecessary legal complexity or tax burden.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80",
    details: [
      "Guidance on establishing Wills and Living Trusts to clearly define your wishes and protect your assets.",
      "Setting up Durable Powers of Attorney and Healthcare Directives so your decisions are honored if you're unable to make them yourself.",
      "Strategies to bypass lengthy and public probate courts, saving your family time, money, and stress.",
      "Beneficiary designation reviews and updates to ensure your accounts and policies align with your current wishes.",
    ],
  },
  {
    id: "credit",
    title: "Credit Repair",
    description:
      "Actionable steps to restore your credit score and improve your financial standing — because your credit affects every major financial decision you'll ever make.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80",
    details: [
      "Comprehensive credit report analysis across all three bureaus to identify every item impacting your score.",
      "Dispute resolution for inaccurate or unverified negative items — we help you challenge what shouldn't be there.",
      "Debt consolidation and payoff prioritization advice to accelerate your path to a healthier credit profile.",
      "Ongoing credit monitoring and score optimization strategies so you stay on track and never fall behind again.",
    ],
  },
];

export function ComprehensiveServices() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

// Prevent background scrolling and hide Navbar when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      // Broadcast signal to hide Navbar
      window.dispatchEvent(new CustomEvent("toggle-navbar", { detail: false }));
    } else {
      document.body.style.overflow = "unset";
      // Broadcast signal to show Navbar
      window.dispatchEvent(new CustomEvent("toggle-navbar", { detail: true }));
    }
    
    // Safety cleanup
    return () => {
      document.body.style.overflow = "unset";
      window.dispatchEvent(new CustomEvent("toggle-navbar", { detail: true }));
    };
  }, [selectedService]);

  return (
    <section className="py-24 bg-background relative">
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
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

              {/* Card Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-6 line-clamp-2">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link w-fit hover:brightness-110 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white rounded-[2rem] overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-slate-900 rounded-full backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto flex flex-col bg-white">

              <p className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-2">Service Details</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {selectedService.title}
              </h3>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mb-10 flex-grow">
                <h4 className="text-lg font-bold text-slate-900 mb-4">What this includes:</h4>
                <ul className="space-y-4">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">
                  Not sure which plan is right for you? Our licensed agents will walk you through your options at no cost — no pressure, no obligation.
                </p>
                <Link
                  href={CONSULTATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-base px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg"
                  onClick={() => setSelectedService(null)}
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}