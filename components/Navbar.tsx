"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // <-- Added icons for the mobile menu

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border/50 bg-black/60 backdrop-blur-md">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:items-center relative">

        {/* Mobile Menu Toggle Button (Only visible on small screens) */}
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
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Partner With Us
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors italic">
            and more
          </Link>
        </div>

      </div>

      {/* Mobile Menu Dropdown (Slides down when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl absolute w-full left-0 flex flex-col items-center py-6 gap-6 shadow-2xl animate-in slide-in-from-top-2">
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/partners" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
            Partner With Us
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