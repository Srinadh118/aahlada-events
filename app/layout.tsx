import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aahlada Events | Luxury Wedding & Event Planner Hyderabad",
  description: "Aahlada Events is Hyderabad's premium event planning and decor studio, specializing in bespoke weddings, anniversaries, birthday parties, and corporate events in Vanasthalipuram and across Hyderabad.",
  keywords: [
    "Event decorators Hyderabad",
    "Wedding decoration Vanasthalipuram",
    "Birthday party decor Hyderabad",
    "Event planner Hyderabad",
    "Corporate event decorator Hyderabad",
    "Stage decorators Hyderabad",
    "Mandap decoration Hyderabad",
    "Aahlada Events",
  ],
  openGraph: {
    title: "Aahlada Events | Luxury Wedding & Event Planner Hyderabad",
    description: "Bespoke decorations and event planning serving Vanasthalipuram and Hyderabad. Fusion of culture & creativity together.",
    url: "https://aahladaevents.com",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-onyx text-ivory selection:bg-gold selection:text-onyx">
        {/* SVG Noise overlay for paper/metallic premium feel */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-noise" />
        
        {/* LocalBusiness JSON-LD schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aahlada Events",
              "image": "https://aahladaevents.com/next.svg",
              "telephone": ["+91 97316 47465", "+91 84660 01818"],
              "email": "celebrate@aahladaevents.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "House No: 5-1-97/P2, Pushapraana Nilayam, Near Mahila Bhavan, Sahebnagar, Vanasthalipuram",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500070",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.35364,
                "longitude": 78.56433
              },
              "url": "https://aahladaevents.com",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:00",
                "closes": "23:45"
              }
            })
          }}
        />

        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

