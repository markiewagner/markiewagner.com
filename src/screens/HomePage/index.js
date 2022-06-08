import React from "react";
import { styles } from "../../styles";

export const HomePage = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.h1}>Markie Wagner</h1>
      <br />
      <div style={styles.textBox}>
        I'm the founder of Delphi Labs, an applied research and advisory firm. 
        In a 100 year period, only a handful of organizations make it in the canon — 
        we help founders building these companies get off the ground and not die. I'm primarily interested in modern social infrastructure, 
        how people work, and extending human agency. In the past, I've partnered with companies like Waymo, Praxis, Recurrency, Amplitude, 
        Hang, and more as they launch new products and teams in AI, ML infrastructure, and crypto.

      </div>
      <br />
      <h2 style={styles.h2}>Writing</h2>
      <a style={styles.link} href={"/future-of-community"}>
        Building Modern Social Infrastructure
      </a>
      <br />
      <h2 style={styles.h2}>Gems</h2>
      <a style={styles.link} href={"/links"}>
        Links
      </a>
      <a style={styles.link} href={"/images"}>
        Images
      </a>
      <br />
      <h2 style={styles.h2}>Find Me</h2>
      <a style={styles.link} href={"https://twitter.com/markiewagner"}>
        Twitter
      </a>
      <a style={styles.link} href={"https://www.linkedin.com/in/markiewagner/"}>
        LinkedIn
      </a>
      <a style={styles.link} href={"markie.m.wagner@gmail.com "}>
        Email
      </a>
    </div>
  );
};
