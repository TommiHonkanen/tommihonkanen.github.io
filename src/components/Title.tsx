import Streaks from "../assets/Streaks.mp4";
import arrow from "../assets/chevron-down-solid.png";
import React, { CSSProperties } from "react";

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
}

const Title: React.FC<Props> = ({ aboutRef, homeRef }) => {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    } as CSSProperties,
    video: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    } as CSSProperties,
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    } as CSSProperties,
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    titleText: {
      color: "white",
      fontSize: "60px",
      fontWeight: "bold",
      textShadow: "0px 0px 10px #030213",
      marginBottom: "0",
      textAlign: "center",
    } as CSSProperties,
    text: {
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      textShadow: "0px 0px 5px #030213",
      marginTop: "0",
      textAlign: "center",
      letterSpacing: "1px",
    } as CSSProperties,
    arrow: {
      cursor: "pointer",
      objectFit: "contain",
      marginTop: "20px",
      animation: "bounce 2s infinite",
    } as CSSProperties,
    arrowImage: {
      width: "50px",
      height: "50px",
      objectFit: "contain",
    } as CSSProperties,
  };

  const handleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef} style={styles.container}>
      <video style={styles.video} src={Streaks} autoPlay loop muted />
      <div style={styles.overlay}>
        <div style={styles.textContainer}>
          <h1 style={styles.titleText}>Tommi Honkanen</h1>
          <p style={styles.text}>Software Developer</p>
          <div onClick={handleClick} style={styles.arrow}>
            <img style={styles.arrowImage} src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
