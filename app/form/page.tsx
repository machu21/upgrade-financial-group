"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  CalendarDays, 
  Activity, 
  FileText,
  Loader2
} from "lucide-react";

export default function QualificationQuiz() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    gender: "",
    hasInsurance: "",
    smoker: "",
    consent: false,
  });

  // Validation logic for each step
  const isStep1Valid = formData.firstName.trim() && formData.lastName.trim() && formData.email.trim();
  const isStep2Valid = formData.birthday && formData.gender;
  const isStep3Valid = formData.hasInsurance && formData.smoker;
  const isStep4Valid = formData.consent;

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-animated-gradient flex items-center justify-center">
      
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

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-2xl w-full mx-auto px-6 relative z-10">
        
        {/* Header */}
        {!isSuccess && (
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              See If You <span className="text-primary">Qualify</span>
            </h1>
            <p className="text-muted-foreground font-medium">
              Answer a few quick questions to find your personalized coverage options.
            </p>
          </div>
        )}

        {/* Main Quiz Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-black/10 overflow-hidden flex flex-col min-h-[500px]">
          
          {/* Top Loading Bar Decor */}
          <div className="w-full h-1.5 bg-slate-100">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: isSuccess ? "100%" : `${(step / 5) * 100}%` }}
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col flex-grow relative">
            
            {!isSuccess ? (
              <>
                {/* STEP 1: Basic Info */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Let's start with the basics</h2>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">First Name</label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Last Name</label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Demographics */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CalendarDays className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">A little about you</h2>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                        <input
                          type="date"
                          value={formData.birthday}
                          onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-700">Gender</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {["Male", "Female", "Prefer not to say"].map((option) => (
                            <button
                              key={option}
                              onClick={() => setFormData({ ...formData, gender: option })}
                              className={`py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                                formData.gender === option 
                                  ? "bg-primary text-primary-foreground border-primary shadow-md" 
                                  : "bg-slate-50 text-slate-600 border-slate-200 hover:border-primary/30 hover:bg-slate-100"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Health & Coverage */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Activity className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Health & Coverage</h2>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-700">Do you currently have life insurance?</label>
                        <div className="grid grid-cols-2 gap-4">
                          {["Yes", "No"].map((option) => (
                            <button
                              key={`ins-${option}`}
                              onClick={() => setFormData({ ...formData, hasInsurance: option })}
                              className={`py-4 px-6 rounded-xl border-2 text-base font-bold transition-all ${
                                formData.hasInsurance === option 
                                  ? "bg-primary/5 border-primary text-primary shadow-sm" 
                                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-700">Are you a smoker?</label>
                        <div className="grid grid-cols-2 gap-4">
                          {["Yes", "No"].map((option) => (
                            <button
                              key={`smoke-${option}`}
                              onClick={() => setFormData({ ...formData, smoker: option })}
                              className={`py-4 px-6 rounded-xl border-2 text-base font-bold transition-all ${
                                formData.smoker === option 
                                  ? "bg-primary/5 border-primary text-primary shadow-sm" 
                                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Consent */}
                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Consent & Privacy</h2>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-1 shrink-0">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="w-6 h-6 rounded-md border-slate-300 text-primary focus:ring-primary/50 cursor-pointer appearance-none checked:bg-primary checked:border-primary transition-colors bg-white border-2"
                          />
                          {formData.consent && <CheckCircle2 className="absolute w-4 h-4 text-white pointer-events-none" />}
                        </div>
                        <p className="text-xs leading-relaxed text-slate-600">
                          By checking this box, I provide express written consent to be contacted by Upgrade Financial Group via phone calls, SMS/text messages, and email (including automated or prerecorded messages) at the contact information I provided. This consent applies even if my number is on a Do Not Call list. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.
                        </p>
                      </label>
                      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-500">
                        <span>🔒</span> Your information is secure and will never be shared.
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Summary Review */}
                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Review Your Answers</h2>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 flex-grow overflow-y-auto max-h-[300px]">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                        <div>
                          <p className="text-slate-500 mb-1">Full Name</p>
                          <p className="font-semibold text-slate-900">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Email</p>
                          <p className="font-semibold text-slate-900 break-all">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Date of Birth</p>
                          <p className="font-semibold text-slate-900">{formData.birthday}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Gender</p>
                          <p className="font-semibold text-slate-900">{formData.gender}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Has Insurance</p>
                          <p className="font-semibold text-slate-900">{formData.hasInsurance}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Smoker</p>
                          <p className="font-semibold text-slate-900">{formData.smoker}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation & Progress Footer */}
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

                  <div className="flex gap-1.5 absolute left-1/2 -translate-x-1/2">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx <= step ? "bg-primary" : "bg-slate-200"}`}
                      />
                    ))}
                  </div>

                  {step < 5 ? (
                    <button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && !isStep1Valid) ||
                        (step === 2 && !isStep2Valid) ||
                        (step === 3 && !isStep3Valid) ||
                        (step === 4 && !isStep4Valid)
                      }
                      className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-black/10 hover:bg-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                      ) : (
                        <><CheckCircle2 className="w-4 h-4" /> Submit Answers</>
                      )}
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-700 py-12">
                <div className="w-24 h-24 bg-emerald-500/10 border-[3px] border-emerald-500/20 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-50" />
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">You're All Set!</h3>
                <p className="text-lg text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.firstName}</span>. An advisor will review your profile and contact you shortly with personalized coverage options.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}