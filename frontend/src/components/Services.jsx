import { motion } from "framer-motion";
import { fadeUpStagger } from "@/lib/motion";
import { Dumbbell, Wifi, Trophy, Users, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "1-on-1 Personal Coaching",
    tag: "In-Person",
    desc: "Hands-on training at the facility. Velocity-based loading, real-time technique fixes, and a program written for you, not a template.",
    img: "https://images.pexels.com/photos/12698200/pexels-photo-12698200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Wifi,
    title: "Online Coaching & Programming",
    tag: "Remote",
    desc: "Custom 12-week blocks delivered weekly. Video review, async messaging, full periodization and biofeedback tracking.",
    img: "https://images.unsplash.com/photo-1772450014622-1c209d012c2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxhdGhsZXRlJTIwbGlmdGluZyUyMHdlaWdodHN8ZW58MHx8fHwxNzc5MzI3NzE4fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Trophy,
    title: "Athletic Performance Packages",
    tag: "Pre-Season",
    desc: "Sport-specific blocks: jump training, sprint mechanics, peaking protocols. Built for combine prep, in-season retention, off-season power.",
    img: "https://images.pexels.com/photos/14585533/pexels-photo-14585533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Users,
    title: "Group Training Sessions",
    tag: "Small Group",
    desc: "Max 6 athletes per session. Same coaching depth, shared intensity. Ideal for team-mates, training partners, and family squads.",
    img: "https://images.unsplash.com/photo-1664673531303-c933ac4cee70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwbGlmdGluZyUyMHdlaWdodHN8ZW58MHx8fHwxNzc5MzI3NzE4fDA&ixlib=rb-4.1.0&q=85",
  },
];

export default function Services() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 border-t border-white/10 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#E63946]" />
              <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
                Programs & Services
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] max-w-3xl">
              Four ways to train. <br />
              <span className="text-[#E63946]">One standard</span> of excellence.
            </h2>
          </div>
          <p className="max-w-md text-white/65 leading-relaxed">
            Whether you&apos;re prepping for a season, chasing a PR, or rebuilding from
            injury — there&apos;s a track for you. All programs include movement
            screening, periodised blocks and unlimited messaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUpStagger(i)}
              data-testid={`service-card-${i}`}
              className="group relative bg-[#242424] border border-white/10 hover:border-[#E63946]/50 transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#242424]/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#E63946] text-white font-subheading uppercase text-[10px] tracking-[0.3em] px-3 py-1">
                  {s.tag}
                </span>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#1A1A1A] border border-[#E63946]/40 flex items-center justify-center">
                  <s.icon size={20} className="text-[#E63946]" />
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/65 leading-relaxed">{s.desc}</p>
                <button
                  data-testid={`service-cta-${i}`}
                  onClick={() => scrollTo("contact")}
                  className="mt-6 inline-flex items-center gap-2 font-subheading uppercase tracking-[0.25em] text-xs text-white group-hover:text-[#E63946] transition-colors"
                >
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
