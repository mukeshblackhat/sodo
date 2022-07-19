import React from 'react'
import './Split.css'
import pic from '../../assests/image 1.svg'

const Split = () => {
  return (
    <div className="split">
        <div className="introLeft">
            <div className="heading">
            Lorem ipsum dolor sit amet.
            </div>
            <div className="introduction">
            Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.
            </div>
            <div className="buttons">
                <div className="Pbutton">Primary action</div>
                <div className="Sbutton">Secondary action</div>
            </div>
        </div>
        <div className="imgcontainer">
            <img src={pic} alt="img"/>
        </div>  
    </div>
  )
}

export default Split