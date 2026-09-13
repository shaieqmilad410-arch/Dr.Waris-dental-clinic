import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShieldCheck, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Small badge */}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-blue-800 sm:text-6xl"
          >
            Dr.Waris
            <span className="block text-blue-800">
              Dental & Implant Center.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Experience modern, comfortable dental care from a team dedicated to
            keeping your smile healthy, confident, and beautiful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 mt-5 px-4 py-2 text-sm font-medium text-cyan-700"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Trusted Dental Care
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
            >
              Book an Appointment
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-cyan-600" size={20} />
              <span className="text-sm font-medium text-slate-600">
                Experienced Dentists
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={20} className="fill-current text-yellow-500" />
              <span className="text-sm font-medium text-slate-600">
                5.0 Patient Rating
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Main image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <img
              src="\Tasalphoto.jpeg"
              alt="Professional dentist"
              className="h-[570px] w-full object-contain"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </motion.div>

          {/* Appointment floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl sm:-left-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <CalendarDays className="text-cyan-600" size={24} />
              </div>

              <div>
                <p className="text-xs text-slate-500">Need an appointment?</p>
                <p className="font-semibold text-slate-900">
                  We're here for you
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -right-4 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-8"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-current text-yellow-500"
                />
              ))}
            </div>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              5.0 Rating
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
