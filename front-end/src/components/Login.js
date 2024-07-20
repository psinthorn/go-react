import React, {useState, useEffect, useContext} from 'react'
import LoginForm from './LoginForm'
import { useOutletContext } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();

  const handleSubmit = (event) => {
      event.preventDefault();
      return '';
  };

  return (
    <div className='container'>
      <LoginForm/>
    </div>
  )
}

export default Login