import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutMe from '../../aboutMe/AboutMe'

afterEach(()=> {
    cleanup();
})

test('should render text', ()=> {
    render(<AboutMe/>)
    const aboutMeContent = screen.getByTestId("aboutMeContent")
    expect(aboutMeContent).toBeInTheDocument();
})

//write a test to test the API