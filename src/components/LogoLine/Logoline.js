import React from 'react'
import './Logoline.css'
import Monzo from '../../assests/Monzo.svg'
import Zoopla from '../../assests/Zoopla.svg'
import Google from '../../assests/Google.svg'
import Nike from '../../assests/Nike.svg'
import Amazon from '../../assests/Amazon.svg'

const Logoline = () => {
  return (
    <div className="LogoLine">
    <div className="headingLine">Trusted By</div>
    <div className="logoOfCompany">
    <img className="comLofoImg" src={Monzo} alt="monzo"/>
    <img className="comLofoImg" src={Zoopla} alt="zoopla"/>
    <img className="comLofoImg" src={Google} alt="google"/>
    <img className="comLofoImg" src={Nike} alt="nike"/>
    <img className="comLofoImg" src={Amazon} alt="amazon"/>
    </div> 
    </div>
  )
}

export default Logoline