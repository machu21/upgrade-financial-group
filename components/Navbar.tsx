import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      {/* Changed py-3 to py-2 to reduce vertical padding */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/images/ufgroup-logo.png"
            alt="Upgrade Financial Group"
            width={400} // Bumped up for crisp retina display
            height={80}
            className="object-contain h-12 w-auto" // Keeps the navbar slim, but lets the logo breathe
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Our Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>

          <div className="flex items-center ml-2">
            {/* Added a slightly smaller padding to the button to match the thinner nav */}
            <Button asChild className="shadow-lg shadow-primary/20 rounded-xl font-bold bg-primary text-primary-foreground hover:brightness-110">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>

      </div>
    </nav>
  );
}