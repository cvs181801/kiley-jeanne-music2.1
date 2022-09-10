import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Instagram from '../../instagram/Instagram'

afterEach(()=> {
    cleanup();
})

test('should render instagram widget in iframe', ()=> {
    render(<Instagram/>)
    const instaIframe = screen.getByTestId('instagramIframe')
    expect(instaIframe).toBeInTheDocument();
})

