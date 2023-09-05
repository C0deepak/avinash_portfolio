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
          <div className="workHeroHeading" style={{ textAlign: 'center' }}>Showcasing My <span>Creations</span></div>
          <div className="workHeroPara">Our works span a spectrum of projects, from mesmerizing films to impactful commercials, each a testament to our commitment to visual storytelling. Join us on this visual journey, where every frame tells a unique tale.</div>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Corporate Videos</div>
        <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/OVoPlFdVNbE?si=8Kqc0o_R-wMguLkI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/_BnAaQZYzuM?si=_b9U1FgHCx32xcSQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/n7o_8Fv3rdA?si=haw77GgTxWYtRkWG?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/OXhr0MI_CxA?si=wR9TkJoaobbyub4O?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Youtube Videos</div>
        <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/zVZeef0hIr8?si=xJfmgTIlv2d1BFq1?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/6jtoc8AIARg?si=V5ptl2ScTfkaeOxI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/5UER3ZONcZk?si=WlpK9T_jqg76UdAI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/5xsLG93vcRU?si=WOr67qjTP_jMLnR9?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Shorts and Reels</div>
        <div className='wSWrap'>
          <iframe src="https://www.youtube.com/embed/mhwB98I-yKY?si=ueldyh512Yh6QwYL?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/bGBbQ9_7z7U?si=OiwTk8tbSKZ32ghG?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/5eGIb0kH3Z4?si=tgBRI7oA3hp_xMZ8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/KzDZKI2bAEA?si=QgTv-gaXnRhrr1Oz?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/M5ghxYXjXaY?si=WeFBRw5ABhSCMslk?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className="workContact">
        <div className="workContactLeft">
          <div className="workHeroHeading">Hope you liked my <span>Work</span></div>
          <div className="workCLText">
            <div className="workCLTPara">
              I sincerely hope you enjoyed my work. Your satisfaction is my priority, and I'm here to bring your vision to life. If you have any feedback or future projects in mind, please don't hesitate to reach out. Thank you for choosing my services!
            </div>
          </div>
          <YellowButton text="Contact Me" />
        </div>
        <div className="workContactRight">
          <img src="/img/wc.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Work