import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Floating Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[140px] -z-10 top-10 left-20"></div>
      <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-[120px] -z-10 bottom-10 right-10"></div>

      <div className="max-w-2xl mx-auto text-center">

        {/* Floating Logo */}
        <motion.img
          src="/images/logo.jpg"
          alt="NanoStack Logo"
          className="w-28 h-28 mx-auto rounded-xl shadow-xl"
          animate={{ 
            y: [0, -12, 0], 
            rotate: [0, 3, -3, 0] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold mt-6 text-blue-500"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mt-4"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        {/* Suggestion */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-md mt-2"
        >
          It might have been moved or deleted — or maybe you mistyped the URL.
        </motion.p>

        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl 
          shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </motion.button>
      </div>
    </section>
  );
}
