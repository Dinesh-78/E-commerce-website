
import React from 'react';
import { useNavigate } from 'react-router-dom';



const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{fontSize:90}}>404   Page Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button style={{backgroundColor:"#DB4444",color:"#ffff",fontFamily:"outfit",fontWeight:"500",padding:17}} onClick={() => navigate('/')}>BACK TO HOME PAGE</button>
    </div>
  );
};

export default NotFound;
