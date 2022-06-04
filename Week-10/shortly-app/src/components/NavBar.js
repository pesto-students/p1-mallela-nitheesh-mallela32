import React from 'react'
import "../styles/nav-bar.css"

const NavBar = () => {
  return (
      <>
      <div className='row'>
        <div className='col-sm-4'>
            <h1 className='text-center mb-0 heading-main'>Shortly</h1>
        </div>
        <div className='col-sm-4 d-flex justify-content-around align-items-center'>
            <a href='#home'>Features</a>
            <a href='#home'>Pricing</a>
            <a href='#home'>Resources</a>
        </div>
        <div className='col-sm-4 d-flex justify-content-evenly align-items-center'>
            <a href='#Home' className='pl-3'>Sign In</a>
            <a href='#Home'>Sign Up</a>
        </div>
    </div>
    
      </>
    
    
  )
}

export default NavBar