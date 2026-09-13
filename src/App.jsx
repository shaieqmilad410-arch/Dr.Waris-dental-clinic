import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Hero from "./Componants/Hero";
import ServicesSection from "./Componants/ServicesSection";
import AboutSection from "./Componants/AboutSection";
import ContactSection from "./Componants/ContactSection";
import TestimonialsSection from "./Componants/TestimonialsSection";
import DoctorsSection from "./Componants/DoctorsSection";
import LocationSection from "./Componants/LocationSection";
import Footer from "./Componants/Footer";
import DiscountPopup from "./Componants/DiscountPopup";
import FAQ from "./Componants/FAQ";
import DeveloperCredit from "./Componants/DeveloperCredit";

const App = () => {
  return (
    <>
      <DiscountPopup />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/doctors" element={<DoctorsSection />} />
      </Routes>
    </>
  );
};

export default App;
