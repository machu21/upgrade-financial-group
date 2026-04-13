import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  HeartPulse, 
  MapPin, 
  UserCheck, 
  Star 
} from "lucide-react";
import Link from "next/link"; // <-- Added this import!

export function Hero() {
  return (
    <div className="space-y-20">
      {/* Top Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <p className="inline-block text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            Comprehensive Wealth & Health Protection
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Smart Protection and <span className="text-primary">Investment Solutions</span> for Life Today and Tomorrow
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Protect your family, your income, your investments, and your future, without waiting until it’s too late. Our partners provide access to living benefits when you need them most, including coverage for critical illness, chronic illness, critical injury, and Alzheimer’s.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Changed from <button> to <Link> to route to the Contact page */}
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center gap-2 text-lg px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Get a Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {/* Changed from <button> to <Link> to route to the Services page */}
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2 text-lg px-8 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-accent transition-all"
            >
              Learn How We Help
            </Link>
          </div>
        </div>

        {/* Abstract Conceptual Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full aspect-square max-w-[420px] border-[3px] border-border rounded-3xl p-6 bg-accent/20 shadow-inner flex flex-col justify-between overflow-hidden relative backdrop-blur-sm">
            
            {/* Top Card - Living Benefits */}
            <div className="p-4 border border-primary/20 rounded-xl bg-background/90 backdrop-blur-md relative z-10 shadow-xl w-[85%]">
              <HeartPulse className="h-8 w-8 text-primary mb-3"/>
              <p className="text-xl font-bold tracking-tight text-foreground">Living Benefits</p>
              <p className="text-sm text-muted-foreground mt-1">Access funds when you need them most</p>
            </div>
            
            {/* Center Sphere Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-15 shadow-2xl" />
            
            {/* Bottom Card - Wealth */}
            <div className="p-4 border border-border rounded-xl bg-background/90 backdrop-blur-md self-end relative z-10 shadow-xl w-[85%]">
              <TrendingUp className="h-8 w-8 text-emerald-500 mb-3"/>
              <p className="text-xl font-bold tracking-tight text-foreground">Secure Growth</p>
              <p className="text-sm text-muted-foreground mt-1">Protecting your future investments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar Section */}
      <div className="pt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-accent text-primary group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-tight">Licensed & Trusted<br/><span className="text-muted-foreground font-normal">Advisors</span></p>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-accent text-primary group-hover:scale-110 transition-transform">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-tight">Serving Families<br/><span className="text-muted-foreground font-normal">Across California, USA</span></p>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-accent text-primary group-hover:scale-110 transition-transform">
              <UserCheck className="h-6 w-6" />
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-tight">Personalized Plans<br/><span className="text-muted-foreground font-normal">No Cookie-Cutter Advice</span></p>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-accent text-primary group-hover:scale-110 transition-transform">
              <Star className="h-6 w-6" />
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-tight">5-Star Client<br/><span className="text-muted-foreground font-normal">Experience</span></p>
          </div>

        </div>
      </div>
    </div>
  );
}