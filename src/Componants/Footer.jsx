import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUp,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontics",
  "Emergency Care",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Doctors", href: "#doctors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "Location", href: "#location" },
];

// Add the clinic's real social URLs here.
const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "" },
  { name: "Instagram", icon: FaInstagram, href: "" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "" },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit our clinic",
    text: "Kabul, Afghanistan",
  },
  {
    icon: Phone,
    label: "Call us",
    text: "+93 789 11 11 22",
    href: "tel:+93789111122",
  },
  {
    icon: Mail,
    label: "Email us",
    text: "shaieqmilad410@gmail.com",
    href: "mailto:shaieqmilad410@gmail.com",
  },
  {
    icon: Clock,
    label: "Opening hours",
    text: "Sat – Thu: 8:00 AM – 9:00 PM",
  },
];

const footerLinkClass =
  "inline-flex items-center gap-2 rounded text-sm leading-6 text-slate-400 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

const Footer = ({ privacyUrl = "", termsUrl = "" }) => {
  const footerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const activeSocials = socialLinks.filter((social) =>
    /^https?:\/\//i.test(social.href),
  );

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

        const q = gsap.utils.selector(footerRef.current);

        // Main callout reveals line by line.
        gsap
          .timeline({
            defaults: {
              duration: 0.9,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: q("[data-footer-cta-slot]")[0],
              start: "top 94%",
              once: true,
            },
          })
          .from(q("[data-footer-label]"), {
            autoAlpha: 0,
            y: 20,
          })
          .from(
            q("[data-footer-title]"),
            {
              yPercent: 110,
              rotate: 2,
              stagger: 0.12,
            },
            0.1,
          )
          .from(
            q("[data-footer-cta-button]"),
            {
              autoAlpha: 0,
              y: 25,
            },
            0.3,
          );

        // Independent triggers work for stacked mobile columns.
        q("[data-footer-column-slot]").forEach((slot) => {
          gsap.from(slot.querySelector("[data-footer-column]"), {
            autoAlpha: 0,
            y: desktop ? 45 : 25,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slot,
              start: "top 98%",
              once: true,
            },
          });
        });

        gsap.from(q("[data-footer-divider]"), {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q("[data-footer-divider]")[0],
            start: "top 98%",
            once: true,
          },
        });

        if (desktop) {
          gsap.to(q("[data-footer-glow]"), {
            x: -100,
            y: -90,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });
        }
      },
      footerRef.current,
    );

    return () => mm.revert();
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      {/* Background lighting */}
      <div
        data-footer-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-cyan-800/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full bg-blue-900/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Appointment callout */}
        <div
          data-footer-cta-slot
          className="flex flex-col items-start justify-between gap-8 py-12 sm:py-16 lg:flex-row lg:items-center lg:gap-12"
        >
          <div className="min-w-0">
            <p
              data-footer-label
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
            >
              Your smile. Our care.
            </p>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block overflow-hidden pb-1">
                <span data-footer-title className="block">
                  A healthier smile
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span data-footer-title className="block text-cyan-200">
                  starts with a conversation.
                </span>
              </span>
            </h2>
          </div>

          <div data-footer-cta-button className="w-full shrink-0 sm:w-auto">
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group flex items-center justify-center gap-5 rounded-full bg-cyan-200 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-cyan-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Book an Appointment
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-950 text-cyan-100">
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </span>
            </motion.a>
          </div>
        </div>

        {/* Animated divider */}
        <div
          data-footer-divider
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent"
        />

        {/* Footer columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.15fr_0.65fr_0.85fr_1.15fr] lg:gap-8 xl:gap-12">
          {/* Brand */}
          <div data-footer-column-slot className="min-w-0">
            <div data-footer-column>
              <a
                href="/"
                aria-label="Dr. Abdul Waris home"
                className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                  <img
                    src="/Logophoto.jpeg"
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-xl font-bold tracking-tight">
                    Dr. <span className="text-cyan-200">Abdul Waris</span>
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    Dental &amp; Implant Center
                  </p>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Professional dental care designed to give you a healthier smile
                and a more confident life.
              </p>

              {activeSocials.length > 0 && (
                <div
                  role="group"
                  aria-label="Clinic social media"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {activeSocials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Clinic ${social.name}`}
                        whileHover={reduceMotion ? undefined : { y: -4 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-200 hover:bg-cyan-200 hover:text-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        <Icon size={17} aria-hidden="true" />
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div data-footer-column-slot className="min-w-0">
            <nav data-footer-column aria-label="Footer navigation">
              <h3 className="text-sm font-semibold text-white">Explore</h3>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={reduceMotion ? undefined : { x: 4 }}
                      className={footerLinkClass}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div data-footer-column-slot className="min-w-0">
            <div data-footer-column>
              <h3 className="text-sm font-semibold text-white">Our Services</h3>

              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <motion.a
                      href="#services"
                      whileHover={reduceMotion ? undefined : { x: 4 }}
                      className={footerLinkClass}
                    >
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div data-footer-column-slot className="min-w-0">
            <div data-footer-column>
              <h3 className="text-sm font-semibold text-white">Contact Us</h3>

              <div className="mt-5 space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex min-w-0 items-start gap-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
                        <Icon size={16} aria-hidden="true" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-300">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block break-words rounded text-sm leading-6 text-slate-400 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-center text-xs leading-6 text-slate-500 sm:text-left">
            © {currentYear} Dr. Abdul Waris.
            <span className="block sm:ml-1 sm:inline">
              All rights reserved.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {privacyUrl && (
              <a href={privacyUrl} className={footerLinkClass}>
                Privacy Policy
              </a>
            )}

            {termsUrl && (
              <a href={termsUrl} className={footerLinkClass}>
                Terms
              </a>
            )}

            <motion.button
              type="button"
              onClick={backToTop}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 py-1.5 pl-4 pr-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-200/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-200 text-cyan-950 transition-colors group-hover:bg-white">
                <ArrowUp size={17} aria-hidden="true" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
