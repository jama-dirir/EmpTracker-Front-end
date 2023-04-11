import React from 'react'

import {Input,Button, Form, message} from 'antd'
import { Link } from 'react-router-dom'
import Divider from '../../components/Divider'
const {RegisterUser}=require('../../apiCalls/user') 

function Register() {
  const onFinish=async(values)=>{
    try {
      const response=await RegisterUser(values);
      console.log("RES :",response)
      if(response.success){
     
        message.success(response.message)
      }else{
        throw new Error(response.message)
      }
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <div className="grid grid-cols-2">
  <div className='flex items-center justify-center'>

    <div className='w-[450px]' >
      <h1 className='text-gray-700'>LET'S CREATE ACCOUNT</h1>
      <Divider/>
      <Form layout='vertical' onFinish={onFinish}>
      <Form.Item label='FirstName' name='firstName' >
          <Input/>
        </Form.Item>

        <Form.Item label='LastName' name='lastName' >
          <Input/>
        </Form.Item>

        <Form.Item label='Email' name='email' >
          <Input/>
        </Form.Item>
        
        <Form.Item label='Password' name='password'>
        <Input
        type='password'
        />
        </Form.Item>
        <Button type="primary" htmlType='submit' block>Register</Button>
        <div className='flex justify-center'>
          <span>Have already an account? <Link to='/login'>Sign In</Link></span>
        </div>

      </Form>
    </div>

  </div>
  
  <div className='flex flex-col items-center justify-center h-screen bg-primary'>
  <h1 className='text-white mt-15'>EMPLOYEE TRACKER</h1>
  <span className='text-white'>Helps to manage your stuff easily.</span>
  </div>
 
</div>
  )
}

export default Register
