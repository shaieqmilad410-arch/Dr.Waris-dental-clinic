import React, { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfter() {
  // Change your images and treatment name here.
  // Put the photos inside public/images/.
  const beforeImage = "/Natural smile before whitening-1.png";
  const afterImage = "/Naturally brightened smile after whitening-2.png";
  const treatment = "Teeth whitening";

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const comparisonRef = useRef(null);

  const rangeId = useId();
  const reduceMotion = useReducedMotion();

  const [position, setPosition] = useState(50);
  const reveal = useMotionValue(50);

  const beforeClipPath = useTransform(
    reveal,
    (value) => `inset(0 ${100 - value}% 0 0)`,
  );

  const afterClipPath = useTransform(
    reveal,
    (value) => `inset(0 0 0 ${value}%)`,
  );

  const handleLeft = useTransform(reveal, (value) => `${value}%`);

  useEffect(() => {
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        })
        .from(headingRef.current, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          comparisonRef.current,
          {
            y: 48,
            opacity: 0,
            scale: 0.97,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  const updatePosition = (event) => {
    const nextPosition = Number(event.target.value);

    setPosition(nextPosition);
    reveal.set(nextPosition);
  };

  return (
    <section
      ref={sectionRef}
      id="before-after"
      aria-labelledby={`${rangeId}-heading`}
      className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div ref={headingRef} className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Before & After
          </span>

          <h2
            id={`${rangeId}-heading`}
            className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl"
          >
            See the difference.
            <span className="mt-2 block text-cyan-300">
              Discover your smile.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Move the slider to explore a treatment result.
          </p>
        </div>

        {/* Comparison card */}
        <div
          ref={comparisonRef}
          className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-cyan-950/30 sm:p-3"
        >
          <div className="flex items-center justify-between gap-4 px-3 pb-4 pt-2 sm:px-4">
            <p className="text-sm font-medium text-slate-200">{treatment}</p>

            <span className="text-xs text-slate-400">Drag to compare</span>
          </div>

          {/* Both photos keep the same size and position */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 sm:aspect-[16/9]">
            {/* After photo */}
            <img
              src={afterImage}
              alt={`${treatment}: after treatment`}
              draggable={false}
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            />

            {/* Before photo */}
            <motion.div
              style={{ clipPath: beforeClipPath }}
              className="pointer-events-none absolute inset-0"
            >
              <img
                src={beforeImage}
                alt={`${treatment}: before treatment`}
                draggable={false}
                loading="lazy"
                className="absolute inset-0 h-full w-full select-none object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                BEFORE
              </span>
            </motion.div>

            {/* After label */}
            <motion.div
              style={{ clipPath: afterClipPath }}
              className="pointer-events-none absolute inset-0"
            >
              <span className="absolute right-4 top-4 rounded-full border border-cyan-200/30 bg-cyan-950/80 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-100 backdrop-blur-md">
                AFTER
              </span>
            </motion.div>

            {/* Divider and handle */}
            <motion.div
              aria-hidden="true"
              style={{ left: handleLeft }}
              className="pointer-events-none absolute inset-y-0 z-10 w-0"
            >
              <div className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-white shadow-lg" />

              <div className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-slate-900 shadow-xl sm:h-14 sm:w-14">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m8 8-4 4 4 4" />
                  <path d="m16 8 4 4-4 4" />
                  <path d="M12 6v12" />
                </svg>
              </div>
            </motion.div>

            {/* Mouse, touch, and keyboard controls */}
            <label htmlFor={rangeId} className="sr-only">
              Compare before and after treatment
            </label>

            <input
              id={rangeId}
              type="range"
              min="0"
              max="100"
              step="1"
              value={position}
              onChange={updatePosition}
              aria-valuetext={`${position}% before image visible`}
              className="dental-comparison-range absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize appearance-none bg-transparent focus:outline-none"
            />

            {/* Keyboard focus indicator */}
            <div
              aria-hidden="true"
              className="dental-comparison-focus pointer-events-none absolute inset-0 z-30 rounded-2xl border-4 border-cyan-300 opacity-0"
            />
          </div>

          <div className="flex items-center justify-between gap-2 px-3 pb-2 pt-4 text-xs text-slate-400 sm:px-4">
            <span>Before treatment</span>
            <span>After treatment</span>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-500">
          Individual results vary. A consultation helps determine the
          appropriate treatment for you.
        </p>
      </div>

      {/* Custom styles for the transparent range control */}
      <style>{`
        .dental-comparison-range {
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
        }

        .dental-comparison-range::-webkit-slider-runnable-track {
          height: 100%;
          background: transparent;
        }

        .dental-comparison-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 1px;
          height: 100%;
          background: transparent;
          border: 0;
        }

        .dental-comparison-range::-moz-range-track {
          height: 100%;
          background: transparent;
          border: 0;
        }

        .dental-comparison-range::-moz-range-thumb {
          width: 1px;
          height: 100%;
          background: transparent;
          border: 0;
          border-radius: 0;
        }

        .dental-comparison-range:focus-visible
          + .dental-comparison-focus {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
