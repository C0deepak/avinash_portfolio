import React, { useEffect, useState } from 'react'
import YellowButton from '../YellowButton/YellowButton'
import { Link } from 'react-router-dom'
import { CgMenuRightAlt } from 'react-icons/cg'
import './Navbar.css'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  
  return (
    <div className="navbar">
      <div className="navbarLogo">LOGO</div>
      <div className="navbarLink">
        <Link to='/'>Home</Link>
        <Link to='/works'>Works</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='HireMe'>
        <YellowButton text="Hire Me" />
      </div>

      <div className='navHam' onClick={() => setShowSidebar(!showSidebar)}><CgMenuRightAlt /></div>

      {showSidebar && (
        <div className="navSidebar">
          <Link to='/'>Home</Link>
          <Link to='/works'>Works</Link>
          <Link to='/contact'>Contact</Link>
          <YellowButton text="Hire Me" />
        </div>
      )}
    </div>
  )
}

export default Navbar