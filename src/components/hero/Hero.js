import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './hero.css'

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

    useEffect(()=>{
        console.log("heroContent", heroContent)
    },[heroContent])

  return (
    
    <div
        className="containerDiv"
    >
        
        <div
            className="topDiv"
        >
            <p>Welcome ♡</p>
            <h1>{heroContent.title}</h1>
            
        </div>
        <div
            className="imgDiv"
            style={{
                // width: "100vw",
                // height: "50em",
                // backgroundColor: "rgba(1, 98, 5, 0.83)",
                backgroundImage: `url(${heroContent.image})`,
                // backgroundBlendMode: "screen",
                // backgroundPosition: "center top",
                // color: "white"
            }}
        >
            <p>{heroContent.tagline}</p>
        <div
            className="bottomDiv"
        ></div>
        </div>
    </div>
  )
}

