"use client";

import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center pt-24 pb-12">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-2xl mx-auto px-6 text-center space-y-8 relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                    <Wrench className="w-10 h-10 text-primary" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-lg">
                    Partners Page <br className="hidden sm:block" />
                    <span className="text-primary">Under Construction</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed drop-shadow">
                    We are currently updating our partner network information to bring you the most accurate details about our elite carrier relationships. Check back soon!
                </p>

                <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
                    >
                        Return to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent/40 text-foreground font-bold rounded-full hover:bg-accent/60 border border-border transition-all"
                    >
                        Contact Us <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}