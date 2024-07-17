import React, { useState } from 'react'

const LoginForm = () => {
  // useState
  // useEffect
  // props
  // handleSubmit function
  
  const [login, setLogin] = useState([]); 
  const [password, setPassword] = useState([]);

  return ( 
    <div className='text-center'>Log In
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="staticEmail" value="email@example.com" />
          </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
      </div>
      <div class="mb-3 row">
        {/* <div type="button" className='btn btn-success'>Log In</div> */}
        <button type="button" class="btn btn-success">Success</button>
      </div>
    </div>
  )
}

export default LoginForm