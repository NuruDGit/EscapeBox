"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface QuoteBlockProps {
    quote: string;
    author?: string;
    label?: string;
}

export function QuoteBlock({ quote, author, label }: QuoteBlockProps) {
    return (
        <section className="relative py-32 md:py-48 bg-brand-black overflow-hidden spotlight border-y border-brand-gold/10">
            {/* Rich Background Texture/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(198,167,94,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            </div>

            <div className="container-xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Label & Decorative Icon */}
                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-8 lg:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-8 h-[1px] bg-brand-gold" />
                            <span className="label-xs text-brand-gold tracking-[0.3em] font-medium">{label || "Perspective"}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="hidden lg:flex w-20 h-20 border border-brand-gold/20 items-center justify-center relative group"
                        >
                            <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700 scale-110" />
                            <Quote className="w-8 h-8 text-brand-gold/30" strokeWidth={1} />
                        </motion.div>
                    </div>

                    {/* Middle Column: Vertical Divider */}
                    <div className="hidden lg:block lg:col-span-1 border-l border-brand-gold/10 h-64 self-center ml-auto mr-auto" />

                    {/* Right Column: Quote Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        >
                            <blockquote className="font-bodoni text-3xl md:text-5xl lg:text-6xl text-brand-ivory italic leading-[1.15] tracking-tight">
                                "{quote}"
                            </blockquote>
                        </motion.div>

                        {author && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-12 h-[1px] bg-brand-gold/30" />
                                <cite className="label-xs text-brand-ivory/60 not-italic tracking-[0.4em]">{author}</cite>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Subtle corner detail */}
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-brand-gold/5 pointer-events-none" />
        </section>
    );
}
