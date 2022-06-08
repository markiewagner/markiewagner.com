import { isMobile } from "react-device-detect";

export const styles = {
  mainContainer: {
    position: "absolute",
    left: "5%",
    top: "5%",
    display: "flex",
    flexDirection: "column",
    width: isMobile ? 280 : 550,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  textBox: {
    fontSize: 20,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    fontSize: 20,
    marginBottom: 5,
  },
};
