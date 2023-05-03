import {useState,useEffect } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { message } from 'antd'

import {GetLoggedInUser} from '../apiCalls/user';
import { setUser } from '../redux/userSlice';
import { setLoading } from '../redux/loadersSlice';
import { useDispatch,useSelector } from 'react-redux';
function ProtectedPage({children}) {
    const {user}=useSelector((state)=>state.users);
    const dispatch=useDispatch()
    const navigate=useNavigate();
    
    const getUser=async()=>{
        try {
           
            dispatch(setLoading(true))
            const response=await GetLoggedInUser();
            if(response.success){
                dispatch(setUser(response.data))
                dispatch(setLoading(false))
            }else{
                throw new Error(response.message)
            }
        } catch (error) {
            dispatch(setLoading(false))
            message.error(error.message);
            localStorage.removeItem('token');
            navigate('/login')
        }
    }


    useEffect(() => {
        if(localStorage.getItem('token')){
            getUser()
        }else{
            navigate('/login')
        }
    }, [])

  return (
   user && <div>
    <div className="flex items-center justify-between p-5 text-white bg-green-900">
        <h1 className="text-3xl font-black cursor-pointer" onClick={()=>{
            navigate('/')
        }}>Employee Tracker</h1>
        <div className="flex items-center px-4 py-4 bg-white rounded">
            <div>
                <span className="mr-5 underline cursor-pointer text-primary" onClick={()=>{navigate('/Profile')}}>{user?.firstName}</span>
                <i class="ri-logout-circle-r-line"></i>
                <i className="text-white bg-gray-500 rounded-full ri-notification-2-line"></i>
                <i className="p-2 ml-10 rounded cursor-pointer ri-logout-circle-r-line text-primary" onClick={()=>{
                    localStorage.removeItem('token');
                    navigate('/login')
                }}>Logout</i>
            </div>
        </div>
    </div>
      <div className='px-5 py-5'>{children}</div>
    </div>
  )
}

export default ProtectedPage
