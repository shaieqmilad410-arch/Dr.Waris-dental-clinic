import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Stethoscope,
  Baby,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        tablet: "(min-width: 640px) and (max-width: 1023px)",
        allowMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop, tablet, allowMotion } = context.conditions;

        if (!allowMotion) return;

        const q = gsap.utils.selector(section);
        const columns = desktop ? 3 : tablet ? 2 : 1;

        // Heading reveals upward through its clipping wrapper.
        gsap.from(q("[data-heading-line]"), {
          yPercent: 110,
          rotate: 3,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q("[data-heading]")[0],
            start: "top 88%",
            once: true,
          },
        });

        gsap.from(q("[data-intro]"), {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q("[data-heading]")[0],
            start: "top 85%",
            once: true,
          },
        });

        // Scroll-linked color sweep.
        gsap.fromTo(
          q("[data-color-sweep]"),
          { backgroundPosition: "100% 50%" },
          {
            backgroundPosition: "0% 50%",
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-heading]")[0],
              start: "top 80%",
              end: "top 35%",
              scrub: 0.6,
            },
          },
        );

        // Each slot stays stationary and acts as a stable trigger.
        // GSAP transforms the wrapper inside the slot.
        q("[data-card-slot]").forEach((slot, index) => {
          const card = slot.querySelector("[data-card-reveal]");
          const column = index % columns;
          const direction = column - (columns - 1) / 2;

          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              y: desktop ? 110 : 55,
              x: desktop ? direction * 45 : 0,
              rotateX: desktop ? 38 : 10,
              rotateY: desktop ? direction * -18 : 0,
              rotateZ: desktop ? direction * 5 : 0,
              scale: desktop ? 0.84 : 0.96,
              transformOrigin: "50% 100%",
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slot,
                start: `top ${desktop ? 94 - column * 3 : 94}%`,
                end: `top ${desktop ? 56 - column * 3 : 73}%`,
                scrub: desktop ? 0.8 : 0.4,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        // Section progress indicator.
        gsap.fromTo(
          q("[data-progress]"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-grid]")[0],
              start: "top 85%",
              end: "bottom 70%",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          },
        );

        // Separate decorative layers move at different speeds.
        if (desktop) {
          gsap.to(q("[data-glow-left]"), {
            y: 150,
            x: 65,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          gsap.to(q("[data-glow-right]"), {
            y: -130,
            x: -60,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      },
      section,
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        data-glow-left
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-100/70 blur-[90px]"
      />

      <div
        data-glow-right
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-100/70 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div data-heading className="mx-auto max-w-2xl text-center">
          <p
            data-intro
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600"
          >
            Our Services
          </p>

          <h2
            id="services-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block overflow-hidden pb-1">
              <span data-heading-line className="block">
                Complete care for
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-heading-line className="block">
                <span
                  data-color-sweep
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0891b2 0%, #0891b2 40%, #0f172a 60%, #0f172a 100%)",
                    backgroundSize: "250% 100%",
                    backgroundPosition: "100% 50%",
                  }}
                  className="bg-clip-text text-transparent"
                >
                  your smile.
                </span>
              </span>
            </span>
          </h2>

          <p
            data-intro
            className="mt-5 text-base leading-7 text-slate-600 sm:text-lg"
          >
            From routine checkups to advanced treatments, our dental team
            provides personalized care using modern techniques.
          </p>

          {/* Scroll progress line */}
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div
              data-progress
              className="h-full w-full origin-left rounded-full bg-cyan-600"
            />
          </div>
        </div>

        {/* Service cards */}
        <div
          data-grid
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-card-slot
                className="min-w-0 [perspective:1100px]"
              >
                {/* GSAP owns this wrapper */}
                <div data-card-reveal className="h-full">
                  {/* Framer Motion owns the article */}
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
                      damping: 22,
                    }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-950/10 sm:p-8"
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

                    <motion.div
                      aria-hidden="true"
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-cyan-500 to-blue-600"
                    />
                  </motion.article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
