import Plx from "react-plx";

import HowdyHat from '../images/howdyhat.svg'

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

        <div margin="30px" style={wrapperStyles}>
        <object width="500px"  data={HowdyHat}/>
        </div>
        </div>
    )
}

export default Howdy