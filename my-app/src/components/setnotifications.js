import React from 'react';

const SetNotifications = () => {
  return (
    <section style={{ backgroundColor: 'black', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ marginRight: '1px', padding: '10px', marginLeft: '30px' }}>
        <h2 style={{ color: 'white' }}>Settings</h2>
        <div style={{ backgroundColor: '#222', padding: '20px', marginRight: '30px', flex: '1', maxWidth: '200px', textAlign: 'center', marginTop: '20px', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', paddingRight: '50px' }}>
            <li>Account</li><br /><br />
            <li>Monetization</li><br /><br />
            <li>Security</li><br /><br />
            <li>Privacy</li><br /><br />
            <li>Modification</li><br /><br />
            <li>Display</li><br /><br />
            <li>Resources</li><br /><br />
            <li>Help Centre</li><br /><br />
          </ul>
        </div>
      </div>
      <div style={{ marginLeft: '1px', padding: '10px', marginRight: '30px' }}>
        <h2 style={{ color: 'white', textAlign: 'left' }}>Notifications</h2>
        <div style={{ backgroundColor: '#222', padding: '20px', flex: '2', marginTop: '20px', color: 'white', borderRadius: '12px', textAlign: 'left' }}>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', paddingRight: '50px' }}>
            <li><strong>Filters</strong> <br />Choose the notifications you’d like to see.</li><br />
            <li><strong>Preferences</strong> <br />Select your preferences by type of notificatons.</li><br />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SetNotifications;
