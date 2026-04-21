import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyWorkWithUs } from "@/components/WhyWorkWithUs";
import { FounderStory } from "@/components/about/FounderStory";
import WhyChooseUs from "@/components/about/WhyChoosUs";
import { AboutServices } from "@/components/about/AboutServices";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-x-hidden">

      <Navbar />

      <main className="flex-grow w-full relative z-10">

        {/* ── HERO ── */}
        <section className="relative pt-36 md:pt-48 pb-24 px-6 text-center overflow-hidden bg-white">

          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
          </video>

          {/* White overlay to keep it subtle */}
          <div className="absolute inset-0 bg-white/80 pointer-events-none" />

          {/* Dot pattern on top */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e2e8f0_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
              About Upgrade Financial Services
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Life Insurance Should <br />
              <span className="text-primary">Serve the Living.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              At Upgrade Financial Services, we believe your life insurance should do more than pay out after you're gone. It should protect you now — when you're facing a health crisis, when the bills are piling up, when you need it most.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {[
                { val: "Living", label: "Benefits Focused" },
                { val: "A-Rated", label: "Carrier Partners" },
                { val: "10–88", label: "Ages Covered" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2">
                  <span className="text-sm font-extrabold text-slate-900">{s.val}</span>
                  <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION SPLIT CARD ── */}
        <section className="bg-slate-50 border-t border-slate-100 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
              {/* Image */}
              <div className="relative min-h-[320px]">
                <img
                  src="https://us.images.westend61.de/0002059029pw/cheerful-african-family-with-a-mother-and-father-holding-their-young-son-and-daughter-smiling-in-a-lush-park-everyone-is-looking-directly-at-the-camera-ADSF68301.jpg"
                  alt="Family protected"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
              </div>
              {/* Text */}
              <div className="p-10 md:p-14 flex flex-col justify-center space-y-5">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20 w-fit">
                  Our Mission
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  No family should have to choose between their health and their financial security.
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  That's why we specialize in living benefits life insurance — policies that give you access to funds if you're diagnosed with a critical, chronic, or terminal illness. No waiting. No leaving your family to figure it out later.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modular Components */}
        <AboutServices />
        <WhyChooseUs />
        <FounderStory />
        <WhyWorkWithUs />

        {/* ── FINAL CTA ── */}
        <section className="bg-slate-50 border-t border-slate-100 py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase border border-primary/20">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Talk.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Ready to upgrade your financial protection? We'd love to hear your story and help you find the right coverage for you and your family.
            </p>
            <div className="pt-2">
              <Link
                href="https://docs.google.com/forms/d/1FmI-dOFrM8LJMSAwMmo4bCN_C3LeVDEWqMhekmNIIbU/edit" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                Schedule Your Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}