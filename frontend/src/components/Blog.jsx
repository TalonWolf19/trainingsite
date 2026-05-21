import { motion } from "framer-motion";
import { fadeUpStagger } from "@/lib/motion";
import { Clock, ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "Strength",
    title: "5 Lifts Every Athlete Should Master Before Their Season",
    read: "6 min",
    excerpt:
      "The non-negotiable barbell movements that build resilience, force production and joint integrity for any sport.",
    img: "https://images.unsplash.com/photo-1774599466554-420f3ec1ca56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxneW0lMjBiYXJiZWxsJTIwcGxhdGVzfGVufDB8fHx8MTc3OTMyNzcxOHww&ixlib=rb-4.1.0&q=85",
  },
  {
    tag: "Periodization",
    title: "How To Peak For Your Season Without Burning Out",
    read: "8 min",
    excerpt:
      "A coach&apos;s framework for tapering volume, sharpening intent, and walking into Day 1 feeling sharper than ever.",
    img: "https://images.pexels.com/photos/28636776/pexels-photo-28636776.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    tag: "Recovery",
    title: "Sleep, Stress & HRV: The Recovery Stack That Actually Works",
    read: "5 min",
    excerpt:
      "Forget ice baths and supplements. These three biomarkers tell you more about readiness than any wearable.",
    img: "https://images.pexels.com/photos/4720783/pexels-photo-4720783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Blog() {
  return (
    <section
      id="journal"
      data-testid="blog-section"
      className="relative py-24 md:py-32 border-t border-white/10 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#E63946]" />
              <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
                Field Notes
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
              The training <span className="text-[#E63946]">journal.</span>
            </h2>
          </div>
          <a
            data-testid="blog-view-all"
            href="#journal"
            className="font-subheading uppercase tracking-[0.25em] text-xs text-white/70 hover:text-[#E63946] inline-flex items-center gap-2 transition-colors"
          >
            View all articles
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUpStagger(i)}
              data-testid={`blog-post-${i}`}
              className="group bg-[#242424] border border-white/10 hover:border-[#E63946]/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#1A1A1A] border border-[#E63946]/40 text-[#E63946] font-subheading uppercase text-[10px] tracking-[0.3em] px-3 py-1">
                  {p.tag}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-white/50 mb-3">
                  <Clock size={12} />
                  <span className="font-subheading uppercase text-[10px] tracking-[0.25em]">
                    {p.read} read
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-white/60 text-sm leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <button
                  data-testid={`blog-read-${i}`}
                  className="mt-5 inline-flex items-center gap-2 font-subheading uppercase tracking-[0.25em] text-xs text-white group-hover:text-[#E63946] transition-colors self-start"
                >
                  Read More
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
