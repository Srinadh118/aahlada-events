"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Grid, Star } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Weddings", "Haldi", "Sangeet", "Birthdays", "Decor"];

const galleryItems = [
  {
    id: 1,
    title: "Luxury Mandap Ceremony Decor",
    category: "Weddings",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(12).webp",
    description: "Lush white floral dome ceiling with glowing golden down-lights for traditional rituals.",
  },
  {
    id: 2,
    title: "Vibrant Haldi Floral Arch & Swing",
    category: "Haldi",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(8).webp",
    description: "Yellow-orange marigold themes with a customized floral swing setup for outdoor celebrations.",
  },
  {
    id: 3,
    title: "Sangeet Dance Stage & Fairy Lights",
    category: "Sangeet",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(13).webp",
    description: "Illuminated dynamic stages with cascading light curtains and custom monogram display boards.",
  },
  {
    id: 4,
    title: "Pastel Thematic Naming Ceremony",
    category: "Birthdays",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage.webp",
    description: "Bespoke peach and gold organic arches with floral cradle decorations.",
  },
  {
    id: 5,
    title: "Grand Entrance Walkway Styling",
    category: "Decor",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(17).webp?updatedAt=1781972531680",
    description: "Fairy light canopies with tall flower pillars welcoming guests into the main hall.",
  },
  {
    id: 6,
    title: "Luxury Reception Table Settings",
    category: "Decor",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(11).webp",
    description: "Tall glass candelabras, customized gold charger plates, and delicate white rose centerpieces.",
  },
  {
    id: 7,
    title: "Grand Wedding Reception Stage",
    category: "Weddings",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(16).webp",
    description: "Ornate wall styling with hundreds of hanging white orchids and warm backlights.",
  },
  {
    id: 8,
    title: "Lawn Evening Cocktail Setup",
    category: "Sangeet",
    img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",
    description: "Warm festoon light canopy over high-top cocktail tables on open lawns.",
  },
  {
    id: 9,
    title: "Kids Birthday Thematic Castle Decor",
    category: "Birthdays",
    img: "https://ik.imagekit.io/srinadh118kit/Photo%20Gallery%20of%20Aahlada%20Events/mainpageimage%20(10).webp",
    description: "Colorful castle silhouette backdrop with customized balloon pillars and dessert station styling.",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (id: number) => {
    const idx = galleryItems.findIndex(item => item.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigatePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  }, [lightboxIndex]);

  const navigateNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") navigatePrev();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, navigatePrev, navigateNext]);

  return (
    <div className="relative min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] gold-glow-radial pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] gold-glow-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-gold/20 bg-gold/5"
          >
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
              Cinematic Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl tracking-wide text-ivory mb-6 uppercase"
          >
            The Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-ivory-muted/60"
          >
            Take a visual tour through our signature weddings, vibrant haldi swings, detailed corporate backdrops, and private family milestones.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full border font-sans text-xs tracking-widest uppercase transition-all duration-300 ${filter === cat
                ? "bg-gold border-gold text-onyx font-semibold shadow-[0_0_15px_rgba(201,168,106,0.25)]"
                : "bg-surface/50 border-gold/15 hover:border-gold/50 text-ivory-muted hover:text-ivory"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item.id)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-glass-border cursor-pointer shadow-xl"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />

                {/* Hover overlay and text */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Details */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] text-gold uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl tracking-wide text-ivory">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-ivory-muted/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-onyx/98 backdrop-blur-2xl p-6 md:p-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-[0.65rem] tracking-[0.3em] text-gold uppercase">
                  {galleryItems[lightboxIndex].category}
                </span>
                <span className="font-serif text-lg text-ivory">
                  {galleryItems[lightboxIndex].title}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-gold hover:text-onyx hover:border-gold text-ivory transition-all duration-300"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Container (Image + Nav arrows) */}
            <div className="relative flex-grow flex items-center justify-center py-6">
              {/* Left Arrow */}
              <button
                onClick={navigatePrev}
                className="absolute left-2 md:left-6 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-gold hover:text-onyx hover:border-gold text-ivory transition-all duration-300 z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center"
              >
                <img
                  src={galleryItems[lightboxIndex].img}
                  alt={galleryItems[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg border border-glass-border shadow-2xl"
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={navigateNext}
                className="absolute right-2 md:right-6 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-gold hover:text-onyx hover:border-gold text-ivory transition-all duration-300 z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Bar Details */}
            <div className="text-center z-10 max-w-2xl mx-auto">
              <p className="font-sans text-sm text-ivory-muted/60 leading-relaxed">
                {galleryItems[lightboxIndex].description}
              </p>
              <div className="font-sans text-[0.7rem] tracking-wider text-ivory-muted/45 mt-4">
                {lightboxIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
