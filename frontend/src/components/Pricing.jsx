import { motion } from "framer-motion";
import { fadeUpStagger } from "@/lib/motion";
import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    tagline: "Foundation builder",
    price: 149,
    blurb: "For lifters ready to ditch random workouts and train with intent.",
    features: [
      "4-week periodized program",
      "Monthly movement check-in (video)",
      "Async messaging (48hr response)",
      "Mobility & warm-up library",
      "Nutrition primer guide",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Performance",
    tagline: "Most chosen",
    price: 289,
    blurb: "The complete coaching experience for serious athletes & competitors.",
    features: [
      "Custom 12-week blocks",
      "Weekly video review & calls",
      "Unlimited messaging (24hr)",
      "Sport-specific power & speed work",
      "Recovery, sleep & nutrition coaching",
      "TrainHeroic app + biofeedback tracking",
    ],
    cta: "Claim My Spot",
    popular: true,
  },
  {
    name: "Elite",
    tagline: "Pro & podium",
    price: 549,
    blurb: "Hands-on, daily-touch coaching for pro and podium-chasing athletes.",
    features: [
      "Everything in Performance",
      "Daily check-ins & adjustments",
      "Bi-weekly 60-min video sessions",
      "Competition prep & peaking blocks",
      "Direct phone line (priority)",
      "Annual in-person training camp",
    ],
    cta: "Apply Now",
    popular: false,
  },
];

const scroll = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#E63946]" />
            <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
              Investment In Performance
            </span>
            <span className="block w-10 h-px bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Pick your <span className="text-[#E63946]">tier.</span>
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed">
            All plans are month-to-month. No long contracts. Cancel anytime — though
            you probably won&apos;t want to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUpStagger(i)}
              data-testid={`pricing-tier-${t.name.toLowerCase()}`}
              className={`relative flex flex-col p-8 lg:p-10 transition-all duration-500 ${
                t.popular
                  ? "bg-[#242424] border-2 border-[#E63946] lg:scale-105 lg:-translate-y-2 z-10"
                  : "bg-[#242424] border border-white/10 hover:border-[#E63946]/40 hover:-translate-y-1"
              }`}
            >
              {t.popular && (
                <span
                  data-testid="pricing-popular-badge"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E63946] text-white font-subheading uppercase text-[10px] tracking-[0.3em] px-4 py-2 whitespace-nowrap"
                >
                  Most Popular
                </span>
              )}
              <p className="font-subheading uppercase tracking-[0.25em] text-xs text-[#E63946]">
                {t.tagline}
              </p>
              <h3 className="mt-3 font-heading text-4xl md:text-5xl uppercase">
                {t.name}
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed min-h-[3rem]">
                {t.blurb}
              </p>
              <div className="mt-7 flex items-baseline gap-2 border-t border-b border-white/10 py-6">
                <span className="font-heading text-6xl leading-none">
                  ${t.price}
                </span>
                <span className="font-subheading uppercase tracking-widest text-xs text-white/55">
                  / month
                </span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check size={16} className="text-[#E63946] mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                onClick={() => scroll("contact")}
                className={`mt-8 w-full font-bold uppercase tracking-widest text-xs px-6 py-4 transition-all hover:-translate-y-0.5 ${
                  t.popular
                    ? "bg-[#E63946] hover:bg-[#F0545F] text-white"
                    : "border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white"
                }`}
              >
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
