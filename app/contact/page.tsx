"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Clock, Calendar, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: "Wedding",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury message submission
    setSubmitted(true);
    setTimeout(() => {
      // Direct user to whatsapp with prefilled details as well, for premium immediate connectivity
      const whatsappText = `Hi Aahlada Events, I would like to inquire about an event. Here are my details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Date: ${formData.date}
- Event Type: ${formData.eventType}
- Message: ${formData.message}`;
      
      const encodedText = encodeURIComponent(whatsappText);
      window.open(`https://wa.me/919731647465?text=${encodedText}`, "_blank");
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        eventType: "Wedding",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-onyx pt-32 pb-24 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] gold-glow-radial pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] gold-glow-radial pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-gold/20 bg-gold/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
              Start The Conversation
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl tracking-wide text-ivory mb-6 uppercase"
          >
            Connect With Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-ivory-muted/60"
          >
            Let us align your vision with our execution. Fill out the inquiry form below, or contact us directly on WhatsApp.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8 justify-between"
          >
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide">
                Studio Coordinates
              </h2>
              <p className="font-sans text-sm text-ivory-muted/60 leading-relaxed">
                Located in Sahebnagar, Vanasthalipuram, we cater to events across Hyderabad. Stop by our planning studio or give us a call to check calendar availability.
              </p>

              {/* Direct Info list */}
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest text-gold uppercase font-semibold mb-1">
                      Our Location
                    </h4>
                    <p className="font-sans text-sm text-ivory-muted/60 leading-relaxed">
                      House No: 5-1-97/P2, Pushapraana Nilayam,<br />
                      Near Mahila Bhavan, Sahebnagar,<br />
                      Vanasthalipuram, Hyderabad - 500070
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest text-gold uppercase font-semibold mb-1">
                      Phones
                    </h4>
                    <div className="flex flex-col text-sm text-ivory-muted/60">
                      <a href="tel:+919731647465" className="hover:text-gold transition-colors">
                        +91 97316 47465 (Primary)
                      </a>
                      <a href="tel:+918466001818" className="hover:text-gold transition-colors">
                        +91 84660 01818 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest text-gold uppercase font-semibold mb-1">
                      Email
                    </h4>
                    <a href="mailto:celebrate@aahladaevents.com" className="font-sans text-sm text-ivory-muted/60 hover:text-gold transition-colors">
                      celebrate@aahladaevents.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest text-gold uppercase font-semibold mb-1">
                      Timings
                    </h4>
                    <p className="font-sans text-sm text-ivory-muted/60">
                      Daily 7:00 AM – 11:45 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Dark Styled Google Map */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-glass-border shadow-xl">
              <iframe
                title="Aahlada Events Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6638947194874!2d78.57286297520918!3d17.331758483545947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1f157c28615%3A0x93f642808ddca371!2sAahlada%20Events!5e0!3m2!1sen!2sin!4v1781978231962!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 opacity-75 grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-gold/10 rounded-2xl bg-gradient-to-t from-onyx/20 to-transparent" />
            </div>
          </motion.div>

          {/* Form Column (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 xs:p-8 md:p-12 rounded-3xl border border-glass-border shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <h2 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide mb-8">
                Request A Custom Proposal
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rakesh Sharma"
                      className="bg-white/5 border border-white/10 focus:border-gold rounded-xl py-3 px-4 text-sm text-ivory placeholder-ivory-muted/45 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="bg-white/5 border border-white/10 focus:border-gold rounded-xl py-3 px-4 text-sm text-ivory placeholder-ivory-muted/45 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rakesh@example.com"
                      className="bg-white/5 border border-white/10 focus:border-gold rounded-xl py-3 px-4 text-sm text-ivory placeholder-ivory-muted/45 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-xl py-3 px-4 text-sm text-ivory outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                    Event Classification
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="bg-surface border border-white/10 focus:border-gold rounded-xl py-3.5 px-4 text-sm text-ivory outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="Wedding">Wedding Planning & Decor</option>
                    <option value="HaldiSangeet">Engagement / Haldi / Sangeet</option>
                    <option value="Birthday">Birthday & Private Celebration</option>
                    <option value="Photography">Photography Packages</option>
                    <option value="Corporate">Branding & Corporate Event</option>
                    <option value="Other">Other Bespoke Requirement</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-[0.7rem] uppercase tracking-widest text-gold font-medium">
                    Your Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your vision, stage size, floral preferences, or color guidelines..."
                    className="bg-white/5 border border-white/10 focus:border-gold rounded-xl py-3 px-4 text-sm text-ivory placeholder-ivory-muted/45 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full mt-4 flex items-center justify-center gap-1.5 md:gap-2.5 py-4 rounded-full bg-gold text-onyx font-sans text-xs md:text-sm tracking-wider md:tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-gold-hover hover:-translate-y-0.5 shadow-[0_0_20px_rgba(201,168,106,0.2)] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {submitted ? (
                    <>
                      <Send className="w-4 h-4 animate-bounce" />
                      Redirecting<span className="hidden sm:inline"> to WhatsApp</span>...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit<span className="hidden sm:inline"> & Open WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
