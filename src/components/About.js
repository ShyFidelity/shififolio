import Planet from '../images/saturn.png'
import AboutData from '../subcomponents/AboutData'

import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
const boxStyle = {
    maxHeight: '500px',
    width: '100vw', 
    margin:0,
    color: '22223B'
   

}

const Saturn = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const About = () =>{
    return (

       <div className="about" style={boxStyle}>
            <AboutData/>
       
        </div>
      

    )

}

export default About 