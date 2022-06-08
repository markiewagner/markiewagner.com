import React from "react";
import { styles } from "../../styles";
import cathedral2 from "../../assets/cathedral2.jpg";
import chair from "../../assets/chair.jpeg";
import chairs from "../../assets/chairs.webp";
import dream from "../../assets/dream.png";
import jardinesDePersia from "../../assets/jardines-de-persia.jpeg";
import promise from "../../assets/promise.jpeg";
import sydmead from "../../assets/sydmead.jpeg";
// import tables from "../../assets/tables.webp";
import { isMobile } from "react-device-detect";

export const Images = () => {
  return (
    <div style={styles.mainContainer}>
      <a style={styles.link} href={"/"}>
        Back
      </a>
      <br />
      <h1 style={styles.h1}>Images</h1>
      <br />
      <div style={styles.textBox}>
        Willingly would I burn to death like Phaeton, were this the price for
        reaching the sun and learning its shape, its size and its substance.
        -Eudoxus of Cnidus
      </div>
      {isMobile && <br />}
      <img alt={""} src={cathedral2} style={imgStyles.cathedral2} />
      {isMobile && <br />}
      <img alt={""} src={chair} style={imgStyles.chair} />
      {isMobile && <br />}
      <img alt={""} src={chairs} style={imgStyles.chairs} />
      {isMobile && <br />}
      <img alt={""} src={dream} style={imgStyles.dream} />
      {isMobile && <br />}
      {!isMobile && (
        <img
          alt={""}
          src={jardinesDePersia}
          style={imgStyles.jardinesDePersia}
        />
      )}
      {isMobile && <br />}
      {!isMobile && <img alt={""} src={promise} style={imgStyles.promise} />}
      {!isMobile && <img alt={""} src={sydmead} style={imgStyles.sydmead} />}
      {/* <img src={tables} style={imgStyles.tables} /> */}
      <br />
    </div>
  );
};

const imgStyles = {
  cathedral2: {
    position: isMobile ? null : "absolute",
    width: isMobile ? 320 : 479,
    height: isMobile ? 450 : 635,
    left: isMobile ? null : 795,
    top: isMobile ? null : 366,
  },
  sydmead: {
    position: isMobile ? null : "absolute",
    width: 629,
    height: 303,
    left: isMobile ? null : 91,
    top: isMobile ? null : 361,
  },
  dream: {
    position: isMobile ? null : "absolute",
    width: isMobile ? 320 : 571,
    height: isMobile ? 400 : 691,
    left: isMobile ? null : 120,
    top: isMobile ? null : 742,
  },
  chair: {
    position: isMobile ? null : "absolute",
    width: isMobile ? 320 : 501,
    height: isMobile ? 400 : 674,
    left: isMobile ? null : 795,
    top: isMobile ? null : 1118,
  },
  chairs: {
    position: isMobile ? null : "absolute",
    width: isMobile ? 320 : 520,
    height: isMobile ? 400 : 646,
    left: isMobile ? null : 149,
    top: isMobile ? null : 1524,
  },
  promise: {
    position: isMobile ? null : "absolute",
    width: 1142,
    height: 365,
    left: isMobile ? null : 154,
    top: isMobile ? null : 2355,
  },
  jardinesDePersia: {
    position: isMobile ? null : "absolute",
    width: 617,
    height: 367,
    left: isMobile ? null : 737,
    top: isMobile ? null : 1890,
  },
  tables: {
    position: isMobile ? null : "absolute",
    width: 479,
    height: 635,
  },
};
