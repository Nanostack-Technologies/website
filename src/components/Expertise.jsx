import { motion } from "framer-motion";
import { Code2, Zap, Database, Shield } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Web Development",
      desc: "Full-stack web applications built with modern technologies including React, Next.js, and Node.js.",
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Automation Solutions",
      desc: "Streamline business processes with intelligent automation that reduces manual work and errors.",
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Data Management",
      desc: "Robust database solutions and data pipeline architectures for enterprise-scale applications.",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Security & Compliance",
      desc: "Enterprise-grade security implementations ensuring data protection and regulatory compliance.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Our Core <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Specialized services designed to drive your digital transformation
        </p>
      </motion.div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-black from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-left shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
          >
            <div className="mb-4 ">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-md leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
