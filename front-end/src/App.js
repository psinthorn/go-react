import React, { useState } from 'react'
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';


function App(){
  const [logIn, setLogin] = useState(true);
  return (
    <>
      <div className='container'>
        <div className='row width-full'>
          <div className='col'>GoMies</div>
          <div className='col text-end  '>
            {logIn ? 
              <div className='badge bg-danger'>Log Out </div>             
            : 
              <div className='badge bg-success'>Log In</div>
            }
          </div>
        </div>
        <hr/>
      </div>
      
      <div className='container'> 
        <div className='row'>
          <div className='col-md-2'>
            <SideMenu />
          </div>
          <div className='col-md-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
};

export default App;