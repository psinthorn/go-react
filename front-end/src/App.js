import React, { useEffect, useState } from 'react'
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import LoginAlert from './components/errors/LoginAlert';


function App(){
  const [jwtToken, setJwtToken] = useState(false);
  const [alertLoginMessage, setAlertLoginMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("");
  // const [logIn, SetLogin] = useState(false);

  useEffect(() => (
    console.log("fire useEffect on index"),
    console.log(jwtToken)
  ), []);
  return (
    <>
      <div className='container'>
        <div className='row width-full'>
          <div className='col'>GoMies</div>
          <div className='col text-end  '>
            <Navbar jwtToken={jwtToken} />
          </div>
        </div>
        <hr/>
      </div>
      
      <div className='container'> 
        <div className='row'>
          <div className='col-md-2'>
            <SideMenu jwtToken={jwtToken} setJwtToken={setJwtToken} />
          </div>
          <div className='col-md-10'>

            <LoginAlert alertLoginMessage={alertLoginMessage} alertClassName={alertClassName}/>

            <Outlet context={{
               jwtToken, setJwtToken,
               setAlertLoginMessage, 
               setAlertClassName,

            }} 
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default App;