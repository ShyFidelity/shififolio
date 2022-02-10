import callMe from '../images/callivy.svg'


const boxStyle = {
    height: '300px',
    paddingTop: '300px', 
    width: '100vw', 
   
    margin:0

}

const Contact = () => {
    return (
        <div style={boxStyle}>
                      {" "}
          <a
           
            href="tel:3039013230"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <img style={{height:360}} src={callMe} alt= "iphone saying call me" />
        
          </a>
       
          <a href="mailto:fitzmauricejillian@gmail.com">fitzmauricejillian@gmail.com</a>
        </div>
    )
}

export default Contact