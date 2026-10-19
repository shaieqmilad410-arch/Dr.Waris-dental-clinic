import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowDown,
  CalendarDays,
  ShieldCheck,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        allowMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, allowMotion } = context.conditions;

        if (!allowMotion) return;

        const q = gsap.utils.selector(hero);

        if (desktop) {
          // One scroll timeline controls the entire desktop scene.
          const scene = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "+=120%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          scene
            // Scroll indicator disappears as the scene begins.
            .to(
              q("[data-scroll-hint]"),
              { autoAlpha: 0, y: 20, duration: 0.12 },
              0,
            )

            // Cyan color travels through the clinic name.
            .fromTo(
              q("[data-title-color]"),
              { backgroundPosition: "100% 50%" },
              {
                backgroundPosition: "0% 50%",
                duration: 0.45,
              },
              0,
            )

            // The photograph straightens and grows.
            .fromTo(
              q("[data-photo-scene]"),
              {
                rotateY: -18,
                rotateZ: 4,
                scale: 0.9,
              },
              {
                rotateY: 0,
                rotateZ: 0,
                scale: 1.04,
                duration: 0.65,
              },
              0,
            )

            // A light reflection crosses the photo.
            .fromTo(
              q("[data-shine]"),
              { xPercent: -180 },
              { xPercent: 180, duration: 0.6 },
              0.08,
            )

            // Cards arrive from opposite sides.
            .fromTo(
              q("[data-appointment-card]"),
              { x: -100, y: 45, autoAlpha: 0 },
              {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.35,
              },
              0.12,
            )
            .fromTo(
              q("[data-rating-card]"),
              { x: 100, y: -40, autoAlpha: 0 },
              {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.35,
              },
              0.22,
            )

            // Background changes while scrolling.
            .to(
              q("[data-glow]"),
              {
                scale: 1.7,
                x: -100,
                y: 60,
                duration: 1,
              },
              0,
            )

            // Text leaves in layers near the end of the scene.
            .to(
              q("[data-copy-part]"),
              {
                y: -65,
                autoAlpha: 0,
                stagger: 0.045,
                duration: 0.24,
              },
              0.64,
            )

            // Photo becomes the final focal point.
            .to(
              q("[data-photo-position]"),
              {
                x: () => -Math.min(window.innerWidth * 0.1, 150),
                duration: 0.32,
              },
              0.68,
            )
            .to(q("[data-photo-scene]"), { scale: 1.1, duration: 0.32 }, 0.68);
        } else {
          // Natural scrolling on smaller screens.
          gsap.from(q("[data-copy-part]"), {
            y: 32,
            autoAlpha: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q("[data-copy]")[0],
              start: "top 88%",
              once: true,
            },
          });

          gsap.from(q("[data-photo-position]"), {
            y: 65,
            autoAlpha: 0,
            scale: 0.94,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q("[data-photo-position]")[0],
              start: "top 90%",
              once: true,
            },
          });
        }
      },
      hero,
    );

    return () => mm.revert();
  }, []);

  const hover = reduceMotion ? undefined : { scale: 1.04 };
  const tap = reduceMotion ? undefined : { scale: 0.97 };

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-slate-50"
    >
      {/* Animated background */}
      <div
        data-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-cyan-200/40 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-6 py-20 lg:h-[100svh] lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
        {/* TEXT */}
        <div data-copy className="relative z-10">
          <div
            data-copy-part
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-700"
          >
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-cyan-500"
            />
            Trusted Dental Care
          </div>

          <h1
            id="hero-title"
            data-copy-part
            className="text-4xl font-bold leading-[1.08] tracking-tight text-blue-900 sm:text-6xl xl:text-7xl"
          >
            Dr.Waris
            <span
              data-title-color
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0891b2 0%, #0891b2 40%, #1e40af 60%, #1e40af 100%)",
                backgroundSize: "250% 100%",
                backgroundPosition: "100% 50%",
              }}
              className="mt-2 block bg-clip-text text-transparent"
            >
              Dental &amp;
              <br />
              Implant Center.
            </span>
          </h1>

          <p
            data-copy-part
            className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg"
          >
            Experience modern, comfortable dental care from a team dedicated to
            keeping your smile healthy, confident, and beautiful.
          </p>

          <div data-copy-part className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#appointment"
              whileHover={hover}
              whileTap={tap}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-4 font-semibold text-white shadow-xl shadow-cyan-600/20 transition-colors hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
              Book an Appointment
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={hover}
              whileTap={tap}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
              Explore Services
            </motion.a>
          </div>

          <div
            data-copy-part
            className="mt-9 flex flex-wrap gap-5 border-t border-slate-200 pt-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-cyan-600"
              />
              <span className="text-sm text-slate-600">
                Experienced Dentists
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={20}
                aria-hidden="true"
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-sm text-slate-600">5.0 Patient Rating</span>
            </div>
          </div>
        </div>

        {/* Separate wrappers prevent animation conflicts. */}
        <div
          data-photo-position
          className="relative mx-auto w-full max-w-lg [perspective:1200px]"
        >
          {/* GSAP controls this wrapper */}
          <div
            data-photo-scene
            className="relative [transform-style:preserve-3d]"
          >
            {/* Framer Motion controls this inner wrapper */}
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-950/20 ring-1 ring-blue-100"
            >
              <img
                src="/Tasalphoto.jpeg"
                alt="Dr. Waris at Dr.Waris Dental & Implant Center"
                width={600}
                height={650}
                fetchPriority="high"
                className="h-[400px] w-full object-contain sm:h-[500px] lg:h-[min(62svh,570px)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/25 via-transparent to-transparent"
              />

              <div
                data-shine
                aria-hidden="true"
                style={{ transform: "translateX(-180%)" }}
                className="pointer-events-none absolute -inset-y-20 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-md"
              />
            </motion.div>
          </div>

          <div
            data-appointment-card
            className="absolute -bottom-5 left-0 z-20 sm:-left-6"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur-md sm:p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <CalendarDays
                  size={24}
                  aria-hidden="true"
                  className="text-cyan-600"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">Need an appointment?</p>
                <p className="font-semibold text-slate-900">
                  We're here for you
                </p>
              </div>
            </motion.div>
          </div>

          <div
            data-rating-card
            className="absolute right-0 top-8 z-20 sm:-right-5"
          >
            <motion.div
              whileHover={hover}
              className="rounded-2xl border border-white bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md"
            >
              <div aria-hidden="true" className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-800">
                5.0 Rating
              </p>
            </motion.div>
          </div>
        </div>

        <div
          data-scroll-hint
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 lg:flex"
        >
          Scroll to explore
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? { y: 0 } : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
