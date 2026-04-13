import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-10 pointer-events-none" />

      <Navbar />

      <main className="flex-grow w-full relative z-10 pt-24 md:pt-32">
        
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-12">
          <p className="inline-block text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            Let's Talk
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Schedule Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Choose a time below that works best for you. We'll discuss your specific needs, financial goals, and how living benefits can protect your family.
          </p>
        </section>

        {/* Calendly Embed Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-accent/5 border border-border rounded-3xl shadow-2xl p-2 md:p-6 h-[750px] relative overflow-hidden backdrop-blur-sm">
            {/* The iframe directly embeds your specific calendar */}
            <iframe
              src="https://calendly.com/matthew-patacsil021"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-2xl bg-white" // We force bg-white here because Calendly's default UI needs a light background to be readable
              title="Schedule a Consultation with Upgrade Financial"
            ></iframe>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}