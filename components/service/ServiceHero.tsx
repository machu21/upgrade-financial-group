import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceHero() {
  return (
    <section className="max-w-4xl mx-auto px-6 text-center space-y-8 mb-24">
      <p className="inline-block text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
        Our Services
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
        Life Insurance With <br/>
        <span className="text-primary">Living Benefits.</span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
        Traditional life insurance protects your family after you're gone. But what about protecting you while you're still here?
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        At Upgrade Financial Services, we specialize in life insurance policies with living benefits—giving you access to your death benefit if you're diagnosed with a qualifying illness. <strong className="text-foreground">No need to die to use your policy.</strong>
      </p>
      <div className="pt-6">
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-xl shadow-primary/20">
          Get a Free Consultation
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}