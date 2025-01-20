import React from "react";
import About from "../articles/About";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";
import CountUp from "../articles/CountUp";
import Skills from "../articles/Skills";
import ProjectPage from "../articles/ProjectPage";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <CountUp />
      {/* <Skills /> */}
      <ProjectPage />
      <Contact />
    </div>
  );
};

export default Home;
