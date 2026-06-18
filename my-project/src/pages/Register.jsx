import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {

 const navigate = useNavigate();

 const [form,setForm] = useState({
  name:"",
  email:"",
  phone:"",
  address:"",
  password:"",
  confirmPassword:""
 });

 const [msg,setMsg] = useState("");

 const handleChange = (e) => {
  setForm({...form,[e.target.name]:e.target.value});
 };

 const handleRegister = () => {

  const existingUser = localStorage.getItem("user_email");

  if(existingUser){
   setMsg("User already registered. Please login.");
   return;
  }

  if(form.password !== form.confirmPassword){
   setMsg("Passwords do not match");
   return;
  }

  localStorage.setItem("user_data",JSON.stringify(form));

  setMsg("Registration successful ✅");

  setTimeout(()=>{
   navigate("/login");
  },1500);

 };

 return(

  <div className="register-container">

   <div className="register-card">

    <h2>Create Account</h2>

    <input
     type="text"
     name="name"
     placeholder="Full Name"
     value={form.name}
     onChange={handleChange}
    />

    <input
     type="email"
     name="email"
     placeholder="Email Address"
     value={form.email}
     onChange={handleChange}
    />

    <input
     type="text"
     name="phone"
     placeholder="Phone Number"
     value={form.phone}
     onChange={handleChange}
    />

    <input
     type="text"
     name="address"
     placeholder="Address"
     value={form.address}
     onChange={handleChange}
    />

    <input
     type="password"
     name="password"
     placeholder="Password"
     value={form.password}
     onChange={handleChange}
    />

    <input
     type="password"
     name="confirmPassword"
     placeholder="Confirm Password"
     value={form.confirmPassword}
     onChange={handleChange}
    />

    <button onClick={handleRegister}>
     Register
    </button>

    {msg && <p className="msg">{msg}</p>}

    <p className="login-text">
     Already have account?
     <span onClick={()=>navigate("/login")}>
      Login
     </span>
    </p>

   </div>

  </div>

 )

}

export default Register;