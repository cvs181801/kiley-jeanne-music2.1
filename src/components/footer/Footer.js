import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './footer.css'

export default function Footer() {
  const [isFooterLoading, setIsFooterLoading] = useState(false);
  const [footerContent, setFooterContent] = useState({});

  const getFooterContent = async ()=> {
    try{
        const response = await client.getEntries({content_type:'footer2'})
        console.log(response.items[0].fields)
        const image = response.items[0].fields.footerImage.fields.file.url;
        const alt = response.items[0].fields.footerImage.fields.title;

        const instagramIconTitle = response.items[0].fields.instagramIcon.fields.title;
        const instagramIconUrl = response.items[0].fields.instagramIcon.fields.file.url;
        const instagramUrl = response.items[0].fields.instagramLink;

        const youTubeIconTitle = response.items[0].fields.youTubeIcon.fields.title;
        const youTubeIconUrl = response.items[0].fields.youTubeIcon.fields.file.url;
        const youTubeUrl = response.items[0].fields.youTubeLink;

        const spotifyIconTitle = response.items[0].fields.spotifyIcon.fields.title;
        const spotifyIconUrl = response.items[0].fields.spotifyIcon.fields.file.url;
        const spotifyUrl = response.items[0].fields.spotifyLink;

        console.log([
          {title: instagramIconTitle, iconUrl: `https:${instagramIconUrl}`, url: instagramUrl},
          {title: youTubeIconTitle, iconUrl: `https:${youTubeIconUrl}`, url: youTubeUrl},
          {title: spotifyIconTitle, iconUrl: `https:${spotifyIconUrl}`, url: spotifyUrl}
        ])
        
        setFooterContent({
            image: `https:${image}`,
            alt: alt,
            socialMediaIcons: [
              {title: instagramIconTitle, iconUrl: `https:${instagramIconUrl}`, url: instagramUrl},
              {title: youTubeIconTitle, iconUrl: `https:${youTubeIconUrl}`, url: youTubeUrl},
              {title: spotifyIconTitle, iconUrl: `https:${spotifyIconUrl}`, url: spotifyUrl}
            ]
        })


    }
    catch(error){
        console.log(error) //need better err handling
    }
}

useEffect(()=>{
    getFooterContent()
},[])

const handleClick = (url)=> {
  window.open(url)
}

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
                return <div key={icon.title} className="socialMediaIcon" style={{backgroundImage: `url(${icon.iconUrl})`}}  onClick={()=>handleClick(icon.url)}></div>
              })}    
            </div>
              <p>Copyright 2022 All Rights Reserved</p>
          </div>
   
        </section>
      </div>
  )
}
