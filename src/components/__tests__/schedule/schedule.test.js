import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import {create, act} from 'react-test-renderer'
import '@testing-library/jest-dom'
import GetScheduleContent from '../../schedule/Schedule'
import { client } from '../../../client';
import '../../../../jest.config'
import { createRenderer } from 'react-dom/test-utils';

afterEach(()=> {
    cleanup();
})

let root; 

act(() => {
  root = create(<GetScheduleContent scheduleContent={[]}/>)
});

test('should render schedule content', ()=> {
    render(<GetScheduleContent/>)
    const scheduleContent = screen.getByTestId('scheduleContent')
    expect(scheduleContent).toBeInTheDocument();
})

jest.mock('../../../client')
it('returns an array of strings', async ()=> {
    client.getEntries.mockResolvedValue({
        items:
    {
    "sys": {
        "type": "Array"
    },
    "total": 1,
    "skip": 0,
    "limit": 100,
    "items": [
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "rxbxqtkc97t1"
                    }
                },
                "id": "muUKtRVDPMOD9MD8wmuyc",
                "type": "Entry",
                "createdAt": "2022-06-25T22:57:37.562Z",
                "updatedAt": "2022-07-25T17:31:38.525Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 10,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "schedule"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Galeotti's Wine Cellar - Battle Ground, WA - July 29th - 6:30-8:30pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Southland Whiskey Kitchen - Portland, OR - August 6th - 6-9pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Stonewood Bar and Grill - Vancouver, WA - August 11 - 7-10pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Shelly's Echo Inn - Damascus, OR - August 14th - 5-9pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Stonewood Bar and Grill - Vancouver, WA - August 17th - 7-10pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Cascade Bar and Grill - Vancouver, WA - August 19th - 9-1am",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Galeotti's Wine Cellar - Battle Ground, WA - August 26th - 6:30-8:30pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Stonewood Bar and Grill - Vancouver, WA - September 3rd - 7-10pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Shelly's Echo Inn - Damascus, OR - September 10 - ",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "LIVE at Stonewood Bar and Grill - Vancouver, WA - September 29th - 7-10pm",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                },
                "id": 1
            }
        }
    ]
}   
    } 
    
    )
    const content = await getScheduleContent();
    expect(content).not.toBeNull();
    console.log('content:' , content)

    const scheduleItems = content.items[0].fields.text.content
    act(() => {
        root.update(<GetScheduleContent scheduleContent={[scheduleItems]}/>);
    })
})


  
  // make assertions on root 
  //expect(root.toJSON()).toMatchSnapshot();

///

// test('modal should open when book/contact button is clicked', ()=> {
//     render(<Schedule/>)
//     const button = screen.getByRole('button')
//     fireEvent.click(button)
//     //need to figre out how to expect class name on the modal/contact form to change
// })

// Import the module you want to mock into your test file.
// jest.mock() the module.
// Use .mockResolvedValue(<mocked response>) to mock the response.