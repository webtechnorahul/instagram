import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export async function userRegisterApi({username,mobile,email,password}){
    const response=await api.post("/register",{username,mobile,email,password});
    return response.data;
};

export async function userLoginApi({email,password}){
    
        const response=await api.post("/login",{email,password});
        return response.data;
}
export async function userGetMeApi(){
    const response=await api.get("/get-me");
    
    return response.data;
}
