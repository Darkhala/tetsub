// components/VideoEx.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoEx = () => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    // Redirect to the VideoPlayerPage with the selected videoId
    navigate(`/video/${videoId}`);
  };

  const trendingSectionStyle = {
    background: 'black',
    color: 'white',
    padding: '20px',
  };

  const videoContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
  };

  const videoStyle = {
    marginRight: '20px',
    maxWidth: '300px', // Adjust the width of each video container
    cursor: 'pointer', // Add cursor style for indicating clickability
  };

  return (
    <section style={trendingSectionStyle}>
      <div className="video-container" style={videoContainerStyle}>
        {/* Video 1 */}
        <div className="video" style={videoStyle} onClick={() => handleVideoClick(1)}>
          <img src="video2_thumbnail.jpg" alt="Video 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Video 2 */}
        <div className="video" style={videoStyle} onClick={() => handleVideoClick(2)}>
          <img src="video2_thumbnail.jpg" alt="Video 2" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Video 3 */}
        <div className="video" style={videoStyle} onClick={() => handleVideoClick(3)}>
          <img src="video2_thumbnail.jpg" alt="Video 3" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Video 4 */}
        <div className="video" style={videoStyle} onClick={() => handleVideoClick(4)}>
          <img src="video2_thumbnail.jpg" alt="Video 4" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>
      </div>
    </section>
  );
};

export default VideoEx;
