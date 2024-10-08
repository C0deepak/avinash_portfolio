import React from 'react'
import './Home.css'
import { AiFillInstagram, AiOutlineArrowRight } from 'react-icons/ai'
import HomeHeaders from '../../components/HomeHeaders/HomeHeaders'
import YellowButton from '../../components/YellowButton/YellowButton'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import SoftwareCard from '../../components/SoftwareCard/SoftwareCard'
import { PiQuotesBold } from 'react-icons/pi'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">

            <div className="homeHero">
                <div className="homeHeroText">
                    <div className="homeHeroHeading">Crafting Stories That<br /><span>Inspire</span></div>
                    <div className="homeHeroPara">Hi! I am <span>Avinash</span> a video editor with an entrepreneur's heart with over 3+ years of experience.<br />
                        With a portfolio boasting 1.2M views and counting, I invite you to explore the magic that unfolds frame by frame.</div>
                    <a href='#about' className="homeHeroButton">Get Started <div className="homeHeroArrow" ><AiOutlineArrowRight /></div></a>
                </div>

                <div className="homeHeroCardWrap">
                    <div className='homeHeroCardLevel'>
                        <div className="homeHeroCard"><img src="/img/BUK TRIPS.png" alt="brand" /></div>
                        <div className="homeHeroCard"><img src="/img/beasly2.png" alt="brand" /></div>
                    </div>
                    <div className='homeHeroCardLevel'>
                        <div className="homeHeroCard"><img src="/img/b3.png" alt="brand" /></div>
                        <div className="homeHeroCard"><img src="/img/pharma logo.png" alt="brand" /></div>
                    </div>
                </div>
            </div>

            <div className="homeAbout" id='about'>
                <div className="homeAboutLeft">
                    <HomeHeaders heading="Quick Info" subHeading="About me" />
                    <div className="homeALText">
                        <div className="homeALTPara">GM!, I'm Avinash, a 22-year-old dedicated to the art of video editing, Earned a spot in the prestigious world of film school.</div>
                        <div className="homeALTPara">Ever since my First Movie - How to Train Your Dragon I just fell in love with this art. My journey led me to gain valuable experience in understanding the intricate psychology of viewers.</div>
                        <div className="homeALTPara">Now, I stand ready to breathe life into your stories through video editing.</div>
                    </div>
                    <div className="homeALButtons">
                        <Link to='/works' className="homeALBWork"><YellowButton text="works" /></Link>
                    </div>
                    <div className="homeALButtons">
                        <Link to='https://aceedits.notion.site/CASE-STUDIES-4899914f16d246378f71aa894eb9966d?pvs=4' className="homeALBWork"><YellowButton text="Case Studies" /></Link>
                    </div>
                    <div className="homeALSocial">
                        <div className="homeALSText">Social links :</div>
                        <div className="homeALSLinks">
                            <a href="https://www.instagram.com/mostcreativename/" target='_blank'><AiFillInstagram /></a>
                            <a href="https://www.youtube.com/channel/UC16fdPcHgOz4L9OY5Ryk6dg" target='_blank'><FaYoutube /></a>
                            <a href="https://twitter.com/Avinash4776947" target='_blank'><FaTwitter /></a>
                            <a href="https://www.linkedin.com/in/beyond-avinash/" target='_blank'><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="homeAboutRight">
                    <div className="homeAboutRightBox"></div>
                    <img src="/img/hero.webp" alt="" />
                </div>
            </div>


            <div className="homeTestimonial">
                <PiQuotesBold className='homeTDArrow' />
                <PiQuotesBold className='homeTUArrow' />
                <div className="homeTestimonialWrap">
                    <HomeHeaders heading="Listen to our clients" subHeading="Testimonials" />

                    <div className="testimonialSlider">
                        <TestimonialCard para="A fantastic editor who always goes the extra mile. His attention to detail and creativity are amazing" cName="Aamir Akhtar" cLocation="Banglore" cImg="/img/aamir.png"/>
                        <TestimonialCard para="Working with him has been a breeze. He did thorough research for our project and understands our brand perfectly" cName="Ria Rustagi" cLocation="India" cImg="/img/ria.png"/>
                        <TestimonialCard para="He consistently creates visually appealing edits, simplifying complex ideas beautifully" cName="Mridul Khurana" cLocation="India" cImg="/img/mridul.png"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
