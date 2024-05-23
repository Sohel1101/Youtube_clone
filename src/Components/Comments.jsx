import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
          params: {
            key: 'AIzaSyA6BcXw-NXBtDf2UtZtVmsSKARqL8Q_lrU',
            part: 'snippet',
            videoId: id,
            maxResults: 20, // adjust as needed
          }
        });
        // Filter out replies and keep only top-level comments
        const filteredComments = response.data.items.filter(comment => !comment.snippet.parentId);
        setComments(filteredComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [id]);

  const toggleComments = () => {
    setShowComments(prevState => !prevState);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Comments</h2>
      <button 
        className="block mx-auto mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleComments}
      >
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <ul className="space-y-4">
          {comments.map(comment => (
            <li key={comment.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-gray-800 font-semibold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                <span className="text-gray-500 text-sm ml-auto">{comment.snippet.topLevelComment.snippet.publishedAt}</span>
              </div>
              <p className="text-gray-700">{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              <button className="text-blue-500 mt-2 hover:underline">Reply</button>
              {/* Reply Section */}
              {/* You can add reply section here similar to the main comment section */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
