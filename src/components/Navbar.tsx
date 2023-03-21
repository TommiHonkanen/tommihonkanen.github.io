import React, { useState, useEffect, CSSProperties } from "react";
import GithubLogo from "../assets/github.png";
import HamburgerIcon from "../assets/hamburger.png";

interface Props {
  homeRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<Props> = ({
  homeRef,
  skillsRef,
  projectsRef,
  contactRef,
  aboutRef,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const styles = {
    container: {
      width: "100%",
      position: "fixed",
      height: "80px",
      backgroundColor: "#030213",
      transition: "background-color 0.2s ease-in-out",
      zIndex: "1",
    } as CSSProperties,
    navbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "0px",
      listStyleType: "none",
      overflow: "hidden",
      height: "100%",
    } as CSSProperties,
    text: {
      color: "white",
      padding: "14px 16px",
      fontWeight: "bold",
      fontSize: "20px",
      marginRight: "20px",
    } as CSSProperties,
    image: {
      width: "50px",
      marginLeft: "-23px",
      marginTop: "3px",
      marginBottom: "0px",
    } as CSSProperties,
  };

  const hamburgerMenuStyles = {
    container: {
      position: "fixed",
      zIndex: "1",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
    } as CSSProperties,
    image: {
      width: "40px",
      alignSelf: "flex-end",
      marginTop: "10px",
      marginRight: "10px",
      transform: showMenu ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.4s ease-in-out",
      cursor: "pointer",
    } as CSSProperties,
    menu: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
      marginRight: "10px",
      listStyleType: "none",
      overflow: "hidden",
      backgroundColor: "rgba(3, 2, 19, 0.9)",
      borderRadius: "10px",
      width: "30%",
    } as CSSProperties,
    text: {
      color: "white",
      padding: "14px 16px",
      fontWeight: "bold",
      fontSize: "20px",
      marginRight: "35px",
    } as CSSProperties,
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (ref: string) => {
    switch (ref) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const breakPoint = 768;

  return (
    <>
      <div
        style={{
          ...styles.container,
          backgroundColor: scrolled ? "rgba(3, 2, 19, 0.9)" : "transparent",
          display: screenWidth < breakPoint ? "none" : "block",
        }}>
        <ul style={styles.navbar}>
          <a
            style={{ marginRight: "auto" }}
            href="https://github.com/TommiHonkanen"
            target="_blank"
            rel="noreferrer">
            <img style={styles.image} src={GithubLogo} alt="GitHub logo" />
          </a>
          <li
            onClick={() => handleClick("home")}
            className={"nav-item-first"}
            style={{
              ...styles.text,
            }}>
            Home
          </li>
          <li
            onClick={() => handleClick("about")}
            className={"nav-item"}
            style={styles.text}>
            About
          </li>
          <li
            onClick={() => handleClick("contact")}
            className={"nav-item"}
            style={styles.text}>
            Contact
          </li>
          <li
            onClick={() => handleClick("skills")}
            className={"nav-item"}
            style={styles.text}>
            Skills
          </li>
          <li
            onClick={() => handleClick("projects")}
            className={"nav-item"}
            style={styles.text}>
            Projects
          </li>
        </ul>
      </div>
      <div
        style={{
          ...hamburgerMenuStyles.container,
          display: screenWidth < breakPoint ? "flex" : "none",
        }}>
        <img
          style={hamburgerMenuStyles.image}
          onClick={() => setShowMenu(!showMenu)}
          src={HamburgerIcon}
          alt="Hamburger Menu Icon"
        />
        {showMenu && (
          <ul
            style={{
              ...hamburgerMenuStyles.menu,
            }}>
            <li
              onClick={() => handleClick("home")}
              className={"nav-item-first"}
              style={hamburgerMenuStyles.text}>
              Home
            </li>
            <li
              onClick={() => handleClick("about")}
              className={"nav-item"}
              style={hamburgerMenuStyles.text}>
              About
            </li>
            <li
              onClick={() => handleClick("contact")}
              className={"nav-item"}
              style={hamburgerMenuStyles.text}>
              Contact
            </li>
            <li
              onClick={() => handleClick("skills")}
              className={"nav-item"}
              style={hamburgerMenuStyles.text}>
              Skills
            </li>
            <li
              onClick={() => handleClick("projects")}
              className={"nav-item"}
              style={hamburgerMenuStyles.text}>
              Projects
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
