import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  // ==========================================
  // 🔴 REPLACE THIS WITH YOUR OWN WHATSAPP NUMBER
  // Example: Afghanistan +93 700 123 456
  // Write it WITHOUT +, spaces, or -
  // ==========================================
  const whatsappNumber = "93787172152";

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      text: "+93 787 172 152",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "shaieqmilad410@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      text: "Kabul, Afghanistan",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      text: "Sat - Thu: 8:00 AM - 6:00 PM",
    },
  ];

  // ==========================================
  // WHATSAPP FORM SUBMISSION
  // ==========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const message = `Hello, I would like to book an appointment.

Name: ${form.name.value}
Phone: ${form.phone.value}
Email: ${form.email.value}
Service: ${form.service.value}
Message: ${form.message.value}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let’s Take Care of Your <span className="text-cyan-600">Smile</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Have a question or want to book an appointment? Send us a message
            and our dental team will get back to you.
          </p>
        </motion.div>

        {/* ==========================================
            MAIN CONTACT AREA
        ========================================== */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ==========================================
              LEFT SIDE
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Get in Touch
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Our friendly dental team is here to answer your questions, help
              you choose the right treatment, and schedule your visit.
            </p>

            {/* Contact Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 rounded-2xl bg-cyan-600 p-6 text-white shadow-lg shadow-cyan-200"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <MessageCircle size={24} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold">
                      Chat with us on WhatsApp
                    </h4>

                    <p className="mt-1 text-sm text-cyan-50">
                      Get quick answers and book your appointment.
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  WhatsApp
                  <Send size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ==========================================
              RIGHT SIDE — APPOINTMENT FORM
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Book an Appointment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill out the form below. You will be redirected to WhatsApp with
                your appointment details.
              </p>
            </div>

            {/* ==========================================
                FORM
            ========================================== */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+93 7XX XXX XXX"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Select Service
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>

                  <option value="General Checkup">General Checkup</option>

                  <option value="Teeth Cleaning">Teeth Cleaning</option>

                  <option value="Teeth Whitening">Teeth Whitening</option>

                  <option value="Dental Implants">Dental Implants</option>

                  <option value="Braces">Braces</option>

                  <option value="Emergency Dental Care">
                    Emergency Dental Care
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:bg-cyan-700"
              >
                Send Appointment Request
                <Send size={18} />
              </motion.button>

              <p className="text-center text-xs text-slate-500">
                Your request will open in WhatsApp for confirmation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
