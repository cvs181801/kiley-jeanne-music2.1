import React, {useState, useEffect} from 'react'
import { client } from '../../client';

export default function Hero() {
    const [isHeroLoading, setIsHeroLoading] = useState(false);
    const [heroContent, setHeroContent] = useState({});

    const getHeroContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'hero'})
            console.log(response.items[0].fields)
            const title = response.items[0].fields.title;
            const image = response.items[0].fields.image.fields.file.url;
            const tagline = response.items[0].fields.tagline.content[0].content[0].value;
            setHeroContent({
                title: title,
                image: image,
                tagline: tagline
            })
            console.log(title, image, tagline)
  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getHeroContent()
    },[])

  return (
    <div>Hero</div>
  )
}

