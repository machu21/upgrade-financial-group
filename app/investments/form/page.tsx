"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Loader2,
  User,
  Pencil,
  BarChart3,
  Landmark,
} from "lucide-react";

export default function AnnuityQuiz() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1 — Indexed Growth Annuity
    indexedGrowthSelected: false,
    indexedGrowthAmount: 25000,
    indexedGrowthCustom: "",

    // Step 2 — Indexed Income Annuity
    indexedIncomeSelected: false,
    indexedIncomeAmount: 25000,
    indexedIncomeCustom: "",

    // Step 3 — FPDA Indexed Annuity Growth
    fpdaGrowthSelected: false,
    fpdaGrowthAmount: 100,
    fpdaGrowthCustom: "",

    // Step 4 — FPDA Indexed Annuity Income
    fpdaIncomeSelected: false,
    fpdaIncomeAmount: 100,
    fpdaIncomeCustom: "",

    // Step 5 — Contact Info
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

  // Each annuity step is valid if selected AND amount meets minimum
  const getAmountValue = (base: number, custom: string, min: number) => {
    const customNum = parseInt(custom.replace(/\D/g, ""));
    const val = custom ? (isNaN(customNum) ? base : customNum) : base;
    return val >= min;
  };

  const isStep1Valid =
    formData.indexedGrowthSelected &&
    getAmountValue(formData.indexedGrowthAmount, formData.indexedGrowthCustom, 25000);

  const isStep2Valid =
    formData.indexedIncomeSelected &&
    getAmountValue(formData.indexedIncomeAmount, formData.indexedIncomeCustom, 25000);

  const isStep3Valid =
    formData.fpdaGrowthSelected &&
    getAmountValue(formData.fpdaGrowthAmount, formData.fpdaGrowthCustom, 100);

  const isStep4Valid =
    formData.fpdaIncomeSelected &&
    getAmountValue(formData.fpdaIncomeAmount, formData.fpdaIncomeCustom, 100);

  const isStep5Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.birthdate !== "" &&
    formData.gender !== "" &&
    formData.smoker !== "" &&
    formData.hasInsurance !== "" &&
    formData.consent === true;

  const totalSteps = 5;

  const getStepValid = (s: number) => {
    if (s === 1) return isStep1Valid;
    if (s === 2) return isStep2Valid;
    if (s === 3) return isStep3Valid;
    if (s === 4) return isStep4Valid;
    if (s === 5) return isStep5Valid;
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

  // Reusable slider+custom input block for $25k–$2M range
  const LargeAmountInput = ({
    label,
    sliderMin,
    sliderMax,
    sliderStep,
    minLabel,
    maxLabel,
    baseValue,
    customValue,
    onSliderChange,
    onCustomChange,
    placeholder,
  }: {
    label: string;
    sliderMin: number;
    sliderMax: number;
    sliderStep: number;
    minLabel: string;
    maxLabel: string;
    baseValue: number;
    customValue: string;
    onSliderChange: (val: number) => void;
    onCustomChange: (val: string) => void;
    placeholder: string;
  }) => {
    const displayVal = customValue
      ? parseInt(customValue.replace(/\D/g, "")) || baseValue
      : baseValue;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-primary">
            ${formatCurrency(displayVal)}
          </p>
          <p className="text-sm text-slate-400 font-semibold mt-1 uppercase tracking-wide">
            {label}
          </p>
        </div>

        <div className="relative pt-4">
          <div
            className="absolute top-[20px] left-0 h-2 bg-primary rounded-l-md pointer-events-none"
            style={{
              width: `${Math.min(
                ((baseValue - sliderMin) / (sliderMax - sliderMin)) * 100,
                100
              )}%`,
            }}
          />
          <input
            type="range"
            min={sliderMin}
            max={sliderMax}
            step={sliderStep}
            value={Math.min(baseValue, sliderMax)}
            onChange={(e) => onSliderChange(Number(e.target.value))}
            className="w-full relative z-10"
          />
        </div>
        <div className="flex justify-between text-sm font-bold text-primary">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>

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
              value={customValue}
              onChange={(e) => onCustomChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-10 py-3.5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none font-semibold"
              placeholder={placeholder}
            />
            <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    );
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
              Design Your <span className="text-primary">Annuity Plan</span>
            </h1>
            <p className="text-white/80 font-medium">
              Select your annuity type and investment amount to get started.
            </p>
          </div>
        )}

        {/* Main Quiz Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-black/40 overflow-hidden flex flex-col min-h-[580px]">
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

                {/* ── STEP 1: Indexed Growth Annuity ── */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-0.5">
                          Annuity Type 1
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          Indexed Growth Annuity
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      Grow your money tax-deferred with market index-linked returns
                      and full principal protection. Ideal for long-term wealth
                      accumulation.
                    </p>

                    {/* Select toggle */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          indexedGrowthSelected: !formData.indexedGrowthSelected,
                        })
                      }
                      className={`mb-6 w-full p-4 rounded-2xl border-2 font-bold text-base transition-all flex items-center justify-between ${
                        formData.indexedGrowthSelected
                          ? "bg-primary/5 border-primary text-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {formData.indexedGrowthSelected
                          ? "✓ Selected — Indexed Growth Annuity"
                          : "Select this Annuity"}
                      </span>
                      {formData.indexedGrowthSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </button>

                    {formData.indexedGrowthSelected && (
                      <div className="animate-in fade-in duration-300">
                        <div className="mb-4 flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
                          <DollarSign className="w-4 h-4 shrink-0" />
                          Minimum investment: $25,000 &nbsp;·&nbsp; Maximum: $2,000,000
                        </div>
                        <LargeAmountInput
                          label="Investment Amount"
                          sliderMin={25000}
                          sliderMax={2000000}
                          sliderStep={25000}
                          minLabel="Min: $25,000"
                          maxLabel="Max: $2,000,000"
                          baseValue={formData.indexedGrowthAmount}
                          customValue={formData.indexedGrowthCustom}
                          onSliderChange={(val) =>
                            setFormData({
                              ...formData,
                              indexedGrowthAmount: val,
                              indexedGrowthCustom: "",
                            })
                          }
                          onCustomChange={(val) =>
                            setFormData({ ...formData, indexedGrowthCustom: val })
                          }
                          placeholder="500,000"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 2: Indexed Income Annuity ── */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-0.5">
                          Annuity Type 2
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          Indexed Income Annuity
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      Convert your savings into a guaranteed lifetime income stream
                      with index-linked growth potential. Perfect for retirement
                      income planning.
                    </p>

                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          indexedIncomeSelected: !formData.indexedIncomeSelected,
                        })
                      }
                      className={`mb-6 w-full p-4 rounded-2xl border-2 font-bold text-base transition-all flex items-center justify-between ${
                        formData.indexedIncomeSelected
                          ? "bg-primary/5 border-primary text-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {formData.indexedIncomeSelected
                          ? "✓ Selected — Indexed Income Annuity"
                          : "Select this Annuity"}
                      </span>
                      {formData.indexedIncomeSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </button>

                    {formData.indexedIncomeSelected && (
                      <div className="animate-in fade-in duration-300">
                        <div className="mb-4 flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
                          <DollarSign className="w-4 h-4 shrink-0" />
                          Minimum investment: $25,000 &nbsp;·&nbsp; Maximum: $2,000,000
                        </div>
                        <LargeAmountInput
                          label="Investment Amount"
                          sliderMin={25000}
                          sliderMax={2000000}
                          sliderStep={25000}
                          minLabel="Min: $25,000"
                          maxLabel="Max: $2,000,000"
                          baseValue={formData.indexedIncomeAmount}
                          customValue={formData.indexedIncomeCustom}
                          onSliderChange={(val) =>
                            setFormData({
                              ...formData,
                              indexedIncomeAmount: val,
                              indexedIncomeCustom: "",
                            })
                          }
                          onCustomChange={(val) =>
                            setFormData({ ...formData, indexedIncomeCustom: val })
                          }
                          placeholder="500,000"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 3: FPDA Indexed Annuity Growth ── */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-0.5">
                          Annuity Type 3
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          FPDA Indexed Annuity Growth
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      A Flexible Premium Deferred Annuity that lets you contribute
                      any amount over time, with index-linked growth and no market
                      risk to your principal.
                    </p>

                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          fpdaGrowthSelected: !formData.fpdaGrowthSelected,
                        })
                      }
                      className={`mb-6 w-full p-4 rounded-2xl border-2 font-bold text-base transition-all flex items-center justify-between ${
                        formData.fpdaGrowthSelected
                          ? "bg-primary/5 border-primary text-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {formData.fpdaGrowthSelected
                          ? "✓ Selected — FPDA Indexed Annuity Growth"
                          : "Select this Annuity"}
                      </span>
                      {formData.fpdaGrowthSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </button>

                    {formData.fpdaGrowthSelected && (
                      <div className="animate-in fade-in duration-300">
                        <div className="mb-4 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                          <DollarSign className="w-4 h-4 shrink-0" />
                          Minimum investment: $100 &nbsp;·&nbsp; No maximum limit
                        </div>
                        <LargeAmountInput
                          label="Initial Contribution"
                          sliderMin={100}
                          sliderMax={100000}
                          sliderStep={100}
                          minLabel="Min: $100"
                          maxLabel="$100,000+"
                          baseValue={formData.fpdaGrowthAmount}
                          customValue={formData.fpdaGrowthCustom}
                          onSliderChange={(val) =>
                            setFormData({
                              ...formData,
                              fpdaGrowthAmount: val,
                              fpdaGrowthCustom: "",
                            })
                          }
                          onCustomChange={(val) =>
                            setFormData({ ...formData, fpdaGrowthCustom: val })
                          }
                          placeholder="5,000"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 4: FPDA Indexed Annuity Income ── */}
                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Landmark className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-0.5">
                          Annuity Type 4
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                          FPDA Indexed Annuity Income
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      A Flexible Premium Deferred Annuity designed to provide a
                      growing income stream. Start small and build toward guaranteed
                      retirement income on your schedule.
                    </p>

                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          fpdaIncomeSelected: !formData.fpdaIncomeSelected,
                        })
                      }
                      className={`mb-6 w-full p-4 rounded-2xl border-2 font-bold text-base transition-all flex items-center justify-between ${
                        formData.fpdaIncomeSelected
                          ? "bg-primary/5 border-primary text-primary shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {formData.fpdaIncomeSelected
                          ? "✓ Selected — FPDA Indexed Annuity Income"
                          : "Select this Annuity"}
                      </span>
                      {formData.fpdaIncomeSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </button>

                    {formData.fpdaIncomeSelected && (
                      <div className="animate-in fade-in duration-300">
                        <div className="mb-4 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                          <DollarSign className="w-4 h-4 shrink-0" />
                          Minimum investment: $100 &nbsp;·&nbsp; No maximum limit
                        </div>
                        <LargeAmountInput
                          label="Initial Contribution"
                          sliderMin={100}
                          sliderMax={100000}
                          sliderStep={100}
                          minLabel="Min: $100"
                          maxLabel="$100,000+"
                          baseValue={formData.fpdaIncomeAmount}
                          customValue={formData.fpdaIncomeCustom}
                          onSliderChange={(val) =>
                            setFormData({
                              ...formData,
                              fpdaIncomeAmount: val,
                              fpdaIncomeCustom: "",
                            })
                          }
                          onCustomChange={(val) =>
                            setFormData({ ...formData, fpdaIncomeCustom: val })
                          }
                          placeholder="5,000"
                        />
                      </div>
                    )}
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
                              setFormData({ ...formData, firstName: e.target.value })
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
                              setFormData({ ...formData, lastName: e.target.value })
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
                            setFormData({ ...formData, birthdate: e.target.value })
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
                              setFormData({ ...formData, gender: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                          >
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other / Prefer not to say</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">
                            Are you a smoker?
                          </label>
                          <select
                            value={formData.smoker}
                            onChange={(e) =>
                              setFormData({ ...formData, smoker: e.target.value })
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
                            setFormData({ ...formData, hasInsurance: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="Yes">Yes, I currently have life insurance</option>
                          <option value="No">No, I don't have life insurance</option>
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
                                setFormData({ ...formData, consent: e.target.checked })
                              }
                              className="w-6 h-6 rounded-md border-slate-300 text-primary focus:ring-primary/50 cursor-pointer appearance-none checked:bg-primary checked:border-primary transition-colors bg-white border-2"
                            />
                            {formData.consent && (
                              <CheckCircle2 className="absolute w-4 h-4 text-white pointer-events-none" />
                            )}
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                            By checking this box, I provide express written consent to be
                            contacted by Upgrade Financial Group via phone calls,
                            SMS/text messages, and email (including automated or
                            prerecorded messages) at the contact information I provided.
                            This consent applies even if my number is on a Do Not Call
                            list. Consent is not a condition of purchase. Message and
                            data rates may apply. Reply STOP to opt out.
                          </p>
                        </label>
                        <div className="mt-4 pt-3 border-t border-primary/10 flex items-center gap-2 text-[11px] font-bold text-slate-500">
                          <span>🔒</span> Your information is secure and will never be
                          shared.
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
                          <Loader2 className="w-4 h-4 animate-spin" /> Processing...
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
                  ! An advisor will review your Annuity preferences and contact you
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