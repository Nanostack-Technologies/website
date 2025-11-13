import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechVision Inc",
      review:
        "NanoStack transformed our entire business process. Their automation solutions saved us thousands of hours annually. Highly professional and results-driven team.",
    },
    {
      name: "Michael Chen",
      role: "CTO at DataFlow Systems",
      review:
        "Excellent technical expertise and exceptional support. They delivered our project ahead of schedule without compromising quality.",
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Manager at Global Commerce Ltd",
      review:
        "The team at NanoStack is outstanding. Our e-commerce platform increased conversion rate by 40%. Best investment this year.",
    },
    {
      name: "David Smith",
      role: "Director at Future Analytics",
      review:
        "Outstanding work on our analytics dashboard. Real-time insights completely changed how we make business decisions. Highly recommended!",
    },
    {
      name: "Priya Verma",
      role: "Founder at CloudZen",
      review:
        "Their cloud migration service was flawless. Zero downtime and smooth execution throughout.",
    },
  ];

  const infiniteList = [...testimonials, ...testimonials, ...testimonials];
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 28,
        ease: "linear",
      },
    });
  }, []);

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients <span className="text-blue-500">Say</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real feedback from satisfied clients who experienced our commitment to excellence
        </p>
      </div>

      {/* Infinite slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-8 whitespace-nowrap"
          drag="x"
          dragConstraints={{ left: -150, right: 150 }}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: ["0%", "-100%"],
              transition: {
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              },
            })
          }
        >
          {infiniteList.map((t, index) => (
            <div
              key={index}
              className="min-w-[350px] max-w-[350px] bg-gradient-to-b from-gray-900 to-black border border-gray-800 
              p-8 rounded-2xl shadow-lg hover:shadow-blue-600/20 transition-all duration-300 
              whitespace-normal break-words"
            >
              <div className="flex text-cyan-400 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="#22d3ee" stroke="none" />
                ))}
              </div>

              {/* FIXED TEXT WRAPPING HERE */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-normal break-words">
                {t.review}
              </p>

              <div className="w-full h-[1px] bg-gray-700 my-4"></div>

              <p className="font-semibold text-white text-lg">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
