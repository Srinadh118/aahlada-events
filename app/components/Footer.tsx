import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08080C] border-t border-glass-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.15em] text-ivory">
              AAHLADA
            </span>
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase -mt-1 pl-0.5">
              Events
            </span>
          </Link>
          <p className="font-serif italic text-gold text-lg">
            "Fusion of culture & creativity together"
          </p>
          <p className="font-sans text-sm text-ivory-muted max-w-sm leading-relaxed">
            Aahlada Events is a premier wedding planning and luxury decoration studio based in Hyderabad. Since 2020, we have been crafting bespoke celebrations that blend traditional roots with contemporary artistry.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-sans text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            Discover
          </h4>
          <nav className="flex flex-col gap-3 font-sans text-sm text-ivory-muted">
            <Link href="/" className="hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-gold transition-colors duration-300">
              Our Services
            </Link>
            <Link href="/gallery" className="hover:text-gold transition-colors duration-300">
              Portfolio Gallery
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors duration-300">
              Connect With Us
            </Link>
          </nav>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-sans text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            The Studio
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm text-ivory-muted">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                H.No: 5-1-97/P2, Near Mahila Bhavan, Sahebnagar, Vanasthalipuram, Hyderabad, 500070
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+919731647465" className="hover:text-gold transition-colors">
                  +91 97316 47465
                </a>
                <a href="tel:+918466001818" className="hover:text-gold transition-colors">
                  +91 84660 01818
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:celebrate@aahladaevents.com" className="hover:text-gold transition-colors text-xs xl:text-sm">
                celebrate@aahladaevents.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span>Daily 7:00 AM – 11:45 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-ivory-muted/80 text-center md:text-left">
          &copy; {new Date().getFullYear()} Aahlada Events. All Rights Reserved. Crafted for luxury.
        </p>
        <div className="flex gap-6">
          <a
            href="https://wa.me/919731647465"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory-muted/80 hover:text-gold transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
