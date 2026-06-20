"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://wa.me/919731647465?text=Hi%20Aahlada%20Events%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20and%20decor%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gold text-onyx shadow-[0_0_20px_rgba(201,168,106,0.3)] transition-all duration-300 hover:scale-105"
        aria-label="Contact Aahlada Events on WhatsApp"
      >
        {/* Breathing glow rings */}
        <span className="absolute inset-0 rounded-full border border-gold opacity-75 group-hover:animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-gold/10 blur-sm animate-gold-glow pointer-events-none" />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 fill-onyx stroke-onyx" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-surface/90 backdrop-blur-md text-gold text-xs font-sans tracking-widest uppercase border border-gold/20 py-2 px-4 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none shadow-xl">
          Chat With Us
        </span>
      </a>
    </motion.div>
  );
}
