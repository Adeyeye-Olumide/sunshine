import React from 'react'


import donate1 from '../../img/pexels-liza-summer-6348123.jpg'
import donate2 from '../../img/pexels-liza-summer-6347738.jpg'
import donate3 from '../../img/pexels-antoni-shkraba-7345451.jpg'


import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import { FaLightbulb } from "react-icons/fa6";
import '@coreui/coreui/dist/css/coreui.min.css'
import './file.scss'

function CarouselComponent() {
  return (
    <div className='component__carousel--component'>
        <div className='carousel'>
            <h1><FaLightbulb></FaLightbulb>Did You Know?</h1>
        </div>

        <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100 donate" src={donate1} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    {/* <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p> */}
                    <div className='content'>
                        <h5>
                            <span>£5 </span>
                            could buy a coffee for one of our befriending sessions, 
                            where we offer a friendly and supportive chat to anyone who needs someone to talk to.
                        </h5>
                    </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 donate" src={donate2} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <div className='content'>
                        <h5>
                        <span>£10 </span>
                            could pay for a monthly mobile phone bill for one of our volunteers, 
                            who use their phone to contact potential clients and offer them emotional support and practical help.
                        </h5>
                    </div>
                    
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 donate" src={donate3} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <div className='content'>
                        <h5>
                        <span>£18 </span>
                            could cover the cost of a Volunteer DBS (Police Check), 
                            which is required for all volunteers who work with vulnerable people.
                        </h5>
                    </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 donate" src={donate3} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <div className='content'>
                        <h5>
                        <span>£120 </span>
                        could fund a weekly support group for people who are feeling lonely or isolated, 
                        where they can share their experiences and learn from each other.
                           
                        </h5>
                    </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 donate" src={donate3} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <div className='content'>
                        <h5>
                        <span>£400 </span>
                        could enable Sunshine to provide online resources and webinars for those facing social isolation, 
                        needing to connect and boost their wellbeing and get the much needed support they need.
                           
                        </h5>
                    </div>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
      
    </div>
  )
}

export default CarouselComponent
