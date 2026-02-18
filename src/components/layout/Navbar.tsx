"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Our Games", href: "/experiences" },
    { name: "Corporate", href: "/corporate" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                        ? "bg-brand-black/90 backdrop-blur-xl border-b border-brand-gold/10 py-3"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="container-xl flex items-center justify-between px-6 md:px-12">
                    {/* Logo */}
                    <Link href="/" className="relative h-10 w-36 shrink-0">
                        <Image
                            src="/escapebox-horizontal-logo.PNG"
                            alt="EscapeBox"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="label-xs text-brand-ivory/40 hover:text-brand-gold transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex btn-gold h-11 px-8 items-center"
                        >
                            Book Now
                        </Link>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-brand-ivory/60 hover:text-brand-gold transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                className={`fixed inset-0 z-[90] bg-brand-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: i * 0.08 }}
                    >
                        <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-bodoni text-4xl text-brand-ivory hover:text-brand-gold transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-gold inline-flex items-center h-14 px-12 mt-4"
                >
                    Book Now
                </Link>
            </motion.div>
        </>
    );
}
