import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, MessageCircle, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What dental services does your clinic provide?",
    answer:
      "We provide a wide range of dental services, including dental checkups, teeth cleaning, fillings, cosmetic dentistry, teeth whitening, crowns, bridges, root canal treatment, and other general and restorative dental care.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "For most people, a dental checkup every six months is a good routine. However, depending on your oral health and individual needs, your dentist may recommend visiting more frequently.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "Modern dental treatments are designed to keep you as comfortable as possible. Local anesthesia and modern techniques can significantly reduce or prevent pain during many dental procedures.",
  },
  {
    question: "Do you provide teeth whitening?",
    answer:
      "Yes. We offer professional teeth whitening options designed to improve the appearance of stained or discolored teeth while maintaining a safe and comfortable treatment experience.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "A toothache can have different causes, including tooth decay, infection, or other dental problems. We recommend scheduling a dental examination as soon as possible so the underlying cause can be identified and treated.",
  },
  {
    question: "Do you treat dental emergencies?",
    answer:
      "Yes. If you are experiencing severe tooth pain, a broken or damaged tooth, swelling, or another urgent dental problem, contact our clinic so we can guide you on the appropriate next step.",
  },
  {
    question: "How can I keep my teeth and gums healthy?",
    answer:
      "Brush your teeth twice a day with fluoride toothpaste, floss regularly, limit excessive sugary foods and drinks, and visit your dentist for regular checkups and professional cleaning.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);
  const buttonRefs = useRef([]);
  const reduceMotion = useReducedMotion();
  const uniqueId = useId();

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

        // Cinematic heading reveal.
        gsap
          .timeline({
            defaults: {
              duration: 0.9,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: q("[data-faq-header]")[0],
              start: "top 88%",
              once: true,
            },
          })
          .from(q("[data-faq-label]"), {
            autoAlpha: 0,
            y: 20,
          })
          .from(
            q("[data-title-line]"),
            {
              yPercent: 110,
              rotate: 3,
              stagger: 0.12,
            },
            0.12,
          )
          .from(q("[data-faq-description]"), { autoAlpha: 0, y: 20 }, 0.3);

        // Animate outer wrappers separately from the accordion.
        q("[data-faq-slot]").forEach((slot) => {
          gsap.from(slot.querySelector("[data-faq-reveal]"), {
            autoAlpha: 0,
            y: desktop ? 45 : 25,
            rotateX: desktop ? 12 : 0,
            transformOrigin: "center top",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slot,
              start: "top 94%",
              once: true,
            },
          });
        });

        gsap.from(q("[data-faq-cta]"), {
          autoAlpha: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q("[data-faq-cta-slot]")[0],
            start: "top 94%",
            once: true,
          },
        });

        // Scroll-controlled heading accent.
        gsap.fromTo(
          q("[data-faq-progress]"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-faq-list]")[0],
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );

        if (desktop) {
          gsap.to(q("[data-faq-glow]"), {
            x: -80,
            y: -100,
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

  const toggleFAQ = (index) => {
    setOpenIndex((previous) => (previous === index ? null : index));
  };

  // Keyboard navigation between question buttons.
  const handleQuestionKeyDown = (event, index) => {
    let nextIndex;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % faqData.length;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + faqData.length) % faqData.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = faqData.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby={`${uniqueId}-heading`}
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-100/50 blur-[100px]"
      />

      <div
        data-faq-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          data-faq-header
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div data-faq-label className="mb-5 inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-6 bg-cyan-700 sm:w-8" />

            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 sm:text-sm">
              Frequently Asked Questions
            </span>

            <span aria-hidden="true" className="h-px w-6 bg-cyan-700 sm:w-8" />
          </div>

          <h2
            id={`${uniqueId}-heading`}
            className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block overflow-hidden pb-1">
              <span data-title-line className="block">
                Your Questions,
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-title-line className="block text-cyan-700">
                Answered.
              </span>
            </span>
          </h2>

          <p
            data-faq-description
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Find answers to common questions about our dental services,
            treatments, appointments, and oral health.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div
              data-faq-progress
              className="h-full origin-left rounded-full bg-cyan-700"
            />
          </div>
        </div>

        {/* Accordion */}
        <div data-faq-list className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `${uniqueId}-question-${index}`;
            const answerId = `${uniqueId}-answer-${index}`;

            return (
              <div
                key={faq.question}
                data-faq-slot
                className="[perspective:1000px]"
              >
                {/* GSAP owns this wrapper */}
                <div data-faq-reveal>
                  <div
                    className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-cyan-200 bg-cyan-50/50 shadow-lg shadow-cyan-950/5"
                        : "border-slate-200 bg-white hover:border-cyan-200"
                    }`}
                  >
                    {/* Active side accent */}
                    <motion.div
                      aria-hidden="true"
                      initial={false}
                      animate={{ scaleY: isOpen ? 1 : 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.25,
                      }}
                      className="absolute inset-y-0 left-0 w-1 origin-top bg-cyan-700"
                    />

                    <h3>
                      <button
                        ref={(node) => {
                          buttonRefs.current[index] = node;
                        }}
                        id={questionId}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        onKeyDown={(event) =>
                          handleQuestionKeyDown(event, index)
                        }
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="flex w-full items-center gap-3 px-4 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cyan-700 sm:gap-5 sm:px-6 sm:py-6"
                      >
                        <span
                          aria-hidden="true"
                          className="hidden shrink-0 text-xs font-medium tabular-nums text-slate-400 sm:block"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`min-w-0 flex-1 text-sm font-semibold leading-6 sm:text-base ${
                            isOpen ? "text-cyan-900" : "text-slate-800"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <motion.span
                          aria-hidden="true"
                          initial={false}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.25,
                          }}
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isOpen
                              ? "bg-cyan-800 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Plus size={18} />
                        </motion.span>
                      </button>
                    </h3>

                    {/* Framer Motion owns answer height */}
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      aria-hidden={!isOpen}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{
                        height: {
                          duration: reduceMotion ? 0 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: reduceMotion ? 0 : 0.2,
                        },
                      }}
                      onAnimationComplete={() => {
                        // Accordion height changes affect sections below.
                        ScrollTrigger.refresh(true);
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 sm:pl-[3.5rem] sm:pr-6">
                        <div className="border-t border-cyan-100 pt-4">
                          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div data-faq-cta-slot className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div
            data-faq-cta
            className="flex flex-col items-center gap-6 rounded-3xl bg-cyan-950 p-6 text-center text-white sm:flex-row sm:justify-between sm:p-8 sm:text-left"
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-200">
                <MessageCircle size={23} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Still have questions?</h3>

                <p className="mt-1 text-sm leading-6 text-cyan-100/75">
                  Our team is here to help you plan your visit.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="w-full shrink-0 sm:w-auto"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-cyan-950 transition-colors hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book an Appointment
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
