"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); 
  const [isProductsOpen, setIsProductsOpen] = useState(false); 

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border/50 bg-black/60 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:items-center relative">

        {/* Top Right Help Text */}
        <div className="absolute top-1 md:top-2 right-6 z-50">
          <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground">
            Need help? <a href="tel:7148543451" className="text-primary hover:underline ml-0.5">(714) 854-3451</a>
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-50"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Desktop CTA Button */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <Button asChild className="shadow-lg shadow-primary/20 rounded-xl font-bold bg-primary text-primary-foreground hover:brightness-110">
            <Link href="/contact">How to be an agent</Link>
          </Button>
        </div>

        {/* Centered Logo */}
        <Link
          href="/"
          className="flex justify-center items-center hover:opacity-80 transition-opacity mb-0 md:mb-4"
        >
          <Image
            src="/images/ufgroup-logo.png"
            alt="Upgrade Financial Group"
            width={500}
            height={120}
            className="object-contain h-12 md:h-16 lg:h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">

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
                <Link href="/services#credit" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Credit Repair</Link>
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
                <Link href="/ful" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Fixed Universal Life</Link>
                <Link href="/whole" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Whole Life</Link>
                <Link href="/products#term" className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors">Term Life</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Be Part of the Team
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors italic">
            and more
          </Link>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
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
                <Link href="/services#retirement" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Retirement Plans</Link>
                <Link href="/services#tax-free" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Tax-Free Retirement</Link>
                <Link href="/services#wealth" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Wealth Management</Link>
                <Link href="/services#legacy" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Legacy Creation</Link>
                <Link href="/services#college" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">College Funding</Link>
                <Link href="/services#child" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Child Protection</Link>
                <Link href="/services#estate" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Estate Planning</Link>
                <Link href="/services#credit" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Credit Repair</Link>
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
                <Link href="/iul" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Indexed Universal Life</Link>
                <Link href="/ful" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Fixed Universal Life</Link>
                <Link href="/whole-life" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Whole Life</Link>
                <Link href="/term-life" onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">Term Life</Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            Be Part of the Team
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors italic">
            and more
          </Link>

          <Button asChild className="w-[80%] max-w-sm mt-4 shadow-lg shadow-primary/20 rounded-xl font-bold bg-primary text-primary-foreground py-6 text-lg">
            <Link href="/contact" onClick={() => setIsOpen(false)}>How to be an agent</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}