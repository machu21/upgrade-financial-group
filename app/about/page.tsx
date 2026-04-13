import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyWorkWithUs } from "@/components/WhyWorkWithUs";
import { FounderStory } from "@/components/about/FounderStory";
import WhyChooseUs from "@/components/about/WhyChoosUs";
import { AboutServices } from "@/components/about/AboutServices";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-10 pointer-events-none" />

      <Navbar />

      <main className="flex-grow w-full relative z-10 pt-24 md:pt-32">
        
        {/* 1. Hero / Intro Section */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-8 mb-32">
          <p className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
            About Upgrade Financial Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Life Insurance Should <br/>
            <span className="text-primary">Serve the Living.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Upgrade Financial Services, we believe your life insurance should do more than pay out after you're gone. It should protect you now, when you're facing a health crisis, when the bills are piling up, when you need it most.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            That's why we specialize in living benefits life insurance—policies that give you access to funds if you're diagnosed with a critical, chronic, or terminal illness. No waiting. No leaving your family to figure it out later.
          </p>
        </section>

        {/* Modular Components */}
        <AboutServices />
        <WhyChooseUs />
        <FounderStory />
        <WhyWorkWithUs />

        {/* Final CTA */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Let's Talk.
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to upgrade your financial protection? We'd love to hear your story and help you find the right coverage for you and your family.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}