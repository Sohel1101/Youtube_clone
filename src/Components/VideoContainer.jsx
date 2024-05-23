import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyA6BcXw-NXBtDf2UtZtVmsSKARqL8Q_lrU';
        const maxResults = 20; // Fetch 20 videos per page
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=${maxResults}&regionCode=IN&pageToken=${nextPageToken}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(prevVideos => [...prevVideos, ...data.items]);
        setNextPageToken(data.nextPageToken);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [nextPageToken]);

  const loadMoreVideos = () => {
    // Trigger fetching next page of videos
    if (nextPageToken) {
      setNextPageToken(nextPageToken);
    }
  };
  console.log(videos)
  return (
    <div className="container px-4 py-8 relative overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-8">Most Popular YouTube Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map(video => (
          <div key={video.id} className="bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <Link to={`/watch/${video.id}`}>
             <VideoCard video={video}></VideoCard>
            </Link>
          </div>
        ))}
      </div>
      {nextPageToken && (
        <div className="text-center mt-8">
          <button onClick={loadMoreVideos} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
