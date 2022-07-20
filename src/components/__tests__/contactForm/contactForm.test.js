import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactForm from '../../contactForm/ContactForm'

afterEach(()=> {
    cleanup();
})

test('should render text input field', ()=> {
    render(<ContactForm/>)
    const contactFormTextBoxes = screen.getAllByRole("textbox")
    expect(contactFormTextBoxes).toBeTruthy();
})

test('name input should be empty', ()=> {
    render(<ContactForm/>)
    const nameInputElement = screen.getByLabelText(/name/i)
    expect(nameInputElement.value).toBe("");
})

 test('email input should be empty', ()=> {
    render(<ContactForm/>)
     const emailInputElement = screen.getByLabelText(/email/i)
     expect(emailInputElement.value).toBe("");
 })

test('buttons should render', ()=>{
    render(<ContactForm/>)
    const buttons = screen.getAllByRole("button")
    expect(buttons).toBeTruthy();
})