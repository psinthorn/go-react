import React, { useState } from 'react'
import Input from './form/Input';
import { useOutletContext } from 'react-router-dom';

const LoginForm = () => {
  // useState
  // useEffect
  // props
  // handleSubmit function
  
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();

  const { SetJwtToken, jwtToken } = useOutletContext();

 const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit " + `${password} `+ email);
    if(email === "admin@admin.com") {
      SetJwtToken(true);
    }
    console.log("Set Token to -> " + jwtToken);
};

  return ( 
    <div className=''>
      <h2>Log In</h2>
    <hr/>
      <div className="mb-3">
          <form onSubmit={handleSubmit} >
            <Input 
                key={12}
                type="email" 
                id="staticEmail" 
                title="Email"
                name="email"
                className="form-control" 
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="Login email"
            />
            <Input 
                key={11}
                type="password" 
                id="staticPassword" 
                title="Password"
                name="password"
                className="form-control" 
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="Your Password"
            />   
             <input type="submit" className='btn btn-primary' value="Log in"/>
          </form>
      </div>
     
    </div>
  )
}

export default LoginForm