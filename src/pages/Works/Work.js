import React from 'react'
import './Work.css'
import HomeHeaders from '../../components/HomeHeaders/HomeHeaders'
import YellowButton from '../../components/YellowButton/YellowButton'
import { TbMailFilled } from 'react-icons/tb'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Work = () => {
  return (
    <div className='work'>
      <div className='workHero'>
        <div className="workHeroText">
          <div className="workHeroHeading">Showcasing My <span>Creations</span></div>
          <div className="workHeroPara">Our works span a spectrum of projects, from mesmerizing films to impactful commercials, each a testament to our commitment to visual storytelling. Join us on this visual journey, where every frame tells a unique tale.</div>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Corporate Videos</div>
        {/* <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/OVoPlFdVNbE?si=8Kqc0o_R-wMguLkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/_BnAaQZYzuM?si=_b9U1FgHCx32xcSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/n7o_8Fv3rdA?si=haw77GgTxWYtRkWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/OXhr0MI_CxA?si=wR9TkJoaobbyub4O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Youtube Videos</div>
        {/* <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/zVZeef0hIr8?si=xJfmgTIlv2d1BFq1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/6jtoc8AIARg?si=V5ptl2ScTfkaeOxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/5UER3ZONcZk?si=WlpK9T_jqg76UdAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/5xsLG93vcRU?si=WOr67qjTP_jMLnR9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Shorts and Reels</div>
        {/* <div className='wSWrap'>
          <iframe src="https://www.youtube.com/embed/mhwB98I-yKY?si=ueldyh512Yh6QwYL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/bGBbQ9_7z7U?si=OiwTk8tbSKZ32ghG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/5eGIb0kH3Z4?si=tgBRI7oA3hp_xMZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/KzDZKI2bAEA?si=QgTv-gaXnRhrr1Oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/M5ghxYXjXaY?si=WeFBRw5ABhSCMslk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
      </div>

      <div className="workContact">
        <div className="workContactLeft">
          <div className="workHeroHeading">Hope you liked my <span>Work</span></div>
          <div className="workCLText">
            <div className="workCLTPara">
              We welcome your contact and encourage you to connect with us. Whether you have inquiries, ideas to share, or potential collaborations in mind, we're here and eager to engage. Your message is important to us, and we're excited about the opportunity to connect and explore the possibilities together. Feel free to reach out – we're just a message away!
            </div>
          </div>
          <YellowButton text="Contact Me" />
        </div>
        <div className="workContactRight"></div>
      </div>
    </div>
  )
}

export default Work