import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './schedule.css'
//import '../contactForm/contactForm.css'
import ContactForm from '../contactForm/ContactForm';

export default function Schedule() {
    const [isScheduleLoading, setIsScheduleLoading] = useState(false);
    const [scheduleContent, setScheduleContent] = useState([]);
    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")

    const getScheduleContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'schedule'})
            const scheduleItems = response.items[0].fields.text.content;
            let ID = response.items[0].fields.id;
            let massagedScheduleItems = [];
            const content = response.items[0].fields.text.content; 
            console.log("content :", content)
            let itemObj;
            
            //if nodeType ===text, return a string, if nodeType ===hyperlink, return the string with hyperlinked url
            for (let i=0; i < content.length; i++) {
                const innerContent = content[i].content
                console.log("innercontent :", innerContent)
                for(let j=0; j < innerContent.length; j++){
                    if (innerContent[j].nodeType === "text") {
                        //console.log("string only :", innerContent[j].value)
                        const stringObj = {text: innerContent[j].value}
                        console.log(stringObj)
                        let itemObj = Object.assign({}, stringObj)
                        //return stringObj
                        //massagedScheduleItems.push(stringObj)
                    } else if (innerContent[j].nodeType === "hyperlink") {
                        //console.log("uri :", innerContent[j].data.uri, "string :", innerContent[j].content[0].value)
                        const hyperlinkObj = {uri: innerContent[j].data.uri, text: innerContent[j].content[0].value} 
                        //console.log(hyperlinkObj)
                        //Object.assign(itemObj, hyperlinkObj)
                        //return hyperlinkObj
                        //massagedScheduleItems.push(hyperlinkObj)
                        let itemObj = Object.assign({}, hyperlinkObj)
                    }
                    console.log(itemObj)

                }
                    //const newObj = Object.assign(stringObj, hyperlinkObj)
                    
                    
            }
            console.log(massagedScheduleItems)

            // scheduleItems.forEach((item, index)=> {
            //     massagedScheduleItems.push({id: ID++, text: scheduleItems[index].content[0].value})
            // })
            // //console.log(massagedScheduleItems)
            // setScheduleContent(massagedScheduleItems)
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getScheduleContent()
    },[])

    useEffect(()=>{
        //console.log(" scheduleContent :", scheduleContent)
    },[scheduleContent])

    const handleClick = ()=> {
        setFormBool(prevFromBool=> !prevFromBool)
        if (formBool) {
            setFormClass("inline-block")
        } else {
            setFormClass("none")
        } 
    }


  return (
    <div
        className='scheduleDiv'
    >
       <section
        id="scheduleSection"
       >
            <div
                className="containerDiv"
            >
                {scheduleContent.map(gig=> 
                <p key={gig.id}>{gig.text}</p>)} Schedule
            </div>   

                <button
                    className="bookBtn"
                    onClick={handleClick}
                >BOOK / CONTACT
                </button>
                
                <ContactForm state={formClass}/>

        </section>
    </div>
  )
}
