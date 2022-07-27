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
        >What I'm up to
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
            data-testid="instagramIframe"
            >
            </iframe>
        </div>

      </section>
    </div>
  )
}
