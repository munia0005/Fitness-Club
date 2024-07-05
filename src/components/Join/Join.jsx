import React, { useRef } from 'react'
import './Join.css';


const Join = () => {

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="right-j"></div>
        <form action='email' className="email-container" >
            <input type="email" name='user-_email' placeholder='Enter Your Email Address' />
            <button className='btn btn-j'>Join Now</button>
        </form>
    </div>
    
  )
}

export default Join