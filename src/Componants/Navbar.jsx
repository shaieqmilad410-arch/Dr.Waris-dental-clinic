import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ArrowUpRight, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  // GSAP: compact the navbar as the page scrolls.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const q = gsap.utils.selector(headerRef.current);

        gsap
          .timeline({
            scrollTrigger: {
              start: 0,
              end: 160,
              scrub: 0.5,
            },
          })
          .to(
            q("[data-nav-row]"),
            {
              height: 68,
              ease: "none",
            },
            0,
          )
          .to(
            q("[data-nav-surface]"),
            {
              backgroundColor: "rgba(255,255,255,0.97)",
              boxShadow: "0 18px 50px -24px rgba(8,51,68,0.35)",
              borderColor: "rgba(8,145,178,0.22)",
              ease: "none",
            },
            0,
          );
      },
      headerRef.current,
    );

    return () => mm.revert();
  }, []);

  // Close the menu after navigation.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Close the menu on Escape or when entering desktop mode.
  useEffect(() => {
    if (!isOpen) return;

    const desktop = window.matchMedia("(min-width: 1280px)");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (desktop.matches) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Floating navbar */}
        <nav
          data-nav-surface
          aria-label="Main navigation"
          className="relative rounded-[1.4rem] border border-slate-200/80 bg-white/90 shadow-[0_8px_32px_-18px_rgba(8,51,68,0.25)] backdrop-blur-xl"
        >
          <div
            data-nav-row
            className="flex h-20 items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 xl:px-6"
          >
            {/* Brand */}
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              aria-label="Dr.Waris Dental & Implant Center home"
              className="flex min-w-0 items-center gap-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 sm:gap-3"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-cyan-100 bg-white sm:h-12 sm:w-12"
              >
                <img
                  src="/Logophoto.jpeg"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <div className="min-w-0 leading-none">
                <p className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  Dr.
                  <span className="text-cyan-700">Waris</span>
                </p>

                <p className="mt-1.5 hidden truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-500 min-[380px]:block sm:text-[10px] sm:tracking-[0.16em]">
                  Dental &amp; Implant Center
                </p>
              </div>
            </NavLink>

            {/* Desktop navigation: 1280px and above */}
            <div className="hidden shrink-0 items-center gap-0.5 rounded-full border border-slate-100 bg-slate-50/80 p-1 xl:flex">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative rounded-full px-3 py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 2xl:px-4 ${
                      isActive
                        ? "text-cyan-800"
                        : "text-slate-500 hover:text-cyan-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          aria-hidden="true"
                          layoutId={
                            reduceMotion ? undefined : "clinic-navbar-active"
                          }
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                          className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-inset ring-slate-200/70"
                        />
                      )}

                      <span className="relative z-10">{link.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop appointment button */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="hidden shrink-0 xl:block"
            >
              <NavLink
                to="/contact"
                className="group flex items-center gap-3 whitespace-nowrap rounded-full bg-cyan-800 py-2 pl-4 pr-2 text-sm font-semibold text-white shadow-lg shadow-cyan-900/10 transition-colors hover:bg-cyan-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
              >
                Book Appointment
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  />
                </span>
              </NavLink>
            </motion.div>

            {/* Phone and tablet menu button */}
            <motion.button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              whileTap={reduceMotion ? undefined : { scale: 0.92 }}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              aria-controls="clinic-mobile-menu"
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 sm:h-11 sm:w-11 xl:hidden ${
                isOpen
                  ? "bg-cyan-800 text-white"
                  : "bg-cyan-50 text-cyan-800 hover:bg-cyan-100"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{
                    opacity: 0,
                    rotate: reduceMotion ? 0 : -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: reduceMotion ? 0 : 45,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.15,
                  }}
                  className="flex"
                >
                  {isOpen ? (
                    <X size={21} aria-hidden="true" />
                  ) : (
                    <Menu size={21} aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile and tablet dropdown */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.nav
              id="clinic-mobile-menu"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
                scale: reduceMotion ? 1 : 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -8,
                scale: reduceMotion ? 1 : 0.98,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.22,
                ease: "easeOut",
              }}
              className="absolute inset-x-0 top-full mt-3 max-h-[calc(100dvh-120px)] origin-top overflow-y-auto overscroll-contain rounded-[1.4rem] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(8,51,68,0.3)] sm:left-auto sm:w-[380px] xl:hidden"
            >
              <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Explore our clinic
              </p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.045,
                    },
                  },
                }}
                className="space-y-1"
              >
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: reduceMotion ? 0 : 10,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cyan-700 ${
                          isActive
                            ? "bg-cyan-50 text-cyan-800"
                            : "text-slate-600 hover:bg-slate-50 hover:text-cyan-700"
                        }`
                      }
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-[10px] font-medium text-slate-400"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{link.name}</span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 opacity-50"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-3 border-t border-slate-100 pt-3">
                <motion.div
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-800 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-cyan-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                  >
                    <CalendarDays
                      size={17}
                      aria-hidden="true"
                      className="shrink-0"
                    />
                    Book Appointment
                  </NavLink>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
