import React from 'react'
import './SoftwareCard.css'

const SoftwareCard = (props) => {
  return (
    <div className="softwareCard">
        <div className="softwareCTop">
            <div className="softwareCTLogo"><img src={props.img} alt="" /></div>
            {props.pro && (<div className="softwareCTPro">Pro</div>)}
        </div>
        <div className="softwareCHeading">{props.heading}</div>
        <div className="softwareCPara">{props.para}</div>
    </div>
  )
}

export default SoftwareCard