import React from 'react'

export default function ContactForm() {
  return (
    <>
        <h2>Let's Connect!</h2>
        <form
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
        >
            <div hidden>
                <input name="bot-field"/>
            </div>

            <input type="hidden" name="form-name" value="contact v1"/>
            <div>
                <label> Name <br/>
                    <input type="text" name="name"/>
                </label>
            </div>

            <div>
                <label> Email <br/>
                    <input type="email" name="email"/>
                </label>
            </div>
            
            <div>
                <label> Add Your Message Here: <br/>
                    <textarea type="text" name="message"></textarea>
                </label>
            </div>
            
            <button type="submit">Say it!</button>
        </form>
    </>
  )
}
