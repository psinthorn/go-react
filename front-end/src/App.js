import React from 'react'
import SideMenu from './components/SideMenu';

function App(){
  return (
    <>
      <div className='container'>
        <div className='row width-full'>
          <div className='col'>GoMies</div>
          <div className='col text-end  '>
            <div className='badge bg-success'>Login</div>
          </div>
        </div>
        <hr/>
      </div>
      
      <div className='container'> 
        <div className='row'>
          <div className='col md-2'>
            <SideMenu />
          </div>
          <div className='col md-10'>
            Main Content
          </div>
        </div>
      </div>
    </>
  )
};

export default App;