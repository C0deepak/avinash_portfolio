import React, { useEffect, useState } from 'react'
import YellowButton from '../YellowButton/YellowButton'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuRightAlt } from 'react-icons/cg'
import './Navbar.css'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { pathname } = useLocation();

  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]')
    const cursorOutline = document.querySelector('[data-cursor-outline]')

    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX
      const posY = e.clientY

      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: 'forwards' })
    })
    setShowSidebar(false)
  }, [pathname])


  return (
    <div className="navbar">
      <div className='cursor-dot' data-cursor-dot></div>
      <div className='cursor-outline' data-cursor-outline></div>
      <div className="navbarLogo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="navbarLink">
        <Link to='/'>Home</Link>
        <Link to='/works'>Works</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='HireMe'>
        <Link to='/contact'><YellowButton text="Create Your Stories" /></Link>
      </div>

      <div className='navHam' onClick={() => setShowSidebar(!showSidebar)}><CgMenuRightAlt /></div>

      {showSidebar && (
        <div className="navSidebar">
          <Link to='/'>Home</Link>
          <Link to='/works'>Works</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/contact' className='mobileHire'><YellowButton text="Hire Me" /></Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
