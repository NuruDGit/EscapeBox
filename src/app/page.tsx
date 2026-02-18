"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/* ─── Animation Variants ─── */
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: EASE },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
});

/* ─── Bento Cell ─── */
function BentoCell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`bento-cell group ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 60]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-brand-black overflow-x-hidden"
      onMouseMove={handleMouseMove}
      style={{ "--x": `${mousePos.x}%`, "--y": `${mousePos.y}%` } as any}
    >
      {/* ─── GRAIN OVERLAY ─── */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-noise" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.22.jpeg"
            alt="EscapeBox"
            fill
            priority
            className="object-cover object-center opacity-30 grayscale"
          />
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/30 to-brand-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(14,14,17,0.6)_100%)]" />
        </div>

        {/* Centered Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full pt-28"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-5 mb-14"
          >
            <div className="w-10 h-[1px] bg-brand-gold/40" />
            <span className="label-xs text-brand-gold/60 tracking-[0.25em]">Portable Escape Rooms · UAE</span>
            <div className="w-10 h-[1px] bg-brand-gold/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-bodoni text-brand-ivory uppercase tracking-tight leading-[0.9] mb-10"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            The Escape Room<br />
            <span className="gold-shimmer">Reimagined</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-brand-ivory/45 text-base font-sora font-light tracking-wide leading-relaxed max-w-md mx-auto mb-14"
          >
            Experience premium, handmade puzzle boxes delivered directly to your door.
            Solve intricate mechanical mysteries guided by our expert Game Master.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="btn-gold inline-flex items-center gap-3 h-14 px-10 group">
              Book Your Box
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/how-it-works" className="btn-ghost-gold inline-flex items-center h-14 px-10">
              See How It Works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── STAT STRIP ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="bg-brand-black border-y border-brand-gold/10"
      >
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-gold/10">
          {[
            { value: "60", unit: "min", label: "Per Game" },
            { value: "3–6", unit: "", label: "Players" },
            { value: "15", unit: "kg", label: "Box Weight" },
            { value: "4–6", unit: "", label: "Lock Systems" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-6 md:px-12 text-center">
              <div className="flex items-baseline justify-center gap-1.5 mb-2">
                <span className="font-bodoni text-brand-ivory text-3xl md:text-4xl leading-none">{s.value}</span>
                {s.unit && <span className="font-bodoni text-brand-gold/50 text-base">{s.unit}</span>}
              </div>
              <p className="label-xs text-brand-ivory/25">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          WHAT IS ESCAPEBOX
      ══════════════════════════════════════════ */}
      <section className="section-padding bg-brand-black relative spotlight">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Text */}
          <div className="space-y-8">
            <SectionLabel>What is EscapeBox?</SectionLabel>
            <motion.h2 {...fadeUp} className="text-fluid-h2 font-bodoni text-brand-ivory leading-none">
              Real Puzzles.<br />In Your Hands.
            </motion.h2>
            <motion.div {...fadeUp} className="space-y-5 text-brand-ivory/50 text-lg font-sora font-light leading-relaxed">
              <p>
                Imagine an escape room, but in a beautifully crafted box. Real locks, hidden keys, and mechanical puzzles that you solve as a team.
              </p>
              <p>
                No screens. No apps. No mess. We deliver to your location and our Game Master guides you through the experience.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <Link href="/how-it-works" className="inline-flex items-center gap-3 label-xs text-brand-gold hover-gold px-6 py-3 border border-brand-gold/20 hover:border-brand-gold transition-all duration-500 group">
                Learn How It Works
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden gold-border">
              <Image
                src="/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.01.52.jpeg"
                alt="The EscapeBox"
                fill
                className="img-hover-reveal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              {/* Info Tag */}
              <div className="absolute bottom-8 left-8 right-8 bg-brand-black/80 backdrop-blur-md border border-brand-gold/20 p-5">
                <p className="label-xs text-brand-gold mb-1">Handcrafted</p>
                <p className="font-bodoni text-brand-ivory text-xl uppercase tracking-widest">Wood & Metal</p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-brand-gold/10 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-brand-gold/10 animate-float-delayed" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE 1
      ══════════════════════════════════════════ */}
      <QuoteBlock
        quote="You feel the puzzle as much as you solve it."
        label="The EscapeBox Experience"
      />

      {/* ══════════════════════════════════════════
          BENTO GRID — WHY ESCAPEBOX
      ══════════════════════════════════════════ */}
      <section className="section-padding bg-brand-black">
        <div className="container-xl space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <SectionLabel>Why EscapeBox</SectionLabel>
              <motion.h2 {...fadeUp} className="text-fluid-h2 font-bodoni text-brand-ivory leading-none">
                Built Different.<br />By Design.
              </motion.h2>
            </div>
            <motion.p {...fadeUp} className="text-brand-ivory/40 font-sora font-light max-w-xs text-sm leading-relaxed">
              Every detail of the EscapeBox is engineered for one thing: an unforgettable experience.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {/* Cell 1 — Large, Handmade (col 1-8, row 1) */}
            <BentoCell className="col-span-12 md:col-span-8 h-[420px] md:h-[500px]">
              <Image
                src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (11).jpeg"
                alt="Handmade"
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 space-y-3">
                <span className="label-xs text-brand-gold">01 . Handmade</span>
                <h3 className="font-bodoni text-brand-ivory text-3xl uppercase tracking-widest">Crafted by Hand.</h3>
                <p className="text-brand-ivory/50 font-sora text-sm font-light max-w-sm">
                  Real timber, antique metal, and precision-machined locks. Every box is a work of art.
                </p>
              </div>
            </BentoCell>

            {/* Cell 2 — Tall, Portable (col 9-12, row 1-2) */}
            <BentoCell className="col-span-12 md:col-span-4 h-[300px] md:h-[500px]">
              <Image
                src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.14.34.jpeg"
                alt="Portable"
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                <span className="label-xs text-brand-gold">02 . Portable</span>
                <h3 className="font-bodoni text-brand-ivory text-2xl uppercase tracking-widest">We Come to You.</h3>
                <p className="text-brand-ivory/50 font-sora text-xs font-light">
                  Home, office, hotel: we deliver and set up.
                </p>
              </div>
            </BentoCell>

            {/* Cell 3 — Medium, Tactile (col 1-5, row 2) */}
            <BentoCell className="col-span-12 md:col-span-5 h-[300px]">
              <Image
                src="/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.03.57.jpeg"
                alt="Tactile"
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                <span className="label-xs text-brand-gold">03 . Tactile</span>
                <h3 className="font-bodoni text-brand-ivory text-2xl uppercase tracking-widest">Touch & Solve.</h3>
                <p className="text-brand-ivory/50 font-sora text-xs font-light">
                  No screens. Real mechanical puzzles you can feel.
                </p>
              </div>
            </BentoCell>

            {/* Cell 4 — Stat Cell (col 6-8, row 2) */}
            <BentoCell className="col-span-12 md:col-span-3 h-[300px] flex flex-col justify-between p-10 bg-brand-navy/30">
              <span className="label-xs text-brand-gold/50">04 . The Numbers</span>
              <div className="space-y-8">
                {[
                  { n: "60", u: "min", l: "Per Game" },
                  { n: "15", u: "kg", l: "Box Weight" },
                  { n: "4–6", u: "", l: "Lock Systems" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="font-bodoni text-brand-gold text-4xl leading-none">{s.n}</span>
                    <span className="font-bodoni text-brand-gold/40 text-lg">{s.u}</span>
                    <span className="label-xs text-brand-ivory/30 ml-2">{s.l}</span>
                  </div>
                ))}
              </div>
            </BentoCell>

            {/* Cell 5 — Game Master (col 9-12, row 3) — already col-span-4 above */}
            <BentoCell className="col-span-12 md:col-span-4 h-[300px]">
              <Image
                src="/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (13).jpeg"
                alt="Game Master"
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                <span className="label-xs text-brand-gold">05 . Game Master</span>
                <h3 className="font-bodoni text-brand-ivory text-2xl uppercase tracking-widest">Expert Guide.</h3>
                <p className="text-brand-ivory/50 font-sora text-xs font-light">
                  A professional stays with you to guide the experience.
                </p>
              </div>
            </BentoCell>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS — SIMPLE 3 STEPS
      ══════════════════════════════════════════ */}
      <section className="section-padding bg-brand-navy/10 gold-border-top gold-border-bottom">
        <div className="container-xl space-y-16">
          <div className="text-center space-y-4">
            <SectionLabel className="justify-center">Simple to Start</SectionLabel>
            <motion.h2 {...fadeUp} className="text-fluid-h2 font-bodoni text-brand-ivory leading-none">
              Three Steps to Adventure.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-gold/8">
            {[
              {
                n: "I",
                title: "Book a Game",
                desc: "Tell us your date, location, and team size. We'll handle everything else.",
                img: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.14.34 (1).jpeg",
              },
              {
                n: "II",
                title: "We Deliver",
                desc: "Our team arrives, sets up the boxes, and briefs your Game Master.",
                img: "/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.01.52 (1).jpeg",
              },
              {
                n: "III",
                title: "Solve & Win",
                desc: "60 minutes. Real locks. Can your team crack the code?",
                img: "/assets/whatsapp2/WhatsApp Image 2026-02-05 at 09.01.52 (3).jpeg",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="bg-brand-black group relative overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={step.img} alt={step.title} fill className="img-hover-reveal" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black" />
                  <span className="absolute top-6 left-6 font-bodoni text-6xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-700 leading-none">
                    {step.n}
                  </span>
                </div>
                <div className="p-10 space-y-4">
                  <h3 className="font-bodoni text-brand-ivory text-xl uppercase tracking-widest">{step.title}</h3>
                  <p className="text-brand-ivory/40 font-sora text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/40 transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-3 btn-ghost-gold h-12 px-10">
              Full Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE 2 — TEAM
      ══════════════════════════════════════════ */}
      <QuoteBlock
        quote="The best teams don't just work together. They solve together."
        label="On Teamwork"
      />

      {/* ══════════════════════════════════════════
          WHO IS IT FOR
      ══════════════════════════════════════════ */}
      <section className="section-padding bg-brand-black spotlight">
        <div className="container-xl space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <SectionLabel>Every Occasion</SectionLabel>
              <motion.h2 {...fadeUp} className="text-fluid-h2 font-bodoni text-brand-ivory leading-none">
                Perfect For<br />Everyone.
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gold/8">
            {[
              { label: "Companies", desc: "Team building that actually works.", img: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (10).jpeg" },
              { label: "Schools", desc: "Critical thinking through play.", img: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (12).jpeg" },
              { label: "Families", desc: "A premium adventure at home.", img: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (8).jpeg" },
              { label: "Events", desc: "Make any gathering unforgettable.", img: "/assets/whatsapp1/WhatsApp Image 2026-02-05 at 09.12.23 (7).jpeg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="group relative h-[380px] overflow-hidden bg-brand-black"
              >
                <Image src={item.img} alt={item.label} fill className="img-hover-reveal" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                  <h3 className="font-bodoni text-brand-ivory text-2xl uppercase tracking-widest">{item.label}</h3>
                  <p className="text-brand-ivory/40 font-sora text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <CTASection
        heading="Ready to Play?"
        subheading="Book your EscapeBox today. We deliver to your door across Dubai and Abu Dhabi."
        primaryLabel="Book Your Box"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
