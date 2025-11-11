"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Jumbotron from "@/components/Jumbotron";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

function Home(){
  return(
    <div>
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;