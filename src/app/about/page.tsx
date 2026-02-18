"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Award, Shield, Database, PenTool } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

export default function AboutPage() {
    return (
        <div className="pt-24 bg-brand-black min-h-screen">
            {/* Header */}
            <section className="section-padding text-center spotlight">
                <div className="container-xl max-w-5xl mx-auto space-y-6">
                    <SectionLabel className="justify-center">Who We Are</SectionLabel>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-fluid-h1 font-bodoni text-brand-ivory leading-none gold-shimmer"
                    >
                        Our Story.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-brand-ivory/40 text-lg font-sora font-light"
                    >
                        A passion for puzzles, design, and bringing people together.
                    </motion.p>
                </div>
            </section>

            {/* Founder Story */}
            <section className="section-padding gold-border-top gold-border-bottom bg-brand-navy/5 spotlight">
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image */}
                    <div className="relative aspect-[3/4] gold-border overflow-hidden">
                        <Image
                            src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (1).jpeg"
                            alt="Agnes: Founder"
                            fill
                            className="img-hover-reveal"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 bg-brand-black/80 backdrop-blur-md border border-brand-gold/20 p-5">
                            <p className="label-xs text-brand-gold mb-1">Founder</p>
                            <p className="font-bodoni text-brand-ivory text-2xl uppercase tracking-widest">Agnes</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-8">
                        <SectionLabel>The Creator</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-fluid-h2 font-bodoni text-brand-ivory leading-none"
                        >
                            Design Meets<br />Puzzles.
                        </motion.h2>
                        <div className="space-y-5 text-brand-ivory/50 font-sora font-light text-lg leading-relaxed">
                            <p>
                                EscapeBox was created by Agnes, an architect who loves mathematics and strategy games. Since childhood, she has been fascinated by hidden doors, secret compartments, and wooden puzzles that seem impossible to solve.
                            </p>
                            <p>
                                After helping her sister grow a similar business in Hungary, Agnes brought her upgraded, high-quality escape boxes to the UAE in 2025. She combines her design skills and love for games to create unique experiences for you.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: Database, label: "Built with Logic" },
                                { icon: PenTool, label: "Beautiful Design" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-3 border border-brand-gold/10 p-4 hover-gold">
                                    <item.icon className="w-5 h-5 text-brand-gold/40 shrink-0" strokeWidth={1.5} />
                                    <span className="label-xs text-brand-ivory/60">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-brand-black">
                <div className="container-xl space-y-16">
                    <div className="text-center space-y-4">
                        <SectionLabel className="justify-center">The Journey</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-fluid-h2 font-bodoni text-brand-ivory leading-none"
                        >
                            How We Got Here.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-gold/8">
                        {[
                            {
                                year: "Early 2000s",
                                event: "Global Idea",
                                desc: "Escape rooms become popular in Japan, Hungary, and the US.",
                                icon: Globe,
                            },
                            {
                                year: "Heritage",
                                event: "Hungary Roots",
                                desc: "Agnes refines the challenge in one of the world's puzzle capitals.",
                                icon: Award,
                            },
                            {
                                year: "2025",
                                event: "UAE Launch",
                                desc: "Premium, architect-designed boxes arrive in Dubai and Abu Dhabi.",
                                icon: Shield,
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-brand-black p-12 space-y-8 group hover:bg-brand-navy/20 transition-all duration-700"
                            >
                                <div className="w-14 h-14 border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                                    <item.icon className="w-6 h-6 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3">
                                    <span className="label-xs text-brand-gold">{item.year}</span>
                                    <h3 className="font-bodoni text-brand-ivory text-xl uppercase tracking-widest">{item.event}</h3>
                                    <p className="text-brand-ivory/40 font-sora text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <QuoteBlock
                quote="We give you the fun of an escape room without the mess. It's real, physical, and makes your team think."
                label="Our Promise"
            />

            <CTASection
                heading="Come Play With Us."
                subheading="Book your EscapeBox experience today. We deliver across Dubai and Abu Dhabi."
                primaryLabel="Book Now"
                primaryHref="/contact"
                secondaryLabel="See Our Games"
                secondaryHref="/experiences"
                imageSrc="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (1).jpeg"
            />
        </div>
    );
}
