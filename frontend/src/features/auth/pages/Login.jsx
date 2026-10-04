import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Auth.css";
import { useAuth } from "../hooks/useAuth";
import cookies from 'js-cookie'

// Renders the login form and redirects to the dashboard after successful sign-in.
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const token=cookies.get('token');
  // state of Email and Password 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  state and login function destructure from useAuth
  const { user, loading, Login, error } = useAuth();

  
  useEffect(()=>{
    if(user||token){
    navigate('/dashboard');
    }
  },[])

  // Sends the entered credentials to the authentication hook.
  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await Login({ email, password });
      
      if (response && !response.error) { 
        
            navigate('/dashboard');
        } else {
            console.log("Login fail hua, isliye navigate nahi kiya.");
        }
  };//end handle Submit
   

  if(loading){
    return <h1>loading</h1>
  }

  return (
    <div className="instagram-auth">
      <div className="login-container">
        <div className="login-box">
          <h1 className="instagram-logo">Instagram</h1>
          {/* Redux store se milne wala error show karne ke liye */}
          {error && <div className="error-alert">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* 3. value aur onChange handler lagayein */}
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-input">
              {/* 4. value aur onChange handler lagayein */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* 5. Loading ke dauran button ko disable aur text change karein */}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>
                <p className="sign-in">
                    Don't have an account?
                    <Link to="/register"> Sign up</Link>
                </p>
          </form>

          <div className="or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="facebook-login">Log in with Facebook</button>

          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
