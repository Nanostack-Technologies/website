import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Why() {
  const features = [
    {
      title: "Expert Team",
      desc: "Experienced professionals with deep technical expertise and industry knowledge.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored solutions designed specifically for your business needs and goals.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support to ensure your systems run smoothly without interruption.",
    },
    {
      title: "Latest Technology",
      desc: "Leveraging cutting-edge tools and frameworks for optimal performance.",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Build systems that grow with your business without compromising performance.",
    },
    {
      title: "Cost Effective",
      desc: "Maximize ROI with efficient solutions that reduce operational costs.",
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
          Why Choose <span className="text-blue-500">NanoStack?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We stand out by combining technical excellence with customer-centric solutions
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-black from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-left shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="text-teal-400 w-13 h-13" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
