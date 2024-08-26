import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="user-profile">
      {/* User Profile */}
      <div className="user-profile-info">
        <div className="user-profile-image" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'gray', marginRight: '10px' }}>
          {/* Insert user profile image here */}
        </div>
        <div className="user-profile-details" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold' }}>Username</span>
          <Link to="/create-route" style={{ color: 'blue', textDecoration: 'none' }}>Create Route</Link>
        </div>
      </div>

      {/* History */}
      <div className="user-history">
        <h2>History</h2>
        <div className="history-images">
          <img src={`${process.env.PUBLIC_URL}/image1.jpg`} alt="History 1" />
          <img src={`${process.env.PUBLIC_URL}/image2.jpg`} alt="History 2" />
          <img src={`${process.env.PUBLIC_URL}/image3.jpg`} alt="History 3" />
        </div>
      </div>

      {/* Bookmarked */}
      <div className="user-bookmarked">
        <h2>Bookmarked</h2>
        <div className="bookmarked-images">
          <img src={`${process.env.PUBLIC_URL}/image4.jpg`} alt="Bookmarked 1" />
          <img src={`${process.env.PUBLIC_URL}/image5.jpg`} alt="Bookmarked 2" />
          <img src={`${process.env.PUBLIC_URL}/image6.jpg`} alt="Bookmarked 3" />
        </div>
      </div>

      {/* Liked */}
      <div className="user-liked">
        <h2>Liked</h2>
        <div className="liked-images">
          <img src={`${process.env.PUBLIC_URL}/image7.jpg`} alt="Liked 1" />
          <img src={`${process.env.PUBLIC_URL}/image8.jpg`} alt="Liked 2" />
          <img src={`${process.env.PUBLIC_URL}/image9.jpg`} alt="Liked 3" />
        </div>
      </div>

      {/* Following */}
      <div className="user-following">
        <h2>Following</h2>
        <div className="following-profiles">
          <img src={`${process.env.PUBLIC_URL}/user1.jpg`} alt="User 1" />
          <img src={`${process.env.PUBLIC_URL}/user2.jpg`} alt="User 2" />
          <img src={`${process.env.PUBLIC_URL}/user3.jpg`} alt="User 3" />
          <img src={`${process.env.PUBLIC_URL}/user4.jpg`} alt="User 4" />
          <img src={`${process.env.PUBLIC_URL}/user5.jpg`} alt="User 5" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

