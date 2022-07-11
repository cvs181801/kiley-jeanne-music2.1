import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './hero.css'

export default function Hero() {
    const [isHeroLoading, setIsHeroLoading] = useState(false); //create a loading image/graphic for when contents are loading
    const [heroContent, setHeroContent] = useState({});

    const getHeroContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'hero'})
   
            const title = response.items[0].fields.title;
            const image = response.items[0].fields.image.fields.file.url;
            const alt = response.items[0].fields.image.fields.description;
            const tagline = response.items[0].fields.tagline.content[0].content[0].value;
            setHeroContent({
                title: title,
                image: image,
                alt: alt,
                tagline: tagline
            })
    
  
        }
        catch(error){
            console.log(error) //need better err handling
        }
    }

    useEffect(()=>{
        getHeroContent()
    },[])


  return (
    
    <div
        className="containerDivHero"
    >
        <section
            id="heroSection"
        >
        
            <div
                className="topDiv"
            >
                <p
                    className="welcomeDiv"
                >Welcome ♡
                </p>

                    <h1>{heroContent.title}</h1>
                
                </div>
                    <div
                        className="imgDiv"
                            style={{
                                backgroundImage: `url(${heroContent.image})`,
                            }}
                        >
                            <p
                                className="imgDiv-p"
                            >{heroContent.tagline}</p>
                    </div>
            
            <div
                className="bottomDiv"
            >
            </div>
        </section>
    </div>
  )
}

