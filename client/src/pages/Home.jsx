// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Features from "../sections/Features";
import How from "../sections/How";
import Dashboard from "../sections/Dashboard";
import Demo from "../sections/Demo";
import Testimonials from "../sections/Testimonials";
import Trust from "../sections/Trust";
import Usp from "../sections/Usp";
import CTA from "../sections/CTA";

import "../style.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Usp />
      <Problem />
      <Solution />
      <Features />
      <How />
      <Dashboard />
      <Demo />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;