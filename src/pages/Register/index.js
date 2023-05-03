import { useEffect } from 'react'
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { genFieldsValidation } from '../../helper/validations';
import { emailValidation } from '../../helper/validations';
import { passwordValidation } from '../../helper/validations';

import {Input,Button, Form, message} from 'antd'
import { Link } from 'react-router-dom'
import Divider from '../../components/Divider'
import { setButtonLoading } from '../../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
const {RegisterUser}=require('../../apiCalls/user')
function Register() {
  const dispatch=useDispatch() 
  const {buttonLoading}=useSelector((state)=>state.loaders)
  const navigate=useNavigate();
  const onFinish=async(values)=>{
    try {
      dispatch(setButtonLoading(true));
      const response=await RegisterUser(values);
      console.log("RES :",response)
      if(response.success){
        // dispatch(setButtonLoading(false));
        localStorage.setItem('token',response.data)
        message.success(response.message)
        navigate('/login')
      }else{
        throw new Error(response.message)
      }
    } catch (error) {
      dispatch(setButtonLoading(false));
      message.error(error.message)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
        navigate('/')
    }
}, [])


  return (
    <div className="grid grid-cols-4">
  <div className='flex justify-center my-16 '>
    <div className='w-[450px]' >
      <h1 className='inline-block text-gray-700'>Create Your Account</h1>
      <Divider/>
      <Form className="py-5" layout='vertical' onFinish={onFinish}>
      <Form.Item label='FirstName' name='firstName' rules={genFieldsValidation}>
          <Input/>
        </Form.Item>

        <Form.Item label='LastName' name='lastName'  rules={genFieldsValidation}>
          <Input/>
        </Form.Item>

        <Form.Item label='Email' name='email' rules={emailValidation} >
          <Input/>
        </Form.Item>
        
        <Form.Item label='Password' name='password' rules={passwordValidation}>
        <Input
        type='password'
        />
        </Form.Item>
        <Button type="primary" htmlType='submit' block  loading={buttonLoading}>Register</Button>
        <div className='flex justify-center my-3'>
          <span>Have already an account? <Link to='/login'>Sign In</Link></span>
        </div>

      </Form>
    </div>
  </div>
  
  <div className='flex flex-col bg-primary'></div>
  <div className='flex flex-col items-center justify-center h-screen bg-primary'>
  <h1 className='text-white'>EMPLOYEE TRACKER</h1>
  <span className='text-white'>Helps to manage your stuff easily.</span>
  </div>
  <div className='flex flex-col bg-primary'></div>
</div>
  )
}

export default Register
