// components/TopShow.js

import React from 'react';

const TopShow = () => {
  // Replace 'your_image_url.jpg' with the actual URL of your top show image
  const backgroundImage = require('./images/fena.jpg'); // Image URL

  const sectionStyle = {
    backgroundColor: 'black', // Set background color to black
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '150px',
    textAlign: 'left',
    position: 'relative', // Make sure it's positioned relative for absolute positioning of the button
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '-15px', // Adjust as needed
    left: '50%',
    transform: 'translateX(-50%)', // Center the button horizontally
    width: '120px',
    height: '30px',
    backgroundColor: '#007FFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <section style={sectionStyle}>
      {/* <h2 style={{ marginBottom: '20px' }}>Top Show</h2>
      <p>This is the Top show of the day <br></br> top show today.</p> */}

      {/* Rectangular Button */}
      <div style={buttonStyle}>
        <span style={{ color: 'white', font:'12px' }}>Trending</span>
      </div>
    </section>
  );
};

export default TopShow;