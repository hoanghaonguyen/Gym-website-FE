import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const Header = () => {
  return (
    <header className='main-header'>
      <div className='container main-header-containner'>
        <div className='main-header-left'>
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className='main-header-right'>
          <div className='main-header-circle'>

          </div>
          <div className='main-header-image'>
            <img src={Image} alt='Main Header Image' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header