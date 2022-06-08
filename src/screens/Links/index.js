import React from "react";
import { styles } from "../../styles";

export const Links = () => {
  return (
    <div style={styles.mainContainer}>
      <a style={styles.link} href={"/"}>
        Back
      </a>
      <br />
      <h1 style={styles.h1}>Links</h1>
      <br />
      <div style={styles.textBox}>
        Willingly would I burn to death like Phaeton, were this the price for
        reaching the sun and learning its shape, its size and its substance.
        -Eudoxus of Cnidus
      </div>
      <br />
      <a style={styles.link} href={"https://google.com"}>
        Man on Wire
      </a>
      <a style={styles.link} href={"https://google.com"}>
        Link2
      </a>
      <a style={styles.link} href={"https://google.com"}>
        Link3
      </a>
      <a style={styles.link} href={"https://google.com"}>
        Link4
      </a>
      <a style={styles.link} href={"https://google.com"}>
        Link5
      </a>
    </div>
  );
};
