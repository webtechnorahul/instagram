import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRoute';
import {Provider} from 'react-redux'
import { useAuth } from '../features/auth/hooks/useAuth';
import cookies from 'js-cookie'
    
// Restores the signed-in user's profile when the app starts with a session cookie.
const App = () => {
  const {getMe,user}=useAuth();
  const token=cookies.get("token");

  // Loads the current account from the backend when an authentication cookie exists.
  const getUser=async()=>{
    if(token){
      const response=await getMe();
    }
    
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App