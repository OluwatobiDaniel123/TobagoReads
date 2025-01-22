import React from "react";
import About from "../articles/About";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";
import CountUp from "../articles/CountUp";
import ProjectPage from "../articles/ProjectPage";
import ContactPage from "../articles/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <CountUp />
      <ProjectPage />
      {/* <Contact /> */}
      <ContactPage />
    </div>
  );
};

export default Home;
