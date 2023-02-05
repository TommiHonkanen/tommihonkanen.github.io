import React, { CSSProperties } from "react";
import GithubLogo from "../assets/github.png";

interface Props {
  name: string;
  image: string;
  description: string;
  technologies: string;
  link: string;
}

const Project: React.FC<Props> = ({
  name,
  image,
  description,
  technologies,
  link,
}) => {
  const styles = {
    project: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
      backgroundColor: "#010022",
      width: "100%",
      flexWrap: "wrap",
    } as CSSProperties,
    textBlock: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "600px",
      height: "100%",
      padding: "50px",
    } as CSSProperties,
    title: {
      fontSize: "50px",
      fontWeight: "bold",
      color: "white",
    } as CSSProperties,
    projectTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "0",
    } as CSSProperties,
    text: {
      fontSize: "17px",
      marginTop: "0",
      color: "white",
      lineHeight: "1.5",
    } as CSSProperties,
    image: {
      width: "400px",
      maxWidth: "100%",
    } as CSSProperties,
    link: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "#010022",
      width: "100%",
      flexWrap: "wrap",
    } as CSSProperties,
    linkText: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
    } as CSSProperties,
    linkImage: {
      width: "30px",
      marginLeft: "10px",
    } as CSSProperties,
  };

  return (
    <div style={styles.project}>
      <img
        className={"project-image"}
        style={styles.image}
        src={image}
        alt={name}
      />
      <div style={styles.textBlock}>
        <h1 style={styles.projectTitle}>{name}</h1>0
        <p style={styles.text}>{description}</p>
        <p style={{ ...styles.text, textAlign: "left" }}>
          Technologies: {technologies}
        </p>
        <div style={styles.link}>
          <a
            className={"nav-item"}
            style={styles.linkText}
            href={link}
            target="_blank"
            rel="noreferrer">
            View on GitHub
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <img style={styles.linkImage} src={GithubLogo} alt="Github Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
