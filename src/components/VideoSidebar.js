import React, { useState } from "react";
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const VideoSidebar = ({likes}) => {
    const [liked,setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? 
                    <FavoriteIcon  
                        fontSize="large"
                        onClick={e => setLiked(false)}
                    /> :
                    <FavoriteBorderIcon  
                        fontSize="large"
                        onClick={e => setLiked(true)}
                    />
                }
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>

        </div>
    )
}

export default VideoSidebar;