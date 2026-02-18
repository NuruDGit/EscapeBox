"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Users, Coffee, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const experiences = [
    {
        label: "Companies",
        desc: "Team building that actually works. Improve communication and celebrate success together.",
        icon: Building2,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (10).jpeg",
        href: "/corporate",
    },
    {
        label: "Schools",
        desc: "Help students develop critical thinking and learn the importance of teamwork through play.",
        icon: GraduationCap,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (12).jpeg",
        href: "/contact",
    },
    {
        label: "Families",
        desc: "A sophisticated, high-quality adventure brought directly to your home for special events.",
        icon: Users,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (8).jpeg",
        href: "/contact",
    },
    {
        label: "Social Events",
        desc: "Make your next party or meetup more exciting with a unique physical challenge.",
        icon: Coffee,
        image: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (7).jpeg",
        href: "/contact",
    },
];

export default function ExperiencesPage() {
    return (
        <div className="pt-24 bg-brand-black min-h-screen">
            {/* Header */}
            <section className="section-padding text-center spotlight">
                <div className="container-xl max-w-5xl mx-auto space-y-6">
                    <SectionLabel className="justify-center">Our Games</SectionLabel>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-fluid-h1 font-bodoni text-brand-ivory leading-none gold-shimmer"
                    >
                        For Every<br />Occasion.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-brand-ivory/40 text-lg font-sora font-light"
                    >
                        Whether it's a team day, a birthday, or a school trip, we have the perfect challenge.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding-sm bg-brand-black">
                <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gold/8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[500px] overflow-hidden bg-brand-black"
                        >
                            <Image
                                src={exp.image}
                                alt={exp.label}
                                fill
                                className="img-hover-reveal"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-10 space-y-5">
                                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                                    <exp.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="font-bodoni text-brand-ivory text-3xl uppercase tracking-widest">{exp.label}</h2>
                                    <p className="text-brand-ivory/40 font-sora text-sm font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {exp.desc}
                                    </p>
                                </div>
                                <Link
                                    href={exp.href}
                                    className="inline-flex items-center gap-3 label-xs text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                >
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTASection
                heading="Find Your Game."
                subheading="Not sure which experience is right for you? Send us a message and we'll help you choose."
                primaryLabel="Contact Us"
                primaryHref="/contact"
                secondaryLabel="How It Works"
                secondaryHref="/how-it-works"
            />
        </div>
    );
}
