import { Link } from "react-router-dom";
import { Instagram, ChevronRight, Sparkles, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import InstagramCTA from "@/components/InstagramCTA";
import ScrollReveal from "@/components/ScrollReveal";

import heroBridal from "@/assets/hero-bridal.jpg";
import bridalMehndi from "@/assets/bridal-mehndi.jpg";
import engagementMehndi from "@/assets/engagement-mehndi.jpg";
import arabicMehndi from "@/assets/arabic-mehndi.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/COIMBATORE_MEHANDI_ARTIST_MAHA";

const featuredImages = [
  { src: bridalMehndi, alt: "Bridal Mehndi", label: "Bridal" },
  { src: engagementMehndi, alt: "Engagement Mehndi", label: "Engagement" },
  { src: arabicMehndi, alt: "Arabic Mehndi", label: "Arabic" },
];

const services = [
  { title: "Bridal Mehndi", desc: "Full coverage, intricate bridal designs crafted for your special day." },
  { title: "Engagement Mehndi", desc: "Elegant and romantic patterns to celebrate your new chapter." },
  { title: "Festival Mehndi", desc: "Vibrant festive designs for Eid, Diwali, and all celebrations." },
  { title: "Party Mehndi", desc: "Stylish modern designs for functions and special occasions." },
  { title: "Custom Designs", desc: "Unique mehndi art tailored to your personal style and vision." },
];

const instaGrid = [heroBridal, gallery1, gallery2, gallery3, bridalMehndi, engagementMehndi];

export default function Index() {
  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBridal}
            alt="Luxury Bridal Mehndi"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mehndi-dark-green/80 via-mehndi-green/60 to-mehndi-dark-green/90" />
          {/* Subtle mandala overlay */}
          <div className="absolute inset-0 mehndi-pattern-dark opacity-30" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col items-center gap-6 md:gap-7 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 animate-fade-in-up">
            <div className="gold-divider w-12 md:w-16 opacity-70" />
            <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Est. Coimbatore</span>
            <div className="gold-divider w-12 md:w-16 opacity-70" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-mehndi-ivory leading-tight animate-fade-in-up delay-100">
            Luxury Bridal Mehndi<br />
            <span className="text-gradient-gold italic">for Your Special Day</span>
          </h1>

          <p className="font-body text-mehndi-ivory/75 text-sm md:text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            Each design is a love story written in henna — intricate, timeless, and uniquely yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-mehndi-ivory font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              View Our Designs <ChevronRight size={16} />
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-mehndi-gold/50 text-mehndi-ivory font-body text-sm tracking-widest uppercase rounded-full hover:bg-mehndi-gold/10 transition-all duration-300"
            >
              <Instagram size={16} /> Book on Instagram
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-float">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-px h-8 bg-mehndi-gold" />
            <span className="font-body text-mehndi-gold text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <ScrollReveal>
        <section className="mehndi-pattern-bg py-16 md:py-24 px-6">
          <div className="container max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="gold-divider w-12 md:w-16" />
              <Sparkles size={18} className="text-mehndi-gold" />
              <div className="gold-divider w-12 md:w-16" />
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green leading-tight">
              Where Art Meets Tradition
            </h2>

            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              SARO Mehndi Artist is Coimbatore's premier bridal henna studio. With an eye for detail and a heart
              full of passion, we transform hands into masterpieces — blending age-old Indian traditions with
              contemporary artistry to create mehndi designs that tell your love story.
            </p>

            <div className="flex items-center gap-3">
              <div className="gold-divider w-16" />
              <Heart size={16} className="text-mehndi-gold fill-mehndi-gold" />
              <div className="gold-divider w-16" />
            </div>

            <Link
              to="/about"
              className="font-body text-sm tracking-widest uppercase text-mehndi-brown hover:text-mehndi-green border-b border-mehndi-gold/40 pb-0.5 transition-colors duration-200"
            >
              Our Story →
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== FEATURED GALLERY ===== */}
      <ScrollReveal>
        <section className="py-16 md:py-24 px-6 bg-card">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14 flex flex-col items-center gap-4">
              <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Featured Work</span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green">
                Bridal Mehndi Gallery
              </h2>
              <div className="gold-divider w-24 md:w-32" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-green transition-all duration-500 hover:-translate-y-1"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mehndi-green/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="font-display text-mehndi-ivory text-xl">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3 border border-mehndi-green text-mehndi-green font-body text-sm tracking-widest uppercase rounded-full hover:bg-mehndi-green hover:text-mehndi-ivory transition-all duration-300"
              >
                View Full Gallery <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== SERVICES PREVIEW ===== */}
      <ScrollReveal>
        <section className="mehndi-pattern-bg py-16 md:py-24 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14 flex flex-col items-center gap-4">
              <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">What We Offer</span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green">
                Our Services
              </h2>
              <div className="gold-divider w-24 md:w-32" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-7 shadow-card hover:shadow-green transition-all duration-300 hover:-translate-y-1 border border-mehndi-gold/15 flex flex-col gap-3"
                >
                  <span className="text-mehndi-gold text-2xl font-display font-light">0{i + 1}</span>
                  <h3 className="font-display text-xl text-mehndi-green font-semibold">{svc.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-mehndi-green text-mehndi-ivory font-body text-sm tracking-widest uppercase rounded-full hover:bg-mehndi-brown transition-all duration-300"
              >
                All Services <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== INSTAGRAM GRID ===== */}
      <ScrollReveal>
        <section className="py-16 md:py-24 px-6 bg-card">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-12 flex flex-col items-center gap-4">
              <Instagram size={28} className="text-mehndi-gold" />
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green">
                Follow Our Journey
              </h2>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs md:text-sm text-mehndi-gold tracking-widest break-all px-4"
              >
                @COIMBATORE_MEHANDI_ARTIST_MAHA
              </a>
              <div className="gold-divider w-24 md:w-32" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {instaGrid.map((src, i) => (
                <a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-mehndi-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram size={32} className="text-mehndi-ivory" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== INSTAGRAM CTA ===== */}
      <InstagramCTA />
    </PageLayout>
  );
}
