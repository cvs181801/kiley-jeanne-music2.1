import React from 'react'
import './youtube.css'

export default function Youtube() {
  return (
    <div
      className="youTubeContainer"
      data-testid="youTubeIframe"
    >

      {/* <div className="youtube-div"> */}
          <p
            className="youtube-div--p"
          >
              Listen and Subscribe
          </p>
      {/* </div> */}
       
        <div
          className="youTubeInnerContainer"
        >

              <iframe 
                
                className="youtubeiframe"
                src="https://www.youtube.com/embed/Y3qt-rAbYwE" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe>
        </div>
        <div
          className="youTubeInnerContainer"
        >
              <iframe 
                className="youtubeiframe"
                src="https://www.youtube.com/embed/9mb4Upz9C4M" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe>
        </div>
        <div
          className="youTubeInnerContainer"
        >

              <iframe 
                
                className="youtubeiframe"
                src="https://www.youtube.com/embed/R7prmeiGujk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe>
        </div>
      </div>
  )
}
