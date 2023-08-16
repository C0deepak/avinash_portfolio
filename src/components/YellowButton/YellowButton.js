import React from 'react'
import './YellowButtom.css'

const YellowButton = ({ text }) => {
    return (
        <div className="yellowButton">
            <div className="yellowButtonWrap"></div>
            {text}
        </div>
    )
}

export default YellowButton