import React, { useState } from 'react'
import Input from './form/Input';
import { useNavigate, useOutletContext } from 'react-router-dom';

const LoginForm = () => {
  // useState
  // useEffect
  // props
  // handleSubmit function
  
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();

  const { setJwtToken, jwtToken, setAlertLoginMessage, setAlertClassName } = useOutletContext();

  const navigate = useNavigate();

 const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit " + `${password} `+ email);
    if(email === "adminx@admin.com") {
      setJwtToken(true);
      setAlertLoginMessage("Loged in success");
      setAlertClassName("alert-success");

      setTimeout(() => {
        setAlertClassName("d-none");
        navigate("/");
      }, 3000);

    } else {
      setAlertLoginMessage("Invalid Credentials");
      setAlertClassName("alert-danger");
      setTimeout(() => {
        setAlertClassName("d-none");
      },3000);
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