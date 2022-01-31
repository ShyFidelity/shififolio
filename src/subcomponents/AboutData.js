
import React, { Component } from "react";


import { render } from "react-dom";
import Plx from "react-plx";


const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateY",
      },
    ],
  },
];

const plxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 40,
  color: "#fff",
  position: "fixed",
  width: "100%",
  height:500,
  width:500,
  flexDirection: "column",
};

const wrapperStyles = {
  position: "absolute",
  height:300,
  overflow: "hidden",
  endValue: 500,
  properties: [
    {
      startValue: 0,
      endValue: -500,
      property: "translateY",
    },
  ]
};


const AboutData = () => {
  return (
    <div  >
      <div className="aboutData" style={{ height: 500, width: 550}}>
        <div style={wrapperStyles}>
          <Plx parallaxData={exampleParallaxData} style={plxStyles}>
          <p>Front-end developer with a bachelor’s degree in fine art. A recent graduate of Denver University’s Full Stack Web Development program and pursuing AWS Cloud certification. Committed to finding an innovative user experience by challenging the status quo with conceptual and creative thinking. Excels at working with teams with an openness to new solutions and a broad spectrum of voices. A firm believer that morale, empathy, and integrity are necessary for keeping any good team both light and on task.</p>
        
          </Plx>
        </div>
      </div>
    
    </div>
  );
};

export default AboutData;



