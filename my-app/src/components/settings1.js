import React from 'react';

const Settings1 = () => {
  return (
    <section style={{backgroundColor:'black', display: 'flex', alignItems: 'flex-start'}}>
        <div style={{marginRight:'1px', padding:'10px', marginLeft:'30px'}}>
        <h2 style={{ color: 'white' }}>Settings</h2> 
        <div style={{ backgroundColor: '#222', padding: '20px', marginRight: '30px', flex: '1', maxWidth: '200px', textAlign: 'center', marginTop: '20px', borderRadius:'12px', color:'white',fontWeight:'bold' }}>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', paddingRight: '50px' }}>
            <li>Account</li><br></br><br></br>
            <li>Monetization</li><br></br><br></br>
            <li>Security</li><br></br><br></br>
            <li>Privacy</li><br></br><br></br>
            <li>Modification</li><br></br><br></br>
            <li>Display</li><br></br><br></br>
            <li>Resources</li><br></br><br></br>
            <li>Help Centre</li><br></br><br></br>
          </ul>
        </div>
        </div>
        <div style={{marginLeft:'1px', padding:'10px', marginRight:'30px'}}>
        <h2 style={{ color: 'white' , textAlign:'left'}}>Your Account</h2> 
        <div style={{ backgroundColor: '#222', padding: '20px', flex: '2', marginTop: '20px',color: 'white',borderRadius:'12px', textAlign:'left'}}>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', paddingRight: '50px' }}>
            <li><strong>Account Information</strong> <br></br>See your account information like your phone number and email address.</li><br></br>
            <li><strong>Change Your Password</strong> <br></br>Change your password at anytime</li><br></br>
            <li><strong>Deactivate</strong> <br></br>Find out how to deactivate your account</li><br></br>
          </ul>
        </div>
        </div>
    </section>
  );
};

export default Settings1;

