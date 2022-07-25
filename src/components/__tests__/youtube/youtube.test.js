import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Youtube from '../../youtube/Youtube'

afterEach(()=> {
    cleanup();
})

test('should render instagram widget in iframe', ()=> {
    render(<Youtube/>)
    const youtubeIframe = screen.getByTestId('youTubeIframe')
    expect(youtubeIframe).toBeInTheDocument();
})

//write a test to test the API IF snapwidget is added