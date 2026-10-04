import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRoute';
import {Provider} from 'react-redux'
import { useAuth } from '../features/auth/hooks/useAuth';
import cookies from 'js-cookie'
    
const App = () => {
  const {getMe,user}=useAuth();
  const token=cookies.get("token");
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