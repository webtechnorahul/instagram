import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import cookies from 'js-cookie'
import Footer from '../../../app/shared/components/Footer'
import Navbar from '../../../app/shared/components/Navbar'
const Protected = () => {
    const {user}=useAuth();
    const token=cookies.get("token");
    const navigate=useNavigate()
    useEffect(()=>{
        if(!token||!user){
        navigate('/register')
    }
    },[]);
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
    
  )
}

export default Protected