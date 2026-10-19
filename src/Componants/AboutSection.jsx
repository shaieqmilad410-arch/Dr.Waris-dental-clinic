import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle,
  Award,
  Users,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Experienced and caring dental professionals",
  "Modern dental technology and equipment",
  "Personalized treatment plans for every patient",
  "Comfortable and friendly clinic environment",
];

const AboutSection = () => {
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

        // TOP HEADING
        const headingTimeline = gsap.timeline({
          defaults: {
            duration: 0.9,
            ease: "power3.out",
          },
          scrollTrigger: {
            trigger: q("[data-about-header]")[0],
            start: "top 88%",
            once: true,
          },
        });

        headingTimeline
          .from(q("[data-eyebrow]"), {
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
            q("[data-heading-rule]"),
            {
              scaleX: 0,
              transformOrigin: "center",
            },
            0.35,
          );

        if (desktop) {
          // CINEMATIC TWO-COLUMN REVEAL
          // A stationary grid controls the entire sequence.
          const scene = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: q("[data-about-grid]")[0],
              start: "top 88%",
              end: "top 18%",
              scrub: 0.9,
              invalidateOnRefresh: true,
            },
          });

          scene
            .fromTo(
              q("[data-image-reveal]"),
              {
                autoAlpha: 0,
                x: -70,
                y: 65,
                rotateY: 14,
                rotateZ: -3,
                scale: 0.92,
                clipPath: "inset(12% 8% 12% 8% round 40px)",
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0% round 32px)",
                duration: 0.7,
              },
              0,
            )
            .from(
              q("[data-content-block]"),
              {
                autoAlpha: 0,
                x: 65,
                y: 25,
                stagger: 0.09,
                duration: 0.4,
              },
              0.1,
            )
            .from(
              q("[data-feature]"),
              {
                autoAlpha: 0,
                x: 35,
                stagger: 0.07,
                duration: 0.3,
              },
              0.32,
            )
            .from(
              q("[data-stat-reveal]"),
              {
                autoAlpha: 0,
                y: 45,
                scale: 0.85,
                stagger: 0.12,
                duration: 0.3,
              },
              0.5,
            );

          // Photo parallax uses a separate inner wrapper.
          gsap.fromTo(
            q("[data-photo-parallax]"),
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: q("[data-image-slot]")[0],
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );

          gsap.to(q("[data-about-glow]"), {
            x: -80,
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        } else {
          // MOBILE: reveal each part when it actually enters view.
          gsap.from(q("[data-image-reveal]"), {
            autoAlpha: 0,
            y: 45,
            scale: 0.96,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q("[data-image-slot]")[0],
              start: "top 88%",
              once: true,
            },
          });

          q("[data-content-block], [data-feature]").forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 25,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 93%",
                once: true,
              },
            });
          });

          q("[data-stat-reveal]").forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 25,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element.parentElement,
                start: "top 95%",
                once: true,
              },
            });
          });
        }
      },
      sectionRef.current,
    );

    return () => mm.revert();
  }, []);

  const hoverLift = reduceMotion ? undefined : { y: -4 };
  const tap = reduceMotion ? undefined : { scale: 0.97 };

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-48 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]"
      />

      <div
        data-about-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP: LABEL + MAIN HEADING */}
        <div
          data-about-header
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <div data-eyebrow className="mb-5 inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-cyan-600 sm:w-10" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
              About Our Clinic
            </span>

            <span aria-hidden="true" className="h-px w-7 bg-cyan-600 sm:w-10" />
          </div>

          <h2
            id="about-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            <span className="block overflow-hidden pb-1">
              <span data-title-line className="block">
                Your Smile Deserves
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-title-line className="block text-cyan-700">
                Exceptional Care
              </span>
            </span>
          </h2>

          <div
            data-heading-rule
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-300"
          />
        </div>

        {/* BOTTOM: TWO ORGANIZED COLUMNS */}
        <div
          data-about-grid
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20"
        >
          {/* LEFT COLUMN: IMAGE */}
          <div
            data-image-slot
            className="relative mx-auto w-full max-w-xl min-w-0 pb-7 [perspective:1200px]"
          >
            {/* Decorative border */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-2 -top-2 bottom-5 rounded-[2.5rem] border border-cyan-100 sm:-inset-x-3 sm:-top-3"
            />

            {/* GSAP reveal */}
            <div
              data-image-reveal
              className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-cyan-950/10"
            >
              <div data-photo-parallax className="-my-8">
                <motion.img
                  src="/nrew.png"
                  alt="Dentist caring for a patient"
                  loading="lazy"
                  width={700}
                  height={800}
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="h-[400px] w-full object-cover sm:h-[520px] lg:h-[600px]"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/30 via-transparent to-transparent"
              />
            </div>

            {/* Experience */}
            <div className="absolute bottom-0 left-3 z-10 sm:left-5">
              <div data-stat-reveal>
                <motion.div
                  whileHover={hoverLift}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:gap-4 sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-800 text-white">
                    <Award size={25} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">6+</p>
                    <p className="text-xs text-slate-500 sm:text-sm">
                      Years Experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Patients */}
            <div className="absolute right-3 top-5 z-10 sm:right-5">
              <div data-stat-reveal>
                <motion.div
                  whileHover={hoverLift}
                  className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                    <Users size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">5,000+</p>
                    <p className="text-[11px] text-slate-500 sm:text-xs">
                      Happy Patients
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CLINIC DETAILS */}
          <div className="min-w-0">
            <div data-content-block>
              {/* <p className="text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
                Modern dentistry with a personal touch.
              </p> */}

              <p className="mt-4 text-base leading-10 text-slate-600">
                We believe that visiting the dentist should be a comfortable and
                positive experience. Our team combines modern technology,
                advanced treatments, and compassionate care to help you achieve
                a healthy and confident smile.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-500">
                From routine checkups to advanced dental procedures, we create
                personalized treatment plans based on your unique needs.
              </p>
            </div>

            {/* Features */}
            <ul className="mt-7 grid gap-3">
              {features.map((feature) => (
                <li key={feature} data-feature>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5"
                  >
                    <CheckCircle
                      size={20}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-cyan-700"
                    />

                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {feature}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div
              data-content-block
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={hoverLift}
                whileTap={tap}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/15 transition-colors hover:bg-cyan-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
              >
                Book an Appointment
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={hoverLift}
                whileTap={tap}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-700 hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
              >
                Explore Services
              </motion.a>
            </div>

            {/* Trust note */}
            <div
              data-content-block
              className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-6"
            >
              {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                <HeartPulse size={20} aria-hidden="true" />
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Your comfort and oral health are always our priority.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
