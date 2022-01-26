import Cactus from '../images/cactus2.png'

const boxStyle = {
    height: '500px',
    width: '100vw', 
    backgroundColor: 'pink',
    margin:0

}

const About = () =>{
    return (

       <div style={boxStyle}>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus maiores ab aspernatur eos cupiditate laborum voluptatum adipisci praesentium voluptatem incidunt! Fuga, nobis accusantium autem voluptatibus pariatur quod hic a! Odio?</p>
            <img height='200px' src={Cactus} alt="" />
        
           </div> 


    )

}

export default About 