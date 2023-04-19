import React from 'react'
import {Link } from 'react-router-dom'
import './header.css';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <div className='header'>
        <Link to="/"><img className="logoSportSee" src={logo} alt="Logo de SportSee" /></Link>
        <nav className='navbarHeader'>
        <Link className="navText" to="/"> Accueil </Link>
        <Link className="navText" to="/"> Profil</Link>
        <Link className="navText" to="/"> Reglage</Link>
        <Link className="navText" to="/"> Communauté</Link>
        </nav>
    </div>
  )
}