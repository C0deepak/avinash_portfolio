import React from 'react'
import './YellowButtom.css'

const YellowButton = ({ text, icon }) => {
    return (
        <div className="yellowButton">
            <div className="yellowButtonWrap"></div>
            {text} {icon}
        </div>
    )
}

export default YellowButton