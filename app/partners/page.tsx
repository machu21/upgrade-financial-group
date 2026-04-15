"use client";

import Link from "next/link";
import { Handshake, ExternalLink, ArrowRight, Search, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
            
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Hero Section (Added pt-32 to clear the navbar) */}
            <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
                    <p className="inline-block text-amber-500 text-sm font-semibold tracking-wider uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                        The Brokerage Advantage
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Our Elite Carrier Network
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        At Upgrade Financial Services, we leverage our relationships with industry-leading institutions to build personalized, uncompromising financial portfolios for our clients.
                    </p>
                </div>
            </div>

            {/* NEW: The Program Explanation Section */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How Our Program Works</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        One size does not fit all. Here is how our independent brokerage model guarantees you get the best coverage possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programPillars.map((pillar, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                                <pillar.icon className="w-7 h-7 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partners Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Trusted Partners</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We collaborate with these distinguished carriers to secure your financial future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, i) => (
                        <div
                            key={i}
                            className="group bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-24 h-12 flex items-center justify-center bg-white rounded-lg p-2 shadow-inner">
                                    <img
                                        src={partner.logoUrl}
                                        alt={partner.name}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=0f172a&color=fff&bold=true`;
                                        }}
                                    />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                    {partner.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">{partner.name}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                                {partner.description}
                            </p>

                            <Link
                                href={`https://${partner.domain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors w-fit"
                            >
                                Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="max-w-4xl mx-auto px-6 pb-32 text-center">
                <div className="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience the Upgrade Difference</h2>
                        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
                            Let us scan our network to find the perfect living benefits policy for your family's unique needs.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 hover:scale-105 transition-all"
                            >
                                Get a Custom Plan <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link 
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 border border-white/10 transition-all"
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