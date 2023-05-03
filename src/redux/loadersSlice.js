import {createSlice} from '@reduxjs/toolkit';

const loadersSlice=createSlice({
    name:'loaders',
    initialState:{
        loading:false,
        buttonLoading:false,
    },
    reducers:{
        setLoading(state,action){
            state.loading=action.payload;
        },
        setButtonLoading(state,action){
            state.buttonLoading=action.payload;
        },
    }
})

export const {setLoading,setButtonLoading}=loadersSlice.actions;

export default loadersSlice.reducer
