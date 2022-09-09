import React from 'react'
import './Css/Form.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {
  const [businessName, setBusinessName] = useState('');
  const [yearEstablished, setYearEstablished] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [accountProvider, setAccountProvider] = useState('Xero');
  const[isComplete, setIsComplete] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault();
    const business = {businessName, yearEstablished, loanAmount, accountProvider} 

    fetch('http://localhost:8000/business', {
      method : 'POST',
      headers: {"Content-Type":'application/json'},
      body:JSON.stringify(business)
    }) .then (()=>{
      console.log('Added') 
      setIsComplete(true)
    })
  }

  return (
    <div className='form'>
        <p>Loan Application</p>
            <form class="loanApplication" onSubmit={handleSubmit}>
                    <div class="businessName">
                      <input type="text" 
                      placeholder="Name of Business" 
                      value={businessName} 
                      onChange={(e)=> setBusinessName(e.target.value)}/>
                    </div>
                    <div class="yearEstablished">
                      <input type="text" 
                      placeholder="Year Established"
                      value={yearEstablished} 
                      onChange={(e)=> setYearEstablished(e.target.value)}/>
                    </div>
                    <div class="loanAmount">
                      <input type="text" 
                      placeholder="Enter loan amount"
                      value={loanAmount} 
                      onChange={(e)=> setLoanAmount(e.target.value)}/>
                    </div>
                    <div class="accountProvider">
                      <label>Select an Accounting provider</label><br />
                      <select class="select" 
                      value={accountProvider} 
                      onChange={(e)=> setAccountProvider(e.target.value)}>
                          <option value="0" >Xero</option>
                          <option value="1">MYOB</option>
                      </select>
                    </div>
                    <div class="request-button">
                      {!isComplete &&<button type='submit'>Request Balance Sheet</button>}
                      {isComplete &&<Link to='/balanceSheet'><button type='submit'>Continue</button></Link>}
                    </div>
                  </form>
      </div>
  )
}
