import React from 'react'
import useFetch from '../Backend/useFetch'
import './Css/Outcome.css'
import {Link} from 'react-router-dom'

export const Outcome = () => {

    const {data:desicions, desicionError, desicionIsPending} = useFetch('http://localhost:8000/desicions')  
    
  return (
    <>  
    {desicionError && <div> {desicionError}</div>}
    {desicionIsPending && <div>Loading....</div>}
    {desicions &&<div className='outcome'>
        <p className='title'> Final Outcome</p>
        <div className="desicion">
            {desicions.map((desicion)=> (
                <div className="info">
                    <div className='businessInfo'>
                        <h1>Business Details</h1>
                        <p>Business Name = {desicion.businessName}</p>
                        <p>Year Established = {desicion.yearEstablished}</p>
                        <p>Summary of Profit or Loss = {desicion.netProfitOrLoss}</p>
                    </div>
                    <p>PreAssessment Value = {desicion.preAssessment}</p>
                    <br />
                </div>
            ))}
        </div>
        <div class="submit-button">
            <Link to ='/'><button type='submit' >OK</button></Link>
        </div>
    </div>}
</>
  )
}
