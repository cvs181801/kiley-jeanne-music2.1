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

//can I use jest.mock() to simulate getting the content from Contentful?  Will that work / hpw will that work w/o exposing API keys?