import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Navbar = ({ jwtToken }) => {
    //const [jwtToken, SetJwtToken] = useState();
   
    //const { jwtToken } = useOutletContext();
    console.log("jwtToken on Navbar ", jwtToken);
  return (
    <>
        {jwtToken !== false ? 
        <div className='badge bg-danger'>Log Out </div>             
        : 
        <div className='badge bg-success'>Log In</div>
      }
    </>
    
  )
}

export default Navbar