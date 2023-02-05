import React, { useRef, CSSProperties } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<Props> = ({ aboutRef, contactRef }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#010022",
      width: "100%",
      flexWrap: "wrap",
      marginTop: "30px",
    } as CSSProperties,
    left: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "flex-start",
      alignSelf: "flex-start",
      width: "600px",
      height: "100%",
      padding: "50px",
    } as CSSProperties,
    right: {
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
    text: {
      fontSize: "20px",
      marginTop: "0",
      color: "white",
      lineHeight: "1.5",
    } as CSSProperties,
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    } as CSSProperties,
    input: {
      width: "100%",
      height: "50px",
      marginBottom: "20px",
      padding: "10px",
      fontSize: "20px",
      borderRadius: "5px",
      color: "white",
      backgroundColor: "#010022",
      boxShadow: "2px 2px 10px 0px #f358b9",
      border: "2px solid #f358b9",
      fontFamily: "Mona Sans",
    } as CSSProperties,
    textarea: {
      width: "100%",
      height: "200px",
      marginBottom: "20px",
      padding: "10px",
      fontSize: "20px",
      borderRadius: "5px",
      backgroundColor: "#010022",
      boxShadow: "2px 2px 10px 0px #f358b9",
      border: "2px solid #f358b9",
      color: "white",
      lineHeight: "1.5",
      fontFamily: "Mona Sans",
    } as CSSProperties,
    button: {
      width: "120px",
      height: "50px",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "5px",
      backgroundColor: "#010022",
      color: "white",
      cursor: "pointer",
      fontFamily: "Mona Sans",
      letterSpacing: "1px",
    } as CSSProperties,
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n3n0lzy",
        "template_4if8yho",
        form.current as HTMLFormElement,
        "h6QeLJlMuwVfAiWO_"
      )
      .then(
        (_result) => {
          alert("Message sent successfully!");
          // console.log(result.text);
        },
        (_error) => {
          alert("Message failed to send. Please try again later.");
          // console.log(error.text);
        }
      );
  };

  return (
    <div style={styles.container}>
      <div ref={aboutRef} style={styles.left}>
        <h1 className={"title"} style={styles.title}>
          About Me
        </h1>
        <p style={{ ...styles.text, fontSize: "22px" }}>Hey there!</p>
        <p style={styles.text}>
          I am a second-year computer science student at Aalto University. I am
          most experienced with front-end development, but I'm always looking to
          expand my horizons in the field. I'm passionate about finding new and
          innovative solutions to challenges, and I'm dedicated to staying up to
          date with the latest advancements. Whether working with a team or
          independently, I approach each project with enthusiasm and a
          commitment to delivering exceptional results. If you have any
          questions, feel free to contact me.
        </p>
      </div>
      <div ref={contactRef} style={styles.right}>
        <h1 className={"title"} style={styles.title}>
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input
            style={styles.input}
            name={"user_name"}
            type="text"
            placeholder="Name"
            minLength={1}
            required
          />
          <input
            style={styles.input}
            name={"user_email"}
            type="email"
            placeholder="Email"
            minLength={1}
            required
          />
          <textarea
            style={styles.textarea}
            name={"message"}
            placeholder="Message"
            minLength={1}
            required
          />
          <input
            type={"submit"}
            value="Send"
            className={"form-button"}
            style={styles.button}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
