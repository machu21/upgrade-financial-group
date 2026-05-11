"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  User,
  Phone,
  Star,
} from "lucide-react";

export default function CreditRepairQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fixedCredit: false,
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    gender: "",
    smoker: "",
    hasInsurance: "",
    consent: false,
  });

  const isStep1Valid = formData.fixedCredit === true;

  const isStep2Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.birthdate !== "" &&
    formData.gender !== "" &&
    formData.smoker !== "" &&
    formData.hasInsurance !== "" &&
    formData.consent === true;

  const totalSteps = 2;

  const getStepValid = (s: number) => {
    if (s === 1) return isStep1Valid;
    if (s === 2) return isStep2Valid;
    return false;
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-40 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm -z-10" />

      <div className="max-w-2xl w-full mx-auto px-6 relative z-10">
        {/* Header */}
        {!isSuccess && (
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Start Your{" "}
              <span className="text-primary">Credit Repair Journey</span>
            </h1>
            <p className="text-white/80 font-medium">
              Take the first step toward a healthier financial future.
            </p>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-black/40 overflow-hidden flex flex-col min-h-[520px]">
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-slate-100">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{
                width: isSuccess ? "100%" : `${(step / totalSteps) * 100}%`,
              }}
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col flex-grow relative">
            {!isSuccess ? (
              <>
                {/* ── STEP 1: Fix My Credit ── */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Credit Repair Program
                      </h2>
                    </div>

                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                      Our credit repair specialists work directly with bureaus and
                      creditors to dispute inaccurate, unverifiable, and
                      questionable items on your credit report — helping you build
                      the score you deserve.
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {[
                        {
                          icon: "📋",
                          title: "Full Credit Analysis",
                          desc: "We review all 3 bureaus and identify every disputable item.",
                        },
                        {
                          icon: "⚡",
                          title: "Fast Dispute Process",
                          desc: "We handle all letters, follow-ups, and escalations for you.",
                        },
                        {
                          icon: "📈",
                          title: "Score Monitoring",
                          desc: "Track your progress month-by-month with real-time updates.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl"
                        >
                          <span className="text-2xl shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA toggle */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          fixedCredit: !formData.fixedCredit,
                        })
                      }
                      className={`w-full p-6 rounded-2xl border-2 text-lg font-bold transition-all text-left flex items-center justify-between ${
                        formData.fixedCredit
                          ? "bg-primary/5 border-primary text-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {formData.fixedCredit
                          ? "✓ Yes, I want to fix my credit!"
                          : "Yes, I want to fix my credit!"}
                      </span>
                      {formData.fixedCredit && (
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      )}
                    </button>
                  </div>
                )}

                {/* ── STEP 2: Client Info ── */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Almost there!
                      </h2>
                    </div>

                    <div className="overflow-y-auto flex-1 pr-1 space-y-4">
                      {/* Name row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Date of Birth */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          value={formData.birthdate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              birthdate: e.target.value,
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                        />
                      </div>

                      {/* Gender & Smoker */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">
                            Gender
                          </label>
                          <select
                            value={formData.gender}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                          >
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">
                              Other / Prefer not to say
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">
                            Are you a smoker?
                          </label>
                          <select
                            value={formData.smoker}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                smoker: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                          >
                            <option value="">Select...</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>
                      </div>

                      {/* Current insurance */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Do you currently have life insurance?
                        </label>
                        <select
                          value={formData.hasInsurance}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hasInsurance: e.target.value,
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="Yes">
                            Yes, I currently have life insurance
                          </option>
                          <option value="No">
                            No, I don't have life insurance
                          </option>
                          <option value="Not sure">Not sure</option>
                        </select>
                      </div>

                      {/* Consent */}
                      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 relative">
                        <label className="flex items-start gap-4 cursor-pointer group">
                          <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                            <input
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  consent: e.target.checked,
                                })
                              }
                              className="w-6 h-6 rounded-md border-slate-300 text-primary focus:ring-primary/50 cursor-pointer appearance-none checked:bg-primary checked:border-primary transition-colors bg-white border-2"
                            />
                            {formData.consent && (
                              <CheckCircle2 className="absolute w-4 h-4 text-white pointer-events-none" />
                            )}
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                            By checking this box, I provide express written
                            consent to be contacted by Upgrade Financial Group
                            via phone calls, SMS/text messages, and email
                            (including automated or prerecorded messages) at the
                            contact information I provided. This consent applies
                            even if my number is on a Do Not Call list. Consent
                            is not a condition of purchase. Message and data
                            rates may apply. Reply STOP to opt out.
                          </p>
                        </label>
                        <div className="mt-4 pt-3 border-t border-primary/10 flex items-center gap-2 text-[11px] font-bold text-slate-500">
                          <span>🔒</span> Your information is secure and will
                          never be shared.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Navigation Footer ── */}
                <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    {step > 1 && (
                      <button
                        onClick={handleBack}
                        className="p-3 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-xl transition-colors flex items-center justify-center font-semibold text-sm gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    )}
                  </div>

                  {/* Step dots */}
                  <div className="flex gap-1.5 absolute left-1/2 -translate-x-1/2">
                    {Array.from({ length: totalSteps }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          idx + 1 <= step ? "bg-primary" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  {step < totalSteps ? (
                    <button
                      onClick={handleNext}
                      disabled={!getStepValid(step)}
                      className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-black/10 hover:bg-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !isStep2Valid}
                      className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />{" "}
                          Processing...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Submit Request
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-700 py-10 my-auto">
                {/* Success icon */}
                <div className="w-24 h-24 bg-emerald-500/10 border-[3px] border-emerald-500/20 rounded-full flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-50" />
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Request Received!
                </h3>
                <p className="text-base text-slate-600 max-w-sm mx-auto leading-relaxed mb-8">
                  Thank you,{" "}
                  <span className="font-bold text-slate-900">
                    {formData.firstName}
                  </span>
                  ! A credit repair specialist will review your information and
                  reach out to you shortly.
                </p>

                {/* Divider */}
                <div className="w-full max-w-xs border-t border-slate-200 mb-8" />

                {/* Specialist CTA */}
                <div className="w-full max-w-sm bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    Want faster results?
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    Skip the wait — speak directly with one of our credit repair
                    specialists right now and get your questions answered.
                  </p>
                  <button
                    onClick={() => router.push("/credit-repair/contact-referral")}
                    className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Talk to a Specialist Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}