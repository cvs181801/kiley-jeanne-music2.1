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

        <p
          className="instagram-p"
        >Follow me on Instagram!
        </p>

        <div
          className="instagramInnerContainerDiv"
        >
            <iframe 
            title="instagram-widget"
            src="https://snapwidget.com/embed/1002307" 
            className="snapwidget-widget" 
            allowtransparency="true" 
            frameBorder="0" 
            >
            </iframe>
        </div>

      </section>
    </div>
  )
}
