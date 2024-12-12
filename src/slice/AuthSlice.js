import {createSlice} from "@reduxjs/toolkit"

const intialState = {
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")):null,
}

const AuthSlice = createSlice({
    name:"auth",
    initialState:intialState,
    reducers:{
        setToken(state,value){
            state.value = value.payload
        },
    },
})

export const {setToken} = AuthSlice.actions;
export default AuthSlice.reducer