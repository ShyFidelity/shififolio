import "../styles/portCard.css";
import LV from "../images/LVSHAPES.svg";


const boxStyle = {
  height: "500px",
  width: "100vw",
  display: "flex", 
  alignItems: "center"

  
 
};



export default function Design() {
  return (
    <div className={boxStyle} designWork>

      <img width="1000px"src={LV} alt="Lv logos says Design Work" />
    
      </div>
    
  );
}
