import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";

const LocationSection = () => {
  const whatsappNumber = "93787172152";

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <MapPin size={16} />
            Find Our Clinic
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visit Our <span className="text-cyan-400">Dental Clinic</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            We are conveniently located and ready to provide you with
            comfortable and professional dental care.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[400px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl"
          >
            {/* Temporary Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
              >
                <MapPin size={38} />
              </motion.div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Smile Dental Clinic
              </h3>

              <p className="mt-2 text-center text-sm text-slate-400">
                Darulaman kabul,Afghanitan
              </p>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                <Navigation size={17} />
                Open in Google Maps
              </a>
            </div>

            {/* Decorative Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Address */}
              <div className="group rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <MapPin size={22} />
                </div>

                <h3 className="font-bold text-white">Our Address</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Kabul, Afghanistan
                </p>
              </div>

              {/* Phone */}
              <div className="group rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <Phone size={22} />
                </div>

                <h3 className="font-bold text-white">Call Us</h3>

                <a
                  href="tel: +93789111122"
                  className="mt-2 block text-sm text-slate-400 transition hover:text-cyan-400 space-y-1"
                >
                  +93 789 11 11 22
                </a>
              </div>

              {/* Opening Hours */}
              <div className="group rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <Clock size={22} />
                </div>

                <h3 className="font-bold text-white">Opening Hours</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Sat - Thur
                  <br />
                  8:00 AM - 9:00 PM
                </p>
              </div>

              {/* WhatsApp */}
              <div className="group rounded-2xl border border-slate-700 bg-slate-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <MessageCircle size={22} />
                </div>

                <h3 className="font-bold text-white">WhatsApp</h3>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Chat With Us
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <h3 className="text-xl font-bold text-white">
                Ready for your next appointment?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Contact our team and schedule a convenient time for your dental
                visit.
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Book an Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
