import { isMobile } from "react-device-detect";

export const homeStyles = {
  container: {
    position: "absolute",
    left: "5%",
    top: "5%",
    display: "flex",
    flexDirection: "column",
    width: isMobile ? "90vw" : 550,
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 2,
  },
  body: {
    fontSize: 18,
  },
  subheading: {
    fontWeight: 500,
    fontSize: 18,
  },
  links: {
    textColor: "#000EEE",
    textDecoration: 'none',
  },
  socials: {
    textColor: "#000EEE",
    textDecoration: 'none',
    fontSize: 15,
  }
};

// Articles have the following column layout:
// |        24 total columns       |
// |  6   |     9      |  3 |   6  |
export const articleStyles = {
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    fontFamily: "IBM Plex Sans",
  },
  gutter: {
    width: isMobile ? "5vw" : "25vw",
  },
  textContainer: {
    width: isMobile ? "90vw" : "37.5vw",
    marginTop: isMobile ? "5vw" : "10vh",
    marginBottom: isMobile ? "5vw" : "10vh",
  },
  sidenoteContainer: {
    width: isMobile ? "0vw" : "12.5vw",
    marginLeft: "24px",
  },
  title: {
    fontFamily: "Newsreader",
    fontWeight: 400,
    fontSize: 50,
    lineHeight: isMobile ? 1.2 : 1.5,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 400,
  },
  authorSection: {
    marginTop: "100px",
    marginBottom: "100px",
    lineHeight: 0.5,
  },
  date: {
    fontSize: 14,
  },
  divider: {
    border: 0,
    borderTop: "1px solid #3B5824",
  },
  body: {
    fontFamily: "IBM Plex Serif",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
  },
  heading: {
    fontFamily: "IBM Plex Sans",
    fontSize: 24,
    fontWeight: 600,
    marginTop: "50px",
  },
  subHeading: {
    fontFamily: "IBM Plex Sans",
    fontSize: 20,
    fontWeight: 600,
    marginTop: "50px",
  },
  backButton: {
    position: "absolute",
    top: isMobile ? "-40px" : "40px",
    left: isMobile ? "-40px" : "40px",
  },
  links: {
    textColor: "#000EEE",
    textDecoration: "none",
    fontWeight: "bold",
    "&:visited": {
      color: "#000EEE",
    },
  },
  sidenotes: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 12,
    color: "#777777",
    width: "100%",
    marginBottom: "24px",
    lineHeight: 1.4,
  },
  footnotes: {
    marginTop: "72px",
    fontSize: 12,
    fontWeight: 400,
  },
  embeds: {
    height: "auto",
    width: "100%",
    objectFit: "contain",
    marginTop: "24px",
  },
};
