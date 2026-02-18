"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Lock, Target, Users, MessageSquare } from "lucide-react";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

const steps = [
    {
        id: "01",
        title: "Say Hello",
        desc: "Tell us when and where you want to play. We help you choose the right puzzles for your group.",
        icon: Search,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.14.34 (1).jpeg",
    },
    {
        id: "02",
        title: "We Deliver",
        desc: "Our team brings the puzzle boxes to your home or office. Setup is quick and clean. No mess at all.",
        icon: MapPin,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.14.34 (2).jpeg",
    },
    {
        id: "03",
        title: "Time to Solve",
        desc: "Your team has 60 minutes to open the box. Use your hands, your mind, and your teamwork.",
        icon: Lock,
        image: "/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.01.52 (3).jpeg",
    },
    {
        id: "04",
        title: "Celebrate",
        desc: "After the game, your Game Master leads a debrief. Celebrate your wins and discover your team's strengths.",
        icon: Target,
        image: "/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.03.57.jpeg",
    },
];

export default function HowItWorks() {
    return (
        <div className="pt-24 bg-brand-black min-h-screen">
            {/* Header */}
            <section className="section-padding text-center spotlight">
                <div className="container-xl max-w-5xl mx-auto space-y-6">
                    <SectionLabel className="justify-center">Simple & Clear</SectionLabel>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-fluid-h1 font-bodoni text-brand-ivory leading-none gold-shimmer"
                    >
                        How It Works.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-brand-ivory/40 text-lg font-sora font-light tracking-wide"
                    >
                        From booking to winning, we make it easy.
                    </motion.p>
                </div>
            </section>

            {/* Steps */}
            <section className="bg-brand-black">
                {steps.map((step, i) => (
                    <div key={i} className="gold-border-bottom">
                        <div className={`container-xl grid grid-cols-1 lg:grid-cols-2 items-stretch ${i % 2 !== 0 ? "" : ""}`}>
                            {/* Text */}
                            <div className={`section-padding flex flex-col justify-center space-y-8 relative ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                                <span className="font-bodoni text-brand-gold/8 text-[8rem] absolute top-4 left-8 leading-none pointer-events-none select-none">
                                    {step.id}
                                </span>
                                <div className="relative z-10 space-y-6 mt-8">
                                    <step.icon className="w-8 h-8 text-brand-gold/50" strokeWidth={1.5} />
                                    <h2 className="text-fluid-h3 font-bodoni text-brand-ivory uppercase tracking-widest">{step.title}</h2>
                                    <p className="text-brand-ivory/50 font-sora font-light leading-relaxed text-lg">{step.desc}</p>
                                </div>
                            </div>
                            {/* Image */}
                            <div className={`relative h-[350px] lg:h-[500px] overflow-hidden group ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="img-hover-reveal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Game Master */}
            <section className="section-padding bg-brand-navy/10 gold-border-top gold-border-bottom spotlight">
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <SectionLabel>Personal Support</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-fluid-h2 font-bodoni text-brand-ivory leading-none"
                        >
                            Your Private<br />Game Master.
                        </motion.h2>
                        <p className="text-brand-ivory/50 font-sora font-light text-lg leading-relaxed">
                            You are never alone. An expert Game Master stays with you to explain the rules, give hints if you get stuck, and make sure everyone has a great time.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Users, label: "Expert Guide" },
                                { icon: MessageSquare, label: "Helpful Hints" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-3 border border-brand-gold/10 p-4 hover-gold">
                                    <item.icon className="w-5 h-5 text-brand-gold/40 shrink-0" strokeWidth={1.5} />
                                    <span className="label-xs text-brand-ivory/60">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video gold-border overflow-hidden">
                        <Image
                            src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (13).jpeg"
                            alt="Game Master"
                            fill
                            className="img-hover-reveal"
                        />
                    </div>
                </div>
            </section>

            <QuoteBlock
                quote="Sixty minutes. Real locks. Can your team crack the code?"
                label="The Challenge"
            />

            <CTASection
                heading="Start the Adventure."
                subheading="Book your EscapeBox today. We deliver anywhere in Dubai and Abu Dhabi."
                primaryLabel="Book Now"
                primaryHref="/contact"
                secondaryLabel="Email Us"
                secondaryHref="/contact"
            />
        </div>
    );
}
