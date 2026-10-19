import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const socialTypes = [
  { key: "whatsapp", label: "WhatsApp" },
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
];

const controlClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-cyan-800 transition-colors hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [slide, setSlide] = useState({
    index: 0,
    direction: 1,
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);

  const current = testimonials[slide.index];

  const activeSocials = socialTypes.filter((social) =>
    /^https?:\/\//i.test(current[social.key] || ""),
  );

  const canAutoplay =
    isPlaying &&
    isInView &&
    !isHovered &&
    !hasFocus &&
    !pageHidden &&
    !reduceMotion;

  const changeSlide = (direction) => {
    setSlide((previous) => ({
      index:
        (previous.index + direction + testimonials.length) %
        testimonials.length,
      direction,
    }));
  };

  const goToSlide = (index) => {
    setSlide((previous) => ({
      index,
      direction: index >= previous.index ? 1 : -1,
    }));
  };

  // Automatic slideshow.
  useEffect(() => {
    if (!canAutoplay) return;

    const timer = window.setTimeout(() => {
      setSlide((previous) => ({
        index: (previous.index + 1) % testimonials.length,
        direction: 1,
      }));
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [canAutoplay, slide.index]);

  // Pause autoplay when the browser tab is hidden.
  useEffect(() => {
    const handleVisibility = () => {
      setPageHidden(document.hidden);
    };

    handleVisibility();

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // GSAP scroll animations.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        allowMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, allowMotion } = context.conditions;

        if (!allowMotion) return;

        const q = gsap.utils.selector(sectionRef.current);

        // Heading entrance.
        gsap
          .timeline({
            defaults: {
              duration: 0.9,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: q("[data-review-heading]")[0],
              start: "top 88%",
              once: true,
            },
          })
          .from(q("[data-review-label]"), {
            autoAlpha: 0,
            y: 20,
          })
          .from(
            q("[data-review-title]"),
            {
              yPercent: 110,
              rotate: 3,
              stagger: 0.12,
            },
            0.12,
          )
          .from(
            q("[data-review-description]"),
            {
              autoAlpha: 0,
              y: 20,
            },
            0.3,
          );

        // Cinematic carousel entrance.
        // Framer Motion animates the slides inside this wrapper.
        gsap.from(q("[data-slider-reveal]"), {
          autoAlpha: 0,
          y: desktop ? 85 : 40,
          rotateX: desktop ? 12 : 0,
          scale: desktop ? 0.93 : 0.98,
          transformOrigin: "center bottom",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q("[data-slider-slot]")[0],
            start: "top 90%",
            once: true,
          },
        });

        // Bottom rating entrance.
        gsap.from(q("[data-rating-reveal]"), {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q("[data-rating-slot]")[0],
            start: "top 94%",
            once: true,
          },
        });

        // Scroll-controlled heading accent.
        gsap.fromTo(
          q("[data-review-progress]"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-slider-slot]")[0],
              start: "top 90%",
              end: "top 30%",
              scrub: 0.6,
            },
          },
        );

        // Desktop background parallax.
        if (desktop) {
          gsap.to(q("[data-review-glow]"), {
            x: -100,
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      },
      sectionRef.current,
    );

    return () => mm.revert();
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: reduceMotion ? 0 : direction * 45,
      rotateY: reduceMotion ? 0 : direction * -5,
    }),
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: reduceMotion ? 0 : direction * -45,
      rotateY: reduceMotion ? 0 : direction * 5,
    }),
  };

  return (
    <section
      ref={sectionRef}
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
        data-review-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          data-review-heading
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div
            data-review-label
            className="mb-5 inline-flex items-center gap-3"
          >
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
            <span className="block overflow-hidden pb-1">
              <span data-review-title className="block">
                What Our
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-review-title className="block text-cyan-700">
                Patients Say.
              </span>
            </span>
          </h2>

          <p
            data-review-description
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Hear from patients who have experienced our dental care and friendly
            service.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div
              data-review-progress
              className="h-full origin-left rounded-full bg-cyan-700"
            />
          </div>
        </div>

        {/* Carousel */}
        <div
          data-slider-slot
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setHasFocus(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setHasFocus(false);
            }
          }}
          className="[perspective:1400px]"
        >
          <div data-slider-reveal>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_75px_-35px_rgba(8,51,68,0.3)]">
              <div
                aria-live={canAutoplay ? "off" : "polite"}
                aria-atomic="true"
                className="overflow-hidden [perspective:1200px]"
              >
                <AnimatePresence
                  initial={false}
                  mode="wait"
                  custom={slide.direction}
                >
                  <motion.article
                    key={slide.index}
                    custom={slide.direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      ease: "easeInOut",
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${slide.index + 1} of ${
                      testimonials.length
                    }: ${current.name}`}
                    className="grid min-w-0 md:grid-cols-[0.9fr_1.1fr]"
                  >
                    {/* Patient image */}
                    <div className="relative h-[300px] overflow-hidden bg-cyan-50 sm:h-[380px] md:h-full md:min-h-[460px]">
                      <motion.img
                        src={current.image}
                        alt={current.name}
                        initial={{
                          scale: reduceMotion ? 1 : 1.08,
                        }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: reduceMotion ? 0 : 1.2,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 via-cyan-950/10 to-transparent"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md sm:left-7 sm:top-7"
                      >
                        <Quote size={24} />
                      </div>

                      <div className="absolute inset-x-5 bottom-6 text-white sm:inset-x-7 sm:bottom-8">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                          {current.role}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                          {current.name}
                        </h3>
                      </div>
                    </div>

                    {/* Review content */}
                    <div className="relative flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-12">
                      <Quote
                        size={110}
                        strokeWidth={1}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-5 top-5 text-cyan-50"
                      />

                      <div className="relative">
                        <div
                          role="img"
                          aria-label="5 out of 5 stars"
                          className="mb-6 flex gap-1"
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={18}
                              aria-hidden="true"
                              className="fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>

                        <blockquote className="min-h-[180px] text-lg font-medium leading-8 tracking-tight text-slate-700 sm:text-xl md:min-h-[200px]">
                          “{current.text}”
                        </blockquote>

                        <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-6">
                          <img
                            src={current.image}
                            alt=""
                            className="h-11 w-11 shrink-0 rounded-full object-cover ring-4 ring-cyan-50"
                          />

                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900">
                              {current.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {current.role}
                            </p>
                          </div>
                        </div>

                        {/* Only show real social URLs */}
                        {activeSocials.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {activeSocials.map((social) => (
                              <motion.a
                                key={social.key}
                                href={current[social.key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${current.name} on ${social.label}`}
                                whileHover={
                                  reduceMotion ? undefined : { y: -3 }
                                }
                                className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-800 transition-colors hover:bg-cyan-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                              >
                                <MessageCircle size={15} aria-hidden="true" />
                                {social.label}
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Carousel controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-4 py-4 sm:px-7">
                <div className="flex items-center gap-1">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Show review by ${testimonial.name}`}
                      aria-current={index === slide.index ? "true" : undefined}
                      className="flex h-11 min-w-6 items-center justify-center rounded-lg px-1 focus-visible:outline-2 focus-visible:outline-cyan-700"
                    >
                      <motion.span
                        aria-hidden="true"
                        animate={{
                          width: index === slide.index ? 24 : 6,
                          backgroundColor:
                            index === slide.index ? "#155e75" : "#cbd5e1",
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                        className="block h-1.5 rounded-full"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {!reduceMotion && (
                    <button
                      type="button"
                      onClick={() => setIsPlaying((playing) => !playing)}
                      aria-label={
                        isPlaying
                          ? "Pause automatic slideshow"
                          : "Resume automatic slideshow"
                      }
                      className={controlClass}
                    >
                      {isPlaying ? (
                        <Pause size={16} aria-hidden="true" />
                      ) : (
                        <Play size={16} aria-hidden="true" />
                      )}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => changeSlide(-1)}
                    aria-label="Previous testimonial"
                    className={controlClass}
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeSlide(1)}
                    aria-label="Next testimonial"
                    className={controlClass}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall rating */}
        <div data-rating-slot className="mx-auto mt-10 max-w-xl">
          <div
            data-rating-reveal
            className="flex flex-col items-center gap-5 rounded-2xl border border-cyan-100 bg-cyan-50/60 px-6 py-6 text-center sm:flex-row sm:gap-6 sm:text-left"
          >
            <div className="shrink-0">
              <p className="text-3xl font-bold tracking-tight text-cyan-900">
                4.9
                <span className="text-lg text-cyan-800/60">/5</span>
              </p>

              <div
                aria-hidden="true"
                className="mt-2 flex justify-center gap-1"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-12 w-px shrink-0 bg-cyan-200 sm:block"
            />

            <p className="text-sm leading-6 text-slate-600">
              Trusted by patients who value professional, comfortable, and
              caring dental services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
