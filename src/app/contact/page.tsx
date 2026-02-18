"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 bg-brand-black min-h-screen spotlight">
            <section className="px-6 py-24 md:py-48 text-center bg-brand-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <span className="text-[10px] uppercase tracking-[1em] text-brand-gold font-bold block">Get In Touch</span>
                    <h1 className="text-fluid-h1 font-bodoni text-brand-ivory uppercase tracking-widest leading-none gold-shimmer">
                        Contact <br /> Us Today.
                    </h1>
                </motion.div>
            </section>

            <section className="px-6 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Contact Info */}
                    <div className="space-y-16">
                        <h2 className="text-3xl font-bodoni text-brand-ivory uppercase tracking-widest">How to reach us.</h2>
                        <div className="space-y-12">
                            {[
                                { icon: Mail, label: 'Email', val: 'hello@escapebox.com' },
                                { icon: Phone, label: 'Phone', val: '+254 700 000 000' },
                                { icon: MapPin, label: 'Location', val: 'Dubai & Abu Dhabi' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-8 group">
                                    <div className="w-12 h-12 border border-brand-gold/10 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-colors">
                                        <item.icon className="w-5 h-5 text-brand-gold/40" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">{item.label}</p>
                                        <p className="text-brand-ivory/60 font-sora tracking-widest text-lg">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-navy/5 p-12 lg:p-20 gold-outline-refined space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bodoni text-brand-ivory uppercase tracking-widest">Send a Message</h3>
                            <p className="text-brand-ivory/40 text-sm font-sora font-light tracking-widest">Fill out the form below and we will get back to you soon.</p>
                        </div>

                        <form className="space-y-10">
                            <div className="space-y-8">
                                <input
                                    type="text"
                                    placeholder="YOUR NAME"
                                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 text-brand-ivory placeholder:text-brand-ivory/20 focus:border-brand-gold outline-none transition-colors text-[10px] tracking-[0.4em]"
                                />
                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL"
                                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 text-brand-ivory placeholder:text-brand-ivory/20 focus:border-brand-gold outline-none transition-colors text-[10px] tracking-[0.4em]"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="HOW CAN WE HELP?"
                                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 text-brand-ivory placeholder:text-brand-ivory/20 focus:border-brand-gold outline-none transition-colors text-[10px] tracking-[0.4em] resize-none"
                                />
                            </div>
                            <Button className="w-full h-20 bg-brand-gold text-brand-black hover:bg-transparent hover:text-brand-gold border border-brand-gold uppercase tracking-[0.4em] font-bold text-xs rounded-none transition-all duration-700">
                                Send Message
                                <Send className="ml-4 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
