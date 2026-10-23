import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  Heart,
  Sparkles,
  Check,
} from "lucide-react";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const hover = reduceMotion ? undefined : { y: -4 };
  const tap = reduceMotion ? undefined : { scale: 0.97 };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#f5fbfc]"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a5dce5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Animated background */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -35, 0],
                y: [0, 25, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-32 h-[650px] w-[650px] rounded-full bg-cyan-200/45 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full bg-teal-100/60 blur-[110px]"
      />

      {/* Compact top spacing; no forced full-screen height */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-20 lg:pt-28">
        {/* Text */}
        <div className="relative z-10 min-w-0">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-200 bg-white/85 py-2 pl-2 pr-4 shadow-sm shadow-cyan-950/5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-white">
              <motion.span
                aria-hidden="true"
                animate={{ rotate: reduceMotion ? 0 : 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center justify-center"
              >
                <Sparkles size={15} />
              </motion.span>
            </span>

            <span className="text-xs font-semibold tracking-wide text-cyan-800 sm:text-sm">
              A brighter smile starts here
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-[clamp(2.75rem,6vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.055em]"
          >
            <span className="block text-cyan-950">Dr. Waris</span>

            <span className="mt-3 block text-cyan-700">Dental &amp;</span>

            <span className="block text-cyan-600">Implant Center.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-cyan-600"
            />

            <p className="text-sm font-semibold tracking-wide text-cyan-800 sm:text-base">
              Modern care. A confident smile.
            </p>
          </div>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            Experience comfortable, personalized dental care from a team
            dedicated to keeping your smile healthy, confident, and beautiful.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.a
              href="/#contact"
              whileHover={hover}
              whileTap={tap}
              className="group inline-flex items-center justify-center gap-4 rounded-full bg-cyan-700 py-3 pl-6 pr-3 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
            >
              Book an Appointment
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </span>
            </motion.a>

            <motion.a
              href="/#services"
              whileHover={hover}
              whileTap={tap}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-200 bg-white/80 px-6 py-4 text-sm font-semibold text-cyan-900 transition-colors hover:border-cyan-700 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
            >
              Explore Services
              <ArrowUpRight size={18} aria-hidden="true" />
            </motion.a>
          </div>

          {/* Care highlights */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-cyan-950/10 pt-6">
            {[
              "Personalized care",
              "Experienced dentists",
              "Modern treatments",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-800">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>

                <span className="text-xs font-medium text-slate-600 sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo composition */}
        <div className="relative mx-auto w-full max-w-[480px] px-3 pb-10 pt-5 sm:px-5 lg:max-w-none">
          {/* Circular orbit behind photo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-1 top-4 aspect-square sm:-inset-x-4"
          >
            <div className="absolute inset-3 rounded-full border border-cyan-200/80" />

            <motion.div
              animate={{ rotate: reduceMotion ? 0 : 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-300/80"
            >
              {/* Star travels around the circular path */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200 bg-white text-cyan-700 shadow-lg shadow-cyan-700/15 sm:h-12 sm:w-12">
                  <Sparkles size={24} strokeWidth={1.7} />
                </span>
              </div>

              {/* Opposite orbit marker */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <span className="block h-3 w-3 rounded-full bg-cyan-500 shadow-md shadow-cyan-500/30" />
              </div>
            </motion.div>
          </div>

          {/* Offset frame */}
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-6 right-0 top-6 rotate-[5deg] rounded-[2.5rem] bg-cyan-700/10 sm:rounded-[3rem]"
          />

          {/* Floating photograph */}
          <motion.div
            animate={reduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-2xl shadow-cyan-950/15 sm:rounded-[3rem] sm:border-8">
              <img
                src="/WhatsApp Image 2026-10-20 at 10.44.59 AM.jpeg"
                alt="Dr. Waris at Dr. Waris Dental and Implant Center"
                width={600}
                height={650}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-contain"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/75 via-transparent to-transparent"
              />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs">
                  Care with confidence
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Your smile.
                  <br />
                  Our commitment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personalized care badge */}
          <motion.div
            whileHover={hover}
            className="absolute -right-1 top-0 z-10 flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/95 px-4 py-3 shadow-lg shadow-cyan-950/10 backdrop-blur-md sm:-right-4 sm:top-10 sm:px-5 sm:py-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <ShieldCheck size={23} aria-hidden="true" />
            </span>

            <div>
              <p className="text-xs text-slate-500">Thoughtful treatment</p>

              <p className="mt-0.5 text-sm font-bold text-cyan-950">
                Personalized Care
              </p>
            </div>
          </motion.div>

          {/* Appointment card */}
          <motion.a
            href="/#contact"
            whileHover={hover}
            whileTap={tap}
            className="absolute bottom-0 left-0 z-10 flex max-w-full items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-xl shadow-cyan-950/10 backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 sm:-left-4 sm:gap-4 sm:p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-700 text-white sm:h-12 sm:w-12">
              <CalendarDays size={23} aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs text-slate-500">Let’s plan your visit</p>

              <p className="mt-1 text-sm font-bold text-cyan-950 sm:text-base">
                Your next smile starts here
              </p>
            </div>

            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="shrink-0 text-cyan-700"
            />
          </motion.a>

          {/* Heart badge */}
          <div
            aria-hidden="true"
            className="absolute bottom-24 right-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700 shadow-lg shadow-cyan-950/5 sm:-right-5 sm:h-14 sm:w-14"
          >
            <Heart size={24} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
      />
    </section>
  );
};

export default Hero;
