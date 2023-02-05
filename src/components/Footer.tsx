import React, { CSSProperties } from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#030213",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      padding: "15px",
    } as CSSProperties,
    text: {
      color: "white",
      fontSize: "15px",
      fontFamily: "Mona Sans",
      letterSpacing: "1px",
      marginLeft: "25px",
    } as CSSProperties,
  };

  return (
    <div style={styles.footer}>
      <p style={styles.text}>Copyright © 2023</p>
    </div>
  );
};

export default Footer;
