import React, {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'

export default function NavBar() {

    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")

    const handleClick = ()=> {
        setFormBool(prevFromBool=> !prevFromBool)
        if (formBool) {
            setFormClass("inline-block")
        } else {
            setFormClass("none")
        } 
    }

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
            <button
                onClick={handleClick}
            >BOOK/CONTACT
            </button>
        <ContactForm state={formClass}/>
    
    </div>
  )
}
