import { motion } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-white px-10 md:px-20 py-28" id="experience">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Experience & Expertise
          </h2>
          <p className="text-slate-600">
            A decade of disciplined trading, strategy, and continuous development.
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <BarChart3 />,
              title: "10+ Years",
              text: "Forex & Market Strategy",
            },
            {
              icon: <ShieldCheck />,
              title: "25%+ Improvement",
              text: "Client Trading Consistency",
            },
            {
              icon: <Briefcase />,
              title: "Strategic Advisory",
              text: "Trading & Business Systems",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 border border-slate-100 shadow-sm
              bg-gradient-to-br from-slate-50 via-white to-emerald-50/40
              hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.35)]
              transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 
              flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* KEY PROJECTS */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            Key Projects & Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Designed rule-based forex trading systems focused on risk-to-reward optimization",
              "Guided traders from loss-heavy approaches to structured, repeatable strategies",
              "Consulted businesses on forex hedging to reduce international currency risk",
              "Built educational frameworks simplifying complex forex concepts for real-world use",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl p-[1px]
                bg-gradient-to-br from-emerald-200/40 to-transparent"
              >
                <div
                  className="bg-white rounded-2xl p-6 h-full shadow-sm
                  hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full bg-emerald-100 
                      text-emerald-600 flex items-center justify-center flex-shrink-0"
                    >
                      <CheckCircle2 size={18} />
                    </div>

                    <p className="text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORE EXPERTISE */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10">
            My Core Expertise
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Forex Market Analysis", 90],
              ["Risk Management & Capital Protection", 95],
              ["Trading Psychology & Discipline", 85],
              ["Business & Financial Strategy", 80],
              ["Technical & Fundamental Analysis", 90],
              ["Performance Review & Optimization", 85],
            ].map(([skill, level], i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">
                    {skill}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {level}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-emerald-500 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
