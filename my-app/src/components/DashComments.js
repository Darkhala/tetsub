import React from 'react';

const DashComments = () => {
  return (
    <section style={{ backgroundColor: '#222', padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', color: 'white' }}>
      <div style={{ flex: '1', marginRight: '20px', marginLeft: '10px', maxWidth: '200px', textAlign: 'center', marginTop: '70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <img src="/profilelogo.jpg" alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Your Account</h3>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', paddingRight: '50px' }}>
            <li>Content</li>
            <li>Analytics</li>
            <li>Comments</li>
            <li>Revenue</li>
          </ul>
        </div>
        <hr style={{ width: '100%', borderTop: '1px solid white' }} />
        <div style={{ marginTop: '20px' }}>
          <ul style={{ textDecoration: 'none', listStyleType: 'none', textAlign: 'center', paddingRight: '50px' }}>
            <li>Settings</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: '2' }}>
        <h2 style={{ float: 'left' }}>Creater Comments</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', border: '1px solid white' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid white' }}> </th>
              <th style={{ border: '1px solid white' }}>Video</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid white' }}>
              <div style={{ float: 'left', paddingLeft: '20px' }}>
                  <h4>user1 </h4>
                  <p>comment </p>
                </div>
              </td>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image1" style={{ width: '200px', height: '70px', paddingTop: '10px', paddingBottom: '10px' , float:'right'}} />
              </td>
            </tr>
            <tr>
            <td style={{ border: '1px solid white' }}>
              <div style={{ float: 'left', paddingLeft: '20px' }}>
                  <h4>user2 </h4>
                  <p>comment </p>
                </div>
              </td>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image1" style={{ width: '200px', height: '70px', paddingTop: '10px', paddingBottom: '10px' , float:'right'}} />
              </td>
            </tr>
            <tr>
            <td style={{ border: '1px solid white' }}>
              <div style={{ float: 'left', paddingLeft: '20px' }}>
                  <h4>User3 </h4>
                  <p>comment </p>
                </div>
              </td>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image1" style={{ width: '200px', height: '70px', paddingTop: '10px', paddingBottom: '10px',  float:'right' }} />
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashComments;
