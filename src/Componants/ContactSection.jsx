import React, { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const whatsappNumber = "93787172152";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    text: "+93 787 172 152",
    href: "tel:+93787172152",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "shaieqmilad410@gmail.com",
    href: "mailto:shaieqmilad410@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Kabul, Afghanistan",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Sat – Thu: 8:00 AM – 6:00 PM",
  },
];

const services = [
  "General Checkup",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Braces",
  "Emergency Dental Care",
];

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your full name",
    autoComplete: "name",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+93 7XX XXX XXX",
    autoComplete: "tel",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    required: false,
  },
];

const fieldClass =
  "block w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-base text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-700 focus:bg-white focus:ring-4 focus:ring-cyan-700/10";

const labelClass = "mb-2 block text-sm font-semibold text-slate-700";

const ContactSection = () => {
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

        // Heading entrance.
        gsap
          .timeline({
            defaults: {
              duration: 0.9,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: q("[data-contact-heading]")[0],
              start: "top 88%",
              once: true,
            },
          })
          .from(q("[data-contact-label]"), {
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
          .from(q("[data-contact-intro]"), { autoAlpha: 0, y: 20 }, 0.3);

        // Each column reveals independently on smaller screens.
        q("[data-panel-slot]").forEach((slot, index) => {
          gsap.from(slot.querySelector("[data-panel-reveal]"), {
            autoAlpha: 0,
            y: desktop ? 60 : 35,
            x: desktop ? (index === 0 ? -55 : 55) : 0,
            rotateY: desktop ? (index === 0 ? 9 : -9) : 0,
            scale: 0.97,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slot,
              start: "top 90%",
              once: true,
            },
          });
        });

        // Decorative line is directly controlled by scrolling.
        gsap.fromTo(
          q("[data-contact-line]"),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: q("[data-contact-grid]")[0],
              start: "top 90%",
              end: "top 35%",
              scrub: 0.7,
            },
          },
        );

        // Background parallax does not move the form.
        if (desktop) {
          gsap.to(q("[data-contact-glow]"), {
            x: -100,
            y: -120,
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const read = (name) => String(data.get(name) ?? "").trim();

    const message = [
      "Hello, I would like to request a dental appointment.",
      "",
      `Name: ${read("name")}`,
      `Phone: ${read("phone")}`,
      `Email: ${read("email") || "Not provided"}`,
      `Service: ${read("service")}`,
      "",
      `Message: ${read("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const tap = reduceMotion ? undefined : { scale: 0.98 };

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-100/60 blur-[100px]"
      />

      <div
        data-contact-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading above both columns */}
        <div
          data-contact-heading
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div
            data-contact-label
            className="mb-5 inline-flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-7 bg-cyan-700" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
              Contact Our Clinic
            </span>

            <span aria-hidden="true" className="h-px w-7 bg-cyan-700" />
          </div>

          <h2
            id="contact-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="block overflow-hidden pb-1">
              <span data-title-line className="block">
                Your Next Smile
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span data-title-line className="block text-cyan-700">
                Starts Here.
              </span>
            </span>
          </h2>

          <p
            data-contact-intro
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Ask a question, discuss your dental care, or request an appointment
            with our team.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-24 overflow-hidden rounded-full bg-cyan-100"
          >
            <div
              data-contact-line
              className="h-full origin-left rounded-full bg-cyan-700"
            />
          </div>
        </div>

        {/* Main layout */}
        <div
          data-contact-grid
          className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8"
        >
          {/* LEFT: dark contact panel */}
          <div data-panel-slot className="min-w-0 [perspective:1200px]">
            <div
              data-panel-reveal
              className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-cyan-950 p-6 text-white sm:p-8 xl:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.04]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-700/20 blur-3xl"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-200">
                  <MessageCircle size={24} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Let’s talk about
                  <span className="block text-cyan-200">your smile.</span>
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-cyan-100/75">
                  Our team is here to help you understand your options and plan
                  your next visit.
                </p>

                <div className="mt-8 grid gap-3">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={reduceMotion ? undefined : { x: 4 }}
                        className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                          <Icon size={19} aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-xs font-medium text-cyan-100/65">
                            {item.title}
                          </h4>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block break-words text-sm font-medium leading-6 text-white transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm font-medium leading-6 text-white">
                              {item.text}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-8">
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-sm text-cyan-100/75">
                      Prefer to chat directly?
                    </p>

                    <motion.a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      whileTap={tap}
                      className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-cyan-950 transition-colors hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle size={18} aria-hidden="true" />
                        Open WhatsApp
                      </span>

                      <ArrowUpRight size={18} aria-hidden="true" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: white appointment form */}
          <div data-panel-slot className="min-w-0 [perspective:1200px]">
            <div
              data-panel-reveal
              className="h-full rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-35px_rgba(8,51,68,0.25)] sm:p-8 xl:p-10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                <CalendarDays size={24} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Request an Appointment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in your details to prepare a request in WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-7">
                <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={`min-w-0 ${
                        field.name === "email" ? "sm:col-span-2" : ""
                      }`}
                    >
                      <label
                        htmlFor={`contact-${field.name}`}
                        className={labelClass}
                      >
                        {field.label}

                        {!field.required && (
                          <span className="ml-1 font-normal text-slate-400">
                            (optional)
                          </span>
                        )}
                      </label>

                      <input
                        id={`contact-${field.name}`}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={fieldClass}
                      />
                    </div>
                  ))}

                  <div className="min-w-0 sm:col-span-2">
                    <label htmlFor="contact-service" className={labelClass}>
                      Select Service
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="min-w-0 sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us how we can help..."
                      className={`${fieldClass} resize-y`}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={tap}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-800 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-900/10 transition-colors hover:bg-cyan-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
                >
                  Continue to WhatsApp
                  <Send size={17} aria-hidden="true" className="shrink-0" />
                </motion.button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Review and send your request in WhatsApp. Our team will
                  confirm availability.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
