import React, {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'
import './navBar.css'

export default function NavBar() {

    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")
    const [parentComponent, setParentComponent] = useState("navBar")
    const [navBool, setNavBool] = useState(false)

    const handleClick = (event)=> {
        event.preventDefault();
        if (formBool) {      
            setFormBool(false)
            setFormClass("none")
            window.scrollTo(0, 0);
            } else {  
            setFormBool(true)
            setFormClass("inline-block")
            setParentComponent("navBar")
            window.scrollTo(0, 0);
        }
    }

    const handleHamburgerClick = (event)=> {
        event.preventDefault();
        if (navBool) {
            setNavBool(false)

            } else {
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
                        <li className="navLi"><p><a className="navLiAnchor" href="#aboutmeSection" >about</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#scheduleSection" >schedule</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#listenSection" >listen</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#gallerySection" >gallery</a></p></li>
                        <li className="navLi"><p><a className="navLiAnchor" href="#followSection" >follow</a></p></li>

                        <button
                        className="bookBtn"
                        onClick={handleClick} 
                    >
                        BOOK / CONTACT
                        
                    </button>
                    
                </ul>
                    
                    
            </nav>
            
                
            {formBool && <ContactForm state={formClass} parent={parentComponent} formBool={setFormBool}/>}
        
        </div>
    </div>
  )
}
