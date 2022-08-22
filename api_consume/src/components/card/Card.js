import React from 'react'
import './card.css'

const Card = (props) => {
  
  const{img,title,description,rate}=props
  const star =["*","**",'***',"****","*****"]

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={img} alt='card-img' />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className='card-info'>
          <p>{star[rate-1]}</p>
          <p>{rate}</p>
        </div>
      </div>
    </div>
  )
}

export default Card