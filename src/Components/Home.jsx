import React, { use } from 'react'
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // Using useNavigate hook to navigate programmatically
    const navigate = useNavigate();
    // This function will handle logout
    const Logout = ()=>{
        googleLogout();
        navigate('/');
    }
  return (
    <div>
      This is the home page 
      <button className='cursor-pointer' onClick={Logout} >LogOut</button>
    </div>
  )
}

export default Home
