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
                    <div className="homeHeroPara">Hi! I am <span>Avinash</span> a video editor with an entrepreneur's heart over 3+ years of experience.<br />
                        With a portfolio boasting 300k+ views and counting, I invite you to explore the magic that unfolds frame by frame in my creative journey.</div>
                    <a href='#about' className="homeHeroButton">Get Started <div className="homeHeroArrow" ><AiOutlineArrowRight /></div></a>
                </div>

                <div className="homeHeroCardWrap">
                    <div className='homeHeroCardLevel'>
                        <div className="homeHeroCard"><img src="/img/b1.png" alt="brand" /></div>
                        <div className="homeHeroCard"><img src="/img/b2.png" alt="brand" /></div>
                    </div>
                    <div className='homeHeroCardLevel'>
                        <div className="homeHeroCard"><img src="/img/b3.png" alt="brand" /></div>
                        <div className="homeHeroCard"><img src="/img/b4.png" alt="brand" /></div>
                    </div>
                </div>
            </div>

            <div className="homeAbout" id='about'>
                <div className="homeAboutLeft">
                    <HomeHeaders heading="Quick Info" subHeading="About me" />
                    <div className="homeALText">
                        <div className="homeALTPara">Greetings, I'm Avinash, a 22-year-old dedicated to the art of video editing, who got to attend film school.</div>
                        <div className="homeALTPara">With a deep-seated passion for visual storytelling, I've diligently refined my craft. My journey has also led me to gain valuable experience in the world of YouTube, understanding the intricate psychology of viewers.</div>
                        <div className="homeALTPara">Now, I stand ready to breathe life into your stories, leveraging the artistry of video editing.</div>
                    </div>
                    <div className="homeALButtons">
                        <a href="https://drive.google.com/file/d/1eRBCrNtMtEPbDpgviBiV3gboasGRiG9R/view?usp=sharing" target='_blank' className='resumeBtn'><YellowButton text="resume" /></a>
                        <Link to='/works' className="homeALBWork"><YellowButton text="works" /></Link>
                    </div>
                    <div className="homeALSocial">
                        <div className="homeALSText">Social links :</div>
                        <div className="homeALSLinks">
                            <a href="https://www.instagram.com/mostcreativename/" target='_blank'><AiFillInstagram /></a>
                            <a href="https://www.youtube.com/channel/UC16fdPcHgOz4L9OY5Ryk6dg" target='_blank'><FaYoutube /></a>
                            <a href="https://twitter.com/Avinash4776947" target='_blank'><FaTwitter /></a>
                            <a href="https://www.linkedin.com/in/avinash-kumar-yadav-99602520b" target='_blank'><FaLinkedin /></a>
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
                        <TestimonialCard para="Avinash significantly contributed to the success of both my personal YouTube channel (180K+ views) and DappTales, the agency I founded." cName="Aamir Akhtar" cLocation="Banglore" />
                        <TestimonialCard para="Avinash has been an absolute game-changer for Neuphony, our Shark Tank-backed venture. His editing and storytelling have transformed our content." cName="Ria Rustagi" cLocation="India" />
                        <TestimonialCard para="Avinash at Scaler Studios is an outstanding video editor. He transforms our clients' visions into captivating stories." cName="Mridul Khurana" cLocation="India" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
