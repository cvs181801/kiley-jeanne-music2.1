import React, {useState, useEffect} from 'react'
import { client } from '../../client';

export default function AboutMe() {
    const [isAboutMeLoading, setIsAboutMeLoading] = useState(false);
    const [aboutMeContent, setAboutMeContent] = useState({});

    const getAboutMeContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'aboutMe'})
            //console.log(response.items[0].fields)
            const text = response.items[0].fields.text;
            const image = response.items[0].fields.image.fields.file.url;

            setAboutMeContent({
                text: text,
                image: image
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
    <div>About Me</div>
  )
}
