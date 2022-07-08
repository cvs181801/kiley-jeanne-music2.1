import React, {useState, useEffect} from 'react'
import { client } from '../../client';
import './listen.css'

export default function Listen() {

  const [isListenLoading, setIsListenLoading] = useState(false);
  const [listenContent, setListenContent] = useState({});


  const getListenContent = async ()=> {
    try{
        const response = await client.getEntries({content_type:'listen'})
        
        const image = response.items[0].fields.listen.fields.file.url;
        const alt = response.items[0].fields.listen.fields.title;
        console.log(image, alt)
        setListenContent({
            image: `https:${image}`,
            alt: alt
        })


    }
    catch(error){
        console.log(error) //need better err handling
    }
}

useEffect(()=>{
    getListenContent()
},[])

  return (
    <div>
      <section
        id="listenSection"
      >
        <div
          className="listenContainer"
          style={{
            //backgroundImage: `linear-gradient(to bottom, rgba(248, 251, 248, 0.83), rgba(1, 98, 5, 0.83)), url(${listenContent.image})`
            backgroundImage: `url(${listenContent.image})`
          }}
        >
            <div
              className="listenInnerContainer"
            >
              <p>Scroll down to listen on You Tube.  Stay tuned for more musical content coming your way soon.</p>
            </div>
        </div>
      </section>
    </div>
  )
}
