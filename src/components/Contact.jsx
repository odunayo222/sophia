import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      phone,
    };

    // Show a toast with a loading message
    const toastId = toast.loading("Sending message...");

    emailjs
      .send(
        "service_65s76ij", 
        "template_cqiwbc9",
        formData,
        "83mG7CmCYPDyZI6jN"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", { id: toastId, duration: 2000 }); // faster success
          form.reset();
          setPhone("");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Oops! Something went wrong.", { id: toastId });
        }
      )
      .finally(() => setLoading(false)); // stop loading
  };

  return (
    <section className="bg-white py-28 px-6 md:px-20" id="contact">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Have questions, want to collaborate, or need strategic guidance?
            Let’s start a conversation.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-10 md:p-12 shadow-sm border border-slate-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Phone Number <span className="text-slate-400">(WhatsApp preferred)</span>
              </label>
              <div className="mt-2">
                <PhoneInput
                  country={"us"}
                  enableSearch
                  value={phone}
                  onChange={setPhone}
                  inputClass="!w-full !py-3 !pl-14 !rounded-xl !border-slate-200 focus:!ring-2 focus:!ring-emerald-400"
                  containerClass="!w-full"
                  buttonClass="!border-slate-200 !rounded-l-xl"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
              required
            />
          </div>

          {/* Submit button with loading bar */}
          <button
            type="submit"
            className={`w-full bg-emerald-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md ${
              loading ? "cursor-not-allowed opacity-70" : "hover:bg-emerald-600"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="w-full h-1 bg-emerald-200 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 bg-emerald-600 animate-loading-bar"></div>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      {/* Loading bar animation */}
      <style>
        {`
          @keyframes loading-bar {
            0% { left: -100%; width: 100%; }
            50% { left: 0; width: 100%; }
            100% { left: 100%; width: 100%; }
          }
          .animate-loading-bar {
            animation: loading-bar 2s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
