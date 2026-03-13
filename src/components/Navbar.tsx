import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
];

const INSTAGRAM_URL = "https://www.instagram.com/COIMBATORE_MEHANDI_ARTIST_MAHA";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(scrolled || open)
          ? "bg-mehndi-green/95 backdrop-blur-md shadow-green py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Brand */}
          <Link to="/" className="flex flex-col leading-none group relative">
            <div className="flex items-center gap-1.5 transform transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-wider text-gradient-gold">
                SARO
              </span>
              <div className="w-1 h-1 rounded-full bg-mehndi-gold opacity-60 mt-1 animate-pulse" />
            </div>
            <span className="font-body text-mehndi-gold/80 text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium mt-0.5 ml-0.5">
              Mehndi Artist
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 relative group ${location.pathname === link.path
                  ? "text-mehndi-gold"
                  : "text-mehndi-ivory/80 hover:text-mehndi-gold"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-mehndi-gold transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-gradient-gold rounded-full font-body text-xs tracking-widest uppercase font-medium text-mehndi-ivory shadow-gold hover:opacity-90 transition-opacity duration-200"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-mehndi-ivory p-2.5 rounded-xl bg-mehndi-green/30 backdrop-blur-md border border-mehndi-gold/20 shadow-lg active:scale-95 transition-all duration-300 relative z-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-mehndi-green transition-all duration-500 transform ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 mehndi-pattern-dark opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`font-display text-4xl tracking-wide transition-all duration-500 transform ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"} ${location.pathname === link.path
                ? "text-mehndi-gold"
                : "text-mehndi-ivory"
                }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-16 h-1 bg-mehndi-gold/30 my-4" />

          <div className={`transition-all duration-500 delay-300 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="font-body text-mehndi-gold/50 text-[10px] tracking-[0.3em] uppercase mb-4">Bookings & Inquiries</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-10 py-4 bg-gradient-gold rounded-full font-body text-xs tracking-[0.2em] uppercase font-semibold text-mehndi-ivory shadow-gold active:scale-95 transition-transform"
            >
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
