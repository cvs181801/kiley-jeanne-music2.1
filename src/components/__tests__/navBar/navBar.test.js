import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '../../navBar/NavBar'

afterEach(()=> {
    cleanup();
})

test('should render nav bar', ()=> {
    render(<NavBar/>)
    const navBar = screen.getByRole("navigation")
    expect(navBar).toBeInTheDocument();
})

//write a test for all buttons