import React from 'react';

const SignupSection = () => {
  return (
    <section style={{ backgroundColor: '#222', padding: '20px', display: 'flex', alignItems: 'center' ,color:'white'}}>
      <div style={{ flex: '1' }}>
        <h2 style={{ fontWeight: 'bold' , fontSize:'40px'}}>HOME OF AFRICAN <br></br>STORIES</h2>
        <p>Already have <br></br> an account? <a href="/login" style={{color:'#007FFF'}}><br></br>Login</a></p>
      </div>
      <div style={{ flex: '1', padding: '20px' }}>
        <form style={{ borderEndEndRadius: '10px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px', borderBottomLeftRadius:'10px', backgroundColor:'#444', height:'470px', width :'450px', color:'white'}}>
        <br /><br /><br /><label style={{fontWeight:'bold'}}>Sign Up</label><br /> <br /><br /><br />
          <div style={{ marginBottom: '10px' }}>
            <label style={{textAlign:'left'}}>Email:</label><br />
            <input style={{backgroundColor:'black', color:'white', width:'300px'}} type="email" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Phone number:</label><br />
            <input style={{backgroundColor:'black', color:'white', width:'300px'}} type="tel" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label><br />
            <input style={{backgroundColor:'black', color:'white', width:'300px'}} type="password" />
          </div>
          <div style={{ marginBottom: '10px'}}>
            <label>Repeat Password:</label><br />
            <input style={{backgroundColor:'black', color:'white', width:'300px'}} type="password" />
          </div>
          <button style={{ backgroundColor: '#007FFF', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
