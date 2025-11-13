import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      category: "Web Development",
      color: "from-[#052b3d] to-[#003344]",
      title: "E-commerce Platform",
      desc: "Full-featured e-commerce solution with payment integration and inventory management.",
      link: "https://example.com/ecommerce",
    },
    {
      category: "Automation",
      color: "from-[#2b0f38] to-[#1b0d25]",
      title: "Business Automation Suite",
      desc: "Enterprise automation platform reducing manual processes by 80% for Fortune 500 client.",
      link: "https://example.com/automation",
    },
    {
      category: "Data & Analytics",
      color: "from-[#003920] to-[#002c19]",
      title: "Real-time Analytics Dashboard",
      desc: "Interactive dashboard providing real-time insights with predictive analytics capabilities.",
      link: "https://example.com/analytics",
    },
    {
      category: "Mobile Development",
      color: "from-[#3a1506] to-[#2a0e04]",
      title: "Mobile App Platform",
      desc: "Cross-platform mobile application serving 500k+ active users with offline capabilities.",
      link: "https://example.com/mobile",
    },
    {
      category: "AI & ML",
      color: "from-[#0f1a3d] to-[#0a122b]",
      title: "AI-Powered CRM",
      desc: "Customer relationship management system enhanced with machine learning recommendations.",
      link: "https://example.com/ai-crm",
    },
    {
      category: "Infrastructure",
      color: "from-[#052b3d] to-[#003344]",
      title: "Cloud Migration Service",
      desc: "Seamless migration of legacy systems to modern cloud infrastructure with zero downtime.",
      link: "https://example.com/cloud",
    },
  ];

  // Extract categories dynamically
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Work We Have <span className="text-blue-500">Done</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcase of successful projects delivered for diverse industries and clients
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border 
              ${
                selectedCategory === cat
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "border-gray-700 text-gray-300 hover:border-gray-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item, index) => (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`block p-8 rounded-2xl bg-gradient-to-br ${item.color} 
                  border border-gray-800 shadow-lg hover:shadow-blue-600/20 
                  transition-all duration-300 cursor-pointer`}
              >
                {/* Category Tag */}
                <span className="px-4 py-1 text-sm rounded-full bg-black/30 text-cyan-400 font-semibold">
                  {item.category}
                </span>

                {/* Title + Icon */}
                <div className="flex justify-between items-start mt-5">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-300" />
                </div>

                {/* Description */}
                <p className="text-gray-300 mt-3 text-md leading-relaxed">
                  {item.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
