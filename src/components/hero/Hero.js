import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './hero.css'

export default function Hero() {
    const [isHeroLoading, setIsHeroLoading] = useState(true); 
    const [heroContent, setHeroContent] = useState({});

    const getHeroContent = async ()=> {
        try{
            const response = await client.getEntries({content_type:'hero'})
   
            const title = response.items[0].fields.title;
            const image = response.items[0].fields.image.fields.file.url;  //  var imageURL = 'https:' + asset.fields.file.url + '?w=200&h=200';
            const alt = response.items[0].fields.image.fields.description;
            const tagline = response.items[0].fields.tagline.content[0].content[0].value;
            setIsHeroLoading(false)
            setHeroContent({
                title: title,
                image: image,
                alt: alt,
                tagline: tagline
            })
    
  
        }
        catch(error){
            console.log(error) 
            setIsHeroLoading(false)
            setHeroContent({
                title: 'Sorry! Something went wrong.  Please try again.',
                image: '',
                alt: 'sorry, something went wrong',
                tagline: 'darn!'
            })
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
                {/* <p
                    className="welcomeDiv"
                >Welcome ♡
                </p> */}

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
                            >{isHeroLoading ? 'Loading...' : heroContent.tagline}</p>
                    </div>
            
            <div
                className="bottomDiv"
            >
            </div>
        </section>
    </div>
  )
}

