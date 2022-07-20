import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Listen from '../../listen/Listen'

afterEach(()=> {
    cleanup();
})

test('should render listen content', ()=> {
    render(<Listen/>)
    const listenContent = screen.getByTestId('listenContent')
    expect(listenContent).toBeInTheDocument();
})
