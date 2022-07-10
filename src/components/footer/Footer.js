import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './footer.css'

export default function Footer() {
  const [isFooterLoading, setIsFooterLoading] = useState(false);
  const [footerContent, setFooterContent] = useState({});

  const getFooterContent = async ()=> {
    try{
        const response = await client.getEntries({content_type:'footer'})
        console.log(response.items[0].fields.socialMediaIcons[0].fields.file.url)
        const image = response.items[0].fields.footerImage.fields.file.url;
        const alt = response.items[0].fields.footerImage.fields.title;
        const socialMediaIcons = response.items[0].fields.socialMediaIcons;
        setFooterContent({
            image: `https:${image}`,
            alt: alt,
            socialMediaIcons: socialMediaIcons
        })


    }
    catch(error){
        console.log(error) //need better err handling
    }
}

useEffect(()=>{
    getFooterContent()
},[])

  return (
    <div>
       <section
          id="followSection"
        >
          <div
            className="footerContainer"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(248, 251, 248, 0.83), rgba(1, 98, 5, 0.83)), url(${footerContent.image})`
            }}
          >
            <div
              className="socialMediaContainer"
            >
              {footerContent.socialMediaIcons.map((icon)=> {
                return <div key={icon.fields.title} className="socialMediaIcon" style={{backgroundImage: `url(${icon.fields.file.url})`}}></div>
              })} 
            </div>
              <p>Copyright 2022 All Rights Reserved</p>
          </div>
   
        </section>
      </div>
  )
}
