// MerchLinks.js

import React from 'react';

const MerchLinks = () => {
  const categories = ['Women Apparel', 'Kids', 'Men Apparel', 'Apparel Accessories'];

  const handleCategoryClick = (category) => {
    // Handle click event for the category (you can add your logic here)
    console.log(`Clicked on category: ${category}`);
  };

  return (
    <div style={rectanglesContainerStyle}>
      {categories.map((category, index) => (
        <div key={index} style={rectangleStyle} onClick={() => handleCategoryClick(category)}>
          <span style={textStyle}>{category}</span>
        </div>
      ))}
    </div>
  );
};

const rectanglesContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '60px',
  background: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  padding: '10px',
};

const rectangleStyle = {
  width: '150px',
  height: '26px',
  background: '#595858',
  borderRadius: '10px',
  color: 'white',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
  
  cursor: 'pointer',
  marginRight: '30px',
};

const textStyle = {
  fontSize: '14px',
};

export default MerchLinks;
