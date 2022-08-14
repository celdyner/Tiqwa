import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
  
    return (
        <>
          <nav className='navbar'>
            <div className='container flex_space'>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
              </div>
    
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                  <Link to='/' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/about' onClick={closeMobileMenu}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to='/gallery' onClick={closeMobileMenu}>
                    Gallery
                  </Link>
                </li>
                
                <li>
                  <Link to='/testimonial' onClick={closeMobileMenu}>
                    Testimonial
                  </Link>
                </li>
              </ul>
    
              <div className='login-area flex'>
              <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
            <li>
              <Link to='/sign-up'>
                <i class='far fa-chevron-right'></i>Sign-up
              </Link>
            </li>
              
            
    
        {/* <Link to='/' href="#">
        <i class="fa fa-user"></i>
        ApexHolteNg
        <i class="fa fa-chevron-down" style={{fontSize: "4em"}}></i>
    </Link> */}

    {/* <ul>
            <li><Link to='/' href="#">Dashboard</Link></li>
            <li><Link to="/" class="logout">Logout</Link></li>
        </ul>
    </li> */}
              
              {isLoggedIn && <li>
                  <Link to='/register'>
                    <button className='primary-btn'>Register Hotel</button>
                  </Link>
                </li>}

              </div>
            </div>
          </nav>
    
          <header>
            <div className='container flex_spac'>
              <div className='logo '>
              <h1><span>Apex</span>HotelNg</h1>
                {/* <img src='' alt='' /> */}
              </div>
    
              
                <div className='box flex_spac'>
                  <div className='icons'>
                    <i className='fas fa-clock'></i>
                  </div>
                  <div className='text'>
                    <h4>Working Hours</h4>
                    <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
                  </div>
                </div>

                <div className='box flex_spac'>
                  <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                  </div>
                  <div className='text'>
                    <h4>Call Us</h4>
                    <Link to='/contact'>+234706925745</Link>
                  </div>
                </div>

                <div className='box flex_spac'>
                  <div className='icons'>
                    <i className='far fa-envelope'></i>
                  </div>
                  <div className='text'>
                    <h4>Mail Us</h4>
                    <Link to='/contact'>ApexHotelNg@gmail.com</Link>
                  </div>
                </div>
              
            </div>
          </header>
        </>
      )
}


export default Navbar
