import {createSlice} from '@reduxjs/toolkit';

const loadersSlice=createSlice({
    name:'loaders',
    initialState:{
        loading:false,
        btnLoading:false,
    },
    reducers:{
        setLoading(state,action){
            state.loading=action.payload;
        },
        setBtnLoading(state,action){
            state.btnLoading=action.payload;
        },
    }
})

export const {setLoading,setBtnLoading}=loadersSlice.actions;

export default loadersSlice.reducer
