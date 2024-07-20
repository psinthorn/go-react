import React, { useState } from 'react'
import Input from './form/Input';

const LoginForm = () => {
  // useState
  // useEffect
  // props
  // handleSubmit function
  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState([]);

  const handleSubmit = () => {
    return true
  }

  return ( 
    <div className=''>
      <h2>Log In</h2>
    <hr/>
      <div class="mb-3">
        {/* <label for="staticEmail" class="col-sm-2 col-form-label">Email</label> */}
            <form onSubmit={handleSubmit}>
              <Input 
                key={1}
                type="email" 
                id="staticEmail" 
                title="Email"
                name="email-address"
                className="form-control" 
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="Login email"
              />
            </form>
      </div>
      <div class="mb-3">
        {/* <label for="inputPassword" class="col-sm-2 col-form-label">Password</label> */}
            <Input 
              key={1}
              type="password" 
              id="staticPassword" 
              title="Pawword"
              name="password"
              className="form-control" 
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="Your Password"
            />   
      </div>
      <div class="mb-3">
        <div type="button" className='btn btn-primary'>Log In</div>
        {/* <button type="button" class="btn btn-success">Login</button> */}
      </div>
    </div>
  )
}

export default LoginForm