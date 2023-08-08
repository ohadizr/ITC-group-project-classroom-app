import React from 'react'
import './GeneralStyle.css'
// import logo from '../images/logo.png'

function GeneralStyle () {
  return (
    <div className='GeneralStyle'>
      <h4>
        ITC-Classrom Extension is <span className='green'>ON</span>
      </h4>
      <h5>ver. 0.1.0</h5>
      <h5>See extension popup for options</h5>
      <div className='logo'>
        <img
          src='https://hiring.itc.tech/img/logo.png'
          alt='extension logo'
        />
      </div>
    </div>
  )
}

export default GeneralStyle
