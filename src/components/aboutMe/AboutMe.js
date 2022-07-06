import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './aboutMe.css'

export default function AboutMe() {
    const [isAboutMeLoading, setIsAboutMeLoading] = useState(false);
    const [aboutMeContent, setAboutMeContent] = useState({});

    const getAboutMeContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'aboutMe'})
            //console.log(response.items[0].fields)
            const text = response.items[0].fields.text;
            const image = response.items[0].fields.image.fields.file.url;
            console.log(text, image)

            setAboutMeContent({
                text: text,
                image: `https:${image}` //try to request all images / media from contentful at the needed size
            })

            //console.log(text, image)
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAboutMeContent()
    },[])
  return (
    <div
        className="containerDiv"

    >
        <p>
            <div
                className="aboutMeImg"
                style={{
                    backgroundImage: `url(${aboutMeContent.image})`
                }}
            ></div>
        {aboutMeContent.text}</p>
    </div>
  )
}
