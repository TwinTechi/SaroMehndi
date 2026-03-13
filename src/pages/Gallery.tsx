import { useState, useRef } from "react";
import { X, ZoomIn, Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import InstagramCTA from "@/components/InstagramCTA";
import ScrollReveal from "@/components/ScrollReveal";

// Import new assets
import img1 from "@/assets/WhatsApp Image 2026-03-13 at 9.44.56 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-03-13 at 9.44.57 PM (1).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-03-13 at 9.44.57 PM (2).jpeg";
import img4 from "@/assets/WhatsApp Image 2026-03-13 at 9.44.57 PM.jpeg";
import img5 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.04 PM (1).jpeg";
import img6 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.04 PM (2).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.04 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.05 PM (1).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.05 PM (2).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.05 PM.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.06 PM (1).jpeg";
import img12 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.06 PM (2).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.06 PM.jpeg";
import img14 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.07 PM (1).jpeg";
import img15 from "@/assets/WhatsApp Image 2026-03-13 at 9.45.07 PM.jpeg";

import vid1 from "@/assets/WhatsApp Video 2026-03-13 at 9.45.08 PM (1).mp4";
import vid2 from "@/assets/WhatsApp Video 2026-03-13 at 9.45.08 PM.mp4";
import vid3 from "@/assets/WhatsApp Video 2026-03-13 at 9.45.10 PM (1).mp4";
import vid4 from "@/assets/WhatsApp Video 2026-03-13 at 9.45.10 PM (2).mp4";
import vid5 from "@/assets/WhatsApp Video 2026-03-13 at 9.45.10 PM.mp4";

const categories = ["All", "Bridal", "Full Hand", "Arabic", "Videos"];

const galleryItems = [
  { src: vid1, alt: "Bridal Mehndi Video 1", category: "Videos", type: "video" },
  { src: img1, alt: "Intricate Bridal Design", category: "Bridal", type: "image" },
  { src: img2, alt: "Detailed Hand Work", category: "Full Hand", type: "image" },
  { src: vid2, alt: "Bridal Mehndi Video 2", category: "Videos", type: "video" },
  { src: img3, alt: "Arabic Style Mehndi", category: "Arabic", type: "image" },
  { src: img4, alt: "Luxury Bridal Henna", category: "Bridal", type: "image" },
  { src: img5, alt: "Classic Indian Pattern", category: "Full Hand", type: "image" },
  { src: vid3, alt: "Bridal Mehndi Video 3", category: "Videos", type: "video" },
  { src: img6, alt: "Elegant Bridal Mehndi", category: "Bridal", type: "image" },
  { src: img7, alt: "Modern Mehndi Art", category: "Arabic", type: "image" },
  { src: img8, alt: "Detailed Bridal Henna", category: "Bridal", type: "image" },
  { src: vid4, alt: "Bridal Mehndi Video 4", category: "Videos", type: "video" },
  { src: img9, alt: "Exquisite Hand Design", category: "Full Hand", type: "image" },
  { src: img10, alt: "Traditional Mehndi", category: "Bridal", type: "image" },
  { src: img11, alt: "Vibrant Henna Art", category: "Full Hand", type: "image" },
  { src: vid5, alt: "Bridal Mehndi Video 5", category: "Videos", type: "video" },
  { src: img12, alt: "Saro Mehndi Special", category: "Bridal", type: "image" },
  { src: img13, alt: "Intricate Floral Design", category: "Arabic", type: "image" },
  { src: img14, alt: "Bridal Grace Mehndi", category: "Bridal", type: "image" },
  { src: img15, alt: "Beautiful Henna Work", category: "Full Hand", type: "image" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; type: string } | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <PageLayout>
      {/* ===== PAGE HERO ===== */}
      <section className="relative pt-32 pb-16 md:pb-20 mehndi-pattern-dark overflow-hidden">
        <ScrollReveal>
          <div className="container max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="gold-divider w-12 md:w-16 opacity-70" />
              <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Our Portfolio</span>
              <div className="gold-divider w-12 md:w-16 opacity-70" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-mehndi-ivory leading-tight">
              Mehndi <span className="text-gradient-gold italic">Gallery</span>
            </h1>
            <p className="font-body text-mehndi-ivory/70 text-sm md:text-base leading-relaxed max-w-lg">
              A showcase of our finest work — each piece a testament to artistry, tradition, and dedication.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="mehndi-pattern-bg py-8 md:py-10 px-4 md:px-6">
        <ScrollReveal>
          <div className="container max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-[10px] md:text-xs tracking-widest uppercase px-4 py-2 md:px-6 md:py-2.5 rounded-full border transition-all duration-300 ${activeCategory === cat
                    ? "bg-mehndi-green text-mehndi-ivory border-mehndi-green shadow-green"
                    : "bg-transparent text-mehndi-green border-mehndi-green/30 hover:border-mehndi-green hover:bg-mehndi-green/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== PINTEREST GRID ===== */}
      <section className="mehndi-pattern-bg pb-16 md:pb-20 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="break-inside-avoid group relative overflow-hidden rounded-xl md:rounded-2xl shadow-card cursor-pointer animate-fade-in-scale"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setLightbox({ src: item.src, alt: item.alt, type: item.type })}
              >
                {item.type === "video" ? (
                  <div className="relative">
                    <video
                      src={item.src}
                      muted
                      playsInline
                      className="w-full object-cover rounded-xl md:rounded-2xl"
                    />
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-mehndi-green/80 p-1.5 md:p-2 rounded-full">
                      <Play size={12} className="md:size-4 text-mehndi-ivory fill-mehndi-ivory" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-mehndi-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-1 md:gap-2">
                  <ZoomIn size={24} className="md:size-7 text-mehndi-ivory" />
                  <span className="font-body text-mehndi-ivory text-[8px] md:text-xs tracking-widest uppercase">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-muted-foreground py-16">
              No content found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-mehndi-dark-green/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-mehndi-ivory/80 hover:text-mehndi-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>

          {lightbox.type === "video" ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-2xl shadow-green animate-fade-in-scale"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-green animate-fade-in-scale"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <p className="absolute bottom-6 left-0 right-0 text-center font-display text-mehndi-gold text-sm italic">
            {lightbox.alt}
          </p>
        </div>
      )}

      {/* ===== CTA ===== */}
      <InstagramCTA
        title="Love What You See?"
        subtitle="Follow us on Instagram for daily mehndi inspiration and to book your appointment with SARO Mehndi Artist."
      />
    </PageLayout>
  );
}
