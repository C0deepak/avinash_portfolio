import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerCopy">
            copyright &copy; BeyondAvinash 2023-24
        </div>
        <div className="footerProm">
            Designed by <a href="https://modernartist.netlify.app" target='_blank'>@modernArtist</a> & Developed by <a href="https://imalive.netlify.app" target='_blank'>@DBros.</a>
        </div>
    </div>
  )
}

export default Footer