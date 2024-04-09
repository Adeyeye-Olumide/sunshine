import React from 'react'

import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'
import { IoSunnySharp } from "react-icons/io5";

import './file.scss'

function HeaderComponent() {


  return (
    <div className='component__header--component'>
        <div className="logo">
            <h1><div>SUN <IoSunnySharp className='sun'/></div><span>SHINE</span></h1>
            <div>
              <h6>fostering connections</h6>
              <h6> enhancing wellbeing</h6>
              <h6> transforming lives</h6>
              
            </div>
        </div>

        <div className='options'>
            <span className="about"><a href='#who-we-are'>WHO WE ARE</a></span>
            <span className="about"><a href='#what-we-do'>WHAT WE DO</a></span>
            <span className="about"><a href='#volunteer'>VOLUNTEER</a></span>
            <span className="about"><a href='#donate'>DONATE</a></span>
            <span className="about"><a href='#contact-us'>CONTACT US</a></span>
            <span className='icon'><a href="https://www.instagram.com/@SunshineChty" target="_blank"><FaInstagram></FaInstagram></a></span>
            <span className='icon'><a href="https://www.facebook.com/@SunshineChty" target="_blank"><FaFacebook></FaFacebook></a></span>
            <span className='icon'> <a href="https://www.twitter.com/@SunshineChty" target="_blank"><FaTwitter></FaTwitter></a></span>

        </div>
      
    </div>
  )
}

export default HeaderComponent
