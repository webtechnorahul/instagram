import {setError,setLoading,setUser} from '../state/auth.slice';
import { userGetMeApi,userLoginApi,userRegisterApi } from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth=()=>{
    const dispatch=useDispatch();
    const {user,loading,error}=useSelector((state)=>state.auth);
    
    // user login hook function
    const Login=async({email,password})=>{
        try{
            dispatch(setError(null));
            dispatch(setLoading(true));
            const response=await userLoginApi({email,password})
            
            dispatch(setUser(response.user));
            
            return response.user;
        }
        catch(err){
            dispatch(setError(err.response.data.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    // user register hook function
    const Register=async({username,mobile,email,password})=>{
        try{
            dispatch(setError(null));
            dispatch(setLoading(true));
            const response=await userRegisterApi({username,mobile,email,password})
            
            dispatch(setUser(response.user));
        }
        catch(err){
            dispatch(setError(err.response.data.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    // user getme hook function
    const getMe=async()=>{
        try{
            dispatch(setError(null));
            dispatch(setLoading(true));
            const response=await userGetMeApi();
            
            dispatch(setUser(response.user));
            
        }
        catch(err){
            dispatch(setError(err.response.data.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    return {
        user,loading,error,Login,Register,getMe,setError,setLoading,setUser
    }
}