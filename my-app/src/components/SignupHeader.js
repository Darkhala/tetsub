import React from 'react';
import { Link } from 'react-router-dom';

const SignupHeader = () => {
  return (
    <header style={{ background: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo and Name */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/yktvlogo.png`} alt="YKTV Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <span style={{ color: 'white', fontWeight: 'bold' }}>YKTV</span>
        </Link>
      </div>
      
      {/* Buttons */}
      <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">
        <button style={{ backgroundColor: '#007FFF', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Watch</button>
        </Link>
        <button style={{ backgroundColor: 'white', color: 'black', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Upload</button>
      </div>
    </header>
  );
};

export default SignupHeader;
