import React from 'react'

export default function ContactForm() {

  const handleSubmit = (event)=> { 
    event.preventDefault();
}
  return (
    <>
        <h2>Let's Connect!</h2>
        <form
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
    </>
  )
  
}
