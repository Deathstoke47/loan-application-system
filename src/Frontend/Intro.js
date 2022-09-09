import React from 'react'
import {Link} from 'react-router-dom';
import './Css/Intro.css'
 
export const Intro = () => {
  return (
    <div>
        <p className='message'>Need help applying a loan for your business? Click the button below to start the process with us.</p>
        <Link to ='/form'><button>Start Application</button></Link>
    </div>
  )
}
