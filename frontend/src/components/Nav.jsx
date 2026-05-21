import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Programs" },
  { id: "results", label: "Results" },
  { id: "pricing", label: "Pricing" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => handleNav("hero")}
          className="flex items-center gap-2 group"
        >
          <span className="inline-block w-2.5 h-8 bg-[#E63946] group-hover:h-10 transition-all"></span>
          <span className="font-heading text-2xl tracking-wider uppercase">
            Forge<span className="text-[#E63946]">/</span>Athletics
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => handleNav(l.id)}
              className="font-subheading uppercase text-sm tracking-[0.18em] text-white/70 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E63946] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <button
          data-testid="nav-cta"
          onClick={() => handleNav("contact")}
          className="hidden lg:inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#F0545F] text-white font-bold uppercase tracking-widest text-xs px-5 py-3 transition-all hover:-translate-y-0.5"
        >
          Book Consult
          <span className="inline-block w-1.5 h-1.5 bg-white"></span>
        </button>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-[#1A1A1A] border-t border-white/10"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-link-${l.id}`}
                onClick={() => handleNav(l.id)}
                className="font-subheading uppercase tracking-[0.18em] text-base text-white/80 hover:text-[#E63946] text-left"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-cta"
              onClick={() => handleNav("contact")}
              className="mt-2 bg-[#E63946] hover:bg-[#F0545F] text-white font-bold uppercase tracking-widest text-sm px-5 py-3 self-start"
            >
              Book Consult
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
