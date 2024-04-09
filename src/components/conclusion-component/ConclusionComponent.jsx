

import React from 'react'

import './file.scss'
function ConclusionComponent() {

    const emailAddress = 'hello@sunshinecharity.org.uk '
  return (
    <div className='component__conclusion--component'>
      <p>
        
        <span>Support us at Sunshine:</span> You can support us by spreading the word about our charity and our work. 
        You can tell your friends, family, and colleagues about us, and invite them to join our community. 
        You can also follow us on social media, and share our posts and stories. 
        You will help us raise awareness and reach more people who need our help.
      </p>

      <p>
                
        <span>Partner with us at Sunshine:</span> You can partner with us by offering your services, products, or expertise to help us improve our quality and efficiency. 
        You can also collaborate with us on joint activities, events, or projects that align with our vision and mission. 
        You will benefit from our network, exposure, and reputation, and you will help us achieve our goals.
      </p>

      <p>
        <span>Contact Us:</span> If you are interested in getting involved with Sunshine, or if you have any questions, comments, or feedback, 
        please do not hesitate to contact us. You can reach us by <a href={`mailto:${emailAddress}`}> Email</a> or on our social media accounts.
      </p>

      <p>
            We would love to hear from you and welcome you to our community. Together, we can make the world a brighter place.

            Thank you for reading our guide booklet. We hope you enjoyed it and learned more about our charity and our work. Please keep this booklet for future reference, or pass it on to someone who might be interested. We look forward to hearing from you soon. 
      </p>
    </div>
  )
}

export default ConclusionComponent
