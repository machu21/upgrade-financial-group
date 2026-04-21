"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Lock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function Footer() {
  // Form State
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field State
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleNext = () => {
    if (address.trim()) setStep(2);
  };

  const handleSubmit = () => {
    if (contactInfo.trim()) {
      // Add your actual form submission logic here (e.g., API call)
      setIsSubmitted(true);
    }
  };

  return (
    <footer className="relative z-10 bg-background pt-20 pb-8 border-t border-border/40 overflow-hidden">

      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand */}
          <div className="space-y-6 lg:col-span-3">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/images/main-logo.png"
                alt="Upgrade Financial Group"
                width={300}
                height={80}
                className="object-contain h-14 md:h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground/80 leading-relaxed pr-4">
              Smart protection and investment solutions. We specialize in living benefits life insurance, ensuring your family is protected for life today and tomorrow.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 lg:col-span-2 lg:ml-8">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Our Services", "About Us", "Free Consultation"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 lg:col-span-3">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:7148543451" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">(714) 854-3451</span>
                </a>
              </li>
              <li>
                <a href="mailto:founder@upgradefinancialgroup.com" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="break-all group-hover:translate-x-1 transition-transform duration-300">founder@upgrade<br />financialgroup.com</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/30 border border-border/50 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Serving Families <br />Across USA
              </li>
            </ul>
          </div>
 

          {/* Column 4: Multi-Step Form 
          <div className="lg:col-span-4 h-full">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden h-full flex flex-col min-h-[340px]">

              Ambient glow
              <div className="absolute top-0 right-0 w-48 h-48 bg-stone-100 rounded-full blur-[60px] opacity-60 pointer-events-none -z-0" />

              <div className="relative z-10 flex-grow flex flex-col w-full h-full">

                Progress Pills
                {!isSubmitted && (
                  <div className="flex gap-1.5 mb-5">
                    <div className="h-1 flex-1 rounded-full bg-stone-800 transition-all duration-300" />
                    <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step === 2 ? "bg-stone-800" : "bg-stone-200"}`} />
                  </div>
                )}

                --- STEP 1: ADDRESS ---
                {!isSubmitted && step === 1 && (
                  <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-4 duration-500">
                    <h4 className="text-[17px] font-semibold text-stone-900 tracking-tight mb-1.5">
                      What is your primary residential address?
                    </h4>
                    <p className="text-sm text-stone-500 mb-5 leading-relaxed">
                      Confirm your  address to see if you qualify to skip the medical exam.
                    </p>

                    <div className="space-y-3 flex-grow">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest pl-0.5">
                          Street Address
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main St, City, State"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest pl-0.5">
                          Apt / Suite{" "}
                          <span className="text-stone-300 font-normal normal-case tracking-normal">— Optional</span>
                        </label>
                        <input
                          type="text"
                          value={apt}
                          onChange={(e) => setApt(e.target.value)}
                          placeholder="Apt #"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-5">
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                        <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>Secure &amp; encrypted</span>
                      </div>
                      <button
                        onClick={handleNext}
                        disabled={!address.trim()}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${address.trim()
                            ? "bg-stone-900 text-white hover:bg-black hover:-translate-y-px shadow-sm shadow-stone-300"
                            : "bg-stone-100 text-stone-400 cursor-not-allowed"
                          }`}
                      >
                        Next <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                --- STEP 2: CONTACT INFO ---
                {!isSubmitted && step === 2 && (
                  <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
                    <button
                      onClick={() => setStep(1)}
                      className="text-[11px] text-stone-400 hover:text-stone-700 flex items-center gap-1 mb-4 w-fit transition-colors"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    <h4 className="text-[17px] font-semibold text-stone-900 tracking-tight mb-1.5">
                      Where should we send your results?
                    </h4>
                    <p className="text-sm text-stone-500 mb-5 leading-relaxed">
                      Enter your phone or email so an advisor can securely deliver your eligibility status.
                    </p>

                    <div className="space-y-1.5 flex-grow">
                      <label className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest pl-0.5">
                        Email or Phone Number
                      </label>
                      <input
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="you@email.com or (555) 000-0000"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={!contactInfo.trim()}
                      className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 mt-auto ${contactInfo.trim()
                          ? "bg-stone-900 text-white hover:bg-black hover:-translate-y-px shadow-sm shadow-stone-300"
                          : "bg-stone-100 text-stone-400 cursor-not-allowed"
                        }`}
                    >
                      Submit Request <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                --- STEP 3: SUCCESS STATE ---
                {isSubmitted && (
                  <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-500 py-6">
                    <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-stone-900 tracking-tight mb-2">
                      Request Received!
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      An advisor will review your eligibility and contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom Section: Privacy Policy & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-medium text-muted-foreground/60 shrink-0">
            © {new Date().getFullYear()} Upgrade Financial Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}