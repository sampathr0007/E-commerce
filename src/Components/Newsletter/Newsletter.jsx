import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to Newsletter and Stay Updated</p>  
        <div>
             <input type="email" placeholder='Enter yout Email' />
             <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Newsletter