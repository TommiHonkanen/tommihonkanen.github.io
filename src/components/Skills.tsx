import React, { CSSProperties } from "react";
import ReactLogo from "../assets/react.png";
import JavaScriptLogo from "../assets/javascript.png";
import ScalaLogo from "../assets/scala.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import TypeScriptLogo from "../assets/typescript.png";
import CLogo from "../assets/C.png";
import GitLogo from "../assets/git.png";
import AzureLogo from "../assets/azure.png";
import ReactNativeLogo from "../assets/react-native.png";
import SqlLogo from "../assets/sql.png";
import HaskellLogo from "../assets/haskell.png";
import Skill from "./Skill";

interface Props {
  skillsRef: React.RefObject<HTMLDivElement>;
}

const Skills: React.FC<Props> = ({ skillsRef }) => {
  const styles = {
    container: {
      backgroundColor: "#010022",
      // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5) 3%, #030213 8%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    } as CSSProperties,
    titleText: {
      marginTop: "80px",
      color: "white",
      fontSize: "60px",
      fontWeight: "bold",
      // textShadow: "3px 3px 0px #f358b9",
      // animation: "text-shadow 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
    } as CSSProperties,
    logos: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexWrap: "wrap",
      // backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      padding: "20px",
      marginBottom: "50px",
      // boxShadow: "2px 2px 10px 0px #f358b9",
    } as CSSProperties,
  };
  return (
    <div
      className={"skills-container"}
      ref={skillsRef}
      style={styles.container}>
      <h1 className={"title"} style={styles.titleText}>
        Skills
      </h1>
      <div className={"logos"} style={styles.logos}>
        <Skill image={ReactLogo} text={"React"} />
        <Skill image={ReactNativeLogo} text={"React Native"} />
        <Skill image={JavaScriptLogo} text={"JavaScript"} />
        <Skill image={TypeScriptLogo} text={"TypeScript"} />
        <Skill image={ScalaLogo} text={"Scala"} />
        <Skill image={AzureLogo} text={"Azure DevOps"} />
        <Skill image={HtmlLogo} text={"HTML"} />
        <Skill image={CssLogo} text={"CSS"} />
        <Skill image={HaskellLogo} text={"Haskell"} />
        <Skill image={CLogo} text={"C"} />
        <Skill image={GitLogo} text={"Git"} />
        <Skill image={SqlLogo} text={"SQL"} />
      </div>
    </div>
  );
};

export default Skills;
