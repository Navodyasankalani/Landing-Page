import React from 'react'
import e7 from '../image/Ellipse 7.png'
import e8 from '../image/Ellipse 8.png'
import e9 from '../image/Ellipse 9.png'
import e10 from '../image/Ellipse 10.png'
import e11 from '../image/Ellipse 11.png'
import e12 from '../image/logos_google-icon.png'
import e13 from '../image/iphone-12--black.png'
import socials from './SocialDetails'
import { useState } from 'react'

function Cards() {

  const[social,setSocial] = useState(socials)
  return (
    <div className="card">
        <div className="leftFirstCard">
          <div className="leftFirstCardDetails">
            <h2>Automated <br/>Reports</h2>
              <p>Fermentum ut cras gravida et malesuada curabitur netus ac. Id mauris nibh turpis sed laoreet rhoncus gravida.</p>
          </div>
              <div className="gogPic">
                <img className='im1'src={e7} alt="" />
                <img className='im2'src={e8} alt="" />
                <img className='im3'src={e9} alt="" />
                <img className='im4'src={e10} alt="" />
                <img className='im5'src={e11} alt="" />
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img className='im6'src={e12} alt="" />
                </a>

              </div>

        </div>
         <div className="leftSecondCard">
            <div className="leftSecondCardDetails">
              <h2>User Journey</h2>
              <p>Duis amet est ante erat aliquet tellus sed vel in. Nibh dictum suspendisse purus tincidunt fringilla velit.</p>
            </div>
            <div className="box">
            <img className='im7'src={e13} alt="" />
            </div>
            
        </div>
        <div className="rightCard">
            <div className="socialShortcut">
              {/* <div className="c1"> */}
                <div className="c1r1">
                   {social.map(soc =>(
                    <img src={soc.img} alt="" />
                   ))}
                </div>
 
              {/* </div> */}
            </div>
            <h2>Funnel <br/> Optimization</h2>
            <p>Fermentum ut cras gravida et malesuada curabitur netus ac. Id mauris nibh turpis sed laoreet rhoncus gravida.</p>
        </div>
    </div>
  )
}

export default Cards