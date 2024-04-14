import React from 'react'
import { BiSolidStar } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import './TestimonialCard.css'

const TestimonialCard = (props) => {
    return (
        <div className='testimonialCard'>
            <div className="tCStars"></div>
            <div className="tCPara">{props.para}</div>
            <div className="tCFClient">
                <img src={props.cImg} alt="clientImg" />
                <div className="tCClient">
                    <div className="tCCName">{props.cName}</div>
                    <div className="tCCLocation"><IoLocationOutline />{props.cLocation}</div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
