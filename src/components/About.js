import Cactus from '../images/cactus2.png'
import AboutData from '../subcomponents/AboutData'
const boxStyle = {
    maxHeight: '500px',
    width: '100vw', 
    margin:0,
    color: '22223B'
   

}

const About = () =>{
    return (

       <div className="about" style={boxStyle}>
            <AboutData/>
       
        </div>
      

    )

}

export default About 