import React, { useEffect, useState } from 'react'
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';


function App(){
  const [jwtToken, SetJwtToken] = useState(false);
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
            <SideMenu jwtToken={jwtToken} />
          </div>
          <div className='col-md-10'>
            <Outlet context={{
               jwtToken, SetJwtToken
            }} 
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default App;