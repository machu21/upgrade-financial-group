"use client";

import Link from "next/link";
import { Handshake, ExternalLink, ArrowRight, Search, ShieldCheck, Award } from "lucide-react";

export default function PartnersPage() {
    const partners = [
        {
            name: "National Life Group",
            category: "Life Insurance & Annuities",
            description: "Providing peace of mind through innovative life insurance and retirement solutions since 1848.",
            domain: "nationallife.com",
            logoUrl: "https://www.nationallife.com/-/media/Images/NationalLife/public/home-page/home-feature/NLG-logo.jpeg"
        },
        {
            name: "Mutual of Omaha",
            category: "Life & Health",
            description: "A Fortune 500 mutual company offering a variety of insurance and financial products.",
            domain: "mutualofomaha.com",
            logoUrl: "https://www.mutualofomaha.com/images/mo-logo-desktop.svg"
        },
        {
            name: "Fidelity & Guaranty",
            category: "Fixed Indexed Annuities",
            description: "Helping middle-income Americans prepare for retirement with life insurance and annuity products.",
            domain: "fglife.com",
            logoUrl: "https://www.fglife.com/images/F&G_Logo.svg"
        },
        {
            name: "Corebridge Financial",
            category: "Term Life & Retirement",
            description: "One of the largest and most established providers of retirement solutions and insurance.",
            domain: "corebridgefinancial.com",
            logoUrl: "https://www.corebridgefinancial.com/content/experience-fragments/marketing/corporate/en/corporate_site_new/header/master1/_jcr_content/root/container_1377145813/image.coreimg.svg/1686950809617/corebridge-financial-rgb-600x200.svg"
        },
        {
            name: "Ethos Life",
            category: "Insurtech Provider",
            description: "Modernizing the life insurance process with fast, technology-driven underwriting.",
            domain: "ethos.com",
            logoUrl: "https://www.ethos.com/static/ethos-logo-49293144158913926838df20a89d7042.svg"
        },
        {
            name: "Foresters Financial",
            category: "Fraternal Benefit Society",
            description: "Life insurance that comes with unique member benefits designed to enrich lives and communities.",
            domain: "foresters.com",
            logoUrl: "https://www.foresters.com/assets/images/logo.png"
        }
    ];

    const programPillars = [
        {
            icon: Search,
            title: "Independent Analysis",
            description: "We don't work for a single insurance company; we work for you. We scan the market across top-tier carriers to find the exact policy that fits your budget and goals."
        },
        {
            icon: Award,
            title: "A-Rated Carriers Only",
            description: "We exclusively partner with highly-rated, financially stable institutions that have a proven track record of paying out claims when families need them most."
        },
        {
            icon: ShieldCheck,
            title: "Living Benefits Focus",
            description: "Our carrier network is specifically curated to include companies that offer robust living benefits, ensuring you have access to capital during health crises."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">

            {/* Hero Section — full-bleed image hero */}
            <div className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col justify-end overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&auto=format&fit=crop&q=80"
                    alt="Professional financial consultation"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-45"
                />

                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

                {/* Hero text — centered, pushed down */}
                <div className="relative z-10 text-center px-6 pb-16 pt-48 md:pt-56 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-lg">
                        Our Elite Carrier Network
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed drop-shadow">
                        At Upgrade Financial Services, we leverage our relationships with industry-leading institutions to build personalized, uncompromising financial portfolios for our clients.
                    </p>
                </div>

                {/* Stat bar — anchored to bottom of hero */}
                <div className="relative z-10 border-t border-border bg-background/80 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Carrier Partners</p>
                            <p className="text-2xl font-extrabold text-foreground">6+</p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-border" />
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">A-Rated Institutions</p>
                            <p className="text-2xl font-extrabold text-foreground">100%</p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-border" />
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Living Benefits Focus</p>
                            <p className="text-2xl font-extrabold text-primary">Every Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How Our Program Works */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-b border-border relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">How Our Program Works</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        One size does not fit all. Here is how our independent brokerage model guarantees you get the best coverage possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programPillars.map((pillar, i) => (
                        <div key={i} className="bg-accent/20 border border-border p-8 rounded-3xl hover:border-primary/40 hover:bg-accent/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                <pillar.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>



            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto px-6 pb-32 relative z-10">
                <div className="bg-primary/5 border-2 border-primary/20 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center">
                    {/* Dot pattern inside CTA */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none [filter:blur(0.5px)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Experience the Upgrade Difference</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Let us scan our network to find the perfect living benefits policy for your family's unique needs.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
                            >
                                Get a Custom Plan <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent/40 text-foreground font-bold rounded-full hover:bg-accent/60 border border-border transition-all"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}