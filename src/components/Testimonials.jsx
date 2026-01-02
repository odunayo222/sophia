import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    role: "Trader",
    name: "Daniel Brooks",
    text: "Sophia helped me move from emotional trading to a clear, rule-based system. My consistency improved dramatically.",
  },
  {
    role: "Business Owner",
    name: "Amara Collins",
    text: "Her understanding of both forex and business strategy made a huge difference in how we manage currency exposure.",
  },
  {
    role: "Private Investor",
    name: "Michael Turner",
    text: "Sophia doesn’t promise miracles — she teaches structure and discipline. That’s exactly what works.",
  },
  {
    role: "Entrepreneur",
    name: "Lena Roberts",
    text: "Her insights into risk management changed how I see trading entirely. I finally feel in control.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden
      bg-gradient-to-br from-[#0b1c2d] via-[#0f2742] to-[#081523]" id="testimonials">

      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#1f4fd8,_transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            What Clients Say
          </h2>
          <p className="text-slate-300">
            Trusted by traders and business owners worldwide
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-white/5 backdrop-blur-lg
                border border-white/10 rounded-3xl p-10 md:p-12 shadow-xl"
            >
              <Quote className="mx-auto mb-6 text-emerald-400" size={36} />

              <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-8">
                “{testimonials[index].text}”
              </p>

              <div className="text-emerald-400 font-semibold">
                {testimonials[index].name}
              </div>
              <div className="text-slate-400 text-sm">
                {testimonials[index].role}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${i === index ? "bg-emerald-400 scale-125" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>

        {/* PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            My Philosophy
          </h3>

          <p className="text-slate-300 leading-relaxed">
            I believe capital protection comes before profit.
            <br />
            I believe discipline beats prediction.
            <br />
            And I believe forex trading should be treated like a business — not a gamble.
          </p>

          <p className="text-slate-400 mt-6">
            My mission is to empower traders and businesses with clear strategies,
            realistic expectations, and sustainable systems that stand the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
