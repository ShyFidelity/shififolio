import Res from '../images/FitzMauriceJillian_Resume.pdf'

const boxStyle = {
    height: '500px',
    width: '100vw', 
    paddingTop: 300, 
    margin:0, 
 

}



const Resume = () => {

    return (
        <div className="resume" style={boxStyle}>

      <button className='btn'><a href={Res} download="JKFResume.pdf" > Download Resume </a></button>
      
        </div>
    )
}

export default Resume 