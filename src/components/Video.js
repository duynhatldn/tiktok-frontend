import React, { useRef, useState } from "react";
import './Video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url,channel,description,likes}) => {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
            />
            <VideoFooter
                channel={channel}
                description={description}
            />
            <VideoSidebar
                likes={likes}
            />
        </div>
    )
}

export default Video;