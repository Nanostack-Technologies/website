import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      {/* Animated Logo Box */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
        className="flex flex-col items-center"
      >

        {/* Logo */}
        <img
          src="images/logo.jpg"
          className="w-20 h-20 rounded-lg mb-4 shadow-lg"
        />

        {/* Loading dots */}
        <motion.div
          className="flex gap-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.3, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </motion.div>

      </motion.div>
    </div>
  );
}
