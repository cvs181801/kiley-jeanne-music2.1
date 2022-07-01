import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './schedule.css'

export default function Schedule() {
    const [isScheduleLoading, setIsScheduleLoading] = useState(false);
    const [scheduleContent, setScheduleContent] = useState([]);

    const getScheduleContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'schedule'})
            const scheduleItems = response.items[0].fields.text.content;
            const ID = response.items[0].fields.id;
            console.log(response.items[0])
            const massagedScheduleItems = [];
            scheduleItems.forEach((item, index)=> {
                massagedScheduleItems.push({id: ID++, text: scheduleItems[index].content[0].value})
            })
            setScheduleContent(massagedScheduleItems)
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getScheduleContent()
    },[])

    useEffect(()=>{
        console.log(" scheduleContent :", scheduleContent)
    },[scheduleContent])



  return (
    <div
        className='scheduleDiv'
    >
       
        {/* <div
            className="containerDiv"
        >
            {scheduleContent.map(gig=> 
            <p >{gig}</p>)}
        </div>   */}

        <button>BOOK / CONTACT</button>
    </div>
  )
}
