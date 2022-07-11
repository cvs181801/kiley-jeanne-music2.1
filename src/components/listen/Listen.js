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
            backgroundImage: `url(${listenContent.image})`
          }}
        >
            <div
              className="listenInnerContainer"
            >
              <p>Scroll down to listen on You Tube.  Stay tuned for more musical content coming your way soon.
              Convallis a cras semper auctor neque vitae tempus. Feugiat vivamus at augue eget arcu dictum varius. 
              Facilisis mauris sit amet massa vitae. Molestie nunc non blandit massa enim nec dui. 
              Mattis nunc sed blandit libero volutpat sed cras ornare arcu. 
              Eget felis eget nunc lobortis mattis. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Est placerat in egestas erat. 
              Aliquet eget sit amet tellus cras adipiscing enim eu. Id semper risus in hendrerit gravida. Vitae congue eu consequat ac felis donec. 
              Placerat in egestas erat imperdiet. Nunc mattis enim ut tellus elementum. Metus aliquam eleifend mi in nulla posuere.
              </p>
            </div>
        </div>
      </section>
    </div>
  )
}
