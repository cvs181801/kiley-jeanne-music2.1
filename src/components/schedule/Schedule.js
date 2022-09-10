import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './schedule.css';


export default function Schedule() {
    const [isScheduleLoading, setIsScheduleLoading] = useState(true);
    const [scheduleContent, setScheduleContent] = useState([]);

    const getScheduleContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'schedule'})
            const scheduleItems = response.items[0].fields.text.content;
            let ID = response.items[0].fields.id;
            let massagedScheduleItems = [];
            
            massagedScheduleItems = scheduleItems.map((item)=> {
                return {id: ID++, text: item.content[0].value}
            })
            setIsScheduleLoading(false)
            setScheduleContent(massagedScheduleItems)

  
        }
        catch(error){
            console.log(error)
            setIsScheduleLoading(false)
            setScheduleContent({id: 1, text: 'Sorry, something went wrong. Please try again.'},{id: 2, text: ''})
        }
    }

    useEffect(()=>{
        getScheduleContent()
    },[])

    useEffect(()=>{
    },[scheduleContent])

  return (
    <div
        className="scheduleDiv"
    >
       <section
        id="scheduleSection"
       >

            <div
                className="containerDivSched"
                data-testid="scheduleContent"
            >
                {scheduleContent ? scheduleContent.map(gig=> 
                <p key={gig.id} className="gigContent">{gig.text}</p>) : ''}
            </div>   

                
                {isScheduleLoading ? 'Loading...' : ''}

        </section>
    </div>
  )
}