import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Stethoscope,
  Baby,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with safe and professional whitening treatments.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description:
      "Restore missing teeth with strong, natural-looking dental implants.",
  },
  {
    icon: HeartPulse,
    title: "General Dentistry",
    description:
      "Complete dental care designed to keep your teeth healthy for years.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description:
      "Improve the appearance of your smile with personalized cosmetic treatments.",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description:
      "Comfortable and professional treatment to protect damaged teeth.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care specially designed for children.",
  },
];

const ServicesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-100/70 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-100/70 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block pb-1">Complete care for</span>

            <span className="block pb-2 text-cyan-600">your smile.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From routine checkups to advanced treatments, our dental team
            provides personalized care using modern techniques.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div className="h-full w-full rounded-full bg-cyan-600" />
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial="rest"
                animate="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                variants={{
                  rest: { y: 0 },
                  hover: { y: -10 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="group relative h-full min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-950/10 sm:p-8"
              >
                {/* Hover background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50/90 via-white to-blue-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Decorative service number */}
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-cyan-100"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <motion.div
                    variants={{
                      rest: { rotate: 0, scale: 1 },
                      hover: {
                        rotate: -8,
                        scale: 1.12,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent */}
                <motion.div
                  aria-hidden="true"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                  }}
                  className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-cyan-500 to-blue-600"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
