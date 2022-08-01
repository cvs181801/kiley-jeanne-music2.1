import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '../../hero/Hero'

afterEach(()=> {
    cleanup();
})

test('should render hero tagline', ()=> {
    render(<Hero/>)
    const heroTagline = screen.getByText(/Loading.../i)
    expect(heroTagline).toBeInTheDocument();
})

//write a test to test the API