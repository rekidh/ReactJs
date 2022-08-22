import React from 'react'
import { useState } from 'react'
import './burger.css'

const BurgerMenu = (props) => {
  let bgr="burger"
  const {fun,i}=props
  !i? bgr="burger":bgr="burger burger-show"
  return (
    <div className={bgr} onClick={fun} >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerMenu