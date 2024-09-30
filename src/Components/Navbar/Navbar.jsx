import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef=useRef();


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      navRef.current.classList.add('nav_dark'); // Keep class names consistent
    } else {
      navRef.current.classList.remove('nav_dark'); // Ensure the same class name is used
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div  ref={navRef} className='navbar' >
      <div className="navleft">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navright">
        <img src={search_icon} alt="" className='icon' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icon' />
        <div className="Navbar-profile">
          <img src={profile_img} alt=""  className='profile'/>
          <img src={caret_icon} alt=""  className='caret'/>
<div className="dropdown">
  <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
</div>
           </div>

      </div>
    </div>
  )
}

export default Navbar
