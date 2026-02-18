"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
    heading?: string;
    subheading?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    imageSrc?: string;
}

export function CTASection({
    heading = "Ready to Play?",
    subheading = "Book your EscapeBox today. We deliver to your door across Dubai and Abu Dhabi.",
    primaryLabel = "Book Your Box",
    primaryHref = "/contact",
    secondaryLabel = "How It Works",
    secondaryHref = "/how-it-works",
    imageSrc = "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (4).jpeg",
}: CTASectionProps) {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden spotlight">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt="EscapeBox Experience"
                    fill
                    className="object-cover grayscale opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
            </div>

            {/* Gold scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent top-1/3" />
            </div>

            <div className="relative z-10 text-center section-padding container-xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-12 max-w-5xl mx-auto"
                >
                    <span className="label-xs text-brand-gold/60 block">Start Your Adventure</span>
                    <h2 className="text-fluid-h1 font-bodoni text-brand-ivory gold-shimmer leading-none">
                        {heading}
                    </h2>
                    <p className="text-brand-ivory/50 font-sora font-light text-lg tracking-wide leading-relaxed max-w-xl mx-auto">
                        {subheading}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                        <Link
                            href={primaryHref}
                            className="btn-gold inline-flex items-center gap-4 h-16 px-12 group"
                        >
                            {primaryLabel}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            href={secondaryHref}
                            className="btn-ghost-gold inline-flex items-center gap-4 h-16 px-12"
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
