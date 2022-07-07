import React from 'react'
import './contactFormClose.css'

export default function ContactFormClose(props) {
  return (
    <div>
        <button
            className="modalCloseBtn"
            style={{display: `${props.state}`}}
        > X
        </button>
</div>
  )
}
