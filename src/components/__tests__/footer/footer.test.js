import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../footer/Footer'

afterEach(()=> {
    cleanup();
})

test('should render footer content', ()=> {
    render(<Footer/>)
    const socialMediaContainer = screen.getByTestId('socialMediaContainer')
    //expect(socialMediaContainer.firstChild).toHaveClass('socialMediaIcon') 
    //want to get inside that first social media icon's object to see if it has attributes specifically className="socialMediaIcon"
    //how do I access the object?
    
})

//write a test to test the API