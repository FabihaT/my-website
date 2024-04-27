import About from "@/Components/About";
import Services from "@/Components/Services";
import Header from "@/Components/Header";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import { useState } from "react";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Header />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
