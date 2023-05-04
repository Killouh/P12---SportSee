import React from 'react'
import {Link } from 'react-router-dom'
import './sidebar.css';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <nav className='navSidebar'>
        <Link className="sidebarlogo" to="/"><img   src={logo1} alt="Logo de SportSee" />  </Link>
        <Link className="sidebarlogo" to="/"><img  src={logo2} alt="Logo de SportSee" /> </Link>
        <Link className="sidebarlogo" to="/"><img  src={logo3} alt="Logo de SportSee" /> </Link>
        <Link className="sidebarlogo" to="/"><img  src={logo4} alt="Logo de SportSee" /> </Link>
        <div className='sidebarTextContainer '><p className='sidebarText'>Copiryght, SportSee 2020</p></div>
        </nav>
    </div>
  )
}