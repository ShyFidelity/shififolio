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
      <ul className="workLi">
      
      <li><a href="https://www.boltstack.com"> I designed and built this marketing Website's front end </a></li>
      <li><a href="https://boltstack-dev.softwarebbd.com/rrframework/html/web/index.html?screenId=65cacde38f08f672bcca5ea9&appId=65ca99828f08f672bcca5dea&preview=1&rr_dev=true&"> Front end design for medication app </a></li>
      <li><a href="https://boltstack-dev.softwarebbd.com/rrframework/html/web/index.html?screenId=6632d4cf8f082a5fd00ac2e8&appId=6632d4b18f082a5fd00ac2e6&preview=1&rr_dev=true&"> Created data sets and front end fucntionality for this Desktop survey </a></li>
      <li><a href="https://xd.adobe.com/view/27b4cbc7-d54b-442f-89c0-ca7aef44e648-72e7/?fullscreen"> Log in screens </a>
      
</li>


      </ul>
   
    
      </div>
    
  );
}
