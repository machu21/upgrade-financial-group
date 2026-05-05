"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
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
      "TAX-FREE WEALTH TRANSFER TO BENEFICIARIES — Life insurance death benefits are generally received income tax-free by your named beneficiaries — bypassing probate entirely. Your loved ones receive their inheritance quickly and in full, without waiting months for court proceedings or losing a portion to unnecessary taxation.",
      "PROBATE AVOIDANCE — Assets that go through probate can be tied up in court for months or even years, draining your estate through legal fees and delays. A life insurance-based estate plan transfers assets directly to beneficiaries outside of probate — giving your family immediate access when they need it most.",
      "ESTATE LIQUIDITY — Many estates — especially those that include a home, business, or investment property — lack the liquid cash needed to cover estate taxes and settlement costs. A life insurance policy provides an immediate cash infusion so your heirs don't have to sell valuable assets at a loss just to settle the estate.",
      "LIVING BENEFITS — Our policies with Living Benefits allow you to access a portion of your benefit if diagnosed with a qualifying critical, chronic, or terminal illness — covering care costs without depleting savings or liquidating assets, preserving more of your estate for the people you love.",
      "EQUALIZING INHERITANCE AMONG HEIRS — When an estate includes illiquid assets like a business or property that one heir will inherit, life insurance can be used to provide an equivalent financial benefit to other heirs — eliminating conflict, ensuring fairness, and keeping family relationships intact.",
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
      "Your credit score affects everything — your ability to buy a home, qualify for better rates, and secure your financial future. At Upgrade Financial Group, we connect you with trusted credit restoration specialists who take a hands-on approach to cleaning up your credit and rebuilding your financial standing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80",
    details: [
      "CREDIT ANALYSIS & DISPUTE SERVICES — Our partners conduct a thorough review of your credit reports across all three major bureaus. Inaccurate, outdated, or unverifiable negative items are identified and formally disputed on your behalf — a process that can lead to significant score improvements over time.",
      "PERSONALIZED RESTORATION PLAN — No two credit situations are the same. You'll receive a customized action plan based on your specific credit profile — including guidance on paying down balances, managing credit utilization, and establishing positive credit history that lenders actually want to see.",
      "ONGOING MONITORING & SUPPORT — Credit repair isn't a one-time event. Our partners provide continuous monitoring and dedicated support so you always know where your score stands, what's changing, and what steps to take next to keep building momentum.",
      "BETTER CREDIT = BETTER FINANCIAL OPTIONS — Improving your credit score directly impacts the rates you qualify for on mortgages, auto loans, and even life insurance premiums. Clients who work on their credit alongside their financial plan consistently access better products and save significantly more over time.",
      "A TRUSTED REFERRAL — NOT A SIDE SERVICE — Upgrade Financial Group partners with vetted credit restoration professionals to make sure our clients have access to every tool they need for total financial wellness. From protection and wealth building to credit health — we're committed to your complete financial picture.",
    ],
  },
];

export function ComprehensiveServices() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.querySelector("[data-card]");
    if (!card) return;

    const gap = 24; // Tailwind gap-6 is 24px
    const scrollAmount = (card as HTMLElement).offsetWidth + gap;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

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
    <section className="py-24 bg-accent/5 relative w-full overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Planning for the Future</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond life insurance, we provide full-spectrum financial planning to protect your assets, grow your wealth, and secure your family's legacy.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full group">
        {/* Floating Desktop Controls */}
        <div className="hidden md:flex absolute inset-y-0 left-4 lg:left-8 z-30 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); scroll("left"); }}
            className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground shadow-xl hover:scale-105 pointer-events-auto"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        </div>

        <div className="hidden md:flex absolute inset-y-0 right-4 lg:right-8 z-30 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); scroll("right"); }}
            className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground shadow-xl hover:scale-105 pointer-events-auto"
            aria-label="Next service"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Scroll Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-[5vw] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              data-card
              className="group shrink-0 snap-center w-[90vw] md:w-[600px] lg:w-[800px] flex flex-col bg-background rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Top: Image */}
              <div className="relative h-72 md:h-[400px] overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom: Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-3 mb-6">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
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

              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Service Details</p>
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
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-600 leading-relaxed font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-4">
                  Not sure which plan is right for you? Our licensed agents will walk you through your options at no cost — no pressure, no obligation.
                </p>
                <Link
                  href={CONSULTATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-base px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all shadow-lg"
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