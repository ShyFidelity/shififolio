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
  flexDirection: "column",
};

const wrapperStyles = {
  position: "relative",
  height:450,
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




const Howdy = () => {
    return (
        <div>

        <div style={wrapperStyles}>
        <Plx parallaxData={exampleParallaxData} style={plxStyles}>
        <h1>Howdy</h1>
        </Plx>
        </div>
        </div>
    )
}

export default Howdy