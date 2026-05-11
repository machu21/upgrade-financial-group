"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NEW: Listener for the modal custom event
  useEffect(() => {
    const handleToggle = (e: any) => setNavVisible(e.detail);
    window.addEventListener("toggle-navbar", handleToggle);
    return () => window.removeEventListener("toggle-navbar", handleToggle);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-40 border-b transition-all duration-500 ease-in-out ${navVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${scrolled ? "border-border/50 bg-black/80 backdrop-blur-md" : "border-transparent bg-transparent backdrop-blur-none"}`}>

      <div className="max-w-full mx-auto px-6 py-4 flex flex-col md:items-center relative">

        {/* Top Right Help Text */}
        <div className="absolute top-1 md:top-2 right-6 z-50">
          <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground">
            {"Need help? "}
            <a href="tel:7148543451" className="text-primary hover:underline ml-0.5">
              {"(714) 854-3451"}
            </a>
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-50"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Desktop CTA Button */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <Button asChild className="shadow-lg shadow-primary/20 rounded-xl font-bold bg-primary text-primary-foreground hover:brightness-110">
            <Link href="/contact">Join Us</Link>
          </Button>
        </div>

        {/* Centered Logo */}
        <Link
          href="/"
          className="flex justify-center items-center hover:opacity-80 transition-opacity mb-0 md:mb-4"
        >
          <Image
            src="/images/main-logo.png"
            alt="Upgrade Financial Group"
            width={500}
            height={120}
            className="object-contain h-12 md:h-16 lg:h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>

          {/* DESKTOP DROPDOWN: Our Services */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors"
            >
              Our Services
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Services Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 w-64 flex flex-col">
                <Link href="/services#retirement" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Retirement Plans</Link>
                <Link href="/services#tax-free" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Tax-Free Retirement</Link>
                <Link href="/services#wealth" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Wealth Management</Link>
                <Link href="/services#legacy" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Legacy Creation</Link>
                <Link href="/services#college" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">College Funding</Link>
                <Link href="/services#child" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Child Protection</Link>
                <Link href="/services#estate" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Estate Planning</Link>
              </div>
            </div>
          </div>

          {/* DESKTOP DROPDOWN: Our Products */}
          <div className="relative group py-2">
            <Link
              href=""
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors"
            >
              Our Products
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Products Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 w-64 flex flex-col">
                <Link href="/iul" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Indexed Universal Life</Link>
                <Link href="/whole-life" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Whole Life</Link>
                <Link href="/credit-repair" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Credit Repair</Link>
                <Link href="/term-life" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Term Life</Link>
                <Link href="/term-life-with-living-benefits" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Term Life With Living Benefits</Link>
                <Link href="/final-expense" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Final Expense</Link>
                <Link href="/investments" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Investments</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Be Part of the Team
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors italic">
            and more
          </Link>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl absolute w-full left-0 flex flex-col items-center py-6 gap-6 shadow-2xl animate-in slide-in-from-top-2 h-screen overflow-y-auto pb-32">

          {/* MOBILE DROPDOWN: Our Services */}
          <div className="w-full flex flex-col items-center px-6">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Our Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-primary" : ""}`} />
            </button>

            {/* Mobile Expandable Panel (Services) */}
            {isServicesOpen && (
              <div className="flex flex-col items-center gap-4 mt-4 bg-white/5 w-full py-4 rounded-2xl animate-in fade-in slide-in-from-top-2">
                <Link href="/services#retirement" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Retirement Plans</Link>
                <Link href="/services#tax-free" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Tax-Free Retirement</Link>
                <Link href="/services#wealth" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Wealth Management</Link>
                <Link href="/services#legacy" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Legacy Creation</Link>
                <Link href="/services#college" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">College Funding</Link>
                <Link href="/services#child" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Child Protection</Link>
                <Link href="/services#estate" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Estate Planning</Link>
              </div>
            )}
          </div>

          {/* MOBILE DROPDOWN: Our Products */}
          <div className="w-full flex flex-col items-center px-6">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Our Products
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isProductsOpen ? "rotate-180 text-primary" : ""}`} />
            </button>

            {/* Mobile Expandable Panel (Products) */}
            {isProductsOpen && (
              <div className="flex flex-col items-center gap-4 mt-4 bg-white/5 w-full py-4 rounded-2xl animate-in fade-in slide-in-from-top-2">
                <Link href="/iul" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Indexed Universal Life</Link>
                <Link href="/whole-life" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Whole Life</Link>
                <Link href="/term-life" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Term Life</Link>
                <Link href="/term-life-with-living-benefits" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Term Life With Living Benefits</Link>
                <Link href="/final-expense" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Final Expense</Link>
                <Link href="/investments" onClick={() => setMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-primary">Investments</Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            Be Part of the Team
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors italic">
            and more
          </Link>

          <Button asChild className="w-[80%] max-w-sm mt-4 shadow-lg shadow-primary/20 rounded-xl font-bold bg-primary text-primary-foreground py-6 text-lg">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>How to be an agent</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}