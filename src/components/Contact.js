const boxStyle = {
    height: '200px',
    width: '100vw', 
    backgroundColor: 'pink',
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
            <p  style={{margin:0}}>303-901-3230</p>
          </a>
       
          <a href="mailto:fitzmauricejillian@gmail.com">fitzmauricejillian@gmail.com</a>
        </div>
    )
}

export default Contact