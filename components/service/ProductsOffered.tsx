"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Unified Data: Combined Products and Services
const offerings = [
  // --- COVERAGE ---
  {
    category: "Coverage",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80",
    title: "Indexed Universal Life (IUL)",
    subtitle: "with Living Benefits",
    description: "Permanent coverage with cash value growth potential tied to market indexes—plus full living benefits access.",
  },
  {
    category: "Coverage",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&q=80",
    title: "Term Life",
    subtitle: "with Living Benefits Riders",
    description: "Affordable coverage for a set period with critical, chronic, and terminal illness riders included.",
  },
  {
    category: "Coverage",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80",
    title: "Whole Life",
    subtitle: "with Living Benefits",
    description: "Lifetime coverage with guaranteed cash value and living benefits built right in.",
  },
  // --- PLANNING & WEALTH ---
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
    title: "Retirement Plans",
    subtitle: "Secure Your Future",
    description: "Strategic planning to ensure a comfortable and financially secure retirement.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1600&q=80",
    title: "Tax-Free Retirement",
    subtitle: "Maximize Your Income",
    description: "Strategies designed to minimize tax liabilities and maximize your usable income.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
    title: "Wealth Management",
    subtitle: "Grow Your Assets",
    description: "Comprehensive oversight and active growth strategies for your financial assets.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=1600&q=80",
    title: "Legacy Creation",
    subtitle: "Generational Wealth",
    description: "Structuring your wealth to leave a lasting, generational impact on your family.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "College Funding",
    subtitle: "Education Without Debt",
    description: "Smart savings strategies to comfortably cover future higher education expenses.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1600&q=80",
    title: "Child Protection",
    subtitle: "Lifelong Security",
    description: "Securing your children's future with dedicated, lifelong financial protection.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
    title: "Estate Planning",
    subtitle: "Seamless Transfer",
    description: "Organizing your assets for a seamless and protected transfer to your beneficiaries.",
  },
  {
    category: "Wealth Planning",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
    title: "Credit Repair",
    subtitle: "Restore Your Standing",
    description: "Actionable steps to restore your credit score and improve your financial standing.",
  },
];

export function ProductsOffered() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const card = container.querySelector("div");

    if (!card) return;

    const gap = 24; // Tailwind gap-6 is 24px
    const scrollAmount = (card as HTMLElement).offsetWidth + gap;

    if (direction === "right") {
      // Check if we hit the end of the scroll container
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // Loop back to the very beginning
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      // Check if we are at the very beginning and clicked left
      if (container.scrollLeft <= 10) {
        // Jump to the end
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Auto-scroll Effect (Runs every 3 seconds)
  useEffect(() => {
    if (isPaused) return; // Don't scroll if the user is hovering

    const interval = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isPaused]);

  return (
    <section className="py-24 w-full overflow-hidden bg-background">

      {/* Global Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Complete Financial Solutions</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Our Offerings
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md">
          From living benefits life insurance to comprehensive wealth management, we protect you today and secure your tomorrow.
        </p>
      </div>

      {/* Massive Edge-to-Edge Carousel */}
      <div 
        className="relative w-full group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Floating Desktop Controls - FIXED PLACEMENT */}
        <div className="hidden md:flex absolute inset-y-0 left-4 lg:left-8 z-30 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll("left")}
            className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-all text-white shadow-xl hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        </div>

        <div className="hidden md:flex absolute inset-y-0 right-4 lg:right-8 z-30 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll("right")}
            className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-all text-white shadow-xl hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Scroll Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-[5vw] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          
          {offerings.map((item, i) => (

            /* The Massive Full-Bleed Card */
            <div
              key={i}
              className="relative shrink-0 snap-center w-[90vw] md:w-[75vw] lg:w-[65vw] h-[550px] md:h-[650px] lg:h-[750px] rounded-[2.5rem] overflow-hidden group/card border border-border/50 shadow-2xl bg-black"
            >

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-80 group-hover/card:scale-105 transition-all duration-1000 ease-out"
              />

              {/* Heavy Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

              {/* Text Content overlaying the image */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 lg:p-16">

                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-primary font-bold uppercase tracking-wider text-sm md:text-base mb-4 drop-shadow-md">
                  {item.subtitle}
                </p>

                <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}