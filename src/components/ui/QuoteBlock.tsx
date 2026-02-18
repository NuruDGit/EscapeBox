"use client";

import { motion } from "framer-motion";

interface QuoteBlockProps {
    quote: string;
    author?: string;
    label?: string;
}

export function QuoteBlock({ quote, author, label }: QuoteBlockProps) {
    return (
        <section className="section-padding bg-brand-navy/10 relative overflow-hidden gold-border-top gold-border-bottom spotlight">
            {/* Decorative quotation mark */}
            <div className="absolute top-8 left-8 md:left-16 font-bodoni text-[12rem] leading-none text-brand-gold/5 select-none pointer-events-none">
                "
            </div>

            <div className="container-xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl mx-auto text-center space-y-10"
                >
                    {label && (
                        <span className="label-xs text-brand-gold/40 block">{label}</span>
                    )}
                    <blockquote className="font-bodoni text-2xl md:text-4xl lg:text-5xl text-brand-ivory italic leading-tight tracking-wide">
                        "{quote}"
                    </blockquote>
                    {author && (
                        <div className="flex items-center justify-center gap-6">
                            <div className="w-12 h-[1px] bg-brand-gold/30" />
                            <cite className="label-xs text-brand-gold/60 not-italic">{author}</cite>
                            <div className="w-12 h-[1px] bg-brand-gold/30" />
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
