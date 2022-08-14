import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
    

        <div className="footer">
            <div className="footer-content">
            <div className="footer-section about">
                <h1 className="logo-text"><span>Apex</span>HotelNg</h1>
                <p>
                    A flower dosen't think of competing with the flower next to it,it just blooms!!<br />
                    Doing God's will is paramount,dont expect it from worldly people.
                 
                </p>
                <div className="contact"> 
                    <span><i className="fas fa-phone"></i> &nbsp; 0811-807-5866</span>
                    <span><i className="fas fa-envelope"></i> &nbsp; ApexHotelNg@gmail.com</span>
                    </div>
                    <div className="socials">
                    <Link to = "/"><i className="fab fa-facebook"></i></Link>
                    <Link to = "/"> <i className="fab fa-instagram"></i></Link>
                    <Link to = "/">  <i className="fab fa-twitter"></i></Link>
                    <Link to = "/"> <i className="fab fa-youtube"></i></Link>
                    </div>
            </div>
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to ='/register'>Register Your Hotel</Link></li>
                    <li><Link to ='/'>Gallery </Link></li>
                    <li><Link to ='/'>Events </Link></li>
                    <li><Link to ='/'>Blog</Link></li>
                    <li><Link to ='/'>Reservations</Link></li>
            </ul>
            </div>
            <div className="footer-section contact-form">
                <h2>Contact Us</h2>
                <br />
                <form action='' method='post'><input type='hidden' name='form-name' value='form 1' />
                    <input type="email" name="email" className="text-input contact-input" placeholder="Your email address.." required />
                    <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..." required></textarea>
                    <button type="submit" className="primary-btn">
                       <i className="fas fa-envelope"></i> 
                        Send
                    </button>
                </form>
            </div>
        </div>
        
        <div className="footer-bottom">
            &copy; ApexHotelNg | Designed by Henry Oranekwulu
        </div>
        </div>
        
        

    
    
    
    
    
    
    
    </>
  )
}

export default Footer