"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Users, Zap, BarChart3 } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

export default function CorporatePage() {
    return (
        <div className="pt-24 bg-brand-black min-h-screen">
            {/* Hero */}
            <section className="relative section-padding text-center overflow-hidden spotlight">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (14).jpeg"
                        alt="Corporate Team"
                        fill
                        className="object-cover grayscale opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black" />
                </div>
                <div className="container-xl max-w-5xl mx-auto relative z-10 space-y-6">
                    <SectionLabel className="justify-center">Team Building</SectionLabel>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-fluid-h1 font-bodoni text-brand-ivory leading-none"
                    >
                        Better Teams.<br /><span className="gold-shimmer">Simple Fun.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-brand-ivory/40 text-lg font-sora font-light max-w-xl mx-auto"
                    >
                        A professional team building experience delivered directly to your workplace.
                    </motion.p>
                </div>
            </section>

            {/* Why Choose */}
            <section className="section-padding gold-border-top gold-border-bottom bg-brand-navy/5 spotlight">
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <SectionLabel>The Team Advantage</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-fluid-h2 font-bodoni text-brand-ivory leading-none"
                        >
                            More Than<br />Just a Game.
                        </motion.h2>
                        <p className="text-brand-ivory/50 font-sora font-light text-lg leading-relaxed">
                            EscapeBox helps your team work together more effectively. During the game, people communicate better and solve problems as a unit, skills that carry back to the office.
                        </p>
                        <div className="space-y-4 pt-4">
                            {[
                                { label: "Better Cooperation", desc: "Work together to reach a common goal." },
                                { label: "Solve Problems Faster", desc: "See how your team makes decisions under pressure." },
                                { label: "We Come to You", desc: "Save time and travel costs. We deliver to your office." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-5 p-5 border border-brand-gold/10 hover-gold group"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold shrink-0 mt-0.5 transition-colors duration-500" strokeWidth={1.5} />
                                    <div>
                                        <p className="label-xs text-brand-ivory mb-1">{item.label}</p>
                                        <p className="text-brand-ivory/40 text-sm font-sora font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square gold-border overflow-hidden">
                        <Image
                            src="/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.00.12.jpeg"
                            alt="Team Building"
                            fill
                            className="img-hover-reveal"
                        />
                    </div>
                </div>
            </section>

            {/* Outcomes Grid */}
            <section className="section-padding bg-brand-black">
                <div className="container-xl space-y-14">
                    <div className="text-center space-y-4">
                        <SectionLabel className="justify-center">What You Gain</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-fluid-h2 font-bodoni text-brand-ivory leading-none"
                        >
                            Real Results.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gold/8">
                        {[
                            { icon: Users, label: "Better Cooperation" },
                            { icon: Zap, label: "Faster Decisions" },
                            { icon: Target, label: "Clearer Communication" },
                            { icon: BarChart3, label: "Creative Thinking" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-brand-black p-12 flex flex-col items-center gap-6 text-center group hover:bg-brand-navy/20 transition-all duration-700"
                            >
                                <div className="w-16 h-16 border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                                    <item.icon className="w-6 h-6 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <span className="font-bodoni text-brand-ivory text-lg uppercase tracking-widest">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <QuoteBlock
                quote="The best investment you can make in your team costs less than a dinner out."
                label="On Value"
            />

            <CTASection
                heading="Get a Free Quote."
                subheading="Tell us your team size and location. We'll send you a custom proposal within 24 hours."
                primaryLabel="Request a Quote"
                primaryHref="/contact"
                secondaryLabel="How It Works"
                secondaryHref="/how-it-works"
                imageSrc="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (14).jpeg"
            />
        </div>
    );
}
