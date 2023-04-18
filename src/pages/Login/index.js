import { useEffect } from 'react'
import React from 'react'

import { useNavigate } from 'react-router-dom';
import {Input,Button, Form,message} from 'antd'
import { Link } from 'react-router-dom'

import Divider from '../../components/Divider'
import { passwordValidation } from '../../helper/validations';
import { emailValidation } from '../../helper/validations';
import { useDispatch,useSelector } from 'react-redux';
import { setLoading } from '../../redux/loadersSlice';
const {LoginUser}=require('../../apiCalls/user') 

function Login() {
  const {loading}=useSelector((state)=>state.loaders)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const onFinish=async(values)=>{
    try {
      dispatch(setLoading(true))
      const response=await LoginUser(values);
      if(response.success){
        dispatch(setLoading(false))
        console.log('RESPONSE :',response)
        localStorage.setItem('token',response.data)
         message.success(response.message)
        navigate('/')
      }else{
        message.error(response.message)
      }
    } catch (error) {
      dispatch(setLoading(false))
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
  <div className='flex flex-col items-center justify-center h-screen bg-primary'>
  <h1 className='text-white'>EMPLOYEE TRACKER</h1>
  <span className='my-3 text-white'>Helps to manage your stuff easily.</span>
  </div>
  <div flex flex-col></div>
  <div className='flex items-center justify-center'>
    <div className='w-[450px]' >
      <h1 className='text-gray-700'>Log in to your account</h1>
      <Divider/>
      <Form className="py-2" layout='vertical' onFinish={onFinish}>
        <Form.Item label='Email' name='email' rules={emailValidation}> 
           
          <Input/>
        </Form.Item>
        
        <Form.Item label='Password' name='password'  rules={passwordValidation}>
        <Input
        type='password'
        />
        </Form.Item>
        <Button type="primary" htmlType='submit' block loading={loading}>Login</Button>
        <div className='flex justify-center'>
          <span className='my-3'>Don't have an account? <Link to='/register'>Sign Up</Link></span>
      </div>

      </Form>
    </div>

  </div>
</div>
  )
}

export default Login
