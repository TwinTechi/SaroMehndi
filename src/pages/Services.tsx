import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import InstagramCTA from "@/components/InstagramCTA";
import ScrollReveal from "@/components/ScrollReveal";

import bridalMehndi from "@/assets/bridal-mehndi.jpg";
import engagementMehndi from "@/assets/engagement-mehndi.jpg";
import festivalMehndi from "@/assets/festival-mehndi.jpg";
import partyMehndi from "@/assets/party-mehndi.jpg";
import customMehndi from "@/assets/custom-mehndi.jpg";
import arabicMehndi from "@/assets/arabic-mehndi.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/COIMBATORE_MEHANDI_ARTIST_MAHA";

const services = [
  {
    id: "01",
    title: "Bridal Mehndi",
    desc: "The centrepiece of your bridal ceremony. Our bridal mehndi covers both hands and feet with richly layered, deeply intricate designs featuring peacocks, lotuses, paisleys, and traditional motifs. Every design is bespoke, crafted after understanding your outfit, jewellery, and personal style.",
    features: ["Both hands & feet", "Full arm coverage available", "Premium organic henna", "Bridal consultation included"],
    image: bridalMehndi,
  },
  {
    id: "02",
    title: "Engagement Mehndi",
    desc: "A beautiful celebration of your love story begins here. Engagement mehndi designs are elegant, romantic, and refined — perfect for pre-wedding functions. We incorporate symbols of love and prosperity that carry deep meaning.",
    features: ["Both hands included", "Romantic floral motifs", "Wrist to mid-arm design", "Quick application option"],
    image: engagementMehndi,
  },
  {
    id: "03",
    title: "Festival Mehndi",
    desc: "Celebrate Eid, Diwali, Karva Chauth, Navratri, and every festival in style. Our festival mehndi designs are vibrant, joyful, and full of festive spirit — combining traditional and contemporary elements.",
    features: ["Single or both hands", "Festive motifs & patterns", "Quick application", "Bold rich colour"],
    image: festivalMehndi,
  },
  {
    id: "04",
    title: "Party Mehndi",
    desc: "Looking beautiful at a reception, mehendi function, or any special event? Our party mehndi offers stylish, modern designs that are applied swiftly and look stunning in photographs.",
    features: ["Modern & Arabic styles", "Fast application", "Wrist or half-hand options", "Geometric & floral designs"],
    image: partyMehndi,
  },
  {
    id: "05",
    title: "Custom Mehndi Designs",
    desc: "Have a specific idea in mind? Our custom mehndi service allows you to co-create your design with our artist. Whether inspired by a theme, pattern, or cultural motif — we bring your imagination to life.",
    features: ["One-on-one consultation", "Sketch preview available", "Any style or pattern", "Truly one-of-a-kind"],
    image: customMehndi,
  },
  {
    id: "06",
    title: "Arabic Mehndi",
    desc: "Bold, flowing, and effortlessly beautiful. Arabic mehndi is characterised by its open spaces, large floral motifs, and dramatic vines. Perfect for brides who love a modern, sophisticated look.",
    features: ["Bold floral patterns", "Open-space aesthetic", "Dark rich henna stain", "Quick-dry formula"],
    image: arabicMehndi,
  },
];

export default function Services() {
  return (
    <PageLayout>
      {/* ===== PAGE HERO ===== */}
      <section className="relative pt-32 pb-16 md:pb-20 mehndi-pattern-dark overflow-hidden">
        <ScrollReveal>
          <div className="container max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="gold-divider w-12 md:w-16 opacity-70" />
              <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">What We Do</span>
              <div className="gold-divider w-12 md:w-16 opacity-70" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-mehndi-ivory leading-tight">
              Our <span className="text-gradient-gold italic">Services</span>
            </h1>
            <p className="font-body text-mehndi-ivory/70 text-sm md:text-base leading-relaxed max-w-lg">
              From grand bridal designs to delicate party mehndi — every service is crafted with love, skill, and artistry.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="mehndi-pattern-bg py-16 md:py-20 px-6">
        <div className="container max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id}>
              <div
                className={`flex flex-col gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="overflow-hidden rounded-3xl shadow-green aspect-[4/3] md:aspect-auto">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-mehndi-green rounded-full flex items-center justify-center shadow-green border border-mehndi-gold/30">
                    <span className="font-display text-mehndi-gold text-xs md:text-sm font-semibold">{svc.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
                  <div className="flex items-center gap-3">
                    <div className="gold-divider w-8 md:w-10" />
                    <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Service</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-mehndi-green leading-tight">
                    {svc.title}
                  </h2>
                  <div className="gold-divider w-16 md:w-20" />
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>

                  <ul className="flex flex-col gap-2 mt-1 md:mt-2">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 font-body text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-mehndi-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 md:mt-4 px-6 py-3 md:px-8 md:py-4 bg-gradient-gold text-mehndi-ivory font-body text-[10px] md:text-xs tracking-widest uppercase rounded-full shadow-gold hover:opacity-90 transition-all hover:scale-105 self-start"
                  >
                    Book This Service <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <InstagramCTA
        title="Book Your Mehndi Through Instagram"
        subtitle="Ready to book? Send us a DM on Instagram to check availability and secure your date."
      />
    </PageLayout>
  );
}
