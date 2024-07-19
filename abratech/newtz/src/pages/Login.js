// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    // On successful login, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSignIn}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          <div className="forgot">
            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
          </div>
        </div>
        <button className="sign" type="submit">Sign in</button>
      </form>
     
      {/* <p className="signup">Don't have an account?
        <a rel="noopener noreferrer" href="#" className="">Sign up</a>
      </p> */}
    </div>
  );
};

export default Login;
