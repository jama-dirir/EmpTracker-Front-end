import {createSlice} from '@reduxjs/toolkit';

const usersSlice=createSlice({
    name:'users',
    initialState:{
        user:null,
        users:[]
    },
    reducers:{
        setUser(state,action){
            state.user=action.payload;
        },
        setUsers(state,action){
            state.users=action.payload;
        }
    }
})

export const {setUser,setUsers}=usersSlice.actions
export default usersSlice.reducer;