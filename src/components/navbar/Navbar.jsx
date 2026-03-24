import { useState } from 'react'
import './Navbar.css'
import { FaRegClock } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
function Navbar() {

  return (

    <div className='navbar'>
      <div className="top">
        <span className='top__span'>
          <p><LuPhone  className='icone1' />+998 69 234 5678</p>
          <p className='top__p2'><MdOutlineMail className='icone2' />info@doctora.uz</p>
        </span>
        <p className='top__p3'><FaRegClock className='icone2' />
          Mon-Sat: 8:00 AM - 8:00 PM
        </p>
      </div>
      {/* navbar */}
      <div className="nav">
        <span>
          <h1 className='doc_h1'>Doctor A </h1>
          <p className='doc_p'>Namangan Medical Center</p>
        </span>
        <h6 className='nav_flex'>  </h6>
        <ul className='nav__ul'>
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="nav__btn1">Book Appointment</button>
        <FaBars className='bars' />
      </div>
     
      
    </div>
  )
}

export default Navbar