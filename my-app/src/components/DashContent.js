import React from 'react';

const DashContent = () => {
  return (
    <section style={{ backgroundColor: '#222', padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', color: 'white' }}>
      <div style={{ flex: '1', marginRight: '20px', marginLeft:'10px', maxWidth:'200px', textAlign:'center',marginTop:'70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <img src="/profilelogo.jpg" alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Your Account</h3>
          <ul style={{textDecoration:'none', listStyleType:'none', paddingRight:'50px'}}>
            <li>Content</li>
            <li>Analytics</li>
            <li>Comments</li>
            <li>Revenue</li>
          </ul>
        </div>
        <hr style={{ width: '100%', borderTop: '1px solid white' }} />
        <div style={{ marginTop: '20px' }}>
          <ul style={{textDecoration:'none', listStyleType:'none', textAlign:'center', paddingRight:'50px'}}>
            <li>Settings</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: '2' }}>
        <h2 style={{float:'left'}}>Created Content</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', border: '1px solid white' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid white' }}> </th>
              <th style={{ border: '1px solid white' }}>Visibility</th>
              <th style={{ border: '1px solid white' }}>Date</th>
              <th style={{ border: '1px solid white' }}>Views</th>
              <th style={{ border: '1px solid white' }}>Comments</th>
              <th style={{ border: '1px solid white' }}>Earnings</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image1" style={{ width: '200px', height: '70px', paddingTop: '10px' ,paddingBottom:'10px'}} />
                <div style={{float:'right', paddingRight:'20px'}}>
                  <h4>Title </h4>
                  <p>Description </p>
                </div>
              </td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image2" style={{ width: '200px', height: '70px', paddingTop: '10px' ,paddingBottom:'10px'}} />
                <div style={{float:'right', paddingRight:'20px'}}>
                  <h4>Title 2</h4>
                  <p>Description 2</p>
                </div>
              </td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid white' }}>
                <img src="/video2_thumbnail.jpg" alt="Content Image3" style={{ width: '200px', height: '70px', paddingTop: '10px' ,paddingBottom:'10px'}} />
                <div style={{float:'right', paddingRight:'20px'}}>
                  <h4>Title 3</h4>
                  <p>Description 3</p>
                </div>
              </td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashContent;
