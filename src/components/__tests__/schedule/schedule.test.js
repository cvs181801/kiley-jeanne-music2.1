import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Schedule from '../../schedule/Schedule'
import { client } from '../../../client';
import '../../../../jest.config'

afterEach(()=> {
    cleanup();
})

test('should render schedule content', ()=> {
    render(<Schedule/>)
    const scheduleContent = screen.getByTestId('scheduleContent')
    expect(scheduleContent).toBeInTheDocument();
})

// jest.mock("client")
// test('it should return contentful content', async ()=> {
//     const schedule = ['Friday the 13th at the Ritz', 'Saturday the 17th at the Grand Ballroom', 'Saturday the 23rd at the Carlton']
//     client.getEntries.mockImplementation(()=>{
//         const response = await client.getEntries({content_type: schedule})
//         expect(response).toBeTruthy();
//need to figre out how to get this transformed correctly so babel can compile it and/or change the syntax

//     })
// })

///

// test('modal should open when book/contact button is clicked', ()=> {
//     render(<Schedule/>)
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     //need to figre out how to expect class name on the modal/contact form to change
// })