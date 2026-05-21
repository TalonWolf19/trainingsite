import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// TikTok icon (lucide doesn't ship a stable one)
const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05 6.33 6.33 0 0 0-5.3 9.71 6.33 6.33 0 0 0 11.41-3.79V8.45a8.16 8.16 0 0 0 4.75 1.52V6.69a4.85 4.85 0 0 1-.63.04Z" />
  </svg>
);

const FOOTER_LINKS = [
  {
    heading: "Programs",
    items: ["1-on-1 Coaching", "Online Programming", "Athletic Packages", "Group Training"],
  },
  {
    heading: "Resources",
    items: ["Training Journal", "Free Programs", "FAQ", "Athlete Login"],
  },
  {
    heading: "Connect",
    items: ["Book Consult", "Email Coach", "Partnerships", "Press Kit"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're in", { description: "Weekly training tips incoming." });
      setEmail("");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      if (err?.response?.status === 409) {
        toast.info("Already subscribed", { description: detail });
      } else {
        toast.error("Subscription failed", { description: detail || "Try again later." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="relative bg-[#1A1A1A] border-t border-white/10">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
              Free Training Tips
            </p>
            <h3 className="mt-3 font-heading text-3xl md:text-4xl uppercase leading-tight">
              Get smarter every <span className="text-[#E63946]">Monday.</span>
            </h3>
            <p className="mt-3 text-white/60 max-w-md">
              One actionable training breakdown straight from the coach&apos;s notes — every
              Monday at 6am. Zero spam.
            </p>
          </div>
          <form
            data-testid="newsletter-form"
            onSubmit={subscribe}
            className="lg:col-span-6 flex flex-col sm:flex-row gap-3"
          >
            <input
              data-testid="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-white/20 focus:border-[#E63946] focus:outline-none py-4 px-5 text-white placeholder:text-white/35"
              required
            />
            <button
              data-testid="newsletter-submit"
              type="submit"
              disabled={loading}
              className="bg-[#E63946] hover:bg-[#F0545F] disabled:opacity-50 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 transition-all hover:-translate-y-0.5"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-2.5 h-8 bg-[#E63946]"></span>
            <span className="font-heading text-2xl uppercase tracking-wider">
              Forge<span className="text-[#E63946]">/</span>Athletics
            </span>
          </div>
          <p className="text-white/55 leading-relaxed max-w-md">
            Elite Strength &amp; Conditioning coaching for athletes who refuse the
            average. Built by Coach Aryammann Singh, S&amp;C Certified.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Youtube, label: "YouTube", href: "#" },
              { Icon: TikTokIcon, label: "TikTok", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                data-testid={`social-${label.toLowerCase()}`}
                href={href}
                aria-label={label}
                className="w-11 h-11 border border-white/15 hover:border-[#E63946] hover:bg-[#E63946] flex items-center justify-center text-white/75 hover:text-white transition-all"
              >
                <Icon size={16} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="font-subheading uppercase text-xs tracking-[0.3em] text-[#E63946] mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/65 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="font-subheading uppercase tracking-[0.25em] text-xs text-white/40">
            © {new Date().getFullYear()} Forge Athletics. All rights reserved.
          </p>
          <p className="font-subheading uppercase tracking-[0.25em] text-xs text-white/40">
            Train smarter. Perform better.
          </p>
        </div>
      </div>
    </footer>
  );
}
