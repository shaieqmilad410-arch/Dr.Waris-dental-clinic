import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Complete care for
            <span className="text-cyan-600"> your smile</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From routine checkups to advanced treatments, our dental team
            provides personalized care using modern techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:p-8"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600"
                >
                  <Icon size={27} strokeWidth={1.8} />
                </motion.div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                {/* Learn More */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="mt-6"
                ></motion.div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-cyan-600 transition-all duration-300 group-hover:w-1/2" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
