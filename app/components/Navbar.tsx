"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-onyx/80 backdrop-blur-xl border-b border-glass-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.15em] text-ivory group-hover:text-gold transition-colors duration-300">
              AAHLADA
            </span>
            <span className="font-sans text-[0.65rem] tracking-[0.4em] text-gold uppercase -mt-1 pl-0.5">
              Events
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative py-2 font-sans text-xs lg:text-sm tracking-[0.1em] lg:tracking-[0.15em] text-ivory/80 hover:text-gold uppercase transition-colors duration-300"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Inquiry WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/918466001818?text=Hi%20Aahlada%20Events%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20and%20decor%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 lg:gap-2 px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-full border border-gold/30 hover:border-gold bg-gold/5 hover:bg-gold/10 text-gold text-[10px] lg:text-xs font-sans tracking-[0.1em] lg:tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_10px_rgba(201,168,106,0.05)] hover:shadow-[0_0_20px_rgba(201,168,106,0.15)]"
            >
              <MessageCircle className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ivory hover:text-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-onyx/95 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl tracking-[0.1em] text-ivory hover:text-gold py-2 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold" />}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-sans text-xs tracking-wider text-ivory-muted text-center">
                Fusion of culture & creativity together
              </p>
              <a
                href="https://wa.me/918466001818?text=Hi%20Aahlada%20Events%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20and%20decor%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold text-onyx text-sm font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(201,168,106,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                Message WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
