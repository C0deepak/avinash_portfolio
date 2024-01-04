import React from 'react'
import './Contact.css'
import YellowButton from '../../components/YellowButton/YellowButton'
import { FaLinkedin, FaTwitter, FaVideo, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaqData } from '../../utils/FaqData'
import AccordianCard from '../../components/Accordian/AccordianCard'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactHero'>
        <div className="contactHeroText">
          <div className="contactHeroHeading">Feel free to <span>Reach me</span></div>
          </div>
      </div>

      <div className='contactAbout'>
        <div className="contactAboutLeft">
          <div className="contactAboutLeftTop">
            <div className='otherHeading'>Get in <span>Touch</span></div>
            <div className="contactALText">
            </div>
            <a href="https://calendly.com/avinash-yt" className='buttonLink'><YellowButton text="Schedule a call" icon={<FaVideo />} /></a>
            <div className="contactALSocial">
              <div className="contactALSText">Social links :</div>
              <div className="contactALSLinks">
                <a href="https://www.instagram.com/mostcreativename/" target='_blank'><AiFillInstagram /></a>
                <a href="https://www.youtube.com/channel/UC16fdPcHgOz4L9OY5Ryk6dg" target='_blank'><FaYoutube /></a>
                <a href="https://twitter.com/Avinash4776947" target='_blank'><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/avinash-kumar-yadav-99602520b" target='_blank'><FaLinkedin /></a>
              </div>
            </div>
          </div>

          
        <div className="contactAboutRight">
          <form action="https://formspree.io/f/xpzgrwlw"
            method="POST">
            <div className='contactARFHeading'>Contact Me</div>
            <div className='contactARFForm'>
              <input type="text" name="Name" placeholder='Name' />
              <input type="email" name="Email" placeholder='Email' />
              <input type="text" name="Subject" placeholder='Subject' />
              <input type="text" name="Message" placeholder='Message' />
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>

      <div className='contactFaq'>
        <div className='otherHeading'>Frequently Asked Questions <span>(FAQs)</span></div>

        <div className="contactFaqWrap">
          {
            FaqData.map((ques) => {
              return <AccordianCard key={ques.id} ques={ques.question} ans={ques.answer} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Contact
