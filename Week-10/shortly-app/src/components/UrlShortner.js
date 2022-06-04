import React from 'react'
import '../styles/url-shortner.css'
const UrlShortner = () => {
  return (
    <>
        <div className='d-flex justify-content-between mt-4 mb-4'>
            <input className='url-input' type='text'  placeholder="enter your url"></input>
            <button className='btn btn-primary rounded-pill'>Shorten</button>
        </div>
    </>
  )
}

export default UrlShortner