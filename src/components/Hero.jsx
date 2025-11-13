import { motion } from "framer-motion";

export default function Hero() {

  // Smooth Scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-20 px-6 text-white overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-blue-400 font-medium">Welcome to NanoStack Technologies</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Business with{" "}
            <span className="text-blue-500">Web & Automation</span>
          </h1>

          <p className="text-gray-400 max-w-lg font-bold">
            Harness the power of cutting-edge technology to automate processes,
            enhance productivity, and drive digital transformation for your organization.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Button 1 */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition"
            >
              Start Your Journey
            </motion.button>

            {/* Button 2 */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("why")}
              className="border border-gray-400 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold text-white transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section — STUNNING ANIMATED LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating Shadow */}
          <div className="absolute bottom-10 w-[65%] h-12 bg-black/70 blur-2xl rounded-full"></div>

          {/* Outer Glow Animation */}
          <motion.div
            className="absolute inset-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo with 3D Tilt, Shine, Float */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative"
          >
            {/* Shine Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
              animate={{ x: ["-150%", "150%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            {/* Actual Logo */}
            <motion.img
              src="images/logo.jpg"
              alt="NanoStack Technologies"
              className="relative w-[90%] max-w-[480px] mx-auto rounded-xl shadow-lg shadow-blue-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],      // Floating up-down
                rotate: [0, 0.5, 0], // Very subtle rotation effect
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
