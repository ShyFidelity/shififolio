import callMe from '../images/callivy.svg'
import emailMe from '../images/emailme.svg'
const boxStyle = {
    height: '300px',
    paddingTop: '300px', 
    width: '100vw', 
   
    margin:0

}

const Contact = () => {
    return (
        <div className='contact' style={boxStyle}>
                      {" "}
          <a
           
            href="tel:3039013230"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <img style={{height:360}} src={callMe} alt= "iphone saying call me" />
        
          </a>
       
          <a href="mailto:fitzmauricejillian@gmail.com"> <img style={{height:300}}  src={emailMe} alt="arrow saying email me" /> </a>
        </div>
    )
}

export default Contact