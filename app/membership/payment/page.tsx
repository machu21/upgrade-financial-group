"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Ensure this matches your env variable name
const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
  currency: "USD",
  intent: "capture",
  "disable-funding": "card",
};

import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  MapPin,
  X,
  CalendarDays,
  Target,
  AlertCircle,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Make sure this path is correct

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

// Updated to accept validation and error handling
const RealPayPalIntegration = ({ 
  totalDue, 
  selectedStates, 
  onSuccess,
  isFormValid,
  onError
}: { 
  totalDue: number, 
  selectedStates: string[], 
  onSuccess: () => Promise<void>,
  isFormValid: boolean,
  onError: (msg: string) => void
}) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="animate-in fade-in duration-300 w-full relative z-20">
        <PayPalButtons
          style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
          
          // 1. Prevent clicking if form isn't filled
          onClick={(data, actions) => {
            if (!isFormValid) {
              onError("Please fill out all Personal Details completely before proceeding to payment.");
              return actions.reject();
            }
            if (selectedStates.length === 0) {
              onError("Please select at least one Target Territory.");
              return actions.reject();
            }
            onError(""); // Clear errors
            return actions.resolve();
          }}

          createOrder={async (data, actions) => {
            // Call our secure backend to create the order
            const response = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ totalDue, selectedStates })
            });
            const order = await response.json();
            return order.id; // Return the ID to the PayPal script
          }}

          onApprove={async (data, actions) => {
            // Call our secure backend to capture the funds
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID })
            });
            const captureData = await response.json();

            // 2. Only trigger success (and DB Insert) if payment is COMPLETED
            if (captureData.status === "COMPLETED") {
              await onSuccess(); 
            } else {
              onError("Payment could not be completed at this time.");
            }
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default function MembershipPaymentPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessingDB, setIsProcessingDB] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: ""
  });

  // Territory Selection State
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  // Pricing Logic
  const BASE_FEE = 1200;
  const STATE_FEE = 50;
  const totalDue = BASE_FEE + (selectedStates.length * STATE_FEE);

  // Form Validation
  const isFormValid = formData.firstName.trim() !== "" && 
                      formData.lastName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.phone.trim() !== "" &&
                      formData.zipCode.trim() !== "";

  // Handlers for State Selection
  const handleAddState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    if (state && !selectedStates.includes(state)) {
      setSelectedStates([...selectedStates, state]);
    }
    e.target.value = ""; // Reset dropdown
  };

  const handleRemoveState = (stateToRemove: string) => {
    setSelectedStates(selectedStates.filter(s => s !== stateToRemove));
  };

  // 3. Supabase Insert Logic - Called ONLY when PayPal says "COMPLETED"
  const handleSuccessfulPayment = async () => {
    setIsProcessingDB(true);
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from('memberships')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            zip_code: formData.zipCode,
            states: selectedStates, // Supabase stores this array automatically
            amount_paid: totalDue
          }
        ]);

      if (error) throw error;
      
      setIsSuccess(true); // Finally, show success screen
    } catch (error: any) {
      console.error("Database error after payment:", error);
      // NOTE: Payment went through, but DB failed. You'd want to alert the user/admin here.
      setErrorMessage("Payment successful, but we had trouble setting up your account. Please contact support.");
    } finally {
      setIsProcessingDB(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-24 relative overflow-hidden flex flex-col items-center">

      {/* BACKGROUND THEME */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {!isSuccess ? (
          <>
            <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Secure Your <span className="text-primary">Membership</span>
              </h1>
              <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                Lock in your target territories and start receiving exclusive, vetted leads for the next 365 days. Securely complete your payment to begin.
              </p>
            </div>

            {/* TWO COLUMN CHECKOUT LAYOUT */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* LEFT COLUMN: Payment & Details Form */}
              <div className="w-full lg:w-3/5 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
                <form className="space-y-8">

                  {/* Section 1: Contact Info */}
                  <div className="bg-accent/20 border border-border rounded-3xl p-8 backdrop-blur-sm shadow-inner relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none -z-10" />
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 relative">
                      <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span>
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                        <input
                          required
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                        <input
                          required
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone Number</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Zip Code</label>
                        <input
                          required
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Territory Selection */}
                  <div className="bg-accent/20 border border-border rounded-3xl p-8 backdrop-blur-sm shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="flex justify-between items-start mb-6 relative">
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span>
                        Target Territories
                      </h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">+$50 / State</span>
                    </div>

                    <div className="space-y-4 relative">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        Select the states where you want to receive guaranteed leads. Your base membership includes platform access, and each state selected secures your lead flow in that region.
                      </p>

                      <select
                        onChange={handleAddState}
                        defaultValue=""
                        className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:border-primary outline-none transition-all appearance-none cursor-pointer placeholder:text-muted-foreground shadow-sm"
                      >
                        <option value="" disabled>+ Add a state to your territory...</option>
                        {US_STATES.filter(s => !selectedStates.includes(s)).map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>

                      {/* Selected States Pills */}
                      {selectedStates.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {selectedStates.map(state => (
                            <span
                              key={state}
                              className="inline-flex items-center gap-2 pl-4 pr-2 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-full animate-in zoom-in-95 duration-200 shadow-md"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              {state}
                              <button
                                type="button"
                                onClick={() => handleRemoveState(state)}
                                className="w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors outline-none"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section 3: Payment Info */}
                  <div className="bg-white/80 dark:bg-white/10 border border-border rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-inner">
                    {/* Secure Badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                      <Lock className="w-3.5 h-3.5" /> 256-Bit Secure
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 relative">
                      <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">3</span>
                      Payment Details
                    </h3>

                    {/* Show DB Processing State */}
                    {isProcessingDB ? (
                      <div className="flex flex-col items-center justify-center py-10 space-y-4">
                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        <p className="text-sm font-bold text-foreground">Setting up your account...</p>
                      </div>
                    ) : (
                      <div className="space-y-5 relative">
                        {errorMessage && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in mb-4">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-medium">{errorMessage}</p>
                          </div>
                        )}

                        <RealPayPalIntegration
                          totalDue={totalDue}
                          selectedStates={selectedStates}
                          isFormValid={isFormValid}
                          onError={setErrorMessage}
                          onSuccess={handleSuccessfulPayment}
                        />
                      </div>
                    )}
                  </div>

                  <div className="hidden lg:block text-center text-xs text-muted-foreground mt-4 pt-4 border-t border-border animate-in fade-in duration-300">
                    <Lock className="w-4 h-4 inline mr-1 text-primary" /> Secure payment flow handled entirely within the PayPal interface above. Your overall order state will update upon successful PayPal approval.
                  </div>
                </form>
              </div>

              {/* RIGHT COLUMN: Order Summary (Sticky) */}
              <div className="w-full lg:w-2/5 sticky top-32 space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">

                {/* Summary Card */}
                <div className="bg-background border-2 border-primary/40 rounded-[2rem] p-8 shadow-2xl shadow-black/30 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />

                  <h3 className="text-2xl font-bold text-foreground mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-foreground font-medium">
                      <span>Annual Membership Base</span>
                      <span className="font-bold">${BASE_FEE.toLocaleString()}</span>
                    </div>

                    {selectedStates.length > 0 ? (
                      <div className="flex justify-between items-start text-foreground font-medium animate-in fade-in duration-300">
                        <div>
                          <span>Target Territories ({selectedStates.length})</span>
                          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-[220px] italic">
                            {selectedStates.join(", ")}
                          </p>
                        </div>
                        <span className="font-bold">${((selectedStates.length * STATE_FEE).toLocaleString())}</span>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center text-muted-foreground font-medium">
                        <span>Target Territories (0)</span>
                        <span>$0</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-4 mb-8">
                    <div className="flex justify-between items-center text-2xl font-black text-foreground">
                      <span>Total Due</span>
                      <span className="text-primary tracking-tight">${totalDue.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* What you get */}
                  <div className="bg-accent/40 border border-border rounded-2xl p-6 space-y-4 shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none" />
                    <p className="text-sm font-black uppercase tracking-widest text-primary mb-3 relative z-10">You are securing:</p>
                    <div className="flex items-start gap-3 relative z-10">
                      <CalendarDays className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">1 Full Year of exclusive, vetted leads in your selected states.</p>
                    </div>
                    <div className="flex items-start gap-3 relative z-10">
                      <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">Complete access to consultation with mentors</p>
                    </div>
                    <div className="flex items-start gap-3 relative z-10">
                      <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">Protected territory rights to prevent market saturation.</p>
                    </div>
                  </div>
                </div>

                <div className="block lg:hidden text-center text-xs text-muted-foreground mt-4 pt-4 border-t border-border animate-in fade-in duration-300">
                  <Lock className="w-4 h-4 inline mr-1 text-primary" /> Secure payment flow handled within the PayPal interface above.
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pt-6">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                    <Lock className="w-4 h-4 text-emerald-500" /> SSL Secure
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Guaranteed Privacy
                  </div>
                </div>

              </div>

            </div>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in zoom-in-95 fade-in duration-700 w-full relative z-10">
            <div className="w-24 h-24 bg-emerald-500/10 border-[3px] border-emerald-500/20 rounded-full flex items-center justify-center mb-10 relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-50 -z-10" />
              <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">Welcome to the Elite.</h3>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              Your payment of <strong className="text-foreground tracking-tight">${totalDue.toLocaleString()}</strong> has been processed successfully. Your territory is locked, and your onboarding email is on its way.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent border-2 border-border text-foreground font-extrabold rounded-2xl hover:bg-accent/80 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
            >
              Return to Dashboard <span className="group-hover:translate-x-1.5 transition-transform duration-300 ml-2">→</span>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}