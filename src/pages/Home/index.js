import React from 'react'
import { useSelector } from 'react-redux'


function  Home() {
const {user}=useSelector((state)=>state.users)
  return (
    <div>
     {user?.firstName}, Welcome to employee tracker app
    </div>
  )
}

export default Home
