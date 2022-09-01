import React from 'react'
import {ig, wa,lgo} from '../../assets'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-right'>
        <h3>TEMUKAN KAMI</h3>
        <div className='image-container'>
          <img src={ig} alt='img' />
          <img src={wa} alt='img' />
          <img src={ig} alt='img' />
          <img src={wa} alt='img' />
          <img src={ig} alt='img' />
          <img src={wa} alt='img'/>
        </div>
      </div>
      <div className='footer-lift'>
        <h3>DOWNLOAD APP KAMI SEKARANG</h3>
        <div>
          <img src={lgo} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Footer