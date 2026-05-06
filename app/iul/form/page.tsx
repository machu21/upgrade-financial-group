"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HeartPulse,
  DollarSign,
  PiggyBank,
  ShieldCheck,
  Loader2,
  User,
  Pencil,
} from "lucide-react";

export default function IulQuiz() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    livingBenefits: "",
    policyAmount: 250000,
    policyCustom: "",
    monthlyPremium: 500,
    premiumCustom: "",
    retirementFunds: "",
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    gender: "",
    smoker: "",
    hasInsurance: "",
    consent: false,
  });

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US").format(value);

  const handleNumberInputChange = (field: string, value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
    setFormData({ ...formData, [field]: isNaN(num) ? 0 : num });
  };

  // Step validation
  const isStep1Valid = formData.livingBenefits !== "";
  const isStep2Valid =
    formData.policyAmount >= 50000 ||
    parseInt(formData.policyCustom.replace(/\D/g, "")) >= 50000;
  const isStep3Valid =
    formData.monthlyPremium >= 50 ||
    parseInt(formData.premiumCustom.replace(/\D/g, "")) >= 50;
  const isStep4Valid = formData.retirementFunds !== "";
  const isStep5Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.birthdate !== "" &&
    formData.gender !== "" &&
    formData.smoker !== "" &&
    formData.hasInsurance !== "" &&
    formData.consent === true;

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

  const totalSteps = 5;

  const getStepValid = (s: number) => {
    if (s === 1) return isStep1Valid;
    if (s === 2) return isStep2Valid;
    if (s === 3) return isStep3Valid;
    if (s === 4) return isStep4Valid;
    if (s === 5) return isStep5Valid;
    return false;
  };

  return (
    <div className="min-h-screen pt-40 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Slider styles */}
      <style>{`
        input[type=range] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          margin-top: -8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 8px;
          cursor: pointer;
          background: #e2e8f0;
          border-radius: 4px;
        }
      `}</style>

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
              Design Your <span className="text-primary">IUL Plan</span>
            </h1>
            <p className="text-white/80 font-medium">
              Answer a few quick questions to customize your Indexed Universal
              Life policy.
            </p>
          </div>
        )}

        {/* Main Quiz Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-black/40 overflow-hidden flex flex-col min-h-[550px]">
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
                {/* ── STEP 1: Living Benefits ── */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <HeartPulse className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Choose your coverage type
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-4">
                      {["With Living Benefits", "Without Living Benefits"].map(
                        (option) => (
                          <button
                            key={option}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                livingBenefits: option,
                              })
                            }
                            className={`p-6 rounded-2xl border-2 text-lg font-bold transition-all text-left flex items-center justify-between ${
                              formData.livingBenefits === option
                                ? "bg-primary/5 border-primary text-primary shadow-sm"
                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {option}
                            {formData.livingBenefits === option && (
                              <CheckCircle2 className="w-6 h-6 text-primary" />
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Policy Amount ── */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        How much coverage do you need?
                      </h2>
                    </div>

                    <div className="mt-4 space-y-6">
                      {/* Live display */}
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-primary">
                          $
                          {formatCurrency(
                            formData.policyCustom
                              ? parseInt(
                                  formData.policyCustom.replace(/\D/g, "")
                                ) || formData.policyAmount
                              : formData.policyAmount
                          )}
                        </p>
                        <p className="text-sm text-slate-400 font-semibold mt-1 uppercase tracking-wide">
                          Policy Amount
                        </p>
                      </div>

                      {/* Slider */}
                      <div className="relative pt-4">
                        <div
                          className="absolute top-[20px] left-0 h-2 bg-primary rounded-l-md pointer-events-none"
                          style={{
                            width: `${
                              ((formData.policyAmount - 50000) /
                                (1000000 - 50000)) *
                              100
                            }%`,
                          }}
                        />
                        <input
                          type="range"
                          min="50000"
                          max="1000000"
                          step="25000"
                          value={formData.policyAmount}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              policyAmount: Number(e.target.value),
                              policyCustom: "",
                            });
                          }}
                          className="w-full relative z-10"
                        />
                      </div>
                      <div className="flex justify-between text-sm font-bold text-primary">
                        <span>Min: $50,000</span>
                        <span>Max: $1,000,000</span>
                      </div>

                      {/* Custom input */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Or enter a custom amount (e.g. over $1M)
                        </label>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-lg">
                            $
                          </span>
                          <input
                            type="text"
                            value={formData.policyCustom}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                policyCustom: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-10 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none font-semibold"
                            placeholder="1,500,000"
                          />
                          <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Monthly Premium ── */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Target Monthly Premium
                      </h2>
                    </div>

                    <div className="mt-4 space-y-6">
                      {/* Live display */}
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-primary">
                          $
                          {formatCurrency(
                            formData.premiumCustom
                              ? parseInt(
                                  formData.premiumCustom.replace(/\D/g, "")
                                ) || formData.monthlyPremium
                              : formData.monthlyPremium
                          )}
                          <span className="text-xl font-semibold text-slate-400 ml-1">
                            /mo
                          </span>
                        </p>
                        <p className="text-sm text-slate-400 font-semibold mt-1 uppercase tracking-wide">
                          Monthly Premium
                        </p>
                      </div>

                      {/* Slider */}
                      <div className="relative pt-4">
                        <div
                          className="absolute top-[20px] left-0 h-2 bg-primary rounded-l-md pointer-events-none"
                          style={{
                            width: `${
                              ((formData.monthlyPremium - 50) / (5000 - 50)) *
                              100
                            }%`,
                          }}
                        />
                        <input
                          type="range"
                          min="50"
                          max="5000"
                          step="10"
                          value={formData.monthlyPremium}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              monthlyPremium: Number(e.target.value),
                              premiumCustom: "",
                            });
                          }}
                          className="w-full relative z-10"
                        />
                      </div>
                      <div className="flex justify-between text-sm font-bold text-primary">
                        <span>Min: $50 /mo</span>
                        <span>Max: $5,000 /mo</span>
                      </div>

                      {/* Custom input */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Or enter a custom amount
                        </label>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-lg">
                            $
                          </span>
                          <input
                            type="text"
                            value={formData.premiumCustom}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                premiumCustom: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-10 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none font-semibold"
                            placeholder="750"
                          />
                          <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 4: Retirement Funds ── */}
                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <PiggyBank className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Future Planning
                      </h2>
                    </div>

                    <div className="space-y-4 mt-4">
                      <label className="text-base font-medium text-slate-700 block mb-4">
                        Do you want this policy to build tax-free retirement
                        funds?
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {["Yes", "No"].map((option) => (
                          <button
                            key={`retire-${option}`}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                retirementFunds: option,
                              })
                            }
                            className={`py-6 px-6 rounded-2xl border-2 text-xl font-bold transition-all ${
                              formData.retirementFunds === option
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
                )}

                {/* ── STEP 5: Contact Info & Details ── */}
                {step === 5 && (
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
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
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
                      disabled={isSubmitting || !isStep5Valid}
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
              <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-700 py-12 my-auto">
                <div className="w-24 h-24 bg-emerald-500/10 border-[3px] border-emerald-500/20 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-50" />
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Request Received!
                </h3>
                <p className="text-lg text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you,{" "}
                  <span className="font-bold text-slate-900">
                    {formData.firstName}
                  </span>
                  ! An advisor will review your IUL preferences and contact you
                  shortly with personalized options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}