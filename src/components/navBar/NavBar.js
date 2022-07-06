import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav>
              <ul 
                className="navUl"
                //style={{border: `1px solid green`,}}
              >
                <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection" style={{flexWrap: `wrap`}}>about me</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#scheduleSection" style={{flexWrap: `wrap`}}>schedule</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#listenSection" style={{ flexWrap: `wrap`}}>listen</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#gallerySection" style={{ flexWrap: `wrap`}}>gallery</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#followSection" style={{ flexWrap: `wrap`}}>follow</a></li>
              </ul>
        </nav>
    
    </div>
  )
}


{/* <nav>
              <ul 
                className="navUl"
                //style={{border: `1px solid green`,}}
              
              >
                <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection" style={{flexWrap: `wrap`}}>about me</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#skillsSection" style={{flexWrap: `wrap`}}>skills</a></li>
                </ul>
                <ul
                className="navUl"
                //style={{border: `1px solid green`,}}
                >
                <li className="navLi"><a className="navLiAnchor" href="#projectsSection" style={{ flexWrap: `wrap`}}>projects</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#contactSection" style={{ flexWrap: `wrap`}}>contact</a></li>
              </ul>
            </nav> */}