"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star, Sparkles, Heart, Camera, PartyPopper, Home, Building2, Flame } from "lucide-react";

const services = [
  {
    title: "Wedding Planning & Decor",
    description: "End-to-end luxury wedding planning. We manage coordinate styling, floral color schemes, grand layout design, and entrance decor to weave a cohesive story.",
    bullets: ["Custom Theme & Concept Design", "Luxury Floral Architecture", "Seating & Lounge Arrangements", "Aisle & Walkway Decor"],
    pricing: "Custom Consultation",
    icon: Heart,
    waText: "I am interested in your Wedding Planning & Decor services."
  },
  {
    title: "Wedding Stage & Mandap Decor",
    description: "Creating the sacred center of your wedding. Breath-taking traditional and contemporary floral stages and mandaps, built to feel magical.",
    bullets: ["Floral Mandap Backdrops", "Illuminated Stage Settings", "Elegant Drapery & Hangings", "Statue & Idol Installations"],
    pricing: "Custom Consultation",
    icon: Sparkles,
    waText: "I am interested in your Wedding Stage & Mandap Decor services."
  },
  {
    title: "Engagement / Haldi / Sangeet",
    description: "Curating festive, high-energy settings. From bright yellow Haldi backdrops with floral swings to vibrant, starry stage backdrops for Sangeet nights.",
    bullets: ["Floral Swings & Photobooths", "Traditional Color Hangings (Marigold, Drapes)", "Sangeet Dance Stages & Light Arrays", "Vibrant Low-Seating Lounges"],
    pricing: "Starting from ₹7,000+",
    icon: Flame,
    waText: "I am interested in your Engagement, Haldi, or Sangeet decor services."
  },
  {
    title: "Photography & Videography",
    description: "Capturing every emotional detail of your celebration through our trusted professional visual partners. High-definition candid shots and cinematic videos.",
    bullets: ["Candid & Traditional Photography", "Pre-Wedding & Drone Shoots", "Cinematic Wedding Teasers & Highlight Films", "Luxe Printed Photobooks"],
    pricing: "Packages ₹25,000 – ₹30,000",
    icon: Camera,
    waText: "I am interested in your Photography & Videography packages."
  },
  {
    title: "Birthday & Private Events",
    description: "Making personal milestones feel grand. Thematic birthday balloon/floral arches, naming ceremonies, housewarmings, and custom family anniversaries.",
    bullets: ["Thematic Kid's Birthday Backdrops", "Naming Ceremony Cradle Decor", "Housewarming Traditional Door Framings", "Anniversary Dining Decor"],
    pricing: "Starting from ₹7,000+",
    icon: PartyPopper,
    waText: "I am interested in your Birthday or Private Event decor services."
  },
  {
    title: "Venue & Banquet Decoration",
    description: "Transforming standard venues into customized luxury experiences. We work with indoor banquet halls and outdoor garden lawns across Hyderabad.",
    bullets: ["Indoor Hall Acoustic & Visual Drapery", "Outdoor Garden Tenting & Fairy Lights", "Lobby & Foyer Welcomes", "Theme Ceiling Hanging Installations"],
    pricing: "Custom Quote",
    icon: Home,
    waText: "I am interested in your Venue & Banquet decoration services."
  },
  {
    title: "Branding & Event Styling",
    description: "Sleek, sophisticated event designs for corporate parties, store launches, product displays, and customized signage.",
    bullets: ["Corporate Welcome Backdrops", "High-End Lighting Setups", "Exhibition / Display Stall Styling", "Sleek Custom Letterings & Brand Placards"],
    pricing: "Custom Quote",
    icon: Building2,
    waText: "I am interested in your Corporate Branding & Event Styling services."
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] gold-glow-radial pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-1/4 w-[600px] h-[600px] gold-glow-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-gold/20 bg-gold/5"
          >
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
              Bespoke Event Styling
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl tracking-wide text-ivory mb-6 uppercase"
          >
            Our Event Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed"
          >
            From stunning stage mandaps in Sahebnagar to premium wedding decors across LB Nagar and Hyderabad, we provide custom styling and production tailored for every celebration.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(201,168,106,0.05)]">
                    <IconComponent className="w-5 h-5 text-gold animate-pulse" />
                  </div>
                  
                  <h3 className="font-serif text-2xl tracking-wide text-ivory mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-ivory-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 font-sans text-xs text-ivory-muted/90">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 pt-6 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="font-sans text-[0.65rem] tracking-wider text-ivory-muted/50 uppercase">
                      Investment
                    </span>
                    <span className="font-sans text-xs text-gold uppercase tracking-wider font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <a
                    href={`https://wa.me/919731647465?text=Hi%20Aahlada%20Events%2C%20${encodeURIComponent(service.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 hover:bg-gold/10 text-gold text-[0.65rem] font-sans tracking-widest uppercase transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Inquire
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
