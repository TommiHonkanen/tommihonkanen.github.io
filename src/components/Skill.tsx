import React, { CSSProperties } from "react";

interface Props {
  text: string;
  image: string;
}

const Skill: React.FC<Props> = ({ text, image }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    text: {
      color: "white",
      fontSize: "20px",
      fontFamily: "Mona Sans",
      letterSpacing: "1px",
      fontWeight: "600",
      // textShadow: "1px 1px 1px #f358b9",
    } as CSSProperties,
    logo: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "25px",
      marginRight: "25px",
      border: "2px solid #f358b9",
      boxShadow: "2px 2px 10px 0px #f358b9",
      borderRadius: "100px",
      padding: "40px",
    } as CSSProperties,
    image: {
      width: "100px",
      height: "100px",
      objectFit: "contain",
    } as CSSProperties,
  };

  return (
    <div className={"logo"} style={styles.container}>
      <div style={styles.logo}>
        <img src={image} style={styles.image} alt={`${text  } Logo`} />
      </div>
      <div>
        <p style={styles.text}>{text}</p>
      </div>
    </div>
  );
};
export default Skill;
