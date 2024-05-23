// YoutubeCard.js
import React from 'react';

function ButtonSearchResult({ video }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{video.snippet.title}</h2>
      <p className="text-sm text-gray-700 mb-2">Channel: {video.snippet.channelTitle}</p>
      {/* <p className="text-sm text-gray-700 mb-2">Views: {video.statistics.viewCount}</p> */}
    </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"># {video.snippet.channelTitle}</span>
      </div>
    </div>
  );
}

export default ButtonSearchResult;
