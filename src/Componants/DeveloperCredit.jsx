import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/93787172152",
    icon: FaWhatsapp,
    hoverClass: "hover:border-green-500 hover:bg-green-500 hover:text-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19a8S5b2Mv/?mibextid=wwXIfr",
    icon: FaFacebookF,
    hoverClass: "hover:border-blue-600 hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/milad_shaieq02/",
    icon: FaInstagram,
    hoverClass: "hover:border-pink-600 hover:bg-pink-600 hover:text-white",
  },
  {
    name: "Email",
    href: "mailto:shaieqmilad410@gmail.com",
    icon: FaEnvelope,
    hoverClass: "hover:border-cyan-800 hover:bg-cyan-800 hover:text-white",
  },
];

const DeveloperCredit = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative bg-white">
      {/* Top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-slate-100"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        {/* Developer credit */}
        <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 font-mono text-sm font-bold text-cyan-800"
          >
            {"</>"}
          </div>

          <div className="min-w-0">
            <p className="text-xs leading-6 text-slate-500 sm:text-sm">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.miladshaieq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded font-semibold text-cyan-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
              >
                Milad Shaieq
              </a>
            </p>

            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Web Developer
            </p>
          </div>
        </div>

        {/* Social links */}
        <div
          role="group"
          aria-label="Contact Milad Shaieq"
          className="flex shrink-0 items-center gap-2"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const isEmail = social.href.startsWith("mailto:");

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={`${social.name} — Milad Shaieq`}
                title={social.name}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${social.hoverClass}`}
              >
                <Icon size={17} aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;
