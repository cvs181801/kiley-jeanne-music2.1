import React, {useState, useEffect} from 'react'
import { client } from '../../client';

export default function Schedule() {
    const [isScheduleLoading, setIsScheduleLoading] = useState(false);
    const [scheduleContent, setScheduleContent] = useState([]);

    const getScheduleContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'schedule'})
            console.log(response.items[0].fields)
            console.log(response.items[0].fields.text.content)
            const scheduleItems = response.items[0].fields.text.content;
            setScheduleContent([scheduleItems])
  
        }
        catch(error){
            console.log(error)
        }
    }

    <button>BOOK / CONTACT</button>

    useEffect(()=>{
        getScheduleContent()
    },[])

  return (
    <div>Schedule</div>
  )
}
