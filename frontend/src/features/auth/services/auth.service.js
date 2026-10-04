import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

// Sends registration details to the backend and returns its response data.
export async function userRegisterApi({username,mobile,email,password}){
    const response=await api.post("/register",{username,mobile,email,password});
    return response.data;
};

// Sends login credentials to the backend and returns its response data.
export async function userLoginApi({email,password}){
    
        const response=await api.post("/login",{email,password});
        return response.data;
}

// Requests the profile associated with the current authentication cookie.
export async function userGetMeApi(){
    const response=await api.get("/get-me");
    
    return response.data;
}
