import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/d733dd52-652f-4789-986b-d94d7b5dab4d/images/43bd2f43ef1bf3b9ce4f4cb14fcc315c39a8a20f604a2ed4de983d4477a087fe.png";

const scroll = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/65 to-[#1A1A1A]" />
      {/* Tactical grid */}
      <div className="absolute inset-0 grid-tactical opacity-40" />
      {/* Side rule */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-10 w-px bg-white/10" />
      <div className="absolute top-0 bottom-0 right-6 lg:right-10 w-px bg-white/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-10 h-px bg-[#E63946]"></span>
              <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
                Coach Arymmann Singh — S&amp;C Certified
              </span>
            </motion.div>

            <motion.h1
              data-testid="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] leading-[0.92] uppercase tracking-tight text-balance"
            >
              Unlock your <br />
              <span className="text-white">athletic </span>
              <span className="text-[#E63946]">potential.</span>
              <br />
              <span className="text-white/80">Train smarter.</span>
              <br />
              <span className="text-white">Perform </span>
              <span className="relative inline-block">
                better.
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#E63946]" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
            >
              Science-backed Strength &amp; Conditioning programs for athletes and
              serious fitness enthusiasts. Built around your sport, your body, and
              your goals — no fluff, no shortcuts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                data-testid="hero-cta-primary"
                onClick={() => scroll("contact")}
                className="group inline-flex items-center justify-center gap-3 bg-[#E63946] hover:bg-[#F0545F] text-white font-bold uppercase tracking-widest text-sm px-8 py-5 transition-all hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                data-testid="hero-cta-secondary"
                onClick={() => scroll("services")}
                className="inline-flex items-center justify-center gap-3 border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white font-bold uppercase tracking-widest text-sm px-8 py-5 transition-all"
              >
                See My Programs
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 flex lg:flex-col gap-6 lg:gap-10 lg:items-end"
          >
            <div>
              <p className="font-heading text-5xl text-[#E63946] leading-none">500<span className="text-white">+</span></p>
              <p className="font-subheading uppercase text-xs tracking-[0.25em] text-white/60 mt-2">Athletes Coached</p>
            </div>
            <div className="hidden lg:block w-16 h-px bg-white/20 self-end"></div>
            <div>
              <p className="font-heading text-5xl text-white leading-none">10<span className="text-[#E63946]">+</span></p>
              <p className="font-subheading uppercase text-xs tracking-[0.25em] text-white/60 mt-2">Years In The Game</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-subheading uppercase text-[10px] tracking-[0.4em]">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
