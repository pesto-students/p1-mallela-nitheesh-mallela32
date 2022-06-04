import React from 'react'
import '../styles/url-shortner.css'
const UrlDisplay = () => {
  return (
    <>
     <div className='d-flex justify-content-between mt-4 mb-4'>
            <input className='url-input' type='text'  placeholder="Your shortend URL"></input>
            <button className='btn btn-primary rounded-pill'>Copy</button>
        </div>
    </>
  )
}

export default UrlDisplay