import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
        <div className='col-5 d-flex justify-content-center'>
            <div className='d-flex flex-column mr-3 link-div'>
                <a href='#features'>Feartures</a>
                <a href='#features'>Link Sharing</a>
                <a href='#features'>Branched Links</a>
                <a href='#features'>Analytics</a>
            </div>
            <div className='d-flex flex-column mr-3 link-div'>
                <a href='#features'>Resources</a>
                <a href='#features'>Blog</a>
                <a href='#features'>Developers</a>
                <a href='#features'>Support</a>
            </div>
            <div className='d-flex flex-column mr-3 link-div'>
                <a href='#features'>Company</a>
                <a href='#features'>About</a>
                <a href='#features'>Our Team</a>
                <a href='#features'>Carrers</a>
                <a href='#features'>Contact Us</a>
            </div>
        </div>   
    </>
  )
}

export default Footer