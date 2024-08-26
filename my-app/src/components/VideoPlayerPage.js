// components/VideoPlayerPage.js

import React, { useState } from 'react';
import Header from './Header';

const VideoPlayerPage = () => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [isRatingVisible, setRatingVisible] = useState(false);
  const [isShareVisible, setShareVisible] = useState(false);
  const [isAddToFavoritesVisible, setAddToFavoritesVisible] = useState(false);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleRatingClick = () => {
    setRatingVisible(!isRatingVisible);
  };

  const handleShareClick = () => {
    setShareVisible(!isShareVisible);
  };

  const handleAddToFavoritesClick = () => {
    setAddToFavoritesVisible(!isAddToFavoritesVisible);
  };



  return (
    <div style={{ background: 'Black', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header />

      {/* Video Player */}
      <div style={{ margin: '20px' }}>
        {/* Placeholder for the video player, use your video player component */}
        <img src={`${process.env.PUBLIC_URL}/video2_thumbnail.jpg`} alt="Video" style={{ width: '100%', height: '500px' }} />

        {/* Like, Comment, and Rating Icons */}
        <div style={{ display: 'flex', marginTop: '10px', paddingLeft: '1150px' }}>
          <div style={{ cursor: 'pointer' }} onClick={handleLikeClick}>
            <img src={`${process.env.PUBLIC_URL}/like.png`} alt="Like" style={{ width: '30px', height: 'auto' }} />
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleShareClick}>
             <img src={`${process.env.PUBLIC_URL}/share_icon.png`} alt="Share" style={{ width: '30px', height: 'auto' }} />
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleAddToFavoritesClick}>
            <img src={`${process.env.PUBLIC_URL}/add_icon.png`} alt="Add to Favorites" style={{ width: '30px', height: 'auto' }} />
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleRatingClick}>
            <img src={`${process.env.PUBLIC_URL}/fav.png`} alt="Rating" style={{ width: '30px', height: 'auto' }} />
          </div>
        </div>

        {/* Comment Input */}
        {isCommentVisible && (
          <div>
            <textarea
              rows="4"
              cols="50"
              placeholder="Type your comment here..."
              // Add any necessary state or onChange handler for the comment input
            />
            {/* Share Input */}
        {isShareVisible && (
          <div>
            {/* Add your share input component or logic here */}
            <p>Share Input (Replace with your component)</p>
          </div>
        )}

        {/* Add to Favorites Input */}
          {isAddToFavoritesVisible && (
            <div>
              {/* Add your "Add to Favorites" logic or component here */}
              <p>Add to Favorites Input (Replace with your component)</p>
            </div>
          )}

          </div>
        )}

        {/* Rating Input */}
        {isRatingVisible && (
          <div>
            {/* Add your rating component or input here */}
            <p>Rating Input (Replace with your component)</p>
          </div>
        )}

        {/* Video Title */}
        <div style={{ marginLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ color: 'white' }}>Title of the Video</p>
        </div>
      </div>

      {/* Horizontal Sections */}
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        {/* Left Section */}
        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* First Section */}
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
          <img src={`${process.env.PUBLIC_URL}/profilelogo.jpg`} alt="Creator Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <div style={{ marginLeft: '10px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ marginLeft: '2px' }}>Creator      <button style={{ marginLeft: '3px' , backgroundColor:'black',color:'white', borderRadius:'5px', width:'80px', borderColor:'grey'}}>Follow</button></p>   
           
          </div>
        </div>

        {/* Second Section */}
      <div style={{ paddingLeft:'5px',marginBottom: '20px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
        <img src={`${process.env.PUBLIC_URL}/profilelogo.jpg`} alt="Creator Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        
        <div style={{ marginLeft:'20px',width: '480px', height: '35px', backgroundColor: '#222', borderRadius: '15px', display: 'flex', alignItems: 'center', paddingLeft: '10px', marginRight: '10px' }}>
          <input
            type="text"
            placeholder="Write a comment..."
            style={{ flex: '1', height: '30px', backgroundColor: '#222', border: 'none', outline: 'none', color: 'white' }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/send_icon.png`}
            alt="Send Icon"
            style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
          />
        </div>
      </div>
      </div>



        {/* Right Section */}
                <div style={{ width: '20%', backgroundColor: '#000', padding: '20px', borderLeft: '2px solid white' }}>
          <h3 style={{ fontWeight: 'bold', color: 'white' }}>Similar Content</h3>
          {/* Placeholder for Similar Videos (Replace with your actual video components) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img src={`${process.env.PUBLIC_URL}/video2_thumbnail.jpg`} alt="Similar Video 1" style={{ width: '100%', height: '150px', borderRadius: '10px' }} />
            <img src={`${process.env.PUBLIC_URL}/video2_thumbnail.jpg`} alt="Similar Video 2" style={{ width: '100%', height: '150px', borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
