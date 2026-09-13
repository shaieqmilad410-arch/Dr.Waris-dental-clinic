import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmad Seyar Haqmal",
    role: "Patient",
    image: "/slide1.jfif",
    text: "The entire experience was excellent. The staff were friendly, professional, and made me feel comfortable throughout my treatment.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Shouib Majroh",
    role: "Patient",
    image: "/slide2.jfif",
    text: "I had a great experience at this clinic. The dentist explained everything clearly and the treatment was very comfortable.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Milad Niazai",
    role: "Patient",
    image: "/slide3.jfif",
    text: "The clinic is clean, modern, and welcoming. I am very happy with the quality of service I received.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Milad Shaieq",
    role: "Patient",
    image: "/slide4.jfif",
    text: "From booking the appointment to completing my treatment, everything was organized and professional.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Abdul Waris",
    role: "Patient",
    image: "/slide5.jfif",
    text: "The team was very kind and patient. They answered all my questions and made the whole process easy.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Sahil Amiri",
    role: "Patient",
    image: "/slide6.jfif",
    text: "I really appreciated the friendly environment and attention to detail. I would definitely recommend the clinic.",
    whatsapp: "#",
    facebook: "#",
    instagram: "#",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  // Next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Previous testimonial
  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
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

        {/* ================= TESTIMONIAL SLIDER ================= */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-cyan-100
                bg-white
                shadow-xl
                shadow-cyan-100/40
              "
            >
              {/* Top cyan line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" />

              <div className="grid items-center lg:grid-cols-2">
                {/* ================= IMAGE ================= */}
                <div className="relative h-[320px] overflow-hidden bg-cyan-50 sm:h-[380px] lg:h-[460px]">
                  <motion.img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="h-full w-full object-cover"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Quote badge */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500
                      text-white
                      shadow-xl
                    "
                  >
                    <Quote size={27} />
                  </div>

                  {/* Patient name over image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium text-cyan-200">
                      {currentTestimonial.role}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {currentTestimonial.name}
                    </h3>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="relative p-7 sm:p-10 lg:p-14">
                  {/* Large quote decoration */}
                  <Quote
                    size={100}
                    strokeWidth={1}
                    className="absolute right-8 top-8 text-cyan-50"
                  />

                  <div className="relative">
                    {/* Stars */}
                    <div className="mb-6 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                      “{currentTestimonial.text}”
                    </p>

                    {/* Divider */}
                    <div className="my-8 h-px bg-slate-100" />

                    {/* Patient info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="
                          h-14
                          w-14
                          rounded-full
                          object-cover
                          ring-4
                          ring-cyan-50
                        "
                      />

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {currentTestimonial.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* ================= SOCIAL MEDIA ================= */}
                    <div className="mt-7">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Connect
                      </p>

                      <div className="flex gap-3">
                        {/* WhatsApp */}
                        <a
                          href={currentTestimonial.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp"
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-cyan-100
                            bg-cyan-50
                            text-cyan-600
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:bg-cyan-500
                            hover:text-white
                            hover:shadow-lg
                            hover:shadow-cyan-200
                          "
                        >
                          <FaWhatsapp size={19} />
                        </a>

                        {/* Facebook */}
                        <a
                          href={currentTestimonial.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-cyan-100
                            bg-cyan-50
                            text-cyan-600
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:bg-cyan-500
                            hover:text-white
                            hover:shadow-lg
                            hover:shadow-cyan-200
                          "
                        >
                          <FaFacebookF size={19} />
                        </a>

                        {/* Instagram */}
                        <a
                          href={currentTestimonial.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-cyan-100
                            bg-cyan-50
                            text-cyan-600
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:bg-cyan-500
                            hover:text-white
                            hover:shadow-lg
                            hover:shadow-cyan-200
                          "
                        >
                          <FaInstagram size={19} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ================= ARROWS ================= */}

          {/* Previous */}
          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="
              absolute
              left-2
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-cyan-100
              bg-white
              text-cyan-600
              shadow-lg
              transition
              duration-300
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              sm:left-0
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="
              absolute
              right-2
              top-1/2
              z-20
              flex
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-cyan-100
              bg-white
              text-cyan-600
              shadow-lg
              transition
              duration-300
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              sm:right-0
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* ================= DOTS ================= */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className="group p-1"
            >
              <span
                className={`
                  block
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "w-8 bg-cyan-500"
                      : "w-2 bg-cyan-200 group-hover:bg-cyan-400"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* ================= BOTTOM RATING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-col
            items-center
            justify-center
            gap-5
            rounded-2xl
            border
            border-cyan-100
            bg-cyan-50/50
            px-6
            py-6
            text-center
            sm:flex-row
            sm:gap-6
            sm:text-left
          "
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

          <div className="hidden h-12 w-px bg-cyan-200 sm:block" />

          <p className="max-w-xs text-sm leading-6 text-slate-600">
            Trusted by patients who value professional, comfortable, and caring
            dental services.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
