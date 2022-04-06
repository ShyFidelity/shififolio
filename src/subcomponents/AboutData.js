
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
  position: "relative",
  width: "100%",
  height:500,
  width:470,
  flexDirection: "column",
};

const wrapperStyles = {
  position: "relative",
  height:450,
  width: 550, 
  marginLeft: 200, 
  overflow: "hidden",
  endValue: 500,
  properties: [
    {
      startValue: 0,
      endValue: -450,
      property: "translateY",
    },
  ]
};


const AboutData = () => {
  return (
    <div  >
      <div className="aboutData" style={{ height: 450, width: 550}}>
        <div style={wrapperStyles}>
          <Plx parallaxData={exampleParallaxData} style={plxStyles}>
          <p>I'm Jillian, an artist, UI/UX developer, and graphic designer</p>
        
          </Plx>
        </div>
      </div>
    
    </div>
  );
};

export default AboutData;



