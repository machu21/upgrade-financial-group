"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-background pt-20 pb-8 border-t border-border/40 overflow-hidden">

      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid Section (Now exactly 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/images/main-logo.png"
                alt="Upgrade Financial Group"
                width={300}
                height={80}
                className="object-contain h-14 md:h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground/80 leading-relaxed pr-4">
              Smart protection and investment solutions. We specialize in living benefits life insurance, ensuring your family is protected for life today and tomorrow.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 lg:pl-12">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Services
              </Link>
              </li>
              <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              </li>
              <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Free Consultation
              </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:7148543451" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">(714) 854-3451</span>
                </a>
              </li>
              <li>
                <a href="mailto:founder@upgradefinancialgroup.com" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="break-all group-hover:translate-x-1 transition-transform duration-300">founder@upgrade<br />financialgroup.com</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Serving Families <br />Across USA
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom Section: Privacy Policy & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-medium text-muted-foreground/60 shrink-0">
            © {new Date().getFullYear()} Upgrade Financial Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}