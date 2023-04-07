import React from 'react'

import {Input,Button, Form} from 'antd'
import { Link } from 'react-router-dom'

import Divider from '../../components/Divider'

function Login() {

  const onFinish=(values)=>{
    console.log("success:",values)
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
          <span>Don't have an account? <Link to='/register'>Register</Link></span>
        </div>

      </Form>
    </div>

  </div>
</div>
  )
}

export default Login
