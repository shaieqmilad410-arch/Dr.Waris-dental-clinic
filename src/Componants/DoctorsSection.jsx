import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, GraduationCap, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const DoctorsSection = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

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

        // Heading reveals through clipped wrappers.
        gsap
          .timeline({
            defaults: {
              duration: 0.9,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: q("[data-doctors-heading]")[0],
              start: "top 88%",
              once: true,
            },
          })
          .from(q("[data-team-label]"), {
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
          .from(
            q("[data-team-description]"),
            {
              autoAlpha: 0,
              y: 20,
            },
            0.3,
          );

        // Stable slots trigger the animated card wrappers.
        q("[data-doctor-slot]").forEach((slot, index) => {
          const card = slot.querySelector("[data-card-reveal]");
          const shine = slot.querySelector("[data-photo-shine]");
          const direction = index - 1;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: slot,
              start: desktop ? `top ${94 - index * 3}%` : "top 90%",
              end: desktop ? `top ${53 - index * 3}%` : "top 65%",
              scrub: desktop ? 0.8 : false,
              once: !desktop,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              card,
              {
                autoAlpha: 0,
                y: desktop ? 100 : 45,
                x: desktop ? direction * 45 : 0,
                rotateY: desktop ? direction * -16 : 0,
                rotateX: desktop ? 14 : 0,
                rotateZ: desktop ? direction * 3 : 0,
                scale: desktop ? 0.9 : 0.97,
                transformOrigin: "center bottom",
              },
              {
                autoAlpha: 1,
                y: 0,
                x: 0,
                rotateY: 0,
                rotateX: 0,
                rotateZ: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              },
            )
            .fromTo(
              shine,
              { xPercent: -200 },
              {
                xPercent: 300,
                duration: 0.8,
                ease: "power1.inOut",
              },
              0.2,
            );
        });

        // Heading accent follows the grid's scroll position.
        gsap.fromTo(
          q("[data-team-progress]"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-doctors-grid]")[0],
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
            },
          },
        );

        if (desktop) {
          gsap.to(q("[data-team-glow]"), {
            y: -120,
            x: -80,
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

  return (
    <section
      ref={sectionRef}
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
        data-team-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div
          data-doctors-heading
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div data-team-label className="mb-5 inline-flex items-center gap-3">
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
            <span className="block overflow-hidden pb-1">
              <span data-title-line className="block">
                Experienced
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-title-line className="block text-cyan-700">
                Dental Specialists.
              </span>
            </span>
          </h2>

          <p
            data-team-description
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Our dedicated dental professionals are committed to providing
            comfortable, personalized, and high-quality dental care.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div
              data-team-progress
              className="h-full origin-left rounded-full bg-cyan-700"
            />
          </div>
        </div>

        {/* Doctors grid */}
        <div
          data-doctors-grid
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              data-doctor-slot
              className={`min-w-0 [perspective:1200px] ${
                index === doctors.length - 1
                  ? "sm:col-span-2 sm:w-[calc(50%-0.875rem)] sm:justify-self-center lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              {/* GSAP owns the outer wrapper */}
              <div data-card-reveal className="h-full">
                {/* Framer Motion owns the card and image */}
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

                    {/* Scroll-controlled light sweep */}
                    <div
                      data-photo-shine
                      aria-hidden="true"
                      style={{
                        transform: "translateX(-200%)",
                      }}
                      className="pointer-events-none absolute -inset-y-20 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md"
                    />

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
                        <Award size={15} aria-hidden="true" />
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                      {doctor.specialty}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {doctor.name}
                    </h3>

                    <div className="mt-5 flex flex-1 items-start gap-3 border-t border-slate-100 pt-5">
                      <GraduationCap
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-cyan-700"
                      />

                      <p className="text-sm leading-6 text-slate-500">
                        {doctor.study}
                      </p>
                    </div>

                    <motion.a
                      href="#contact"
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800 transition-colors hover:bg-cyan-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                    >
                      Request an Appointment
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="shrink-0"
                      />
                    </motion.a>
                  </div>
                </motion.article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
