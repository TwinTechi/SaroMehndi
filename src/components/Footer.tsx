import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const INSTAGRAM_URL = "https://www.instagram.com/COIMBATORE_MEHANDI_ARTIST_MAHA";
const INSTAGRAM_HANDLE = "@COIMBATORE_MEHANDI_ARTIST_MAHA";

export default function Footer() {
  return (
    <footer className="mehndi-pattern-dark text-mehndi-ivory/80">
      {/* Gold divider */}
      <div className="gold-divider opacity-40" />

      <div className="container max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        {/* Brand */}
        <Link to="/" className="flex flex-col items-center leading-none group">
          <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover:scale-[1.05]">
            <span className="font-display text-4xl font-semibold tracking-widest text-gradient-gold">
              SARO
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-mehndi-gold opacity-60 mt-2 animate-pulse" />
          </div>
          <span className="font-body text-mehndi-gold/80 text-[11px] tracking-[0.4em] uppercase font-medium mt-1">
            Mehndi Artist
          </span>
        </Link>

        {/* Gold divider ornament */}
        <div className="flex items-center gap-3 w-48 opacity-60">
          <div className="flex-1 gold-divider" />
          <span className="text-mehndi-gold text-lg">✦</span>
          <div className="flex-1 gold-divider" />
        </div>

        {/* Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center gap-3 text-mehndi-gold hover:text-mehndi-light-gold transition-colors duration-200 group px-6"
        >
          <Instagram size={24} className="group-hover:scale-110 transition-transform duration-200" />
          <span className="font-body text-xs md:text-sm tracking-wider break-all text-center">
            {INSTAGRAM_HANDLE}
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 mt-4">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Gallery", path: "/gallery" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-mehndi-ivory/50 hover:text-mehndi-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-mehndi-ivory/30 tracking-wide">
          © {new Date().getFullYear()} SARO Mehndi Artist · Coimbatore, India
        </p>
      </div>
    </footer>
  );
}
