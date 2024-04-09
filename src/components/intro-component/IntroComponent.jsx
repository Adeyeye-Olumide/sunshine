import React from 'react'
import { IoIosSunny } from "react-icons/io";
import './file.scss'

function IntroComponent() {


  return (
    <div className='component__intro--component'>
        <div className='content' id='who-we-are'>
            <div><h1>Who We Are</h1></div>
            <h4>
            <p>Sunshine is a grassroots community-led charity that’s passionate about empowering and improving the lives of people across London and beyond. We are committed to bringing people together, spreading joy, and community spirit through a range of community-based activities, events, and projects that foster connections, enhance wellbeing, and help transform lives. We’re committed to making a positive impact in the community and changing peoples lives for the better.

            We are not just a charity;</p> <p>we are a movement of passionate and dedicated people who really care and want to make a positive difference. We are here to bring joy and foster community spirit to everyone, especially those living with social isolation who feel lonely, isolated, or struggling with life’s challenges.

            Sunshine offers safe and supportive spaces for people to connect, learn, grow and increase their wellbeing through a range of one-2-one and group based approaches from passionate skilled positive motivational role models.</p>

            Sunshine was born out of a vision to address the social issues that have been worsened by the cost-of-living crisis and the pandemic. We know that many people are feeling disconnected, disenfranchised, lonely, isolated, struggling mentally and emotionally and lacking the motivation, empowerment, confidence and self-esteem they need to succeed in life. We know that many people need a ray of hope in their lives. That’s why we are here. We are here to be the sunshine in their lives to brighten up their day, to be a positive influence and inspire and motivate people so that they feel connected, valued and ready to face the world.


            </h4>
        </div>

        <div className='content' id='what-we-do'>
            <div><h1>What We Do</h1></div>
            <h4>
            Sunshine provides a range of community-based initiatives that aim to foster connections, enhance wellbeing, and help transform lives. Some of our current and upcoming projects include:
                <ul>
                    <li>
                        <p>
                            <span className='list-icon'><IoIosSunny></IoIosSunny></span>
                            Sunshine Café: A weekly drop-in session where people can enjoy a cup of tea or coffee,
                            a slice of cake, and a friendly chat with our volunteers and other guests. 
                            A great way to meet new people, make friends, and have fun.
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className='list-icon'><IoIosSunny></IoIosSunny></span>
                            Sunshine Club: A monthly social club where people can participate in various activities such as games, 
                            quizzes, arts and crafts, music, and more. A great way to have fun, learn new skills, 
                            and express yourself creatively.
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className='list-icon'><IoIosSunny></IoIosSunny></span>
                            Sunshine Course: A six-week course where people can learn about topics such as mindfulness, positive psychology, self-care, and resilience.
                             A great way to improve your mental and emotional wellbeing, and cope with stress and challenges.
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className='list-icon'><IoIosSunny></IoIosSunny></span>
                            Sunshine Camp: A weekend retreat where people can enjoy nature, relaxation, and adventure. 
                            A great way to escape the hustle and bustle of the city, reconnect with yourself and others, and recharge your batteries.
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className='list-icon'><IoIosSunny></IoIosSunny></span>
                            Sunshine Festival: A yearly celebration where people can enjoy live music, food, stalls, and entertainment. 
                            A great way to celebrate the achievements and contributions of our community, and showcase our talents and diversity.
                        </p>
                    </li>
                </ul>
           

            </h4>
        </div>


       
      
    </div>
  )
}

export default IntroComponent
