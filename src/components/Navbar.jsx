import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Statistics", id: "statistics" },
    { label: "Why Choose Us", id: "why" },
    { label: "Expertise", id: "expertise" },
    { label: "Portfolio", id: "projects" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
    { label: "Open Source", link: "/open-source" }, // 🔥 ROUTE PAGE
  ];

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-black/90 backdrop-blur-xl text-white fixed w-full top-0 z-50 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img src="images/logo.jpg" alt="logo" className="w-10 h-10 rounded" />
          <span className="text-lg md:text-xl font-semibold text-blue-400">
            NanoStack Technologies
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {navItems.map(({ label, id, link }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.08 }}
              onClick={() => {
                if (link) return navigate(link);  // 🔥 ROUTE NAVIGATION
                scrollToSection(id);
              }}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {label}
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-xl"
          >
            <ul className="flex flex-col text-center py-6 space-y-5 text-lg font-medium text-gray-200">
              {navItems.map(({ label, id, link }) => (
                <li
                  key={label}
                  className="cursor-pointer hover:text-blue-400 transition"
                  onClick={() => {
                    if (link) return navigate(link);
                    scrollToSection(id);
                  }}
                >
                  {label}
                </li>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold w-[80%] mx-auto mt-2"
              >
                Get Started
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
