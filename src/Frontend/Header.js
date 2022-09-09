import React from 'react'
import './Css/Header.css'

export const Header = () => {
  return (
    <header>
        <div className="logo">Loan Application System</div>
        <div class="menu">
            <ul >
                <li><a class="current" href="#home">Home</a></li>
                <li><a href="#aboutus">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contactus">Contact us</a></li>
            </ul>
        </div>
    </header>
  );
}
