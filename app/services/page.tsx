import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/service/ServiceHero";
import { LivingBenefits } from "@/components/service/LivingBenefits";
import { ProductsOffered } from "@/components/service/ProductsOffered";
import { WhoItsFor } from "@/components/service/WhoItsFor"; 
import { HowWeWork } from "@/components/service/HowWeWork";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-10 pointer-events-none" />

      <Navbar />

      <main className="flex-grow w-full relative z-10 pt-20 md:pt-32">
        <ServiceHero />
        <ProductsOffered />
        <LivingBenefits />
        
        <WhoItsFor />
        <HowWeWork />

      </main>
    </div>
  );
}