import { motion } from "framer-motion";
import { fadeUpStagger } from "@/lib/motion";
import { FlaskConical, Target, LineChart } from "lucide-react";

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Science-Based Programming",
    desc: "Every block uses peer-reviewed periodization, RPE-based autoregulation and velocity loss thresholds. No bro-science.",
    stat: "01",
  },
  {
    icon: Target,
    title: "Individualized Approach",
    desc: "Movement screen, training history, sport demands and life stress all drive your plan. Two athletes never get the same program.",
    stat: "02",
  },
  {
    icon: LineChart,
    title: "Proven Track Record",
    desc: "From regional powerlifters to D1 starters and pro fighters — the methods are tested under real competition pressure.",
    stat: "03",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative py-24 md:py-32 border-t border-white/10 bg-[#1A1A1A] overflow-hidden"
    >
      <div className="absolute inset-0 grid-tactical opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#E63946]" />
              <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
                Why Train With Me
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
              The methodology behind <br />
              <span className="text-[#E63946]">elite outcomes.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/65 leading-relaxed">
            Strength is the foundation. Power, speed, and resilience are built on top.
            Every athlete I coach trains under the same three principles — the only
            three things that have ever moved the needle in sport performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUpStagger(i)}
              data-testid={`philosophy-pillar-${i}`}
              className="relative bg-[#1A1A1A] p-8 md:p-10 lg:p-12 group hover:bg-[#242424] transition-colors duration-500"
            >
              <span className="absolute top-6 right-6 font-heading text-7xl text-white/5 group-hover:text-[#E63946]/15 transition-colors">
                {p.stat}
              </span>
              <div className="w-14 h-14 bg-[#E63946] flex items-center justify-center mb-7 group-hover:rotate-3 transition-transform duration-500">
                <p.icon size={26} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wide leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-white/65 leading-relaxed">{p.desc}</p>
              <div className="mt-7 w-10 h-px bg-[#E63946] group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
