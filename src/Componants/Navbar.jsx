import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= NAVBAR ================= */}
        <div className="flex h-20 items-center justify-between">
          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-md shadow-cyan-500/20">
              <span className="text-lg font-bold">D</span>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Dr. <span className="text-cyan-500">Waris</span>
              </h1>

              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:block">
                Dental Clinic
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="group relative py-2 text-md font-semibold text-slate-600 transition-colors duration-300 hover:text-cyan-500"
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-cyan-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= APPOINTMENT BUTTON ================= */}
          <NavLink
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-cyan-500/30 lg:flex"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </NavLink>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 hover:text-cyan-500 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-cyan-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Appointment */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
