import React from 'react'
import './Work.css'
import HomeHeaders from '../../components/HomeHeaders/HomeHeaders'
import YellowButton from '../../components/YellowButton/YellowButton'
import { TbMailFilled } from 'react-icons/tb'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className='work'>
      <div className='workHero'>
        <div className="workHeroText">
          <div className="workHeroHeading" style={{ textAlign: 'center' }}>Showcasing My <span>Creations</span></div>
    </div>    
  </div>

      <div className='workYoutube'>
        <div className="wYHeading">Corporate Videos</div>
        <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/n7o_8Fv3rdA?si=haw77GgTxWYtRkWG?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/OVoPlFdVNbE?si=8Kqc0o_R-wMguLkI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/OXhr0MI_CxA?si=wR9TkJoaobbyub4O?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/oc6Y1sEJU_Q?si=btscMPcM4iYvq2i6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/_BnAaQZYzuM?si=_b9U1FgHCx32xcSQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Youtube Videos</div>
        <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/zVZeef0hIr8?si=xJfmgTIlv2d1BFq1?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/5UER3ZONcZk?si=WlpK9T_jqg76UdAI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/N7CbINZPEf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>             
          <iframe src="https://www.youtube.com/embed/5xsLG93vcRU?si=WOr67qjTP_jMLnR9?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/E2lEYmNvjfU?si=U2VF5cGEb7zDDxvC?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/QTREmmntmhg?si=voEC4jH9fd4i1OBn?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Shorts and Reels</div>
        <div className='wSWrap'>
          <iframe src="https://www.youtube.com/embed/nLjcMBgTyvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/KuAqaYMp3_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/sXRmHl8jwFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/bGBbQ9_7z7U?si=OiwTk8tbSKZ32ghG?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/5eGIb0kH3Z4?si=tgBRI7oA3hp_xMZ8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/KzDZKI2bAEA?si=QgTv-gaXnRhrr1Oz?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/Fjl7oQCdzJQ?si=xJqiYVfS96B-BCUI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className='workYoutube'>
        <div className="wYHeading">Ads and Promos</div>
        <div className='wYWrap'>
          <iframe src="https://www.youtube.com/embed/6jtoc8AIARg?si=jLr4KEaJQXOby1ep?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/Fvdzummv-kM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/nGNmtz_e7rE?si=7kpwNZYn75ckeYOI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <div className="workContact">
        <div className="workContactLeft">
          <div className="workCLText">
          </div>
          <Link to='/contact'><YellowButton text="Contact Me" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Work
