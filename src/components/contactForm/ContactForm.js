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
            className="modalBtn"
        >
            X
        </button>

        <h2>Let's Connect!</h2>
        <form
            className="contact v1"
            method="POST"
            onSubmit="submit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >

            <input type="hidden" name="form-name" value="contact v1" />
           
                <label> <br/> Name <br/>
                    <input type="text" name="name"/>
                </label>
           
                <label> <br/> Email <br/>
                    <input type="email" name="email"/>
                </label>
            
                <label> <br/> Add Your Message Here: <br/>
                    <textarea type="text" name="message"></textarea>
                </label>
                <br/>
            
            <button 
                type="submit"
                className="modalBtn"
            >
                Send it!
            </button>
        </form>
        
    </div>
  )
  
}
