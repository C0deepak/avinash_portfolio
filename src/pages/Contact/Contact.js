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
          <div className="contactHeroPara">I'm here and ready to connect. Feel free to drop me a line with any questions, thoughts, or ideas you have. Whether you're looking to collaborate, share feedback, or simply have a conversation, your message is important to me. I look forward to hearing from you and exploring the possibilities together.</div>
        </div>
      </div>

      <div className='contactAbout'>
        <div className="contactAboutLeft">
          <div className="contactAboutLeftTop">
            <div className='otherHeading'>Get in <span>Touch</span></div>
            <div className="contactALText">
              <div className="contactALTPara">
                We welcome your contact and encourage you to connect with us. Whether you have inquiries, ideas to share, or potential collaborations in mind, we're here and eager to engage. Your message is important to us, and we're excited about the opportunity to connect and explore the possibilities together. Feel free to reach out – we're just a message away!
              </div>
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

          <div className="contactAboutLeftBottom">
            <div className='otherHeading'><span>Subscribe</span> to my channel</div>
            <div className="contactALSubscribe">
              <div className="contactALSDetail">
                <div className="contactALSDImg">
                  <img src="/img/avatar.png" alt="" />
                </div>
                <div className="contactALSDText">
                  <div className="contactALSDTHeading">Beyond Avinash</div>
                  <div className="contactALSDTPara">
                    <div className="contactALSDTPDiv">@BeyondAvinash</div>
                    <div className="contactALSDTPDiv">1.21K subscribers</div>
                  </div>
                </div>
              </div>
              <a href='https://youtube.com/@BeyondAvinash?si=RRHHlS7_uJan2wTC' target='_blank' className="contactALSButton">Subscribe</a>
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