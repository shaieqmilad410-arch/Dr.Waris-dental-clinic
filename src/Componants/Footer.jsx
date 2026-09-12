import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Teeth Whitening",
    "Orthodontics",
    "Emergency Care",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Location", href: "#location" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="inline-block text-2xl font-bold">
              Dr. <span className="text-cyan-400">Abdul Waris</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Professional dental care designed to give you a healthier smile
              and a more confident life.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-800 text-slate-300 transition
                hover:bg-cyan-500 hover:text-white"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-800 text-slate-300 transition
                hover:bg-cyan-500 hover:text-white"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-800 text-slate-300 transition
                hover:bg-cyan-500 hover:text-white"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition
                    hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition
                    hover:text-cyan-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                <div>
                  <p className="text-sm font-medium">Address</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Kabul, Afghanistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                <div>
                  <p className="text-sm font-medium">Phone</p>

                  <a
                    href="tel: +93789111122"
                    className="mt-1 block text-sm text-slate-400
                    transition hover:text-cyan-400"
                  >
                    +93 789 11 11 22
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                <div>
                  <p className="text-sm font-medium">Email</p>

                  <a
                    href="mailto:info@smiledental.com"
                    className="mt-1 block text-sm text-slate-400
                    transition hover:text-cyan-400"
                  >
                    shaieqmilad410@gamil.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                <div>
                  <p className="text-sm font-medium">Opening Hours</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Sat - Thur: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center
          justify-between gap-4 px-4 py-6 sm:px-6
          md:flex-row lg:px-8"
        >
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {2026} Dr.Abdul Waris All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="#"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              Terms
            </a>

            {/* Back to Top */}
            <motion.a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center
              rounded-full bg-cyan-500 text-white
              transition hover:bg-cyan-400"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
