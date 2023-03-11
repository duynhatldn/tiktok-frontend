import React from "react";
import './VideoFooter.css'
const VideoFooter = ({channel, description}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoFooter;