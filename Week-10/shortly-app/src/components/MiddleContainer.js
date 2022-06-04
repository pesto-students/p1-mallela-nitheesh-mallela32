import React from 'react';
import UrlShortner from './UrlShortner';
import image from "../assests/images/undraw_Designer_girl_re_h54c (1).png"
import "../styles/middle-container.css"
import UrlDisplay from './UrlDisplay';
const MiddleContainer = () => {
  return (
      <>

<div className='row top-container'>
      <div className='col-sm-8 d-flex '>
          <div className='d-flex flex-column'>
          <h1>More Than Just Shorter Links</h1>
            <p>Build your brand recognijation and get detailed insights on how your links are performing</p>
          </div>
          
    </div>
          <div className='col-sm-3 d-flex justify-content-center'>
             <img src={image} className="img-fluid" alt='img'></img>
          </div>
    </div>
    <div className='row d-flex justify-content-center'>
        <div className='col-8 url-container'>
              <UrlShortner/>
        </div>
    </div>
    <div className='row d-flex justify-content-center'>
        <div className='col-8 url-container'>
            <UrlDisplay/>
        </div>
    </div>
      </>
    
    
  )
}

export default MiddleContainer
