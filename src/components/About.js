import Cactus from '../images/cactus2.png'
import AboutData from '../subcomponents/AboutData'
const boxStyle = {
    height: '500px',
    width: '100vw', 
    margin:0,
    backgroundColor: 'yellow'

}

const About = () =>{
    return (

       <div style={boxStyle}>
            <AboutData/>
           </div> 


    )

}

export default About 