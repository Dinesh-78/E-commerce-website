import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
  
const Header = () => {
  return (
    <header>
   {/* Top Announcement Bar */}
   <div className='tagoff'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now</p>
        <div className='language-selector'>
          <p>English</p>
          <IoIosArrowDown size={20} color='white' />
        </div>
      </div>
     {/* Navigation Bar */}
     <nav className='navbar'>
        {/* Logo */}
        <div className='logo'>
          <h1>Exclusive</h1>
        </div>

        {/* Navigation Links */}
        <div className='navi-opt'>
          <NavLink className="opt" to="/">Home</NavLink>
          <NavLink className="opt" to="/contact">Contact</NavLink>
          <NavLink className="opt" to="/about">About</NavLink>
          <NavLink className="opt" to="/signup">Sign In</NavLink>
        </div>

        {/* Search and Icons */}
        <div className='search-container'>
          <input className='search-input' placeholder='What are you looking for?' />
          
          <FaRegHeart size={24} className="icon" />
          <IoCartOutline size={24} className="icon" />
        </div>
      </nav>
    
       
    
  </header>
  )
}

export default Header