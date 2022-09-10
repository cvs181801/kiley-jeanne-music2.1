import React from 'react'
import './contactForm.css'

export default function ContactForm(props) {

    const handleClick = ()=> {
        const setFormBool = props.formBool;
        setFormBool(false)
    }

  return (
    <div
        className="contactFormParent"
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
           
                    <input type="text" name="name" data-testid="name" placeholder="Name"/>
           
                    <input type="email" name="email" data-testid="email" placeholder="Email"/>

                    <textarea type="text" name="message" placeholder="Your Message"></textarea>
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