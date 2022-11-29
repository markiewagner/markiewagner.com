import React from "react";
import { homeStyles } from "../../styles";

export const HomePage = () => {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.title}>Markie Wagner</h1>
      <div style={homeStyles.body}>
        {/* Body text */}
        <p>I'm the founder of Delphi Labs, a frontier tech research and advisory firm with a focus on applied AI. </p>
        <p>We partner with companies to build and go to market with ambitious applications of new technology.</p>

        <p>Our goal is to play a mission-critical role in the creation of institutions that matter in the human story.</p>
        <p>Before Delphi, I was a researcher at Stanford and Waymo.</p>
        <p><i>Interests include cult building, new nations, psychographics, zk-proof applications, automating everything, and artificial intelligence (particularly reinforcement learning and graph neural nets).</i></p>
        {/* Links */}
        <br />
        <a style={homeStyles.links} href={"https://twitter.com/markiewagner"}>
          Twitter
        </a>
        <br />
        {/* <p>
          <a style={homeStyles.links} href={"/social-infra"}>
            Building Modern Social Infrastructure
          </a>
        </p> */}
      </div>

    </div>
  );
};
