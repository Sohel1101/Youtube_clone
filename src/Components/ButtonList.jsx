// // TopButtons.js

// import React from 'react';
// import './ButtonList.css'; // Import the CSS file for styling

// function ButtonList() {
//   return (
//     <div className="top-btns overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           
//       <button className="top-btn">All</button>
//       <button className="top-btn">Live</button>
      
//       <button className="top-btn">News</button>
//       <button className="top-btn">Music</button>
//       <button className="top-btn">Pop Music</button>
//       <button className="top-btn">Bollywood Music</button>
//       <button className="top-btn">Recently uploaded</button>
//       <button className="top-btn">Music</button>
//       <button className="top-btn">Mixes</button>
//       <button className="top-btn">Lectures</button>
//       <button className="top-btn">New to you</button>
//       <button className="top-btn">All</button>
//       <button className="top-btn">News</button>
//       <button className="top-btn">Music</button>
//       <button className="top-btn">Live</button>
//       <button className="top-btn">All</button>
//       <button className="top-btn">News</button>
//       <button className="top-btn">Music</button>
//       <button className="top-btn">Live</button>
//       <button className="top-btn">All</button>
      
//     </div>
//   );
// }

// export default ButtonList;

// ButtonList.js
import React, { useState } from 'react';
import ButtonSearchResult from './ButtonSearchResult';
import './ButtonList.css';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
function ButtonList() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchYoutubeResults = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6BcXw-NXBtDf2UtZtVmsSKARqL8Q_lrU&q=${query}&type=video&part=snippet&maxResults=10`);
      const data = await response.json();
      setSearchResults(data.items);
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
    }
  };

  return (
    <div>
      <div className="top-btns overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <button className="top-btn" onClick={() => fetchYoutubeResults('All')}>All</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Live')}>Live</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('News')}>News</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Music')}>Music</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Pop Music')}>Pop Music</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Bollywood Music')}>Bollywood Music</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Recently uploaded')}>Recently uploaded</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Mixes')}>Mixes</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('Lectures')}>Lectures</button>
        <button className="top-btn" onClick={() => fetchYoutubeResults('New to you')}>New to you</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {searchResults.map((video, index) => (
          <ButtonSearchResult key={index} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;


