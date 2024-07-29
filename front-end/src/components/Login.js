import React, {useState, useEffect, useContext} from 'react'
import LoginForm from './LoginForm'
import { useOutletContext } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <LoginForm />
    </div>
  )
}

export default Login;