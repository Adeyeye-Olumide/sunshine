import React from 'react'

import './file.scss'
import img1 from '../../img/pexels-andrea-piacquadio-3768131.jpg'
import img2 from '../../img/pexels-anna-shvets-4672438.jpg'
import img3 from '../../img/pexels-anna-shvets-4672714.jpg'
import img4 from '../../img/pexels-daria-obymaha-1683975.jpg'
import img5 from '../../img/pexels-elina-fairytale-4834142.jpg'
import img6 from '../../img/pexels-this-is-zun-1116302.jpg'
import img7 from '../../img/pexels-fauxels-3184418.jpg'
import img8 from '../../img/pexels-min-an-853168.jpg'



function TogetherComponent() {
  return (
    <div className='component__together--component'>
        <div style={{backgroundImage: `url(${img1})`}}>

        </div>
        <div style={{backgroundImage: `url(${img2})`}}>
            
        </div>
        <div className='third' style={{backgroundImage: `url(${img3})`}}>
            
        </div>
        <div className='fourth' style={{backgroundImage: `url(${img4})`}}>
            
        </div>
        <div className='fifth' >
            <blockquote>
                <h1>".....Together, we can make the world a brighter place."</h1>
            </blockquote>

            <h5>-Scott <span>founder and ceo Sunshine</span></h5>
            
        </div>
        <div className='sixth' style={{backgroundImage: `url(${img5})`}}>
            
        </div>
        <div style={{backgroundImage: `url(${img6})`}}>
            
        </div>
        <div style={{backgroundImage: `url(${img7})`}}>
            
        </div>
        <div style={{backgroundImage: `url(${img8})`}}>
            
        </div>
      
    </div>
  )
}

export default TogetherComponent
