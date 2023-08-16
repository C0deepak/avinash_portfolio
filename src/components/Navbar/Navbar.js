import React from 'react'
import YellowButton from '../YellowButton/YellowButton'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarLogo">LOGO</div>
        <div className="navbarLink">
            <Link to='/'>Home</Link>
            <Link to='/works'>Works</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <YellowButton text="Hire Me"/>
    </div>
  )
}

export default Navbar