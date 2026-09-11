import React from "react";
import Hero from "../Componants/Hero";

import ServicesSection from "../Componants/ServicesSection";
import AboutSection from "../Componants/AboutSection";
import ContactSection from "../Componants/ContactSection";
import TestimonialsSection from "../Componants/TestimonialsSection";
import DoctorsSection from "../Componants/DoctorsSection";
import LocationSection from "../Componants/LocationSection";
import Footer from "../Componants/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <TestimonialsSection />
      <DoctorsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Home;
