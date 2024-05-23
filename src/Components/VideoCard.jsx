import React from 'react'

const VideoCard = ({video}) => {

  return (
   <>
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{video.snippet.title}</h2>
      <p className="text-sm text-gray-700 mb-2">Channel: {video.snippet.channelTitle}</p>
      {/* <p className="text-sm text-gray-700 mb-2">Views: {video.statistics.viewCount}</p> */}
    </div>
   </>
  )
}

export default VideoCard