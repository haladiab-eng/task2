import React from 'react'
import './Section.css'
import blog from '../../assets/images/images/featured.jpg'
import blo from '../../assets/images/images/featured-icon.png'
import info from '../../assets/images/images/info-icon-01.png'



const Section = () => {
  return (
    <div className='all'>
   
   <div className='content'>
   <div className='one'>
            <img className='blog' src={blog} alt="blog" />
            <img className='bloog' src={blo} alt="blo" style={{border:"0.5px solid #f35525"}} />
            </div>
            <div className='two'  >
               <div className='title'> 
                <h5>FEATURED</h5>
                <h2>Best Appartment & Sea View</h2>
                </div>

                <div className='question'>
                    <p>Best useful links?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nesciunt, maxime asperiores nostrum facilis ipsa eligendi inventore totam facere nobis ea consequatur, assumenda natus suscipit deserunt dolore harum, nemo voluptatum?</p>
                    <p>How does this work?</p>
                    <p>Why is Villa Agency the best</p>
                    </div>
            </div>

            <div className='three' >
            
                    <div className ='yyy'>
                    <img src={info} alt="info" />
                    <div>
                        <h3>250 m2</h3>
                        <p>Total Flat Space</p>
                    </div>
                    </div>

                    <hr />

                    <div className='yyy'>
                   <img src={info} alt="info" />
                    <div>
                        <h3>250 m2</h3>
                        <p>Total Flat Space</p>
                    </div>
                    </div>

                    <hr />

                    <div className='yyy'>
                    <img src={info} alt="info" />
                    <div>
                        <h3>250 m2</h3>
                        <p>Total Flat Space</p>
                    </div>
                    </div>

                    <hr />

                    <div className='yyy'>
                    <img src={info} alt="info" />
                    <div>
                        <h3>250 m2</h3>
                        <p>Total Flat Space</p>
                    </div>
                    </div>
            






            </div>
   </div>



      
    </div>
  )
}

export default Section
