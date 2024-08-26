import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOverlayVisible, setProfileOverlayVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isUploadOverlayVisible, setUploadOverlayVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleUploadClick = () => {
    setUploadOverlayVisible(!isUploadOverlayVisible);
  };

  const handleProfileClick = () => {
    setProfileOverlayVisible(!isProfileOverlayVisible);
  };

  return (
    <header style={{ background: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/yktvlogo.png`} alt="YKTV Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <span style={{ color: 'white', fontWeight: 'bold' }}>YKTV</span>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', marginRight: '50px' }}>
          <li style={{ color: 'white', fontWeight: 'bold' }}>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>Home</Link>
          </li>
          <li style={{ color: 'white' }}>
            <Link to="/explore_all" style={{color:'white', textDecoration:'none'}}>All Videos</Link>
          </li>
          <li style={{ color: 'white' }}>
            <Link to="/new-and-popular" style={{color:'white', textDecoration:'none'}}>New & Popular</Link>
          </li>
          <li style={{ color: 'white' }}>
            <Link to="/myfavorites" style={{color:'white', textDecoration:'none'}}>My Favorites</Link>
          </li>
          <li style={{ color: 'white' }}>
            <Link to="/Merch" style={{color:'white', textDecoration:'none'}}>Merch</Link>
          </li>
        </ul>
      </nav>
      
      {/* Spacing */}
      <div style={{ marginRight: '20px' }}></div>
      
      {/* Icons */}
      <div className="icons" style={{ display: 'flex', gap: '20px' }}>
        <div style={{ cursor: 'pointer' }} onClick={handleSearchClick}>
          <img src={`${process.env.PUBLIC_URL}/searchlogo.jpg`} alt="Search" style={{ width: '20px', height: 'auto' }} />
        </div>
        <div style={{ cursor: 'pointer' }} onClick={handleUploadClick}>
          <img src={`${process.env.PUBLIC_URL}/uploadicon.jpg`} alt="Upload" style={{ width: '20px', height: 'auto' }} />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/notificationlogo.jpg`} alt="Notification" style={{ width: '20px', height: 'auto' }} />
        </div>
        <div style={{ cursor: 'pointer' }} onClick={handleProfileClick}>
          <img src={`${process.env.PUBLIC_URL}/profilelogo.jpg`} alt="Profile" style={{ width: '20px', height: 'auto' }} />
        </div>
      </div>
      
      {/* Search */}
      <div className="search" style={{ position: 'relative', display: isSearchVisible ? 'block' : 'none' }}>
        <input type="text" placeholder="Search" style={{ padding: '5px', borderRadius: '5px', border: '1px solid darkgray', backgroundColor: 'lightgray' }} />
      </div>

      {/* Upload Overlay */}
      {isUploadOverlayVisible && (
        <div className="upload-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Upload Overlay Content */}
        </div>
      )}

      {/* Profile Overlay */}
      {isProfileOverlayVisible && (
        <div className="profile-overlay" style={{ position: 'absolute', top: '60px', right: '20px', background: '#444', padding: '10px', borderRadius: '12px', color: 'white', zIndex: 999, width:'270px', textAlign:'left',paddingLeft:'0px', paddingRight:'0px'}}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/your-profile" style={{ color: 'white', textDecoration: 'none', marginLeft:'30px' }}>Your Profile</Link>
            </li>
            <li>
              <Link to="/create-route" style={{ color: 'white', textDecoration: 'none' , marginLeft:'30px'}}>Create a Route</Link>
            </li>
          </ul>
          <hr style={{ border: '1px solid white', margin: '' }} />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/content-factory" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Content Factory</Link>
            </li>
            <li>
              <Link to="/bundles-purchases" style={{ color: 'white', textDecoration: 'none' ,marginLeft:'30px'}}>Bundles and Purchases</Link>
            </li>
          </ul>
          <hr style={{ border: '1px solid white', margin: '10px 0' }} />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/data-usage" style={{ color: 'white', textDecoration: 'none' ,marginLeft:'30px'}}>Data Usage</Link>
            </li>
            <li>
              <Link to="/appearance" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Appearance</Link>
            </li>
            <li>
              <Link to="/language" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Language</Link>
            </li>
            <li>
              <Link to="/location" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Location</Link>
            </li>
          </ul>
          <hr style={{ border: '1px solid white', margin: '10px 0' }} />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/settings" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Settings</Link>
            </li>
            <li>
              <Link to="/help" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Help</Link>
              </li>
            <li>
              <Link to="/feedback" style={{ color: 'white', textDecoration: 'none',marginLeft:'30px' }}>Feedback</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

