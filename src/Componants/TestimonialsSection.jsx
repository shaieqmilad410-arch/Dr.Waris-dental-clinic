import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmad Seyar Haqmal",
    image: "/slide1.jfif",
    text: "The entire experience was excellent. The staff were friendly, professional, and made me feel comfortable throughout my treatment.",
  },
  {
    name: "Shouib Majroh",
    image: "/slide2.jfif",
    text: "I had a great experience at this clinic. The dentist explained everything clearly and the treatment was very comfortable.",
  },
  {
    name: "Milad Niazai",
    image: "/slide3.jfif",
    text: "The clinic is clean, modern, and welcoming. I am very happy with the quality of service I received.",
  },
  {
    name: "Milad Shaieq",
    image: "/slide4.jfif",
    text: "From booking the appointment to completing my treatment, everything was organized and professional.",
  },
  {
    name: "Abdul Waris",
    image: "/slide5.jfif",
    text: "The team was very kind and patient. They answered all my questions and made the whole process easy.",
  },
  {
    name: "Sahil Amiri",
    image: "/slide6.jfif",
    text: "I really appreciated the friendly environment and attention to detail. I would definitely recommend the clinic.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((previous) => (previous + 1) % testimonials.length);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-100/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-cyan-700" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
              Patient Reviews
            </span>

            <span aria-hidden="true" className="h-px w-8 bg-cyan-700" />
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block pb-1">What Our</span>
            <span className="block pb-2 text-cyan-700">Patients Say.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Hear from patients who have experienced our dental care and friendly
            service.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 rounded-full bg-cyan-700"
          />
        </div>

        {/* Automatic slideshow — no navigation buttons */}
        <div
          role="region"
          aria-label="Patient testimonials"
          aria-live="off"
          className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-cyan-950/10"
        >
          <div className="grid">
            <AnimatePresence initial={false}>
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: "easeInOut",
                }}
                aria-hidden={false}
                className="relative col-start-1 row-start-1 grid min-w-0 bg-white md:grid-cols-[0.9fr_1.1fr]"
              >
                {/* Photo */}
                <div className="relative h-[300px] overflow-hidden bg-cyan-50 sm:h-[380px] md:h-full md:min-h-[420px]">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/15 to-transparent"
                  />
                </div>

                {/* Name and description */}
                <div className="flex min-w-0 flex-col justify-center px-6 py-9 sm:px-9 sm:py-12 lg:px-12">
                  <h3 className="break-words text-2xl font-bold tracking-tight text-cyan-900 sm:text-3xl">
                    {current.name}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                    {current.text}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
