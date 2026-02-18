import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-black gold-border-top pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
            <div className="bg-noise absolute inset-0 pointer-events-none" />

            <div className="container-xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/escapebox-horizontal-logo.PNG"
                                alt="EscapeBox"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-brand-ivory/30 font-sora font-light text-sm leading-relaxed max-w-xs">
                            Premium portable escape room experiences delivered to your door across Dubai and Abu Dhabi.
                        </p>
                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="w-10 h-10 border border-brand-gold/10 flex items-center justify-center hover-gold"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border border-brand-gold/10 flex items-center justify-center hover-gold"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="label-xs text-brand-gold">Menu</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "How It Works", href: "/how-it-works" },
                                { label: "Our Games", href: "/experiences" },
                                { label: "Corporate", href: "/corporate" },
                                { label: "About Us", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-ivory/30 hover:text-brand-gold transition-colors duration-300 font-sora text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-5 space-y-6">
                        <h4 className="label-xs text-brand-gold">Get In Touch</h4>
                        <div className="space-y-5">
                            <a
                                href="mailto:hello@escapebox.com"
                                className="flex items-center gap-4 text-brand-ivory/30 hover:text-brand-gold transition-colors duration-300 group"
                            >
                                <Mail className="w-4 h-4 text-brand-gold/30 group-hover:text-brand-gold shrink-0" strokeWidth={1.5} />
                                <span className="font-sora text-sm">hello@escapebox.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-brand-ivory/30">
                                <MapPin className="w-4 h-4 text-brand-gold/30 shrink-0" strokeWidth={1.5} />
                                <span className="font-sora text-sm">Dubai & Abu Dhabi, UAE</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="btn-gold inline-flex items-center h-12 px-8"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="gold-border-top pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-ivory/20 font-sora text-xs">
                        &copy; {new Date().getFullYear()} EscapeBox. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-brand-ivory/20 hover:text-brand-gold transition-colors duration-300 font-sora text-xs">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-brand-ivory/20 hover:text-brand-gold transition-colors duration-300 font-sora text-xs">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
