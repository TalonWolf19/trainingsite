import { motion } from "framer-motion";
import { fadeUpStagger } from "@/lib/motion";
import { Star, Quote } from "lucide-react";

const ITEMS = [
  {
    name: "Marcus L.",
    sport: "D1 Football, Linebacker",
    quote:
      "Added 4 inches to my vertical and ran a 4.52 at Pro Day. Alex's programming is the most surgical I've ever followed.",
    metric: "+4\" Vertical",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80",
  },
  {
    name: "Priya S.",
    sport: "Powerlifter, 75kg",
    quote:
      "Hit a 195kg deadlift after 9 months. He understands female athletes — recovery, hormones, cycle-based loading. Game changer.",
    metric: "+30kg Deadlift",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&q=80",
  },
  {
    name: "Diego R.",
    sport: "MMA / Bantamweight",
    quote:
      "Three fight camps with Alex. Zero injuries, peak weight cut, and I've never felt this explosive in the cage. Period.",
    metric: "3-0 Record",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section
      id="results"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#E63946]" />
            <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
              Proof, Not Promises
            </span>
            <span className="block w-10 h-px bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Real athletes. <br />
            <span className="text-[#E63946]">Real results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUpStagger(i)}
              data-testid={`testimonial-card-${i}`}
              className="relative bg-[#242424] border border-white/10 p-7 lg:p-8 hover:border-[#E63946]/40 hover:-translate-y-1 transition-all duration-500"
            >
              <Quote
                size={42}
                className="absolute top-5 right-5 text-[#E63946]/15"
              />
              <div className="flex items-center gap-1 text-[#E63946] mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#E63946" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed text-lg">&ldquo;{t.quote}&rdquo;</p>

              <div className="mt-6 inline-block bg-[#E63946] text-white font-heading uppercase text-sm tracking-wider px-3 py-1">
                {t.metric}
              </div>

              <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 object-cover grayscale"
                />
                <div>
                  <p className="font-subheading uppercase tracking-wider text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/55">{t.sport}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
