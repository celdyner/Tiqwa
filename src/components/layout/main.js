import React from 'react'
import Navbar from '../../common/Navbar/Navbar'
import Footer from '../../common/Footer/Footer'

const Main = (props) => {
  return (
    <div className='container'>

<Navbar />

<div>{props.children}</div>

<Footer />
    </div>
  )
}

export default Main