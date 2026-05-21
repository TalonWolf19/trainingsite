import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Send, Flame } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GOALS = [
  { value: "athletic-performance", label: "Athletic Performance" },
  { value: "strength-power", label: "Strength & Power" },
  { value: "fat-loss-conditioning", label: "Fat Loss & Conditioning" },
  { value: "injury-recovery", label: "Injury Recovery" },
  { value: "sport-specific", label: "Sport-Specific Prep" },
  { value: "general-fitness", label: "General Fitness" },
];

const HERO_TEXTURE =
  "https://static.prod-images.emergentagent.com/jobs/d733dd52-652f-4789-986b-d94d7b5dab4d/images/3b145dbf6c0a049ce87403d9c016ad529f0f619408857ce5894be11ece0f05f9.png";

const initialState = {
  name: "",
  email: "",
  phone: "",
  goal: "",
  mode: "online",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone.trim().length < 5) e.phone = "Enter a valid phone";
    if (!form.goal) e.goal = "Select a goal";
    if (!form.mode) e.mode = "Pick a training mode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => setForm((f) => ({ ...f, [k]: ev.target.value }));

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/consultation`, form);
      toast.success("Consultation request received", {
        description: "Coach Arymmann will reach out within 24 hours.",
      });
      setForm(initialState);
    } catch (err) {
      toast.error("Something went wrong", {
        description: err?.response?.data?.detail || "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-white/20 focus:border-[#E63946] focus:outline-none py-3 px-0 text-white placeholder:text-white/35 font-body transition-colors";

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${HERO_TEXTURE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#E63946]" />
            <span className="font-subheading uppercase tracking-[0.35em] text-xs text-[#E63946]">
              Free Consultation
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Claim your <br />
            <span className="text-[#E63946]">free</span> session.
          </h2>
          <p className="mt-7 text-white/70 leading-relaxed max-w-md">
            30-minute deep-dive call. We&apos;ll talk training history, goals, and
            whether we&apos;re the right fit. No pitch, no pressure — just a real
            conversation about your performance.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 border border-[#E63946]/40 bg-[#E63946]/5 px-5 py-3">
            <Flame size={16} className="text-[#E63946]" />
            <span className="font-subheading uppercase text-xs tracking-[0.25em] text-white/85">
              Limited spots — 4 left this month
            </span>
          </div>

          <div className="mt-12 space-y-5 border-t border-white/10 pt-8">
            <div>
              <p className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/40">
                Email
              </p>
              <p className="font-body text-white/90 mt-1">coach@forge-athletics.com</p>
            </div>
            <div>
              <p className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/40">
                Facility
              </p>
              <p className="font-body text-white/90 mt-1">Iron District, Austin TX</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          data-testid="consultation-form"
          onSubmit={submit}
          className="lg:col-span-7 bg-[#242424] border border-white/10 p-8 md:p-10 lg:p-12 space-y-7"
        >
          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-2">
                Full Name *
              </label>
              <input
                data-testid="form-name"
                value={form.name}
                onChange={onChange("name")}
                className={inputCls}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-[#E63946]">{errors.name}</p>}
            </div>
            <div>
              <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-2">
                Email *
              </label>
              <input
                data-testid="form-email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className={inputCls}
                placeholder="you@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-[#E63946]">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-2">
                Phone *
              </label>
              <input
                data-testid="form-phone"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className={inputCls}
                placeholder="+1 (512) 555-0143"
              />
              {errors.phone && <p className="mt-1 text-xs text-[#E63946]">{errors.phone}</p>}
            </div>
            <div>
              <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-2">
                Primary Goal *
              </label>
              <select
                data-testid="form-goal"
                value={form.goal}
                onChange={onChange("goal")}
                className={`${inputCls} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-[#242424]">
                  Select your goal
                </option>
                {GOALS.map((g) => (
                  <option key={g.value} value={g.value} className="bg-[#242424]">
                    {g.label}
                  </option>
                ))}
              </select>
              {errors.goal && <p className="mt-1 text-xs text-[#E63946]">{errors.goal}</p>}
            </div>
          </div>

          <div>
            <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-3">
              Preferred Training Mode *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "in-person", label: "In-Person" },
                { v: "online", label: "Online" },
              ].map((opt) => (
                <button
                  key={opt.v}
                  type="button"
                  data-testid={`form-mode-${opt.v}`}
                  onClick={() => setForm((f) => ({ ...f, mode: opt.v }))}
                  className={`border py-4 font-subheading uppercase tracking-[0.25em] text-xs transition-all ${
                    form.mode === opt.v
                      ? "bg-[#E63946] border-[#E63946] text-white"
                      : "border-white/20 text-white/70 hover:border-[#E63946] hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-subheading uppercase text-[10px] tracking-[0.3em] text-white/55 block mb-2">
              Tell me about your training (optional)
            </label>
            <textarea
              data-testid="form-message"
              value={form.message}
              onChange={onChange("message")}
              rows={4}
              className={`${inputCls} resize-none`}
              placeholder="Sport, experience level, current goals..."
            />
          </div>

          <button
            data-testid="form-submit"
            type="submit"
            disabled={submitting}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#E63946] hover:bg-[#F0545F] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-sm px-10 py-5 transition-all hover:-translate-y-0.5"
          >
            {submitting ? "Sending..." : "Claim My Free Session"}
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
