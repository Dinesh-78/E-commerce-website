import React from 'react';
import signupimg from '../../assets/signupimg.jpg';
import './Signup.css';

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-image'>
        <img src={signupimg} alt='Signup' />
      </div>

      <div className="signup-form">
        <h1>Create An Account</h1>
        <p>Enter your details below</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>

        <div className="social-login">
          <button className="google-btn">Sign Up with Google</button>
        </div>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
