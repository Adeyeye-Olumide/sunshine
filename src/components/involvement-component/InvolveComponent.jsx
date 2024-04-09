import React from 'react'



import './file.scss'

function InvolveComponent() {
    const emailAddress = 'hello@sunshinecharity.org.uk '
  return (
    <div className='component__involve--component'>
        <div className='upper'>

            <div className='left'>
                <h1>Want To Get Involved?</h1>
            </div>

            <div className='right'>
                <div>
                <h4>
                Sunshine is always looking for new and enthusiastic people to join our community and support our cause. 
                There are many ways you can get involved, such as,
                    <p>
                        <span id='volunteer'>Volunteer with Sunshine</span>: You can volunteer your time, experience and skills to help us run our charity and our activities, events, and projects. 
                        You can choose from a variety of roles, such as facilitator, host, mentor, coach, outreach, entertainer, photographer, and more. You will receive training, support, and recognition for your work, 
                        and you will have the opportunity to make a positive difference in people’s lives.
                    </p>
                    <p>
                        
                        We also have volunteer roles that help behind the scenes from training and development, HR, volunteer management, marketing, fundraising, communications, admin, IT, finance and much more.

                        At SUNSHINE you will be valued and become part of a caring, passionate and dedicated team of volunteers eager to make a huge difference in our community.

                        Why not contact us for a short <a href={`mailto:${emailAddress}`}> Volunteer Application Form</a>
                    </p>
                </h4>

                <h4>
                    <p>
                        <span id='donate'>Donate to Sunshine:</span> You can donate money or goods to help us fund our activities, 
                        events, and projects. You can make a one-off or regular donation, or you can sponsor a specific activity, 
                        event, or project. You will receive a receipt, a thank you note, and updates on how your donation is making an impact. 
                    </p>
                    <p>
                        
                        We not only need donations of funds and time, 
                        but we are also looking for donations of goods we can use to raise funds such as prizes to raffle off at fundraising events, 
                        or items we can give away as prizes to our volunteers or those people in need who use our services. 
                    </p>
                </h4>
                </div>
                

            </div>

        </div>

        <div className="lower">
            <div>
                {/* <h2>Did You Know?</h2> */}
            </div>
           
        </div>
        
      
    </div>
  )
}

export default InvolveComponent
