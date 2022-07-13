import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
  
    return (
        <>
                <nav className="navbar">

                    <div className="container flex_space">

                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>

                        <ul className={ click ? "nav menu active" : "nav-menu"}>
                        
                                <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                                <li><Link to='/about'onClick={closeMobileMenu} >About</Link></li>
                                <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                                <li><Link to='/blog' onClick={closeMobileMenu} >Blog</Link></li>
                                <li><Link to='/testmonial' onClick={closeMobileMenu}>Testmonial</Link></li>
                                <li><Link to='/contact'onClick={closeMobileMenu} >Contact Us</Link></li>
                        
                        </ul>
                        

                        <div className="login-area flex">
                            
                            <li>
                            <Link to='/'>
                                <button className="primary-btn">Appointment</button>
                             </Link>
                            </li>
                            
                        </div>

                        

                    </div>
                </nav>


                <header>

                    <div className="container flex_spac">
                        <div className="logo">
                        <Link to='/' > <img src={logo} alt="Tigwalogo" ></img> </Link>
                        </div>

                        <div className="contact flex_spac">

                            <div className="box flex_spac">
                                <div className="icons">
                                    <i className="far fa-clock"></i>
                                </div>

                                <div className="text">
                                    <h4>Working Hours</h4>
                                    <Link to="/contact">Monday - Sunday: 24/7</Link>
                                </div>
                            </div>
                                <div className="box flex_spac">
                                        <div className="icons">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>

                                        <div className="text">
                                            <h4>Call Us</h4>
                                            <Link to="/contact">+234080609876</Link>
                                        </div>
                                </div>

                                <div className="box flex_spac">
                                        <div className="icons">
                                            <i className="far fa-envelope"></i>
                                        </div>

                                        <div className="text">
                                            <h4>Mail Us</h4>
                                            <Link to="/contact">enquiries@tiqwacare.onmicrosoft.com</Link>
                                        </div>
                                </div>
                        </div>
                        
                    </div>
                
                </header>

        </>

    

  )
}


export default Navbar
