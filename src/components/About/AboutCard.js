import React from 'react'
import './About.css'

const AboutCard = () => {
  return (
    <>
     
     <div className='aboutCard mtop flex_space'>
        <div className='row row1'>

                <h4>About Us</h4>
                <h1>
                <span>WHY CHOOSE US</span> 

                </h1>
                <p style={{fontSize:"20px"}}>
                   We believe that everyone deserves to have access to good and quality Hotel. Beyond this, we are also moving with the current trend and changing the narrative by creating an environment that strengthens Nigerians faith in our Hotel Management system. This is
                  why we have introduced new and modern equipment that are capable of transmitting investigation reports that you can trust any time, any day.
                            </p>
            <button className='primary-btn'
            
            // style={{ backgroundColor: "#0F0BB7",
            //   border:"none" ,
            //   color: "white",
            //   padding: "15px 32px",
            //   textAlign: "center",
            //   textDecoration: "none",
            //   display: "inline-block",
            //   fontSize: "16px",
            //   MarginLeft:"400px",
            //   float: "right",
            //   borderRadius: "10px"
              
              >
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
        </div>

        <div className='row image'>
                <img src='/images/feature-img-1.jpg' alt="About Us" />

        </div>


     </div>
    
    
    </>
  )
}

export default AboutCard