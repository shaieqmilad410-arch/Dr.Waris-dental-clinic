import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Seyar Hapmal",
    role: "Patient",
    image: "public/testimonials.webp",
    text: "The entire experience was excellent. The staff were friendly, professional, and made me feel comfortable throughout my treatment.",
  },
  {
    name: "Shouib Majroh",
    role: "Patient",
    image: "public/testimonials.webp",
    text: "I had a great experience at this clinic. The dentist explained everything clearly and the treatment was very comfortable.",
  },
  {
    name: "Milad Niazai",
    role: "Patient",
    image: "/public/testimonials.webp",
    text: "The clinic is clean, modern, and welcoming. I am very happy with the quality of service I received.",
  },
  {
    name: "Milad Shaieq",
    role: "Patient",
    image: "/public/testimonials.webp",
    text: "From booking the appointment to completing my treatment, everything was organized and professional.",
  },
  {
    name: "Abdul Waris",
    role: "Patient",
    image: "/public/testimonials.webp",
    text: "The team was very kind and patient. They answered all my questions and made the whole process easy.",
  },
  {
    name: "Sahil Amiri",
    role: "Patient",
    image: "/public/testimonials.webp",
    text: "I really appreciated the friendly environment and attention to detail. I would definitely recommend the clinic.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Patient Reviews
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Our <span className="text-cyan-600">Patients Say</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Hear from patients who have experienced our professional dental care
            and friendly service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6">
                <Quote
                  size={38}
                  className="text-cyan-100 transition-colors duration-300 group-hover:text-cyan-200"
                />
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-7 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                “{testimonial.text}”
              </p>

              {/* Patient */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-50"
                />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-14 flex max-w-xl flex-col items-center justify-center rounded-2xl bg-slate-50 px-6 py-6 text-center sm:flex-row sm:gap-6 sm:text-left"
        >
          <div>
            <p className="text-3xl font-bold text-slate-900">4.9/5</p>

            <div className="mt-1 flex justify-center gap-1 sm:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>

          <div className="hidden h-12 w-px bg-slate-200 sm:block" />

          <p className="max-w-xs text-sm leading-6 text-slate-600">
            Trusted by patients who value professional and comfortable dental
            care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
