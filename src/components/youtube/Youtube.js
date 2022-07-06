import React from 'react'
import './youtube.css'

export default function Youtube() {
  return (
    <div>
        <section
          id="followSection"
        >
            <iframe 
              
              className="youtubeiframe"
              src="https://www.youtube.com/embed/Y3qt-rAbYwE" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>

            <iframe 
              className="youtubeiframe"
             
              src="https://www.youtube.com/embed/9mb4Upz9C4M" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>


            <iframe 
              
              className="youtubeiframe"
              src="https://www.youtube.com/embed/R7prmeiGujk" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
        </section>
      </div>
  )
}
