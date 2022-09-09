import React from 'react'
import {Form} from './Form'
import './Css/Content.css'
import {Routes, Route} from 'react-router-dom'
import {Intro} from './Intro'
import { BalanceSheet } from './BalanceSheet'
import { Outcome } from './Outcome'

export const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/balanceSheet' element = {<BalanceSheet/>}/>
        <Route path='/outcome' element = {<Outcome/>}/>
      </Routes>
    </div>
  )
}
