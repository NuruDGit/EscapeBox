"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export function SectionLabel({ children, className = "", animate = true }: SectionLabelProps) {
    const content = (
        <div className={`inline-flex items-center gap-4 ${className}`}>
            <div className="w-8 h-[1px] bg-brand-gold/60" />
            <span className="label-xs text-brand-gold">{children}</span>
        </div>
    );

    if (!animate) return content;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {content}
        </motion.div>
    );
}
