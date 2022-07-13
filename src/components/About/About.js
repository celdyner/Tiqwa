import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import HeadTitle from '../../common/HeadTitle/HeadTitle'


const About = () => {
  return (
    <>
    
     <HeadTitle />
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
                          <p>
                          We promise to put your needs first and foremost during your treatment and will pursue every available means to get you better.Every professional of our dedicated team will contribute towards delivering the best outcomes and
                          highest quality of service.<br /> You can count on us to keep you and your loved ones safe and healthy.
                            
                        </p>
                        <button className='secondary-btn' style={{ backgroundColor: "#0F0BB7",
                            border:"none" ,
                            color: "white",
                            padding: "15px 32px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            MarginLeft:"400px",
                            float: "right",
                            borderRadius: "10px"
                            
                            }}>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                      </button>
                      </div>

                      <div className='row image'>
                <img src='/images/slide.jpg' alt="About Us" />

                    </div>

                </div>

              
            </section>
    
    </>
  )
}

export default About
