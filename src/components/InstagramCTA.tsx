import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/COIMBATORE_MEHANDI_ARTIST_MAHA";

interface InstagramCTAProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function InstagramCTA({
  title = "Book Your Mehndi Through Instagram",
  subtitle = "Reach out to us on Instagram to check availability, view our latest work, and book your mehndi appointment.",
  dark = true,
}: InstagramCTAProps) {
  return (
    <section className={`py-16 md:py-24 px-6 ${dark ? "mehndi-pattern-dark" : "mehndi-pattern-bg"}`}>
      <ScrollReveal>
        <div className="container max-w-3xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
          {/* Ornament */}
          <div className="flex items-center gap-3 w-40 md:w-56 opacity-60">
            <div className="flex-1 gold-divider" />
            <span className={`text-lg md:text-xl ${dark ? "text-mehndi-gold" : "text-mehndi-gold"}`}>✦</span>
            <div className="flex-1 gold-divider" />
          </div>

          <h2
            className={`font-display text-3xl md:text-5xl font-semibold leading-tight px-2 ${dark ? "text-mehndi-ivory" : "text-mehndi-green"
              }`}
          >
            {title}
          </h2>

          <p className={`font-body text-sm md:text-base leading-relaxed max-w-xl px-2 ${dark ? "text-mehndi-ivory/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-10 py-4 bg-gradient-gold text-mehndi-ivory font-body text-[10px] md:text-sm tracking-widest uppercase rounded-full shadow-gold hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} />
            <span className="truncate max-w-[200px] sm:max-w-none">@COIMBATORE_MEHANDI_ARTIST_MAHA</span>
          </a>

          <p className={`font-body text-[10px] tracking-widest uppercase px-2 ${dark ? "text-mehndi-ivory/40" : "text-muted-foreground"}`}>
            DM us on Instagram for bookings &amp; enquiries
          </p>

          {/* Ornament bottom */}
          <div className="flex items-center gap-3 w-40 md:w-56 opacity-60">
            <div className="flex-1 gold-divider" />
            <span className="text-mehndi-gold text-lg md:text-xl">✦</span>
            <div className="flex-1 gold-divider" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
