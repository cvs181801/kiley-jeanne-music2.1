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
          Listen to Kiley Jeanne's Music!  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget. Semper quis lectus nulla at volutpat diam ut. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Urna nunc id cursus metus aliquam eleifend mi in nulla. Nibh nisl condimentum id venenatis a. Non curabitur gravida arcu ac tortor dignissim convallis. Ac odio tempor orci dapibus ultrices in. Integer eget aliquet nibh praesent tristique magna sit.

Bibendum ut tristique et egestas quis ipsum suspendisse. Et leo duis ut diam quam nulla. Pellentesque sit amet porttitor eget dolor morbi non. Magna fermentum iaculis eu non diam. Luctus venenatis lectus magna fringilla. Dolor magna eget est lorem ipsum dolor. Consectetur a erat nam at. Ornare lectus sit amet est placerat in egestas erat imperdiet. Id velit ut tortor pretium viverra. Lectus magna fringilla urna porttitor rhoncus. Risus pretium quam vulputate dignissim suspendisse in. Nisl nunc mi ipsum faucibus.

Pellentesque habitant morbi tristique senectus. Integer vitae justo eget magna fermentum iaculis eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Maecenas pharetra convallis posuere morbi leo urna molestie at. Pellentesque habitant morbi tristique senectus et. A diam maecenas sed enim ut. Quam id leo in vitae turpis massa sed elementum. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.

Dictum non consectetur a erat nam at. Morbi blandit cursus risus at ultrices mi. Sagittis purus sit amet volutpat consequat mauris nunc. Interdum consectetur libero id faucibus nisl tincidunt eget. Pretium aenean pharetra magna ac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Convallis a cras semper auctor neque vitae. Egestas congue quisque egestas diam in arcu cursus euismod. Vitae ultricies leo integer malesuada nunc vel risus commodo.

Cursus sit amet dictum sit amet justo donec. Tincidunt praesent semper feugiat nibh sed. Suspendisse ultrices gravida dictum fusce. Vel risus commodo viverra maecenas accumsan lacus. Sapien et ligula ullamcorper malesuada proin libero nunc. Nec feugiat nisl pretium fusce id. Vulputate odio ut enim blandit volutpat maecenas. Volutpat ac tincidunt vitae semper quis lectus nulla. Habitasse platea dictumst quisque sagittis purus sit. Aenean et tortor at risus viverra adipiscing at in tellus. Tincidunt dui ut ornare lectus sit amet est.
        </div>
      </section>
    </div>
  )
}
