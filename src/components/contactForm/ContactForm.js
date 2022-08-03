import React from 'react'
import './contactForm.css'

export default function ContactForm(props) {

//   const handleSubmit = (event)=> { 
//     event.preventDefault();
// }

    const handleClick = ()=> {
        const setFormBool = props.formBool;
        setFormBool(false)
    }

  return (
    <div
        className={props.parent === "schedule" ? "contactFormParentSched" : "contactFormParentNav"}
        style={{display: `${props.state}`}}
    >
        
        <button
            onClick={handleClick}
            className="modalBtnClose"
        >
            +
        </button>

        <h2>LET'S CONNECT!</h2>
        <form
            className="contact v1"
            method="POST"
            onSubmit="submit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >

            <input type="hidden" name="form-name" value="contact v1" />
           
                {/* <label> <br/> Name <br/> */}
                    <input type="text" name="name" data-testid="name" placeholder="Name"/>
                {/* </label> */}
           
                {/* <label> <br/> Email <br/> */}
                    <input type="email" name="email" data-testid="email" placeholder="Email"/>
                {/* </label> */}
            
                {/* <label> <br/> Your Message <br/> */}
                    <textarea type="text" name="message" placeholder="Your Message"></textarea>
                {/* </label> */}
                <br/>
            
            <button 
                type="submit"
                className="modalBtnSubmit"
            >
                CONTACT
            </button>
        </form>
        
    </div>
  )
  
}
