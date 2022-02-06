import Res from '../images/FitzMauriceJillian_Resume.pdf'

const boxStyle = {
    height: '500px',
    width: '100vw', 
    margin:0, 
 

}

const Resume = () => {

    return (
        <div className="resume" style={boxStyle}>

    <h1 style={{margin:0}}>Resume</h1>
      
      <a href={Res} download="JKFResume.pdf" > Download </a>
        </div>
    )
}

export default Resume 