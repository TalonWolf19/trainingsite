import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Award, Users, Calendar } from "lucide-react";

const ABOUT_IMG =
  "https://customer-assets.emergentagent.com/job_coach-elite-training/artifacts/mato9o6z_WhatsApp%20Image%202026-05-21%20at%2014.00.48.jpeg";

function useCountUp(target, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function Counter({ value, suffix, label, testId }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(value, 1800, visible);

  return (
    <div ref={ref} data-testid={testId} className="border-l border-[#E63946] pl-5">
      <p className="font-heading text-5xl md:text-6xl leading-none">
        {count}
        <span className="text-[#E63946]">{suffix}</span>
      </p>
      <p className="font-subheading uppercase text-xs tracking-[0.25em] text-white/60 mt-3">
        {label}
      </p>
    </div>
  );
}

const BADGES = [
  { icon: Calendar, label: "2+ Years Experience" },
  { icon: Users, label: "50+ Athletes Coached" },
  { icon: Award, label: "S&C Certified" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div {...fadeUp} className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#242424]">
            <img
              src={ABOUT_IMG}
              alt="Coach Aryammann Singh"
              loading="lazy"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#E63946] px-6 py-5">
            <p className="font-heading text-3xl leading-none">S&amp;C</p>
            <p className="font-subheading uppercase text-[10px] tracking-[0.3em] mt-1">
              Certified
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#E63946]" />
            <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
              About The Coach
            </span>
          </div>

          <h2
            data-testid="about-headline"
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]"
          >
            Built for athletes who refuse <br />
            to <span className="text-[#E63946]">settle.</span>
          </h2>

          <div className="mt-8 space-y-5 text-white/75 leading-relaxed max-w-2xl">
            <p>
              I&apos;m <strong className="text-white">Aryammann Singh</strong> — a
              certified Strength &amp; Conditioning coach with 2+ years of
              hands-on experience programming for competitive athletes and serious
              lifters. From the platform to the pitch, I&apos;ve helped 50+ athletes
              hit personal records and stay healthy doing it.
            </p>
            <p>
              My philosophy is simple: <em>data over dogma</em>. Every block, every set,
              every rep is engineered around your sport demands, training history and
              recovery capacity. No cookie-cutter templates. No guesswork.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <Counter value={2} suffix="+" label="Years Coaching" testId="counter-years" />
            <Counter value={50} suffix="+" label="Athletes Coached" testId="counter-athletes" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                data-testid={`about-badge-${label.replace(/\s+/g, "-").toLowerCase()}`}
                className="inline-flex items-center gap-2 border border-[#E63946]/30 bg-[#E63946]/5 px-4 py-2"
              >
                <Icon size={14} className="text-[#E63946]" />
                <span className="font-subheading uppercase text-xs tracking-[0.2em] text-white/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
