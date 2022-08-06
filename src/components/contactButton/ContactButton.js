import React, {useState} from 'react'
import './contactButton.css'
import ContactForm from '../contactForm/ContactForm';

export default function ContactButton() {

    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")
    const [parentComponent, setParentComponent] = useState("schedule")

    const handleClick = (event)=> {
        event.preventDefault();
        
        if (formBool) {
            setFormBool(false)
            setFormClass("none")
            window.scrollTo(0, 0);
            } else {
            setFormBool(true)
            setFormClass("inline-block")
            setParentComponent("schedule")
            window.scrollTo(0, 0);
        }
    }

  return (
    <div
        className="bookBtnContainer"
    >
            <button
                className="bookBtnSched"
                onClick={handleClick}
            >
                BOOK / CONTACT
                    
            </button>

            {formBool && <ContactForm state={formClass} parent={parentComponent} formBool={setFormBool}/>}

    </div>
  )
}

