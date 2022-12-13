import React from "react";
import { BannerSection, GreenButton, MainBox, TextBanner } from "./main.styled";

import underconst from "./underConstruction.png";

export const Main = () => {
  return (
    <MainBox>
      <BannerSection>
        <TextBanner>David Torres Guevara</TextBanner>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "8rem" }}>
          <GreenButton
            href="https://www.linkedin.com/in/david-tg/"
            target="_blank"
          >
            LinkedIn
          </GreenButton>
          <GreenButton href="https://github.com/DavidTG7" target="_blank">
            GitHub
          </GreenButton>
        </div>
      </BannerSection>
      <section
        style={{ display: "grid", placeItems: "center" }}
        className="underConstruccion"
      >
        <img style={underConsStyle} src={underconst} alt="underConst" />
      </section>
    </MainBox>
  );
};

const underConsStyle = {
  width: "10rem",
  margin: "2rem auto 10rem",
};
