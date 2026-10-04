import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:null,
        loading:false,
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false; // Turn off loading when user data arrives
            state.error = null;    // Clear out any old errors
        },
        setError: (state, action) => {
            state.error = action.payload; // Store the error string or object
            state.loading = false;        // Turn off loading because an error occurred
        },
        setLoading: (state, action) => {
            state.loading = action.payload; // Typically sets to true when starting an API call
        }
    }
})

export const {setError,setLoading,setUser}=authSlice.actions;
export default authSlice.reducer;
