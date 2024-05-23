// VideoPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../util/appSlice';
import Comments from './Comments';
const VideoPage = () => {
  const dispatch=useDispatch();
  

  const [video, setVideo] = useState(null);
  const{id}=useParams()
  console.log(id)


  useEffect(() => {
    dispatch(closeSidebar())
    const fetchVideo = async () => {
      try {
        const apiKey = 'AIzaSyA6BcXw-NXBtDf2UtZtVmsSKARqL8Q_lrU';
        // Extract video ID from URL params
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const data = await response.json();
        setVideo(data.items[0]); // Set the fetched video
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="container mx-auto px-4 py-8 ml-20">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="400"
          src={videoSrc}
          title={video.snippet.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{video.snippet.title}</h2>
          <p className="text-sm text-gray-700 mb-2">Channel: {video.snippet.channelTitle}</p>
          <p className="text-sm text-gray-700 mb-2">Views: {video.statistics.viewCount}</p>
        </div>
      </div>
      <Comments id={id}></Comments>
    </div>
  );
};

export default VideoPage;
