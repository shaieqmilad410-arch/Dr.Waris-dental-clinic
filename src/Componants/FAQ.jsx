import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative mx-auto max-w-5xl px-6">
        {/* =========================
            HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mb-4 inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600"
          >
            Frequently Asked Questions
          </motion.span>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your Questions,
            <span className="text-cyan-500"> Answered.</span>
          </h2>

          {/* Description */}

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Find answers to some of the most common questions about our dental
            services, treatments, appointments, and oral health.
          </p>
        </motion.div>

        {/* =========================
            FAQ LIST
        ========================== */}

        <div className="mx-auto max-w-4xl space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-200 bg-cyan-50/50 shadow-lg shadow-cyan-100/50"
                    : "border-gray-200 bg-white hover:border-cyan-200 hover:shadow-md"
                }`}
              >
                {/* =========================
                    QUESTION BUTTON
                ========================== */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  {/* Question */}

                  <span
                    className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                      isOpen ? "text-cyan-600" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* =========================
                      ANIMATED PLUS ICON
                  ========================== */}

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-light transition-colors duration-300 ${
                      isOpen
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                {/* =========================
                    ANIMATED ANSWER
                ========================== */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                    >
                      <div className="border-t border-cyan-100 px-6 pb-6 pt-5 sm:px-7">
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.05,
                          }}
                          className="max-w-3xl text-base leading-7 text-gray-600"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-600">
            Still have questions about your dental care?
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-xl"
          >
            Book an Appointment
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{
                duration: 0.2,
              }}
              className="text-lg"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
