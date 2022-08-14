import React from 'react'
import './About.css'
import AboutCard from './AboutCard'


const About = () => {
  return (
    <>
    
    
        <section className='about top'>

                <div className='container'>
                    <AboutCard />

                </div>

        </section>
            <section className='features top'>
                <div className='container aboutCard flex_space'>
                      <div className='row row1'>

                          <h1>
                            
                            OUR <span>MISSION</span>
                          
                          </h1>
                          <p style={{fontSize:"20px"}}>
                          ApexHotelNg management software is a technology that allows hotel operators and owners to streamline their administrative tasks while also increasing their bookings in both the short- and long-term.
                            
                        </p>
                        <button className='primary-btn' 
                        // style={{ backgroundColor: "#0F0BB7",
                        //     // border:"none" ,
                        //     // color: "white",
                        //     // padding: "15px 32px",
                        //     // textAlign: "center",
                        //     // textDecoration: "none",
                        //     // display: "inline-block",
                        //     // fontSize: "16px",
                        //     // MarginLeft:"400px",
                        //     // float: "right",
                        //     // borderRadius: "10px"
                            
                            >
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                      </button>
                      </div>

                      <div className='row image'>
                <img src='/images/aboutimg.jpg' alt="About Us" />

                    </div>

                </div>

              
            </section>
    
    </>
  )
}

export default About
