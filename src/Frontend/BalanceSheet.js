import React, { useEffect,useState } from 'react'
import './Css/BalanceSheet.css'
import useFetch from '../Backend/useFetch'
import applyRule from '../Backend/applyRule'
import requestDecision from '../Backend/requestDecision'
import { Link } from 'react-router-dom'

export const BalanceSheet = () => {
    const {data:sheets, balanceSheetError, balanceSheetIsPending} = useFetch('http://localhost:8000/sheet')  
    const {data: business, businessError, businessIsPending} = useFetch('  http://localhost:8000/business') 
    const[isComplete, setIsComplete] = useState(false)
    const requestOutcome =()=>{
       var preAssessment=applyRule(sheets,business);
        requestDecision(business, sheets, preAssessment)
        setIsComplete(true)
    }

  return (
    <>  
        {balanceSheetError && <div> {balanceSheetError}</div>}
        {balanceSheetIsPending && <div>Loading....</div>}
        {sheets &&<div className='balanceSheet'>
            <p className='title'> Review Balance Sheet</p>
            <div className="sheets">
                {sheets.map((sheet)=> (
                    <div className="info">
                        <p>Year = {sheet.year}</p>
                        <p>Month = {sheet.month}</p>
                        <p>Profit or Loss = {sheet.profitOrLoss}</p>
                        <p>Assests Value = {sheet.assetsValue}</p>
                        <br />
                    </div>
                ))}
            </div>
            <div class="submit-button">
                {!isComplete &&<button type='submit' onClick={requestOutcome}>Submit Application</button>}
                {isComplete &&<Link to='/outcome'><button type='submit'>Continue</button></Link>}
            </div>
        </div>}
    </>
  )
}
