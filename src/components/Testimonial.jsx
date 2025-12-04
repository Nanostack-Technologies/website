import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechVision Inc",
      company: "TechVision Inc",
      review:
        "NanoStack transformed our entire business process. Their automation solutions saved us thousands of hours annually. Highly professional and results-driven team.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO at DataFlow Systems",
      company: "DataFlow Systems",
      review:
        "Excellent technical expertise and exceptional support. They delivered our project ahead of schedule without compromising quality.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Manager at Global Commerce Ltd",
      company: "Global Commerce Ltd",
      review:
        "The team at NanoStack is outstanding. Our e-commerce platform increased conversion rate by 40%. Best investment this year.",
      rating: 5,
    },
    {
      name: "David Smith",
      role: "Director at Future Analytics",
      company: "Future Analytics",
      review:
        "Outstanding work on our analytics dashboard. Real-time insights completely changed how we make business decisions. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "Founder at CloudZen",
      company: "CloudZen",
      review:
        "Their cloud migration service was flawless. Zero downtime and smooth execution throughout.",
      rating: 5,
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
  }, [controls]);

  // Generate JSON-LD structured data for SEO
  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NanoStack Technologies",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: testimonials.length.toString(),
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.role,
        worksFor: {
          "@type": "Organization",
          name: testimonial.company,
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: testimonial.review,
      datePublished: "2024-01-01",
    })),
  };

  return (
    <>
      {/* SEO: JSON-LD Schema for Testimonials/Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialSchema),
        }}
      />

      <section
        className="bg-black text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden"
        aria-label="Client Testimonials"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            What Our Clients <span className="text-blue-500">Say</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Real feedback from satisfied clients who experienced our commitment
            to excellence
          </p>
        </div>

        {/* Infinite Slider - Mobile Optimized */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-4 md:gap-6 lg:gap-8 whitespace-nowrap"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragElastic={0.1}
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
            style={{ touchAction: "pan-y" }}
            aria-live="polite"
          >
            {infiniteList.map((t, index) => (
              <article
                key={index}
                className="min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] md:min-w-[360px] md:max-w-[360px] lg:min-w-[380px] lg:max-w-[380px]
                bg-gradient-to-b from-gray-900 to-black border border-gray-800 
                p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-blue-600/20 
                transition-all duration-300 whitespace-normal break-words
                flex-shrink-0"
                itemScope
                itemType="https://schema.org/Review"
                aria-label={`Review by ${t.name}`}
              >
                {/* Star Rating */}
                <div
                  className="flex text-cyan-400 mb-4 gap-1"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={t.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={18}
                      className="md:w-5 md:h-5"
                      fill="#22d3ee"
                      stroke="none"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 whitespace-normal break-words"
                  itemProp="reviewBody"
                >
                  {t.review}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-700 my-4"></div>

                {/* Author Info */}
                <div
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <p
                    className="font-semibold text-white text-base md:text-lg"
                    itemProp="name"
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    <span itemProp="jobTitle">{t.role}</span>
                  </p>
                  <meta itemProp="worksFor" content={t.company} />
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-gray-500 text-sm">
            ← Swipe to see more reviews →
          </p>
        </div>
      </section>
    </>
  );
}
