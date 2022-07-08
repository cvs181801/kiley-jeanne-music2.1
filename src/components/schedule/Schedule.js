import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './schedule.css'
import ContactForm from '../contactForm/ContactForm';
import ContactFormClose from '../contactFormClose/ContactFormClose';

export default function Schedule() {
    const [isScheduleLoading, setIsScheduleLoading] = useState(false);
    const [scheduleContent, setScheduleContent] = useState([]);
    const [formBool, setFormBool] = useState(false)
    const [formClass, setFormClass] = useState("none")
    const [parentComponent, setParentComponent] = useState("schedule")

    const getScheduleContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'schedule'})
            const scheduleItems = response.items[0].fields.text.content;
            console.log('schedule items :', scheduleItems)
            let ID = response.items[0].fields.id;
            let massagedScheduleItems = [];
           
            //console.log("content :", content)
            //let itemObj={};
            //let itemArr = [];
            
            // for (let i=0; i < content.length; i++) {
            //     const innerContent = content[i].content
            //     console.log("innercontent :", innerContent)
            //     for(let j=0; j < innerContent.length; j++){
            //         if (innerContent[j].nodeType === "text") {
                        //console.log("string only :", innerContent[j].value)
                        //const stringObj = {text: innerContent[j].value}
                        //itemArr.push(innerContent[j].value)
                        //console.log(stringObj)
                        //let itemObj = Object.assign({}, stringObj)
                        //console.log( 'itemObj :', itemObj)
                        //return stringObj
                        //massagedScheduleItems.push(stringObj)
                    //} else if (innerContent[j].nodeType === "hyperlink") {
                        //console.log("uri :", innerContent[j].data.uri, "string :", innerContent[j].content[0].value)
                        //const hyperlinkObj = {uri: innerContent[j].data.uri, text: innerContent[j].content[0].value} 
                        //console.log(hyperlinkObj)
                        //Object.assign(itemObj, hyperlinkObj)
                        //return hyperlinkObj
                        //massagedScheduleItems.push(hyperlinkObj)
                        //let itemObj = Object.assign({}, hyperlinkObj)
                        //console.log( 'itemObj :', itemObj)
                        //itemArr.push(innerContent[j].data.uri, innerContent[j].content[0].value)
                    //}
                    
                    //let itemObj = Object.assign({id: ID++}, )
                    //console.log(stringObj, hyperlinkObj)
                    //console.log(itemArr)
                //}
                    //const newObj = Object.assign(stringObj, hyperlinkObj)                  
            //}
            
            //*** */
            // scheduleItems.forEach((item, index)=> {
            //     const result = item.content[index].reduce((prevValue, currentValue)=> {
            //         Object.assign(prevValue, currentValue)
            //     })
            //     console.log(result)
            // })

            //*** */

            //const combinedObj = [scheduleItems.reduce((obj,nextObj) => Object.assign(obj, nextObj), {})]
            //console.log(combinedObj)

            // const arr = [{ a: 1, b: 2 }, { c: 1, d: 2 }, { e: 14, f: 20 }];

            // const result  = [arr.reduce((r, o) => Object.assign(r, o), {})];
            // console.log(result)
            
            massagedScheduleItems = scheduleItems.map((item, index)=> {
                return {id: ID++, text: item.content[0].value}
            })
            setScheduleContent(massagedScheduleItems)
            //console.log(massagedScheduleItems)
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getScheduleContent()
    },[])

    useEffect(()=>{
    },[scheduleContent])

    const handleClick = (event)=> {
        event.preventDefault();
        if (formBool) {
            console.log('formbooltrue , set to false' )
            setFormBool(false)
            setFormClass("none")
            } else {
            console.log('formboolfalse, set to true')
            setFormBool(true)
            setFormClass("inline-block")
            setParentComponent("schedule")
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
                className="containerDivSched"
            >
                {scheduleContent.map(gig=> 
                <p key={gig.id}>{gig.text}</p>)}
            </div>   

                <button
                    className="bookBtnSched"
                    onClick={handleClick}
                >
                    BOOK / CONTACT
                    
                </button>
                
                {formBool && <ContactForm state={formClass} parent={parentComponent} formBool={setFormBool}/>}

        </section>
    </div>
  )
}
