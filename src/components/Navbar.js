import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo/logo.png'
import {links} from '../data'
//import { VscThreeBars } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";


import './navbar.css'


const Navbar = () => {
    const [isShowNav, setIsShowNav] = useState(false);

  return (
    <nav>
        <div className='container nav-container'>
            
            <Link to='/' className='logo' onClick={()=> setIsShowNav(false)}>
                <img src={Logo} alt='logo'/>
            </Link>
            <ul className={`nav-links ${isShowNav ? 'show-nav':'hide-nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=> isActive? 'active-nav':''} 
                                        onClick={()=> setIsShowNav(prev=> !prev)}>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav__toggle-btn' onClick={()=> setIsShowNav(prev=> !prev)}>
                {isShowNav? <GrClose/> : <FaBars/>}
            </button>
        </div>
    </nav>
  )
}

export default Navbar