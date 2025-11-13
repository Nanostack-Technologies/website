import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, text: "" });

  // Contact details (as requested)
  const CONTACT_EMAIL = "info.nanostack@gmail.com";
  const CONTACT_PHONE = "9979412610"; // local number
  const CONTACT_PHONE_INTL = "919979412610"; // for WhatsApp (no + sign)
  const CONTACT_LOCATION = "RK Iconic - B, Shital Park, Rajkot, Gujarat";

  useEffect(() => {
    let t;
    if (toast.show) {
      t = setTimeout(() => setToast({ show: false, text: "" }), 4000);
    }
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setToast({ show: true, text: "Please fill all fields before sending." });
      return;
    }

    setSending(true);

    // Compose message for WhatsApp
    const waMessage = `Hello NanoStack Technologies👋%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(
      form.message
    )}%0A%0AContact via website form.`;

    const waLink = `https://wa.me/${CONTACT_PHONE_INTL}?text=${waMessage}`;

    // Open WhatsApp in new tab (or WhatsApp Web)
    window.open(waLink, "_blank", "noopener,noreferrer");

    // Show success toast
    setToast({ show: true, text: "Message sent! Redirected to WhatsApp." });

    // Clear form
    setForm({ name: "", email: "", message: "" });

    // stop sending state after short delay
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-3">
          Ready to start your digital transformation? Reach out to our team today
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side – Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
            <Mail className="text-cyan-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gray-400 text-sm hover:text-blue-400"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
            <Phone className="text-cyan-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <a
                href={`tel:+91${CONTACT_PHONE}`}
                className="text-gray-400 text-sm hover:text-blue-400"
              >
                +91 {CONTACT_PHONE}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
            <MapPin className="text-cyan-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-gray-400 text-sm">{CONTACT_LOCATION}</p>
            </div>
          </div>

          {/* Quick WhatsApp CTA */}
          <div className="pt-2">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${CONTACT_PHONE_INTL}?text=${encodeURIComponent(
                    "Hi NanoStack! I want to talk about a project."
                  )}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="mt-2 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold text-white shadow-md transition"
            >
              Message on WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Right Side – Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full bg-black/30 border border-gray-700 rounded-xl p-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full bg-black/30 border border-gray-700 rounded-xl p-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-black/30 border border-gray-700 rounded-xl p-3 text-sm focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={sending}
            className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl 
            font-semibold text-white shadow-lg transition ${sending ? "opacity-60 cursor-wait" : ""}`}
          >
            {sending ? "Sending..." : "Send Message"} <Send size={18} />
          </motion.button>
        </motion.form>
      </div>

      {/* Success / Info Toast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={toast.show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className={`fixed left-1/2 -translate-x-1/2 bottom-8 z-50`}
        aria-live="polite"
      >
        {toast.show && (
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 text-white px-5 py-3 rounded-xl shadow-lg max-w-lg mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="font-semibold">{toast.text}</p>
                <p className="text-xs text-gray-400 mt-1">We opened WhatsApp with your message.</p>
              </div>
              <button
                onClick={() => setToast({ show: false, text: "" })}
                className="text-gray-400 hover:text-white ml-4"
                aria-label="Close toast"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
