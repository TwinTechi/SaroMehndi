import { Heart, Star, Award, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import InstagramCTA from "@/components/InstagramCTA";
import ScrollReveal from "@/components/ScrollReveal";

import aboutArtist from "@/assets/about-artist.jpg";
import bridalMehndi from "@/assets/bridal-mehndi.jpg";

const stats = [
  { icon: <Heart size={24} />, value: "100+", label: "Happy Brides" },
  { icon: <Star size={24} />, value: "2+", label: "Years Experience" },
  { icon: <Award size={24} />, value: "50+", label: "Unique Designs" },
  { icon: <Users size={24} />, value: "100+", label: "Clients Served" },
];

const reasons = [
  { title: "Intricate Artistry", desc: "Every design is hand-crafted with meticulous attention to detail, ensuring no two designs are ever the same." },
  { title: "Premium Henna Quality", desc: "We use only organic, skin-safe henna that delivers deep dark stain and lasts beautifully." },
  { title: "Personalised Designs", desc: "We work with you to understand your vision and create a design that reflects your personality and tradition." },
  { title: "Punctual & Professional", desc: "We respect your time and ensure we're on-site well ahead of schedule for every booking." },
];

export default function About() {
  return (
    <PageLayout>
      {/* ===== PAGE HERO ===== */}
      <section className="relative pt-32 pb-16 md:pb-20 mehndi-pattern-dark overflow-hidden">
        <div className="container max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 animate-fade-in-up">
            <div className="gold-divider w-12 md:w-16 opacity-70" />
            <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Our Story</span>
            <div className="gold-divider w-12 md:w-16 opacity-70" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-mehndi-ivory leading-tight animate-fade-in-up delay-100">
            About <span className="text-gradient-gold italic">SARO</span>
          </h1>
          <p className="font-body text-mehndi-ivory/70 text-sm md:text-lg leading-relaxed max-w-xl animate-fade-in-up delay-200">
            A passion for henna, a dedication to brides, and a love for making every moment unforgettable.
          </p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <ScrollReveal>
        <section className="mehndi-pattern-bg py-16 md:py-20 px-6">
          <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative animate-fade-in-scale">
              <img
                src={aboutArtist}
                alt="SARO Mehndi Artist at work"
                className="w-full rounded-3xl shadow-green object-cover aspect-[4/5]"
              />
              {/* Ornament card */}
              <div className="absolute -bottom-4 -right-2 md:-bottom-5 md:-right-5 bg-mehndi-green rounded-2xl px-4 py-2 md:px-6 md:py-4 shadow-green">
                <span className="font-display text-mehndi-gold text-2xl md:text-3xl font-semibold">2+</span>
                <p className="font-body text-mehndi-ivory/70 text-[10px] md:text-xs tracking-wide mt-1">Years of Artistry</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="gold-divider w-8 md:w-10" />
                <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">The Artist</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green leading-tight">
                A Lifelong Love for Mehndi
              </h2>
              <div className="gold-divider w-20 md:w-24" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                SARO Mehndi Artist was born from a simple, beautiful belief — that every bride deserves to feel
                like a work of art on her most important day. Based in the heart of Coimbatore, our journey
                began with a deep fascination for the ancient art of henna, passed down through generations
                of Indian tradition.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Over eight years, we have had the honour of adorning hundreds of brides, bringing their
                dreams to life through intricate patterns, flowing vines, and delicate florals. Each design
                carries our heart — a blend of classical Indian motifs and modern artistic flair.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Our philosophy is simple: Mehndi is not just an adornment. It is a blessing, a celebration,
                and a memory that lasts beyond the colour on the skin.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== STATS ===== */}
      <ScrollReveal>
        <section className="py-16 px-6 bg-mehndi-green">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="text-mehndi-gold">{stat.icon}</div>
                  <span className="font-display text-4xl font-semibold text-mehndi-ivory">{stat.value}</span>
                  <span className="font-body text-xs tracking-widest uppercase text-mehndi-ivory/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== WHY CHOOSE US ===== */}
      <ScrollReveal>
        <section className="mehndi-pattern-bg py-16 md:py-20 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14 flex flex-col items-center gap-4">
              <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Why Brides Choose Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-mehndi-green">
                The SARO Difference
              </h2>
              <div className="gold-divider w-24 md:w-32" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-8 shadow-card border border-mehndi-gold/15 hover:shadow-green transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-mehndi-gold font-display text-2xl font-light">0{i + 1}</span>
                    <div className="gold-divider w-8" />
                  </div>
                  <h3 className="font-display text-xl text-mehndi-green font-semibold mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== PHILOSOPHY ===== */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6 bg-card">
          <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="gold-divider w-8 md:w-10" />
                <span className="font-body text-mehndi-gold text-[10px] md:text-xs tracking-[0.4em] uppercase">Our Philosophy</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-mehndi-green leading-tight">
                Mehndi is a <em>Love Language</em>
              </h2>
              <div className="gold-divider w-20 md:w-24" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We believe that true beauty lies in the details. Every swirl, every dot, every petal is
                intentional — a small act of love that contributes to the grand tapestry of your bridal look.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We take time to understand your story, your culture, and your dreams before picking up the
                cone — because the best mehndi is the one that feels like you.
              </p>
            </div>
            <div>
              <img
                src={bridalMehndi}
                alt="Bridal mehndi philosophy"
                className="w-full rounded-3xl shadow-card object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== CTA ===== */}
      <InstagramCTA
        title="Ready to Begin Your Journey?"
        subtitle="Book a consultation through our Instagram and let us create something magical for your special day."
      />
    </PageLayout>
  );
}
