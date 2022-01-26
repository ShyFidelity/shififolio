
const Contact = () => {
    return (
        <div>
                      {" "}
          <a
            href="tel:3039013230"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p class="call-button">303-901-3230</p>
          </a>
       
          <a href="mailto:shyfidelity100@gmail.com">shyfidelity100@gmail.com</a>
        </div>
    )
}