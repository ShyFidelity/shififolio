import Planet from '../images/saturn.png'
import AboutData from '../subcomponents/AboutData'

import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
const boxStyle = {
    height: '700px',
    width: '100vw', 
    margin:0,
    color: '22223B'
   

}

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`
const Saturn = styled(motion.div)`
  position: fixed;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`



const About = () =>{
    return (

       <div className="about" style={boxStyle}>
            <AboutData/>
            <Saturn
            initial={{ right: '-20%', top: '90%' }}
            animate={{
              right: '5%',
              top: '20%',
              transition: { duration: 2, delay: 0.5 },
            }}>
              <img src={Planet}  alt="Saturn" />
          </Saturn>
       
        </div>
      

    )

}

export default About 