import { TrendingUp, Shield, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Forex Trading & Market Analysis",
      description:
        "Data-driven analysis of major and minor currency pairs using macroeconomic insight, price action, and structured technical frameworks to navigate market volatility with clarity.",
      icon: <TrendingUp size={26} />,
    },
    {
      title: "Risk Management & Capital Protection",
      description:
        "Designed risk systems that prioritize capital preservation, controlled exposure, and probability-based execution to support long-term consistency.",
      icon: <Shield size={26} />,
    },
    {
      title: "Business & Trading Strategy Advisory",
      description:
        "Strategic guidance for traders, entrepreneurs, and investors on integrating forex into broader business and wealth strategies aligned with sustainable growth.",
      icon: <Briefcase size={26} />,
    },
  ];

  return (
    <section className="bg-slate-100 px-10 md:px-20 py-28" id="services">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          What I Do
        </h2>
        <p className="text-slate-600 mb-20">
          Professional services built on experience, discipline, and structure.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* FLOATING ICON */}
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 
                w-16 h-16 rounded-full flex items-center justify-center 
                bg-white text-emerald-600 shadow-md 
                group-hover:bg-emerald-500 group-hover:text-white
                transition-colors duration-300 z-10"
              >
                {service.icon}
              </div>

              {/* CARD */}
              <div
                className="bg-white rounded-2xl pt-16 px-8 pb-10 
                border border-slate-200 shadow-sm 
                group-hover:shadow-xl group-hover:border-emerald-300
                transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-4 text-slate-800 
                  group-hover:text-emerald-600 transition-colors"
                >
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
