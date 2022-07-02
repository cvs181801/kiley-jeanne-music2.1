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
            let ID = response.items[0].fields.id;
            //console.log(response.items[0])
            const content = response.items[0].fields.text.content; //if nodeType ===text, return a string, if nodeType ===hyperlink, return the string with hyperlinked url
            content.forEach((item, index)=>{
                //console.log("item.content :", item.content[index])
                if (item.content[index].nodeType === "text") {
                    console.log("string only :", item.content[index].value) 
                } else if (item.content[index].nodeType === "hyperlink") {
                    console.log("uri :", item.content[index].data.uri, "string :", item.content[index].content[0].value)
                }
            })
            const massagedScheduleItems = [];
            scheduleItems.forEach((item, index)=> {
                massagedScheduleItems.push({id: ID++, text: scheduleItems[index].content[0].value})
            })
            console.log(massagedScheduleItems)
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
       
        <div
            className="containerDiv"
        >
            {scheduleContent.map(gig=> 
            <p key={gig.id}>{gig.text}</p>)}
        </div>   

        <button>BOOK / CONTACT</button>
    </div>
  )
}
