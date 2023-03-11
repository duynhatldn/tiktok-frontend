import { useEffect, useState } from 'react';
import './ListVideos.css';
import Video from './Video'
import axios from 'axios'
function ListVideos() {
  const [videos,setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const rep = await axios.get("http://localhost:9000/videos")
      setVideos(rep.data)
    }
    fetchData()
  },[])
  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map(({_id,url,channel,description,liked}) => {
          return (
            <Video 
            key={_id}
            url = {url}
            channel = {channel}
            description = {description}
            likes = {liked}
          />
          )})}
      </div>
    </div>
  );
}

export default ListVideos;
