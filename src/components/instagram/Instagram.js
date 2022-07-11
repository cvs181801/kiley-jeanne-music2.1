import React from 'react'
import './instagram.css'

export default function Instagram() {
  return (
    <div
      className="instagramContainerDiv"
    >
      <section
        id="gallerySection"
      >

        {/* <iframe 
        src="https://snapwidget.com/embed/1002292" 
        className="snapwidget-widget" 
        allowtransparency="true" 
        frameBorder="0" 
        scrolling="no" 
        style=
          {{
            border: "none",
            overflow: "hidden",  
            // width: "1500px", 
            // height: "500px"
            width: "100%",
            height: "35em"
          }}
        >
        </iframe> */}

        <p
          className="instagram-p"
        >Follow me on Instagram!</p>

    <div
      className="instagramInnerContainerDiv"
    >
        <iframe 
        title="instagram-widget"
        src="https://snapwidget.com/embed/1002307" 
        className="snapwidget-widget" 
        allowtransparency="true" 
        frameBorder="0" 
        //scrolling="no" 
      
        ></iframe>
        </div>

      </section>
    </div>
  )
}
