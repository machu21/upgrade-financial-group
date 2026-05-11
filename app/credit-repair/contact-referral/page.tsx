"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, CheckCircle2, Loader2, Star, Calendar, Clock } from "lucide-react";

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

function getDays() {
  const days = [];
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(d);
    if (days.length === 10) break;
  }
  return days;
}

const DAYS = getDays();

function formatDay(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export default function ContactPage() {
  const [tab, setTab] = useState<"message" | "book">("book");

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Booking state
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({ name: "", email: "", phone: "" });
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) return;
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
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
        .day-btn { transition: all 0.15s; }
        .day-btn:hover { border-color: hsl(var(--primary) / 0.5); background: hsl(var(--primary) / 0.05); }
        .day-btn.selected { border-color: hsl(var(--primary)); background: hsl(var(--primary) / 0.08); }
        .time-btn { transition: all 0.15s; }
        .time-btn:hover { border-color: hsl(var(--primary) / 0.5); background: hsl(var(--primary) / 0.05); }
        .time-btn.selected { border-color: hsl(var(--primary)); background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); }
      `}</style>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-2">
            <Star className="w-4 h-4 fill-primary" />
            Trusted Credit Repair Specialists
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Start Your <span className="text-primary">Credit Repair</span> Journey Today
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Book a free consultation with a certified credit specialist. We'll review your credit report, identify negative items, and build a personalized plan to help you reach your goals.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Contact Info */}
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
                    <p className="text-lg font-bold text-foreground">Serving Clients Across<br />the USA</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* What We Fix */}
            <div className="bg-accent/10 border border-border p-8 rounded-3xl space-y-4">
              <h3 className="text-lg font-bold text-foreground">What We Can Remove</h3>
              <ul className="space-y-3">
                {[
                  "Late & missed payments",
                  "Collections & charge-offs",
                  "Bankruptcies & judgments",
                  "Repossessions",
                  "Inaccurate personal info",
                  "Hard inquiry disputes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">100% Free Consultation. No Obligation.</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We'll review your credit report for free and show you exactly what can be disputed before you pay anything.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tabbed Panel */}
          <div className="lg:col-span-7 h-full w-full">
            <div className="w-full bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden relative flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

              {/* Tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setTab("book")}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors ${
                    tab === "book"
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Book a Consultation
                </button>
                <button
                  onClick={() => setTab("message")}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors ${
                    tab === "message"
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Send a Message
                </button>
              </div>

              {/* ── BOOKING TAB ── */}
              {tab === "book" && (
                <>
                  {!isBooked ? (
                    <form onSubmit={handleBook} className="p-8 md:p-10 flex flex-col gap-7 animate-in fade-in duration-300">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Pick a date</h3>
                        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                          {DAYS.map((d) => (
                            <button
                              key={d.toISOString()}
                              type="button"
                              onClick={() => { setSelectedDay(d); setSelectedTime(null); }}
                              className={`day-btn shrink-0 border border-slate-200 rounded-xl px-4 py-3 text-center text-sm ${
                                selectedDay?.toDateString() === d.toDateString() ? "selected" : ""
                              }`}
                            >
                              <p className="font-semibold text-slate-800 whitespace-nowrap">{d.toLocaleDateString("en-US", { weekday: "short" })}</p>
                              <p className="text-slate-500 text-xs whitespace-nowrap">{d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedDay && (
                        <div className="animate-in fade-in duration-300">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Pick a time
                            <span className="text-sm font-normal text-slate-500">— {formatDay(selectedDay)}</span>
                          </h3>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {TIMES.map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTime(t)}
                                className={`time-btn border border-slate-200 rounded-xl py-2.5 text-sm font-semibold text-slate-700 ${
                                  selectedTime === t ? "selected" : ""
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedDay && selectedTime && (
                        <div className="animate-in fade-in duration-300 space-y-4">
                          <h3 className="text-xl font-bold text-slate-900">Your details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-slate-700">Full Name</label>
                              <input
                                required
                                type="text"
                                value={bookingData.name}
                                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                placeholder="Jane Smith"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-slate-700">Phone</label>
                              <input
                                required
                                type="tel"
                                value={bookingData.phone}
                                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                                placeholder="(555) 000-0000"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Email</label>
                            <input
                              required
                              type="email"
                              value={bookingData.email}
                              onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                              placeholder="jane@example.com"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                          </div>

                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-primary shrink-0" />
                            <div>
                              <p className="text-sm font-bold text-slate-800">Free Credit Repair Consultation</p>
                              <p className="text-sm text-slate-500">{formatDay(selectedDay)} at {selectedTime} · 30 min · Phone call</p>
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={isBooking}
                            className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isBooking ? (
                              <><Loader2 className="w-5 h-5 animate-spin" />Booking...</>
                            ) : (
                              <>Confirm Booking <ArrowRight className="w-5 h-5" /></>
                            )}
                          </button>
                        </div>
                      )}

                      {!selectedDay && (
                        <p className="text-sm text-slate-400 text-center py-4">← Select a date above to get started</p>
                      )}
                    </form>
                  ) : (
                    <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 fade-in duration-500 py-16">
                      <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-2">You're booked!</h3>
                      <p className="text-slate-500 mb-1 font-semibold">
                        {selectedDay && formatDay(selectedDay)} at {selectedTime}
                      </p>
                      <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                        A confirmation has been sent to <strong>{bookingData.email}</strong>. A credit specialist will call you at your scheduled time.
                      </p>
                      <button
                        onClick={() => {
                          setIsBooked(false);
                          setSelectedDay(null);
                          setSelectedTime(null);
                          setBookingData({ name: "", email: "", phone: "" });
                        }}
                        className="text-primary font-semibold hover:underline"
                      >
                        Book another appointment
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* ── MESSAGE TAB ── */}
              {tab === "message" && (
                <>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 flex flex-col flex-grow animate-in fade-in duration-300">
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
                        <label className="text-sm font-medium text-slate-700">What are you looking to fix?</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your credit situation — collections, late payments, score goals, etc."
                          className="w-full h-full min-h-[150px] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" />Sending...</>
                        ) : (
                          <>Submit Request <ArrowRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="p-8 md:p-12 flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 fade-in duration-500 my-auto py-16">
                      <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Received!</h3>
                      <p className="text-lg text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                        Thank you for reaching out. A credit specialist will review your information and be in touch shortly.
                      </p>
                      <button onClick={() => setIsSubmitted(false)} className="text-primary font-semibold hover:underline">
                        Send another message
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}