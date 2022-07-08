import React, {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'
import './navBar.css'

export default function NavBar() {

    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")
    const [parentComponent, setParentComponent] = useState("navBar")
    //const [showNav, setShowNav] = useState(false)
    const [navBool, setNavBool] = useState(false)
    //const [change, setChange] = useState('')

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
    <div
        className="navContainerOuter"
    >
        <div
            className="navContainer"
        >
            <div
                className="hamburger"
                onClick={handleHamburgerClick}
            >
                <div 
                    id="hamburger-innerdiv" 
                    className={navBool ? "change hambar1" : "hambar1"}
                >
                </div>

                <div 
                    id="hamburger-innerdiv" 
                    className={navBool ? "change hambar2" : "hambar2"}
                >
                </div>

                <div 
                    id="hamburger-innerdiv" 
                    className={navBool ? "change hambar3" : "hambar3"}
                >
                </div>

            </div>

            <nav
                className={navBool ? "navBar" : "hideNav"}
            >
                <ul 
                    className="navUl"
                >
                        <li className="navLi"><p><a className="navLiAnchor" href="#aboutmeSection" >about me</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#scheduleSection" >schedule</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#listenSection" >listen</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#gallerySection" >gallery</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#followSection" >follow</a></p></li>
                </ul>
                    <button
                        className="bookBtn"
                        onClick={handleClick} 
                    >
                        BOOK / CONTACT
                        
                    </button>
                    
            </nav>
            
                
            {formBool && <ContactForm state={formClass} parent={parentComponent} formBool={setFormBool}/>}
        
        </div>
    </div>
  )
}
//remove the contact form close
//remove console logs
//add stickly position for nav bar scroll
//set up responsive layout for larger browsers