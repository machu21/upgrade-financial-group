import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-accent/5 pt-20 pb-10 border-t border-border mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image 
                src="/images/ufgroup-logo.png" 
                alt="Upgrade Financial Group" 
                width={300} // Bumped up base width
                height={80} // Bumped up base height
                // Changed from h-10 to h-16 (mobile) and h-20 (desktop) to make it much larger
                className="object-contain h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart protection and investment solutions. We specialize in living benefits life insurance, ensuring your family is protected for life today and tomorrow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground tracking-tight">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Free Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-lg font-bold text-foreground tracking-tight">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:7148543451" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  (714) 854-3451
                </a>
              </li>
              <li>
                <a href="mailto:founder@upgradefinancialgroup.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  founder@upgradefinancialgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-2 rounded-lg bg-background border border-border">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Serving Families Across California, USA
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section: Privacy Policy & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground shrink-0">
            © {new Date().getFullYear()} Upgrade Financial Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {/* Added Terms of Service just in case you need it later. You can delete this Link if you don't! */}
            <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}