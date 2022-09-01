import React from 'react'

import './button.css'
export const Button = (props) => {
  const {name , fun,className }=props
  return (
    <button onClick={fun} className ={className}>{name}</button>

  )
}
