import React, {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'
import './navBar.css'

export default function NavBar() {

    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")
    const [parentComponent, setParentComponent] = useState("navBar")
    //const [showNav, setShowNav] = useState(false)
    const [navBool, setNavBool] = useState(false)

    const handleClick = (event)=> {
        event.preventDefault();
        if (formBool) {
           
            setFormBool(false)
            setFormClass("none")
            } else {
            
            setFormBool(true)
            setFormClass("inline-block")
            setParentComponent("navBar")
        }
    }

    const handleHamburgerClick = (event)=> {
        event.preventDefault();
        if (navBool) {
            console.log("shownav grue, set to false")
            setNavBool(false)
            } else {
            console.log("shownav false, set to true")
            setNavBool(true)
        }
        
    }

  return (
    <div>
        <div
            className="navContainer"
        >
            <div
                className="hamburger"
                onClick={handleHamburgerClick}
            >
                <div className="hamburger-innerdiv"></div>
                <div className="hamburger-innerdiv"></div>
                <div className="hamburger-innerdiv"></div>
            </div>

            <nav
                className={navBool ? "navBar" : "hideNav"}
            >
                <ul 
                    className="navUl"
                >
                        <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection" >about me</a></li>
                        <li className="navLi"><a className="navLiAnchor" href="#scheduleSection" >schedule</a></li>
                        <li className="navLi"><a className="navLiAnchor" href="#listenSection" >listen</a></li>
                        <li className="navLi"><a className="navLiAnchor" href="#gallerySection" >gallery</a></li>
                        <li className="navLi"><a className="navLiAnchor" href="#followSection" >follow</a></li>
                </ul>
                    <button
                        //className={formBool ? "closeBtn" : "bookBtn"}
                        className='bookBtn'
                        onClick={handleClick}
                        
                    >
                        {formBool ? "X" : "BOOK / CONTACT"} 
                        
                    </button>
                    
            </nav>
            
                
            {formBool && <ContactForm state={formClass} parent={parentComponent} formBool={setFormBool}/>}
        
        </div>
    </div>
  )
}
