import React from 'react'
import './HomeHeaders.css'

const HomeHeaders = (props) => {
    return (
        <div className="homeHeaders">
            <div className="homeHeadersHeading">{props.heading}</div>
            <div className="homeHeadersSubHeading">{props.subHeading}</div>
        </div>
    )
}

export default HomeHeaders