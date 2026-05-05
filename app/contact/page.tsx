"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request/API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-48 pb-24 relative overflow-hidden bg-animated-gradient">
      
      <style>{`
        @keyframes animatedGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-animated-gradient {
          background-size: 200% 200%;
          background-image: linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--primary) / 0.05) 50%, hsl(var(--background)) 100%);
          animation: animatedGradient 15s ease infinite;
        }
      `}</style>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Schedule Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Take the first step toward securing your family's future. Send us a message below to discuss your specific needs and learn how living benefits can protect you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-accent/10 border border-border p-8 rounded-3xl space-y-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                Direct Contact Info
              </h3>
              
              <ul className="space-y-6">
                <li>
                  <a href="tel:7148543451" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Call or Text Us</p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">(714) 854-3451</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="mailto:info@upgradefinancialgroup.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email Us</p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">info@upgradefinancialgroup.com</p>
                    </div>
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="text-lg font-bold text-foreground">Serving Families Across<br/>USA</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust Indicator Card */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">No Pressure. Just Answers.</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our consultations are 100% free and completely educational. We are here to help you understand your options, not to push a sale.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 h-full w-full">
            {/* CHANGED: bg-white instead of bg-background, added slate borders for crispness */}
            <div className="w-full h-auto min-h-[600px] bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden relative group flex flex-col">
              
              {/* Subtle top loading bar effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 flex flex-col flex-grow animate-in fade-in duration-500">
                  {/* CHANGED: Forced text to slate-900 so it's always dark on the white background */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Send us a message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        // CHANGED: Inputs are now slate-50 with slate-200 borders
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2 mb-8 flex-grow">
                    <label className="text-sm font-medium text-slate-700">How can we help?</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a bit about your situation and what you're looking to protect..."
                      className="w-full h-full min-h-[150px] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Request <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* SUCCESS STATE */
                <div className="p-8 md:p-12 flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-500 my-auto">
                  <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out. An advisor will review your information and contact you shortly to schedule your consultation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}