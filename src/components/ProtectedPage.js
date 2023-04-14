import {useState,useEffect } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { message } from 'antd'

import {GetLoggedInUser} from '../apiCalls/user';

function ProtectedPage({children}) {
    const [user, setUser] = useState(null)
    const navigate=useNavigate();
    
    const getUser=async()=>{
        try {
            const response=await GetLoggedInUser();
            if(response.success){
                setUser(response.data)
            }else{
                throw new Error(response.message)
            }
        } catch (error) {
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
    <div>
      <h1>Protected Page</h1>
      <h1>Welcome {user?.firstName}</h1>
      {children}
    </div>
  )
}

export default ProtectedPage
