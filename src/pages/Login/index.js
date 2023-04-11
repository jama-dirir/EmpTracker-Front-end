import React from 'react'

import {Input,Button, Form,message} from 'antd'
import { Link } from 'react-router-dom'

import Divider from '../../components/Divider'
const {LoginUser}=require('../../apiCalls/user') 

function Login() {

  const onFinish=async(values)=>{
    try {
      const response=await LoginUser(values);
      if(response.success){
        console.log('RESPONSE :',response)
        localStorage.setItem('token',response.data)
        console.log('Token :',response.data)
         message.success(response.message)
         window.location.href = "/";
      }else{
        message.error(response.message)
      }
    } catch (error) {
      message.error(error.message)
    }
  }
  return (
    <div className="grid grid-cols-2">
  <div className='flex flex-col items-center justify-center h-screen bg-primary'>
  <h1 className='text-white mt-15'>EMPLOYEE TRACKER</h1>
  <span className='text-white'>Helps to manage your stuff easily.</span>
  </div>
 
  <div className='flex items-center justify-center'>

    <div className='w-[450px]' >
      <h1 className='text-gray-700'>LOGIN YOUR ACCOUNT</h1>
      <Divider/>
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label='Email' name='email' >
          <Input/>
        </Form.Item>
        
        <Form.Item label='Password' name='password'>
        <Input
        type='password'
        />
        </Form.Item>
        <Button type="primary" htmlType='submit' block>Login</Button>
        <div className='flex justify-center'>
          <span>Don't have an account? <Link to='/register'>Sign Up</Link></span>
        </div>

      </Form>
    </div>

  </div>
</div>
  )
}

export default Login
