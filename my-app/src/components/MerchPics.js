// components/MerchPics.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MerchPics = () => {
  const navigate = useNavigate();

  const handleMerchClick = (merchId) => {
    // Redirect to the MerchDetailPage with the selected merchId
    navigate(`/merch/${merchId}`);
  };

  const merchSectionStyle = {
    background: 'black',
    color: 'white',
    padding: '20px',
  };

  const merchContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
  };

  const merchStyle = {
    marginRight: '20px',
    maxWidth: '300px', // Adjust the width of each merch container
    cursor: 'pointer', // Add cursor style for indicating clickability
  };

  return (
    <section style={merchSectionStyle}>
      <h1 style={{paddingLeft: '10px', textAlign:'left'}}>Store</h1>
      <div className="merch-container" style={merchContainerStyle}>
        {/* Merch 1 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(1)}>
          <img src="merch1.jpg" alt="Merch 1" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>

        {/* Merch 2 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(2)}>
          <img src="merch1_image.jpg" alt="Merch 2" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>

        {/* Merch 3 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(3)}>
          <img src="merch1_image.jpg" alt="Merch 3" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>

        {/* Merch 4 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(4)}>
          <img src="merch1_image.jpg" alt="Merch 4" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>

        {/* Merch 5 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(5)}>
          <img src="merch1_image.jpg" alt="Merch 5" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>

        {/* Merch 6 */}
        <div className="merch" style={merchStyle} onClick={() => handleMerchClick(6)}>
          <img src="merch1_image.jpg" alt="Merch 6" style={{ maxWidth: '100%', marginBottom: '10px' }} />
        </div>
      </div>
    </section>
  );
};

export default MerchPics;
