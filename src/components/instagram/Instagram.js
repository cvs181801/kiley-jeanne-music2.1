import React from 'react'

export default function Instagram() {
  return (
    <div>
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

        <p>Follow me on Instagram!</p>

        <iframe 
        src="https://snapwidget.com/embed/1002307" 
        className="snapwidget-widget" 
        allowtransparency="true" 
        frameBorder="0" 
        //scrolling="no" 
        style = {{
          border: "none",
          overflow: "hidden",
          width: "100%"
        }}
        ></iframe>

      </section>
    </div>
  )
}
