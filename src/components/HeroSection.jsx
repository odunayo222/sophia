import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function HeroSection() {
  const navItems = ['home','about','services','experience','testimonials','contact'];
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show Back to Top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-semibold tracking-wide">Sophia</h1>
        <ul className="hidden md:flex gap-8 text-sm text-slate-300">
          {navItems.map(item => (
            <li key={item} className="hover:text-white transition">
              <a href={`#${item}`} className="cursor-pointer">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="grid md:grid-cols-2 gap-10 px-10 md:px-20 pt-10 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
            Forex • Strategy • Analysis
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Sophia <span className="text-emerald-400">Lawson</span>
          </h2>

          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Forex Trader · Business Strategist · Market Analyst
          </p>

          <p className="mt-6 text-slate-400 max-w-xl">
            I help individuals and businesses navigate the global forex market with clarity, discipline, and data‑driven strategies — turning market volatility into opportunity.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition">
              Let’s Work Together <ArrowUpRight size={18} />
            </a>
            <a href="#services" className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition">
              View Services
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-sm justify-self-end"
        >
          <div className="absolute -inset-2 rounded-2xl bg-emerald-500/10 blur-lg"></div>
          <div className="relative rounded-2xl bg-slate-900 p-3 shadow-xl">
            <img
              src="img1.png"
              alt="Sophia Lawson"
              className="rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-400 transition z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
