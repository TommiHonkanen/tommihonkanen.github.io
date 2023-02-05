import Title from "./components/Title";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React, { useRef, CSSProperties } from "react";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const styles: { container: CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#010022",
      margin: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
      <div style={styles.container}>
        <Title homeRef={homeRef} aboutRef={aboutRef} />
        <Contact aboutRef={aboutRef} contactRef={contactRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
