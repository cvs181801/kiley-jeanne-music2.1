import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '../../navBar/NavBar'

afterEach(()=> {
    cleanup();
})

test('should render text input field', ()=> {
    render(<NavBar/>)
    const navBar = screen.getByRole("navigation")
    expect(navBar).toBeInTheDocument();
})