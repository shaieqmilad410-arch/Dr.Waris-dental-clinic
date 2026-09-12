import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, HeartPulse } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Experienced and caring dental professionals",
    "Modern dental technology and equipment",
    "Personalized treatment plans for every patient",
    "Comfortable and friendly clinic environment",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xl">
              {/* Main image */}
              <motion.img
                src="\nrew.png"
                alt="Dentist caring for a patient"
                className="h-[420px] w-full rounded-3xl  object-cover shadow-2xl sm:h-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Experience card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white">
                    <Award size={25} />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">6+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Patients card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute right-4 top-6 hidden rounded-2xl bg-white p-4 shadow-xl sm:right-6 md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    <Users size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">5,000+</p>
                    <p className="text-xs text-slate-500">Happy Patients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-600" />

              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
                About Our Clinic
              </span>
            </motion.div>

            {/* Main heading */}
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your Smile Deserves
              <span className="block text-cyan-600">Exceptional Care</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We believe that visiting the dentist should be a comfortable and
              positive experience. Our team combines modern technology, advanced
              treatments, and compassionate care to help you achieve a healthy
              and confident smile.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              From routine checkups to advanced dental procedures, we create
              personalized treatment plans based on your unique needs.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-cyan-500"
                    size={21}
                  />

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-cyan-500"
              >
                Book an Appointment
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-800"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Bottom trust item */}
            <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-cyan-600">
                <HeartPulse size={20} />
              </div>

              <p className="text-sm text-slate-500">
                Your comfort and oral health are always our priority.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
