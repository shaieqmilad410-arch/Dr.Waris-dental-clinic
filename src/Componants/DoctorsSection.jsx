import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, GraduationCap, ArrowUpRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Abdul Waris",
    specialty: "General Dentist",
    experience: "7+ Years Experience",
    study: "BDS & RDS (Khyber Medical University-pakistan) C-End, C-Ortho",
    image: "/Tasal 3.jpg",
  },
  {
    name: "Dr. Yalda Hanifi",
    specialty: "Cosmetic Dentist",
    experience: "6+ Years Experience",
    study: "MDS (Kabul Medical University)",
    image: "/femaldoc.png",
  },
  {
    name: "Dr. Milad Niazai",
    specialty: "Orthodontist",
    experience: "10+ Years Experience",
    study: "Kabul Medical University",
    image: "/tasal.jpeg",
  },
];

const DoctorCard = ({ doctor, index }) => {
  const slotRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(slotRef, {
    once: true,
    amount: 0.15,
  });

  const expanded = reduceMotion || isInView;

  return (
    <div
      ref={slotRef}
      className={`min-w-0 ${
        index === doctors.length - 1
          ? "sm:col-span-2 sm:w-[calc(50%-0.875rem)] sm:justify-self-center lg:col-span-1 lg:w-full"
          : ""
      }`}
    >
      {/* Expands horizontally from the center */}
      <motion.div
        initial={false}
        animate={{
          width: expanded ? "100%" : "72%",
        }}
        transition={{
          duration: reduceMotion ? 0 : 1.1,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion || !isInView ? 0 : index * 0.12,
        }}
        className="mx-auto h-full"
      >
        <motion.article
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
            damping: 24,
          }}
          className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-950/10"
        >
          {/* Photo */}
          <div className="relative isolate h-80 overflow-hidden bg-slate-100 sm:h-[350px] xl:h-[390px]">
            <motion.img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.06 },
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="h-full w-full object-cover object-top"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/65 via-transparent to-transparent"
            />

            {/* Light sweep as the card expands */}
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                initial={false}
                animate={{
                  x: isInView ? "350%" : "-200%",
                }}
                transition={{
                  duration: 1.3,
                  delay: isInView ? index * 0.12 + 0.15 : 0,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -inset-y-20 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md"
              />
            )}

            {/* Doctor number */}
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-semibold text-white backdrop-blur-md"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Experience badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                <Award size={15} aria-hidden="true" className="shrink-0" />
                {doctor.experience}
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
              {doctor.specialty}
            </p>

            <h3 className="mt-2 break-words text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {doctor.name}
            </h3>

            <div className="mt-5 flex flex-1 items-start gap-3 border-t border-slate-100 pt-5">
              <GraduationCap
                size={20}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cyan-700"
              />

              <p className="min-w-0 break-words text-sm leading-6 text-slate-500">
                {doctor.study}
              </p>
            </div>

            <motion.a
              href="/#contact"
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800 transition-colors hover:bg-cyan-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
            >
              <span>Request an Appointment</span>

              <ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
            </motion.a>
          </div>
        </motion.article>
      </motion.div>
    </div>
  );
};

const DoctorsSection = () => {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-100/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading stays visible */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-cyan-700" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
              Meet Our Team
            </span>

            <span aria-hidden="true" className="h-px w-8 bg-cyan-700" />
          </div>

          <h2
            id="doctors-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block pb-1">Experienced</span>

            <span className="block pb-2 text-cyan-700">
              Dental Specialists.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Our dedicated dental professionals are committed to providing
            comfortable, personalized, and high-quality dental care.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 rounded-full bg-cyan-700"
          />
        </div>

        {/* Doctors grid */}
        <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
