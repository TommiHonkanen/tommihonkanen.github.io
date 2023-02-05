import React, { CSSProperties } from "react";
import ScaleGame from "../assets/scalegame.png";
import Portfolio from "../assets/portfolio.png";
import RehearsalApp from "../assets/rehearsal.png";
import Project from "./Project";

interface Props {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<Props> = ({ projectsRef }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "50px",
      backgroundColor: "#010022",
      maxWidth: "1200px",
    } as CSSProperties,
    title: {
      fontSize: "50px",
      fontWeight: "bold",
      color: "white",
      marginTop: "80px",
      marginBottom: "0",
    } as CSSProperties,
    projects: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "50px",
      backgroundColor: "#010022",
      width: "100%",
      flexWrap: "wrap",
    } as CSSProperties,
  };
  return (
    <div
      className={"projects-container"}
      ref={projectsRef}
      style={styles.container}>
      <h1 className={"title"} style={styles.title}>
        Projects
      </h1>
      <div style={styles.projects}>
        <Project
          name={"Portfolio Website"}
          image={Portfolio}
          description={
            "This is a website that I made to showcase my projects and skills. The website is made using React and is hosted on GitHub Pages. The website is respnsive and works on all screen sizes."
          }
          technologies={"React, TypeScript, CSS"}
          link={"https://github.com/TommiHonkanen/portfolio-website"}
        />
        <Project
          name={"Scale Game"}
          image={ScaleGame}
          description={
            "Scale game is a game built with Scala Swing in which players compete against each other by stacking weights on top of scales and other weights. The game is turn-based and every players gets to place one weight each turn. Weights can be placed on any scale and players can choose the exact tile on which they want to place the weight."
          }
          technologies={"Scala, Swing, Git, JUnit"}
          link={"https://github.com/TommiHonkanen/scale-game"}
        />
        <Project
          name={"Rehearsal App"}
          image={RehearsalApp}
          description={
            "This is an application for rehearsing all kinds of topics by creating quizzes and adding questions to those quizzes. The application is made using Oak, PostgreSQL, Docker and Bootstrap. The application is hosted on Heroku."
          }
          technologies={"JavaScript (Oak), PostgreSQL, Docker, Bootstrap"}
          link={"https://github.com/TommiHonkanen/rehearsal-application"}
        />
      </div>
    </div>
  );
};

export default Projects;
