import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

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

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 
            bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
            text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 
            bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
            text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards with Animation */}
          <div className="relative h-[400px] md:h-[380px] lg:h-[360px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.article
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 300 : -300,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -300 : 300,
                  scale: 0.8
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]
                bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-gray-700 
                p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl hover:shadow-blue-600/30 
                transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/Review"
                aria-label={`Review by ${testimonials[currentIndex].name}`}
              >
                {/* Star Rating */}
                <div
                  className="flex justify-center text-cyan-400 mb-6 gap-1"
                  role="img"
                  aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={testimonials[currentIndex].rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={20}
                      className="md:w-6 md:h-6"
                      fill="#22d3ee"
                      stroke="none"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-center min-h-[120px] md:min-h-[100px]"
                  itemProp="reviewBody"
                >
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto my-6"></div>

                {/* Author Info */}
                <div
                  className="text-center"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <p
                    className="font-bold text-white text-lg md:text-xl mb-1"
                    itemProp="name"
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    <span itemProp="jobTitle">{testimonials[currentIndex].role}</span>
                  </p>
                  <meta itemProp="worksFor" content={testimonials[currentIndex].company} />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
              text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-medium">Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
              text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              aria-label="Next testimonial"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            {isPaused ? '⏸ Paused' : '▶ Auto-scrolling'} • {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </section>
    </>
  );
}
