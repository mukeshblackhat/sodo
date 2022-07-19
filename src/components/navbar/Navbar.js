
import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftNavPart common">
            <div className="nameLogo">
                <img src={logo} alt="logo"/>
                <div className="appName">Sodo</div>
            </div>
            <div className="aboutUs mobileNav">About us</div>
            <div className="download mobileNav">Download</div>
            <div className="contact mobileNav">Contact</div>
        </div>
        <div className="rightNavPart common">
            <div className="logIn mobileNav">LogIn</div>
            <div className="primaryAction mobileNav">Primary action</div>
        </div>
        <div className="hiddenHemberger" >
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div> 
    </div>
  )
}

export default Navbar

