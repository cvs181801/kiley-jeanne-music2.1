import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '../../hero/Hero'

afterEach(()=> {
    cleanup();
})

test('should render welcome text at top', ()=> {
    render(<Hero/>)
    const welcomeTextTop = screen.getByText(/Welcome ♡/i)
    expect(welcomeTextTop).toBeInTheDocument();
})

test('should render hero tagline', ()=> {
    render(<Hero/>)
    const heroTagline = screen.getByText(/Loading.../i)
    expect(heroTagline).toBeInTheDocument();
})