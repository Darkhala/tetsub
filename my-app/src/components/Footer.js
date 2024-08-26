// components/Footer.js

import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'black',
    color: 'white',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '20px'
    
    
  };

  const separatorStyle = {
    margin: '0 10px',
    borderRight: '1px solid white',
    height: '15px', // Adjust the height of the separator
  };

  const followOnStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const socialIconStyle = {
    width: '20px', // Adjust the width of the social icons
    height: 'auto',
    margin: '0 5px',
  };

  return (
    <footer style={footerStyle}>
      <div style={{display: 'flex', paddingLeft:'60px', fontSize: '11px', color: 'grey'}}>
        <span>Feedback</span>
        <div style={separatorStyle}></div>
        <span>Home</span>
        <div style={separatorStyle}></div>
        <span>FAQ</span>
      </div>

      {/* Logo */}
      <img src={`${process.env.PUBLIC_URL}/yktvlogo.png`} alt="Logo" style={{ width: '30px', height: 'auto' }} />

      <div style={followOnStyle}>
        <span style={{color: 'grey', fontSize: '12px'}}>Follow on</span>
        <div style={separatorStyle}></div>
        <img src={`${process.env.PUBLIC_URL}/fblog.png`} alt="Facebook" style={socialIconStyle} />
        <div style={separatorStyle}></div>
        <img src={`${process.env.PUBLIC_URL}/iglog.png`} alt="Instagram" style={socialIconStyle} />
      </div>
    </footer>
  );
};

export default Footer;