"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Where can EscapeBox be deployed?",
        answer: "We are fully portable. Our operatives deliver the challenge directly to your corporate boardroom, private residence, or hotel retreat. Zero logistics required from your side."
    },
    {
        question: "What is the team size limit?",
        answer: "Optimal mission performance is achieved with 3–6 operatives per box. Larger groups can be accommodated by deploying multiple boxes simultaneously for a head-to-head competitive challenge."
    },
    {
        question: "How long does a mission last?",
        answer: "The engagement window is 60 minutes. Logistics and debriefing take an additional 30 minutes. The entire operational cycle is designed to fit seamlessly into high-performance schedules."
    },
    {
        question: "Is there an age requirement?",
        answer: "Our challenges are engineered for mature cognitive synthesis. While primarily designed for corporate and adult audiences, high-intelligence individuals aged 12+ can successfully participate."
    },
    {
        question: "How do we secure a mission?",
        answer: "Contact operations via our secure channel. Once mission parameters (date, location, team size) are confirmed, we'll finalize the deployment details."
    }
];

export default function FAQPage() {
    return (
        <div className="pt-32 pb-20 bg-brand-black min-h-screen spotlight">
            <section className="px-6 py-24 md:py-48 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <span className="text-[10px] uppercase tracking-[1em] text-brand-gold font-bold block">The Manual</span>
                    <h1 className="text-fluid-h1 font-bodoni text-brand-ivory uppercase tracking-widest leading-none gold-shimmer">
                        Frequently <br /> Decoded.
                    </h1>
                </motion.div>
            </section>

            <section className="px-6 py-24">
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border border-brand-gold/10 px-8 py-2 hover:border-brand-gold/30 transition-all duration-500 bg-brand-navy/5">
                                <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-ivory hover:text-brand-gold transition-colors font-bodoni text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-brand-ivory/50 font-sora font-light tracking-widest leading-relaxed py-6 text-sm border-t border-brand-gold/5 mt-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
