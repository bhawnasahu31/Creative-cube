import React,{useState,useContext} from "react";
import {AuthContext} from "../context1/AuthContext";
import {useNavigate} from "react-router-dom";

const OTP = () => {

 const [otp,setOtp] = useState("");

 const {login} = useContext(AuthContext);

 const navigate = useNavigate();

 const verifyOTP = () => {

  const saved = localStorage.getItem("otp");

  if(otp === saved){

   const user = {name:"CreativeCube User"};

   login(user);

   navigate("/profile");

  }

 };

 return(

  <div className="auth-box">

   <h2>OTP Verification</h2>

   <input
   type="text"
   placeholder="Enter OTP"
   value={otp}
   onChange={(e)=>setOtp(e.target.value)}
   />

   <button onClick={verifyOTP}>
   Verify
   </button>

  </div>

 )

}

export default OTP;