import React from 'react'



import { CFooter, CLink } from '@coreui/react'

import '@coreui/coreui/dist/css/coreui.min.css'

import './file.scss'
const FooterComponent = () => {
    const emailAddress = 'olumideadeyeye.webdev@gmail.com'
  return (
    <div className='component__footer--component'>

        <div>
            {/* <CLink href="https://coreui.io">CoreUI</CLink> */}
            <span>&copy; 2024 Sunshine</span>
        </div>

        <div className='contact' id='contact-us'>
            {/* <CLink href="https://coreui.io">CoreUI</CLink> */}
            <span>Contact us </span>
            <p>Email: hello@sunshinecharity.org.uk</p>
            <p>
                Social Media: <a href='https://www.facebook.com/@SunshineChty'>Facebook</a>, <a href='https://www.instagram.com/@SunshineChty'>Instagram</a>, <a href='https://www.twitter.com/@SunshineChty'>X</a>, <a href='https://www.Youtube.com/@SunshineChty'>YouTube</a>
            </p>
        </div>

        <div>
            <span>Powered by</span>
            <p><a href={`mailto:${emailAddress}`}> Elysium</a></p>
        </div>
    </div>
  )
}

export default FooterComponent
