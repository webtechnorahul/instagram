import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Auth.css";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import cookies from 'js-cookie'
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const token=cookies.get('token');
  const {Register,error,loading,user}=useAuth();
  // State to manage all individual input fields
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
  });

  useEffect(()=>{
    if(user||token){
    navigate('/dashboard');
    }
  },[])

  // Handler to update state dynamically when a user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await Register({
        username:formData.username,
        mobile:formData.mobileNumber,
        email:formData.email,
        password:formData.password,
    })
    navigate("/dashboard");
    
  };
  if(loading){
    return <h1>loading</h1>
  }

  return (
    <div className="instagram-auth">
      <div className="register-container">
        <div className="login-box register-box">
          <h1 className="instagram-logo">Instagram</h1>

          <h2>
            Sign up to see photos and videos from your friends.
          </h2>

          <button className="facebook-login register-facebook" type="button">
            Log in with Facebook
          </button>

          <div className="or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <form onSubmit={handleSubmit}>
            <p>{error}</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              minLength={10}
              maxLength={30}
              value={formData.username}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email (example@gmail.com)"
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile number"
              minLength={10}
              maxLength={10}
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />

            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                maxLength={25}
                minLength={8}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="terms">
              By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
            </p>

            <button type="submit" className="login-btn">
              Sign up
            </button>
            <p className="sign-in">
            Have an account?
            <Link to="/login"> Log in</Link>
          </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
