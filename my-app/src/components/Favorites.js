// components/Favorites.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();

  const handleFavoriteClick = (favoriteId) => {
    // Redirect to the VideoPlayerPage with the selected favoriteId
    navigate(`/favorite/${favoriteId}`);
  };

  const favoritesSectionStyle = {
    background: 'black',
    color: 'white',
    padding: '20px',
  };

  const favoriteContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
  };

  const favoriteStyle = {
    marginRight: '20px',
    maxWidth: '300px', // Adjust the width of each favorite container
    cursor: 'pointer', // Add cursor style for indicating clickability
  };

  return (
    <section style={favoritesSectionStyle}>
      <div className="favorite-container" style={favoriteContainerStyle}>
        {/* Favorite 1 */}
        <div className="favorite" style={favoriteStyle} onClick={() => handleFavoriteClick(1)}>
          <img src="video2_thumbnail.jpg" alt="Favorite 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Favorite 2 */}
        <div className="favorite" style={favoriteStyle} onClick={() => handleFavoriteClick(2)}>
          <img src="video2_thumbnail.jpg" alt="Favorite 2" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Favorite 3 */}
        <div className="favorite" style={favoriteStyle} onClick={() => handleFavoriteClick(3)}>
          <img src="video2_thumbnail.jpg" alt="Favorite 3" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>

        {/* Favorite 4 */}
        <div className="favorite" style={favoriteStyle} onClick={() => handleFavoriteClick(4)}>
          <img src="video2_thumbnail.jpg" alt="Favorite 4" style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <p>video description</p>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
