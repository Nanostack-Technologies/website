import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function OpenSource() {
  const redirectURL = "https://github.com/Nanostack-Technologies/free-templates-by-NanoStack-Technologies.git"; // <--- replace with your templates repo link

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          NanoStack Technologies  
          <span className="text-blue-500 block mt-2">Open Source Hub</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 mt-6 text-lg leading-relaxed"
        >
          We believe knowledge should be accessible to everyone.  
          Explore beautiful, production-ready website templates —  
          <span className="text-blue-400 font-semibold">100% free and open-source.</span>
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-2xl shadow-xl inline-block"
        >
          <div className="flex items-center justify-center gap-4">
            <Github size={40} className="text-gray-300" />
            <p className="text-xl font-semibold text-white">NanoStack Open Templates</p>
          </div>

          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
            React templates • HTML templates • Tailwind templates • Admin panels • Landing pages • UI blocks
          </p>

          {/* Redirect Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(redirectURL, "_blank")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md"
          >
            Visit GitHub Repository →
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-10"
        >
          Built by NanoStack Technologies • Always free, always open ❤️
        </motion.p>

      </div>
    </section>
  );
}
