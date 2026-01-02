import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-white py-28 px-6 md:px-20" id="contact">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Have questions, want to collaborate, or need strategic guidance?
            Let’s start a conversation.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-10 md:p-12 
          shadow-sm border border-slate-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Phone Number <span className="text-slate-400">(WhatsApp preferred)</span>
              </label>
              <input
                type="tel"
                placeholder="+234..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-semibold py-4 rounded-xl
            hover:bg-emerald-600 transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
