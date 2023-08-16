import React from 'react'
import './Home.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HomeHeaders from '../../components/HomeHeaders/HomeHeaders'
import YellowButton from '../../components/YellowButton/YellowButton'
import { TbMailFilled } from 'react-icons/tb'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import SoftwareCard from '../../components/SoftwareCard/SoftwareCard'
import { PiQuotesBold } from 'react-icons/pi'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'

const Home = () => {
    return (
        <div className="home">

            <div className="homeHero">
                <div className="homeHeroText">
                    <div className="homeHeroHeading">Empowering Your <br /><span>Imagination</span> Through Video</div>
                    <div className="homeHeroPara">Hi I am <span>Avinash</span> an Android developer and ML and IoT enthusiast. <br />
                        I have worked made various high demand projects. Have a youtube channel with over 90,000 views.</div>
                    <div className="homeHeroButton">Get Started <div className="homeHeroArrow" ><AiOutlineArrowRight /></div></div>
                </div>

                <div className="homeHeroCardWrap">
                    <div className="homeHeroCard">Editing</div>
                    <div className="homeHeroCard">Motion Design</div>
                    <div className="homeHeroCard">Design</div>
                    <div className="homeHeroCard">Colour Grading</div>
                </div>
            </div>

            <div className="homeAbout">
                <div className="homeAboutLeft">
                    <HomeHeaders heading="Quick Info" subHeading="About me" />
                    <div className="homeALText">
                        <div className="homeALTPara">I'm a 21 Year old Indian artist whose passions are all things Creative & Artistic, Music & Football.</div>
                        <div className="homeALTPara">I've worked in the industry for 2+ years, creating a myriad of multimedia content for various clients, large & small.</div>
                        <div className="homeALTPara">I wear many hats, I'm a Creative/Art Director & Multimedia Designer that can strategize, plan, manage, craft and execute virtually anything for any brand.</div>
                    </div>
                    <YellowButton text="resume" />
                    <div className="homeALSocial">
                        <div className="homeALSText">Social links :</div>
                        <div className="homeALSLinks">
                            <a href="#"><TbMailFilled /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="homeAboutRight"></div>
            </div>

            <div className="homeSoftware">
                <HomeHeaders heading="Software I use" subHeading="Software Info" />
                <div className="homeSoftwareWrap">
                    <SoftwareCard img="/img/ae.svg" heading="Adobe Premiere Pro" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" pro="true" />
                    <SoftwareCard img="/img/pe.svg" heading="Adobe Premiere Pro" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" pro="" />
                    <SoftwareCard img="/img/ps.png" heading="Adobe Premiere Pro" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" pro="true" />
                    <SoftwareCard img="/img/figma.svg" heading="Adobe Premiere Pro" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" pro="" />
                </div>
            </div>

            <div className="homeTestimonial">
                <PiQuotesBold className='homeTDArrow' />
                <PiQuotesBold className='homeTUArrow' />
                <div className="homeTestimonialWrap">
                    <HomeHeaders heading="Listen to our clients" subHeading="Testimonials" />

                    <div className="testimonialSlider">
                        <TestimonialCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" cName="Hams Stephen" cLocation="Las Vegas" />
                        <TestimonialCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" cName="Hams Stephen" cLocation="Las Vegas" />
                        <TestimonialCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" cName="Hams Stephen" cLocation="Las Vegas" />
                        <TestimonialCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" cName="Hams Stephen" cLocation="Las Vegas" />
                        <TestimonialCard para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" cName="Hams Stephen" cLocation="Las Vegas" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home