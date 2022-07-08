import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './aboutMe.css'

export default function AboutMe() {
    const [isAboutMeLoading, setIsAboutMeLoading] = useState(false);
    const [aboutMeContent, setAboutMeContent] = useState({});

    const getAboutMeContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'aboutMe'})
            const text = response.items[0].fields.text;
            const image = response.items[0].fields.image.fields.file.url;
            console.log(text, image)

            setAboutMeContent({
                text: text,
                image: `https:${image}` //try to request all images / media from contentful at the needed size
            })
  
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
        className="containerDivAboutMe"

    >
        <section
            id="aboutmeSection"
        >
            <div
                className="innerDivAboutMe"
            >
                <p>
                    <div
                        className="aboutMeImg"
                        style={{
                            backgroundImage: `url(${aboutMeContent.image})`
                        }}
                    >
                    </div>
                {aboutMeContent.text}
                </p>
            </div>
        </section>
    </div>
  )
}
