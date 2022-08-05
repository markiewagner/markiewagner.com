import React from "react";
import { homeStyles } from "../../styles";

export const HomePage = () => {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.title}>Markie Wagner</h1>
      <div style={homeStyles.body}>
        {/* Body text */}
        <p>I'm the founder of Delphi Labs</p>
        <p>After we're gone, only a handful of companies will remain in the history books as essential in pushing forward a significant economic, cultural, or technological movement. Delphi allies with founders on a quest to enter this canon.</p>
        <p>We partner with companies in a hands-on way to build and go to market with aggressively ambitious applications of new technology.</p>
        <p>Before Delphi, I was a researcher at Stanford and Waymo.</p>
        <p><i>Interests include cult building infrastructure, new nations, psychographics, zk-proof applications, and artificial intelligence (particularly reinforcement learning and graph neural nets).</i></p>
        {/* Links */}
        <br />
        <h2 style={homeStyles.subheading}>Writing</h2>
        <a style={homeStyles.links} href={"/social-infra"}>
          Building Modern Social Infrastructure
        </a>
        <br />
        <br />
        <h2 style={homeStyles.subheading}>Index</h2>
        <p>
          <a style={homeStyles.links} href={"/"}>
            Building Social Infrastructure Snippets
          </a>
        </p>
        <p>
          <a style={homeStyles.links} href={"/"}>
            Building Social Infrastructure Resources
          </a>
        </p>
      </div>

    </div>
  );
};
