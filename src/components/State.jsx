import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function State() {
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger only once
    threshold: 0.2, // 20% visible
  });

  const stats = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 12, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section ref={ref} className="bg-black text-white py-20 px-6 text-center">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Our Impact in <span className="text-blue-500">Numbers</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Proven track record of delivering exceptional results for businesses worldwide
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to from-gray-900 to-black border border-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-blue-600/20 transition-all"
          >
            <h3 className="text-5xl font-bold text-blue-500 mb-2">
              {inView ? <CountUp start={0} end={item.value} duration={2.5} /> : "0"}
              {item.suffix}
            </h3>
            <p className="text-gray-400 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}