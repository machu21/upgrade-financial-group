import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 relative z-10 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="p-10 md:p-16 rounded-3xl bg-accent/20 border border-primary/20 relative overflow-hidden text-center shadow-2xl">
          {/* Background Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Ready to Upgrade Your Protection?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Don't wait until it's too late. Get life insurance that works for you—while you're still here to use it.
            </p>
            
            <div className="pt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                Get Your Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}