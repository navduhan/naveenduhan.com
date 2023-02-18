import React from "react";
import "./educationscard.css";
import DegreeCard from "../const/degreecard";
import { degrees } from "./degree";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = {
    name: "dark",
    body: "#1D1D1D",
    text: "#FFFFFF",
    dark: "#000000",
    secondaryText: "#8D8D8D",
    accentColor: "#1087d5",
    accentBright: "#FC1056",
    projectCard: "#292A2D",
    skinColor: "#F7B799",
    skinColor2: "#FCB696",
    imageDark: "#292A2D",
    imageClothes: "#000000",
    avatarMisc: "#212121",
    avatarShoes: "#2B2B2B",
  };

  return (
    <div className="main" id="educations">
      <div className="educations-header">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => {
          return <DegreeCard degree={degree} key={index+1} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
