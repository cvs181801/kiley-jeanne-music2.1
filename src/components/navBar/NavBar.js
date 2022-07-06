import React, {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'
import './navBar.css'

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
    <div
        className="navContainer"
    >
        <div
            className="hamburger"
        >
            <div className="hamburger-innerdiv"></div>
            <div className="hamburger-innerdiv"></div>
            <div className="hamburger-innerdiv"></div>
        </div>

        <nav>
              <ul 
                className="navUl"
                //style={{border: `1px solid green`,}}
              >
                <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection" >about me</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#scheduleSection" >schedule</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#listenSection" >listen</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#gallerySection" >gallery</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#followSection" >follow</a></li>
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
