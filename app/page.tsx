"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star, Quote, Award, Heart, Sparkles, MessageCircle } from "lucide-react";

// Curated royalty-free high-quality images representing Indian luxury weddings and events
const heroImages = [
  "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(16).webp?updatedAt=1781972532446", // Luxury Stage
  "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(11).webp?updatedAt=1781972532779", // Floral Walkway
  "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(13).webp?updatedAt=1781972532455", // Event Dinner Decor
];

const previews = [
  {
    title: "Luxury Mandap & Stage",
    category: "Weddings",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(12).webp",
  },
  {
    title: "Haldi & Sangeet Floral Decor",
    category: "Cultural",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(8).webp",
  },
  {
    title: "Bespoke Table Styling",
    category: "Receptions",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000",
  },
  {
    title: "Grand Entrance Lighting",
    category: "Corporate & Private",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(14).webp?updatedAt=1781972531898",
  },
];

const testimonials = [
  {
    quote: "The representative was very friendly and professional. Their prices are reasonable and the decorators were well-trained. The staff was extremely courteous and responsive to our specific stage requirements.",
    author: "Rakesh Sharma",
    event: "Wedding Decor & stage planning",
    rating: 5,
  },
  {
    quote: "Aahlada Events made my mother's 50th birthday a grand success at a very reasonable and unbelievable budget! The immediate response to queries and attention to custom detail was incredible.",
    author: "Sneha Reddy",
    event: "50th Birthday private party",
    rating: 5,
  },
  {
    quote: "The team is extremely professional and polite. They handled our sangeet and haldi decor beautifully. Always ready to help and change layouts on the spot when requested. High-quality execution!",
    author: "Pranati & Karthik",
    event: "Sangeet & Haldi celebrations",
    rating: 5,
  },
];

export default function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-onyx overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Ken Burns Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === activeHero ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${src}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
              <div className="absolute inset-0 bg-onyx/45" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-gold font-medium">
              Elite Event Studio Hyderabad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl tracking-[0.08em] text-ivory mb-6 leading-[1.1] uppercase"
          >
            AAHLADA EVENTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif italic text-lg md:text-2xl text-gold mb-12 tracking-wide max-w-2xl"
          >
            "Fusion of culture & creativity together"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold text-onyx font-sans text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-gold-hover hover:-translate-y-0.5 shadow-[0_0_20px_rgba(201,168,106,0.3)] hover:shadow-[0_0_30px_rgba(201,168,106,0.5)]"
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-ivory/20 hover:border-gold/50 bg-white/5 hover:bg-white/10 text-ivory text-sm font-sans tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              Inquire Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-ivory/50">
            Scroll To Begin
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* 2. INTRODUCTION & METRICS */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto z-10">
        {/* Background Glows */}
        <div className="absolute top-10 left-0 w-[400px] h-[400px] gold-glow-radial pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] gold-glow-radial pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-ivory leading-tight">
              Crafting Memorable Celebrations in Hyderabad
            </h2>
            <div className="w-16 h-[1px] bg-gold my-2" />
            <p className="font-sans text-sm md:text-base text-ivory-muted/60 leading-relaxed">
              Established in 2020 in Sahebnagar, Vanasthalipuram, Aahlada Events is built on the philosophy that every event is an intimate, visual narrative. By merging deep cultural traditions with clean modern design styling, we turn banquet halls, stages, and open lawns into cinematic experiences.
            </p>
            <p className="font-sans text-sm md:text-base text-ivory-muted/60 leading-relaxed">
              Whether you are planning a magnificent wedding mandap floral setup, a lively Haldi/Sangeet, a grand corporate display, or an intimate birthday, our team ensures every corner breathes elegance and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {/* Stat Card 1 */}
            <div className="glass-panel p-3 sm:p-4 md:p-8 rounded-2xl flex flex-col gap-4 border border-glass-border">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-3xl md:text-4xl text-ivory block font-medium">300+</span>
                <span className="font-sans text-xs tracking-wider text-ivory-muted/60 uppercase">Events Orchestrated</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="glass-panel p-3 sm:p-4 md:p-8 rounded-2xl flex flex-col gap-4 border border-glass-border">
              <Star className="w-8 h-8 text-gold fill-gold/10" />
              <div>
                <span className="font-serif text-3xl md:text-4xl text-ivory block font-medium">5.0 ★</span>
                <span className="font-sans text-xs tracking-wider text-ivory-muted/60 uppercase">Verified Client Rating</span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="glass-panel p-3 sm:p-4 md:p-8 rounded-2xl flex flex-col gap-4 border border-glass-border">
              <Heart className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-3xl md:text-4xl text-ivory block font-medium">100%</span>
                <span className="font-sans text-xs tracking-wider text-ivory-muted/60 uppercase">Bespoke Customization</span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="glass-panel p-3 sm:p-4 md:p-8 rounded-2xl flex flex-col gap-4 border border-glass-border">
              <Sparkles className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-3xl md:text-4xl text-ivory block font-medium">2020</span>
                <span className="font-sans text-xs tracking-wider text-ivory-muted/60 uppercase">Est. Studio Year</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PORTFOLIO PREVIEW */}
      <section className="relative py-24 bg-[#09090D] border-t border-b border-glass-border z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold">
                Curated Gallery
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-ivory">
                The Portfolio Highlights
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 group font-sans text-xs tracking-[0.2em] text-gold uppercase transition-all duration-300"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previews.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-glass-border shadow-2xl cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-gold uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg tracking-wide text-ivory">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="relative py-24 md:py-36 px-6 z-10 max-w-4xl mx-auto text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gold-glow-radial pointer-events-none -z-10" />

        <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />

        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {testimonials.map((t, idx) => {
              if (idx !== activeTestimonial) return null;
              return (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <p className="font-serif text-xl md:text-2xl md:leading-relaxed text-ivory/90 tracking-wide italic">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col items-center mt-4">
                    <span className="font-sans text-sm tracking-[0.15em] text-gold uppercase font-semibold">
                      {t.author}
                    </span>
                    <span className="font-sans text-xs tracking-wider text-ivory-muted mt-1">
                      {t.event}
                    </span>
                    <div className="flex gap-1 mt-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "w-6 bg-gold" : "bg-white/20"
                }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5. INQUIRY BLOCK */}
      <section className="relative py-20 px-6 z-10 max-w-6xl mx-auto mb-20">
        <div className="glass-panel p-10 md:p-16 rounded-3xl border border-glass-border flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10" />

          <div className="flex flex-col gap-4 text-center lg:text-left">
            <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold">
              Begin Planning
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-ivory leading-tight uppercase tracking-wider">
              Bring Your Celebration <br className="hidden md:block" /> To Life
            </h3>
            <p className="font-sans text-sm text-ivory-muted/60 max-w-md mt-2">
              Let's create something extraordinary. Send us a message on WhatsApp for custom decor packages starting from ₹7,000+.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/919731647465?text=Hi%20Aahlada%20Events%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20and%20decor%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none sm:w-60 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gold text-onyx font-sans text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-gold-hover hover:-translate-y-0.5 shadow-[0_0_20px_rgba(201,168,106,0.2)]"
            >
              <MessageCircle className="w-6 h-6 fill-onyx animate-pulse" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex-1 sm:flex-none sm:w-60 inline-flex items-center justify-center px-6 py-4 rounded-full border border-ivory/20 hover:border-gold/50 bg-white/5 hover:bg-white/10 text-ivory text-sm font-sans tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
