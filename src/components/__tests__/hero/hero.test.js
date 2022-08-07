import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '../../hero/Hero'
import renderer from 'react-test-renderer'

afterEach(()=> {
    cleanup();
})

test('should render hero tagline', ()=> {
    render(<Hero/>)
    const heroTagline = screen.getByText(/Loading.../i)
    expect(heroTagline).toBeInTheDocument();
})

test('should render the hero component', ()=> {
    const component = renderer.create(
        <Hero/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})


//write a test to test the API