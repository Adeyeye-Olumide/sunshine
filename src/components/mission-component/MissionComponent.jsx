import React from 'react'

import './file.scss'

function MissionComponent() {


  return (
    <div className='component__mission--component'>
        <div className="heading">

            <h1>Our Vision, Mission, and Values</h1>

        </div>

        <div className="content">
            <div className='vision--mission'>
                <div className='vision'>
                    <h2>Our Vision</h2>
                    <p>A world where everyone feels connected, 
                        valued, and empowered to live a joyful and fulfilling life.
                    </p>
                </div>

                <div className='mission'>
                    <h2>Our Mission</h2>
                    <p>
                        To provide safe and supportive spaces for people to connect, learn, grow, and 
                        increase their wellbeing through a range of one-2-one and group based approaches from passionate skilled positive motivational role models. 
                        We aim to reach out to everyone, especially those living with social isolation who feel lonely, 
                        isolated, or struggling with life’s challenges, and offer them a ray of hope and a positive influence in their lives.
                    </p>
                </div>

            </div>
            

            <div className='values'>
                <h2>Our Values and ethos</h2>
                <p><span>Joy: </span>We believe that joy is the essence of life, 
                    and we strive to spread joy and happiness to everyone we meet and serve. 
                    We celebrate the small and big moments of life, and we appreciate the beauty and diversity of our world.
                </p>
                <p>
                <span>Community:</span> We believe that community is the foundation of wellbeing, and we strive to build and strengthen community bonds and spirit. We respect and value everyone’s uniqueness and contribution, and we support and care for each other as a family.
                </p>
                   
                <p>
                <span>Empowerment:</span> We believe that empowerment is the key to transformation, and we strive to empower and improve the lives of people we work with and for. We encourage and motivate people to discover and unleash their potential, and we help them overcome their challenges and achieve their goals.
                </p>

                <p>

                <span>Innovation:</span> We believe that innovation is the driver of change, and we strive to innovate and create new and better ways of doing things. We embrace learning and growth, and we welcome feedback and improvement. We are not afraid to take risks and experiment with new ideas.
                </p>
            </div>

           

        </div>
      
    </div>
  )
}

export default MissionComponent
