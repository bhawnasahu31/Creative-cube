import React,{useContext,useState} from "react";
import {AuthContext} from "../context1/AuthContext";
import { Navigate } from "react-router-dom";
const Profile = () => {

 const {user,logout} = useContext(AuthContext);

 const [name,setName] = useState(user?.name || "");

 const saveProfile = () => {

  const updated = {name};

  localStorage.setItem("cc_user",JSON.stringify(updated));

 };

 if(!user){

  return <Navigate to="/login" />

 }

 return(

  <div className="profile-box">

   <h2>My Profile</h2>

   <input
   value={name}
   onChange={(e)=>setName(e.target.value)}
   />

   <button onClick={saveProfile}>
   Save Profile
   </button>

   <button onClick={logout}>
   Logout
   </button>

  </div>

 )

}

export default Profile;