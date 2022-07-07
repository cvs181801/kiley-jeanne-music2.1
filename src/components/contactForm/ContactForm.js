import React from 'react'
import './contactForm.css'

export default function ContactForm(props) {

    console.log(props)

  const handleSubmit = (event)=> { 
    event.preventDefault();
}
  return (
    <div
        className="modalContainer" //add logic so the class name changes based on parent component
        style={{display: `${props.state}`}}
    >
        <h2>Let's Connect!</h2>
        <form
            className="form"
            name="contact v1"
            method="post"
            onSubmit="submit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >

            <input type="hidden" name="form-name" value="contact v1" />
           
                <label> Name <br/>
                    <input type="text" name="name"/>
                </label>
           
                <label> Email <br/>
                    <input type="email" name="email"/>
                </label>
            
                <label> Add Your Message Here: <br/>
                    <textarea type="text" name="message"></textarea>
                </label>
            
            
            <button type="submit">Say it!</button>
        </form>
    </div>
  )
  
}
