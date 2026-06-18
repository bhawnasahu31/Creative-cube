import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [loginValue,setLoginValue] = useState("");
  const [message,setMessage] = useState("");

  const handleSendOTP = () => {

    const userData = JSON.parse(localStorage.getItem("user_data"));

    if(!userData){
      setMessage("You are not registered. Please register first.");
      return;
    }

    if(loginValue !== userData.phone && loginValue !== userData.email){
      setMessage("Phone or Email not registered.");
      return;
    }

    localStorage.setItem("otp","1234");

    navigate("/otp");

  };

  return(

    <div className="login-page">

      <div className="login-container">

        <div className="login-card">

          <h2 className="login-title">Login to Your Account</h2>

          <label>Phone Number or Email</label>

          <input
          type="text"
          placeholder="Enter phone or email"
          value={loginValue}
          onChange={(e)=>setLoginValue(e.target.value)}
          />

          <button onClick={handleSendOTP}>
            Send OTP
          </button>

          {message && <p className="msg">{message}</p>}

          <p className="register-text">
            Don't have an account?
            <span onClick={()=>navigate("/register")}>
              Create Account
            </span>
          </p>

        </div>

      </div>

    </div>

  )

}

export default Login;